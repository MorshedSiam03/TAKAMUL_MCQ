function ExamCompleteScreen({ onShowResult, onRestart }) {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f4f5f1] px-5 py-10 text-[#172b2a]">
      <section className="w-full max-w-2xl border-t-4 border-[#e7a52b] bg-white px-6 py-10 text-center shadow-[0_18px_50px_rgba(23,62,58,0.12)] sm:px-12 sm:py-14">
        <span className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full border-2 border-[#2e7864] bg-[#eaf4ee] text-3xl font-bold text-[#187451]" aria-hidden="true">
          ✓
        </span>
        <p className="mb-2 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#a66f18]">SVTC · পরীক্ষা</p>
        <h1 className="m-0 text-[clamp(26px,5vw,38px)] font-bold leading-tight text-[#173e3a]">আপনার পরীক্ষাটি সম্পন্ন হয়েছে</h1>
        <p className="mx-auto mb-8 mt-3 max-w-md font-sans text-sm leading-relaxed text-[#64716b]">
          আপনার উত্তর জমা হয়েছে। ফলাফল দেখতে নিচের বাটনে চাপ দিন।
        </p>
        <div className="mx-auto flex w-full max-w-md flex-col justify-center gap-3 sm:flex-row">
          <button
            className="min-h-12 flex-1 rounded-lg bg-[#1d6655] px-6 py-3 font-sans text-sm font-bold text-white transition hover:bg-[#154b40] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173e3a]"
            type="button"
            onClick={onShowResult}
          >
            ফলাফল দেখুন
          </button>
          <button
            className="min-h-12 flex-1 rounded-lg border border-[#2e7864] bg-white px-6 py-3 font-sans text-sm font-bold text-[#1d6655] transition hover:bg-[#edf5ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173e3a]"
            type="button"
            onClick={onRestart}
          >
            আবার পরীক্ষা দিন
          </button>
        </div>
      </section>
    </main>
  );
}

export default ExamCompleteScreen;