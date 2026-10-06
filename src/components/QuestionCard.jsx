function QuestionCard({ question, questionNumber, selectedAnswer, onSelect }) {
  return (
    <div className="min-w-0 p-12 max-[900px]:px-8 max-[900px]:py-9 max-[600px]:px-5 max-[600px]:py-7">
      <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-[#66727d]">Question {questionNumber}</p>
      <h2 className="mb-7 max-w-3xl text-[clamp(21px,4vw,31px)] font-bold leading-tight">{question.question}</h2>
      {question.image && (
        <img className="mb-7 block max-h-[min(30vh,220px)] w-full max-w-90 border border-[#dce3e8] object-contain" src={question.image} alt={question.imageAlt || 'Question device'} />
      )}
      <div className="grid gap-3">
        {question.options.map((option, index) => (
          <button
            className={`w-full max-w-3xl rounded-lg border px-4 py-3 text-left text-lg leading-relaxed transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(36,109,115)] ${selectedAnswer === index ? 'border-[rgb(27,82,87)] bg-[rgb(27,82,87)] text-white' : 'border-[#dce3e8] bg-white text-[#17212b] hover:border-[rgb(36,109,115)] hover:bg-[#eef6f6]'}`}
            type="button"
            key={option}
            aria-pressed={selectedAnswer === index}
            onClick={() => onSelect(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;