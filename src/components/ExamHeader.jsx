function ExamHeader({ currentQuestion, totalQuestions, title, onChangeCategory }) {
  return (
    <header className="relative overflow-hidden bg-[linear-gradient(120deg,rgb(27,82,87),rgb(36,109,115)_58%,rgb(54,132,136))] px-12 py-8 text-white shadow-[0_12px_30px_rgba(27,82,87,0.18)] max-[900px]:px-8 max-[900px]:py-7 max-[600px]:px-5 max-[600px]:py-6">
      <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[28px] border-white/10" />
      <div className="pointer-events-none absolute -bottom-32 left-[38%] h-56 w-56 rounded-full border-[22px] border-white/[0.07]" />
      <div className="relative flex items-center justify-between gap-6 max-[600px]:items-start">
      <div className="min-w-0">
        <p className="mb-3 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-teal-50">Takamul প্রশিক্ষণ মূল্যায়ন</p>
        <h1 className="m-0 max-w-3xl text-[clamp(24px,5vw,42px)] font-bold leading-tight tracking-tight text-white max-[600px]:break-words">{title}</h1>
        <p className="mt-2 font-sans text-xs text-teal-100/80">নিরাপদ কাজের পদ্ধতি ও সরঞ্জাম ব্যবহারের মূল্যায়ন</p>
      </div>
      <div className="flex shrink-0 items-center gap-3 max-[600px]:gap-2">
        <button
          className="rounded-lg border border-white/25 bg-white/10 px-3 py-2 font-sans text-[10px] font-bold text-white transition hover:bg-white/20 max-[600px]:px-2 max-[600px]:text-[9px]"
          type="button"
          onClick={onChangeCategory}
        >
          পরীক্ষা পরিবর্তন
        </button>
        <div className="rounded-2xl border border-white/20 bg-black/10 px-4 py-3 text-center shadow-inner max-[600px]:rounded-xl max-[600px]:px-3 max-[600px]:py-2" aria-label={`প্রশ্ন ${currentQuestion + 1}, মোট ${totalQuestions}`}>
          <span className="block font-sans text-[10px] font-bold uppercase tracking-wider text-teal-100">প্রশ্ন</span>
          <strong className="text-[32px] leading-none text-white max-[600px]:text-[26px]">{String(currentQuestion + 1).padStart(2, '0')}</strong>
          <span className="ml-1 font-sans text-xs text-teal-100">/ {totalQuestions}</span>
        </div>
      </div>
      </div>
    </header>
  );
}

export default ExamHeader;