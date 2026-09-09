function QuestionFooter({
  answeredCount,
  totalQuestions,
  isAnswerSelected,
  isFirstQuestion,
  isLastQuestion,
  onBack,
  onNext,
}) {
  return (
    <footer className="sticky bottom-0 z-10 mt-auto flex items-center justify-between gap-5 border-t-2 border-[rgb(36,109,115)] bg-[linear-gradient(90deg,rgb(228,242,243),white_60%)] px-12 py-4 font-sans text-xs text-[#66727d] shadow-[0_-8px_20px_rgba(27,82,87,0.08)] backdrop-blur max-[900px]:px-8 max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:px-5">
      <span className="rounded-full border border-[rgba(36,109,115,0.2)] bg-white/80 px-3 py-1.5 font-semibold text-[rgb(27,82,87)]">{answeredCount} / {totalQuestions} answered</span>
      <div className="flex gap-2.5 max-[600px]:justify-end">
        <button className="cursor-pointer rounded-lg border border-[rgba(36,109,115,0.35)] bg-white px-5 py-3 font-sans text-xs font-bold text-[rgb(27,82,87)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[rgb(228,242,243)] disabled:cursor-not-allowed disabled:border-[#dce3e8] disabled:text-[#b7bdc1]" type="button" onClick={onBack} disabled={isFirstQuestion}>
          পিছনে
        </button>
        <button className="cursor-pointer rounded-lg border border-[rgb(36,109,115)] bg-[rgb(36,109,115)] px-5 py-3 font-sans text-xs font-bold text-white shadow-[0_4px_10px_rgba(36,109,115,0.2)] transition hover:-translate-y-0.5 hover:bg-[rgb(27,82,87)] disabled:cursor-not-allowed disabled:border-[#e7ebed] disabled:bg-[#e7ebed] disabled:text-[#aeb4b7]" type="button" onClick={onNext} disabled={!isAnswerSelected}>
          {isLastQuestion ? 'জমা দিন' : 'এগিয়ে যান'}
        </button>
      </div>
    </footer>
  );
}

export default QuestionFooter;