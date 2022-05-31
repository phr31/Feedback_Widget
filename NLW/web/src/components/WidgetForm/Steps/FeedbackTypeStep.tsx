import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

//informar que a função onFeedbackTypeChange recebe FeedbackType como propriedade 
interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChange }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">
          Deixe seu Feedback
        </span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className=" bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus: outline-none"
              //vincular as ids da função feedbackTypes ao tipo string do parametro key
              onClick={() => onFeedbackTypeChange(key as FeedbackType)}
              type="button">
              <img
                className="h-10 w-10"
                src={value.image.source}
                alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>)
}