function ResultScreen({ score, totalQuestions, answeredCount, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <section className="w-full min-h-screen bg-white px-6 py-16 text-center" aria-live="polite">
      <div className="mx-auto mb-7 grid h-[70px] w-[70px] place-items-center rounded-full bg-[rgb(36,109,115)] font-sans text-xs font-bold text-white">{percentage >= 60 ? 'OK' : 'TRY'}</div>
      <p className="mb-2.5 font-sans text-xs font-bold uppercase tracking-[0.13em] text-[rgb(27,82,87)]">পরীক্ষা সম্পন্ন</p>
      <h1 className="m-0 text-[clamp(28px,5vw,42px)] font-bold leading-tight">আপনার ফলাফল প্রস্তুত</h1>
      <p className="my-0 font-sans text-lg text-[#66727d]"><strong className="text-[56px] text-[rgb(27,82,87)]">{score}</strong> / {totalQuestions}</p>
      <p className="mx-auto mb-7 mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-[#66727d]">
        You answered {answeredCount} of {totalQuestions} questions. Your final score is {percentage}%.
      </p>
      <button className="cursor-pointer border border-[rgb(36,109,115)] bg-[rgb(36,109,115)] px-5 py-3 font-sans text-xs font-bold text-white hover:bg-[rgb(27,82,87)]" type="button" onClick={onRestart}>আবার পরীক্ষা দিন</button>
    </section>
  );
}

export default ResultScreen;