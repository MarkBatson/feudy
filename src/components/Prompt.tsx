import type { QuestionWithAnswers } from "../types";

interface Props {
    question: QuestionWithAnswers
}

export default function Prompt({question}: Props) {

  return (
    <div className="m-5 p-5 bg-cream text-black rounded-2xl">    
      <p className="text-xl pb-5 text-left">{question.prompt}</p>
      <ul>
        {question.answers.map(answer => (
          <li key={answer.id} className="flex text-xl mb-5 gap-2">
            <div className="bg-orange text-cream w-10 h-10 flex justify-center items-center rounded-full leading-none shrink-0">
              {answer.points}
            </div>
            <div className="bg-orange text-cream flex justify-left items-center rounded-lg leading-none pl-2 pr-2 w-full">
              {answer.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}