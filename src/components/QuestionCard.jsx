function QuestionCard({ question, questionNumber, selectedAnswer, onSelect }) {
  return (
    <div className="min-w-0 w-[90%] p-8 max-[900px]:px-6 max-[900px]:py-6 max-[600px]:px-4 max-[600px]:py-5">
      <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-[#66727d]">Question {questionNumber}</p>
      <h2 className="mb-6 w-full text-[clamp(18px,2.4vw,30px)] font-bold leading-snug">{question.question}</h2>
      {question.image && (
        <img className="mb-7 block max-h-[min(30vh,220px)] w-full max-w-90 border border-[#dce3e8] object-contain" src={question.image} alt={question.imageAlt || 'Question device'} />
      )}
      <div className="grid gap-5 w-[60%]">
        {question.options.map((option, index) => (
          <button
            className={`flex w-full items-start gap-3 rounded-lg border px-4 py-4 text-left text-base leading-relaxed transition-colors sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(36,109,115)] ${selectedAnswer === index ? 'border-[rgb(27,82,87)] bg-[rgb(27,82,87)] text-white' : 'border-[#dce3e8] bg-white text-[#17212b] hover:border-[rgb(36,109,115)] hover:bg-[#eef6f6]'}`}
            type="button"
            key={option}
            aria-pressed={selectedAnswer === index}
            onClick={() => onSelect(index)}
          >
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border font-sans text-sm font-bold ${selectedAnswer === index ? 'border-white bg-white text-[rgb(27,82,87)]' : 'border-[rgb(36,109,115)] text-[rgb(27,82,87)]'}`}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className="min-w-0 flex-1">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;