export interface Question {
  id: string
  prompt: string
  category: string | null
  is_active: boolean
  created_at: string
}

export interface Answer {
  id: string
  question_id: string
  text: string
  points: 10 | 20 | 30 | 40 | 50
  rank: 1 | 2 | 3 | 4 | 5
}

export interface QuestionWithAnswers extends Question {
  answers: Answer[]
}