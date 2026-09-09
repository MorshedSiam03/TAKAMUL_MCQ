function QuizFooter({
  totalQuestions,
  currentQuestion,
  selectedAnswers,
  onQuestionSelect,
}) {
  return (
    <aside className="flex min-h-full flex-col gap-5 border-r border-[rgb(27,82,87)] bg-[linear-gradient(180deg,rgb(228,242,243),white_72%)] px-3 py-4 font-sans text-sm max-[900px]:gap-3 max-[900px]:px-2 max-[900px]:py-5 max-[600px]:gap-3 max-[600px]:px-1 max-[600px]:py-4" aria-label="Question navigator">
      <div className="text-center max-[600px]:hidden">
        <span className="block text-[10px] font-bold uppercase tracking-widest text-[rgb(27,82,87)]">প্রশ্নসমূহ</span> 
      </div>
      <div className="grid grid-cols-1 gap-2">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const isAnswered = selectedAnswers[index] !== undefined;
          const isCurrent = index === currentQuestion;

          return (
            <button
              className={`h-10 w-10 justify-self-center rounded-lg border text-md font-semibold transition-all max-[900px]:h-[34px] max-[900px]:w-[34px] max-[600px]:h-7 max-[600px]:w-7 max-[600px]:rounded-md max-[600px]:text-[10px] ${isCurrent ? 'border-white bg-[rgb(27,82,87)] text-white shadow-[0_0_0_3px_rgb(36,109,115)]' : isAnswered ? 'border-[rgb(36,109,115)] bg-[rgb(36,109,115)] text-white' : 'border-[rgba(36,109,115,0.25)] bg-white/75 text-[rgb(27,82,87)]'} hover:-translate-y-0.5 hover:border-[rgb(27,82,87)] hover:bg-[rgb(36,109,115)] hover:text-white`}
              type="button"
              key={index}
              onClick={() => onQuestionSelect(index)}
              aria-label={`Go to question ${index + 1}${isAnswered ? ', answered' : ''}`}
              aria-current={isCurrent ? 'step' : undefined}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default QuizFooter;