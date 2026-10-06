function ExamHeader({ currentQuestion, totalQuestions, title, remainingSeconds, onChangeCategory, onFinishExam }) {
  const remainingMinutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const remainingRemainder = String(remainingSeconds % 60).padStart(2, '0');

  return (
    <>
      <header className="relative overflow-hidden bg-[linear-gradient(120deg,rgb(27,82,87),rgb(36,109,115)_58%,rgb(54,132,136))] px-12 py-6 text-white shadow-[0_12px_30px_rgba(27,82,87,0.18)] max-[900px]:px-8 max-[900px]:py-7 max-[600px]:px-3 max-[600px]:py-6">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-28 border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 left-[38%] h-56 w-56 rounded-full border-22 border-white/[0.07]" />
        <div className="relative flex items-center justify-between gap-6 max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:gap-4">
          <div className="min-w-0">
            <p className="mb-3 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-teal-50 max-[380px]:mb-2 max-[380px]:text-[9px]">Takamul প্রশিক্ষণ মূল্যায়ন</p>
            <h1 className="m-0 max-w-3xl wrap-break-word text-[clamp(24px,5vw,42px)] font-bold leading-tight tracking-tight text-white max-[600px]:text-[clamp(22px,7vw,32px)] max-[380px]:text-[23px]">{title}</h1>
            <p className="mt-2 font-sans text-xs text-teal-100/80 max-[380px]:mt-1 max-[380px]:text-[11px]">নিরাপদ কাজের পদ্ধতি ও সরঞ্জাম ব্যবহারের মূল্যায়ন</p>
          </div>
          <div className="flex shrink-0 items-center gap-3 max-[600px]:justify-between max-[600px]:gap-2 max-[380px]:gap-1">
            <button
              className="rounded-lg border border-white/25 bg-white/10 px-3 py-2 font-sans text-[10px] font-bold text-white transition hover:bg-white/20 max-[600px]:px-3 max-[600px]:text-[10px] max-[380px]:px-2 max-[380px]:text-[9px]"
              type="button"
              onClick={onChangeCategory}
            >
              পরীক্ষা পরিবর্তন
            </button>
            <div className="rounded-2xl border border-white/20 bg-black/10 px-4 py-3 text-center shadow-inner max-[600px]:rounded-xl max-[600px]:px-3 max-[600px]:py-2 max-[380px]:px-2 max-[380px]:py-1.5" aria-label={`প্রশ্ন ${currentQuestion + 1}, মোট ${totalQuestions}`}>
              <span className="block font-sans text-[10px] font-bold uppercase tracking-wider text-teal-100">প্রশ্ন</span>
              <strong className="text-[32px] leading-none text-white max-[600px]:text-[26px]">{String(currentQuestion + 1).padStart(2, '0')}</strong>
              <span className="ml-1 font-sans text-xs text-teal-100">/ {totalQuestions}</span>
            </div>
          </div>
        </div>
      </header>
      <div className="grid min-h-16 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center border-y border-[#dce3e8] bg-[#f7fbfb] px-12 max-[900px]:px-6 max-[600px]:min-h-16 max-[600px]:px-3 max-[380px]:px-2">
        <span aria-hidden="true" />
        <div className="flex min-w-32 items-center justify-center gap-2 whitespace-nowrap py-2 max-[380px]:min-w-0 max-[380px]:gap-1 max-[380px]:py-1">
          <span className="font-sans text-3xl font-bold text-[rgb(27,82,87)] max-[380px]:text-[10px]">সময় বাকিঃ </span>
          <strong className="font-mono text-4xl leading-none text-[rgb(27,82,87)] max-[600px]:text-3xl max-[380px]:text-2xl" aria-label={`বাকি সময় ${remainingMinutes} মিনিট ${remainingRemainder} সেকেন্ড`}>
            {remainingMinutes}:{remainingRemainder}
          </strong>
        </div>
        <button
          className="min-w-36 justify-self-end  rounded-lg bg-[#d9363e] px-6 py-2.5 font-sans text-2xl font-bold text-white shadow-[0_5px_12px_rgba(217,54,62,0.25)] transition hover:bg-[#ae252d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(27,82,87)] max-[600px]:min-w-0 max-[600px]:px-4 max-[600px]:py-2 max-[600px]:text-sm max-[380px]:px-2 max-[380px]:text-xs"
          type="button"
          onClick={onFinishExam}
        >
          সমাপ্ত
        </button>
      </div>
    </>
  );
}

export default ExamHeader;