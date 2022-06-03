import { CloseButton } from "../CloseButton";
import { useState } from "react";
import bugImageURL from '../../assets/bug.png'
import ideaImageURL from '../../assets/idea.png'
import thoughtImageURL from '../../assets/thought.png'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageURL,
      alt: ' Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageURL,
      alt: ' Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: thoughtImageURL,
      alt: ' Imagem de uma nuvem'
    }
  },
}
//os tipos de feedback serão corespondentes as chaves criadas na função feedbackTypes
export type FeedbackType = keyof typeof feedbackTypes;

//Formato para a aplicação
export function WidgetForm() {
  //feedback do usuario a ser armazenado caso o mesmo insira um, ou permanece nulo
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  //feedback enviado
  const [feedbackSend, setFeedbackSend] = useState(false)

  //retornar a tela anterior
  function handleRestartFeedback() {
    setFeedbackSend(false)
    setFeedbackType(null)
  }

  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl  ab-4 flex flex-col items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSend ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? ( //fornecer acesso a função "feedback" correspondente, fornecendo seu componente como propriedade
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSend(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito pelo&nbsp;
        <a
          className="underline underline-offset-2 "
          href="https://github.com/phr31"
        >PH</a>
      </footer>
    </div>
  )
}