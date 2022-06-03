import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps{
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[384px]">

        <div className="flex flex-col items-center py-0">
          <img src="https://i.gifer.com/3cJv.gif" className=' w-full h-full rounded-lg'/>
        </div>
        <span className=" text-xl mt-2 justify-center">Agradecemos o seu Feedback!</span>
        <button 
        type="button"
        onClick={onFeedbackRestartRequested}
        className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50">
          Quero enviar um novo Feedback...
        </button>
      </div>
    </>
  )
}

