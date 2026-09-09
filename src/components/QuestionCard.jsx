function QuestionCard({ question, questionNumber, selectedAnswer, onSelect }) {
  return (
    <div className="min-w-0 p-12 max-[900px]:px-8 max-[900px]:py-9 max-[600px]:px-5 max-[600px]:py-7">
      <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#66727d]">Question {questionNumber}</p>
      <h2 className="mb-7 max-w-3xl text-[clamp(21px,4vw,31px)] font-bold leading-tight">{question.question}</h2>
      {question.image && (
        <img className="mb-7 block max-h-[min(30vh,220px)] w-full max-w-[360px] border border-[#dce3e8] object-contain" src={question.image} alt={question.imageAlt || 'Question device'} />
      )}
      <div className="grid gap-3">
        {question.options.map((option, index) => (
          <div
            className={`flex w-fit cursor-pointer items-center gap-3 py-2 text-left text-lg leading-relaxed ${selectedAnswer === index ? 'text-[rgb(27,82,87)]' : 'text-[#17212b]'} hover:text-[rgb(27,82,87)]`}
            key={option}
          >
            <input
              className="h-[17px] w-[17px] cursor-pointer accent-[rgb(36,109,115)]"
              type="radio"
              name={`question-${questionNumber}`}
              value={index}
              checked={selectedAnswer === index}
              aria-label={option}
              onChange={() => onSelect(index)}
            />
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;