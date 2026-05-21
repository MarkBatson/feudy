import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { QuestionWithAnswers } from '../types';

const SEEN_KEY = 'feudy_seen_question_ids';

function getSeenIds(): string[] {
  return JSON.parse(localStorage.getItem(SEEN_KEY) || '[]');
}

function markAsSeen(id: string) {
  const seen = getSeenIds()
  localStorage.setItem(SEEN_KEY, JSON.stringify([...seen, id]))
}

export function useQuestion() {
  const [question, setQuestion] = useState<QuestionWithAnswers | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchNext = useCallback(async () => {
    setLoading(true)
    setError(null)

    const seenIds = getSeenIds()

    // Fetch all unseen question IDs
    let idQuery = supabase
      .from('questions')
      .select('id')
      .eq('is_active', true)

    if (seenIds.length > 0) {
      idQuery = idQuery.not('id', 'in', `(${seenIds.join(',')})`)
    }

    const { data: idRows, error: idError } = await idQuery

    if (idError || !idRows || idRows.length === 0) {
      setError('No more questions available.')
      setLoading(false)
      return
    }

    // Pick a random ID from the results
    const randomIndex = Math.floor(Math.random() * idRows.length)
    const randomId = idRows[randomIndex].id

    // Fetch that specific question with its answers
    const { data, error } = await supabase
      .from('questions')
      .select('*, answers(*)')
      .eq('id', randomId)
      .order('rank', { referencedTable: 'answers', ascending: true })
      .single()

    if (error || !data) {
      setError('Failed to load question.')
      setLoading(false)
      return
    }

    markAsSeen(data.id)
    setQuestion(data as QuestionWithAnswers)
    setLoading(false)
  }, [])

  return { question, loading, error, fetchNext }
}