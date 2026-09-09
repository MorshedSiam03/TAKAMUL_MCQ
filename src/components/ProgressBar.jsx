function ProgressBar({ currentQuestion, totalQuestions, answeredCount }) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="mx-12 mt-4 h-2 overflow-hidden rounded-full bg-[#e4f2f3] max-[900px]:mx-8 max-[600px]:mx-6" aria-label={`${answeredCount} questions answered`}>
      <div className="h-full rounded-full bg-[rgb(36,109,115)] shadow-[0_0_10px_rgba(36,109,115,0.35)] transition-[width] duration-300" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default ProgressBar;