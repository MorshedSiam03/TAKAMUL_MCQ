function ResultScreen({ candidateName, examTitle, questions, selectedAnswers, score, totalQuestions, answeredCount, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const incorrectCount = answeredCount - score;
  const unansweredCount = totalQuestions - answeredCount;
  const passed = percentage >= 60;

  return (
    <main className="min-h-screen bg-[#f4f5f1] text-[#172b2a]" aria-live="polite">
      <header className="border-b-4 border-[#e7a52b] bg-[linear-gradient(112deg,#123d3b,#1d5550_62%,#28665c)] text-white">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-5 py-5 sm:px-8 sm:py-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white p-1.5 sm:h-14 sm:w-14">
            <img className="h-full w-full object-contain" src="/images/link-preview-svp-removebg-preview.png" alt="SVTC logo" />
          </span>
          <div className="min-w-0">
            <p className="mb-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#f2c15b]">স্কিল ভেরিফিকেশন ট্রেনিং সেন্টার</p>
            <h1 className="m-0 text-2xl font-bold leading-tight text-white sm:text-3xl">পরীক্ষার ফলাফল</h1>
          </div>
          <span className={`ml-auto shrink-0 border px-3 py-1.5 font-sans text-xs font-bold ${passed ? 'border-[#88c5a4]/50 bg-[#0e674e]/40 text-[#d7f4e2]' : 'border-[#f4b0a4]/50 bg-[#8f382e]/35 text-[#ffe1dc]'}`}>
            {passed ? 'উত্তীর্ণ' : 'আরও অনুশীলন প্রয়োজন'}
          </span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8">
        <section className="grid gap-7 border-b border-[#d8dfd8] py-8 sm:grid-cols-[1fr_auto] sm:items-center sm:py-10" aria-labelledby="result-summary-title">
          <div>
            <p className="mb-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#a66f18]">{examTitle || 'SVTC মূল্যায়ন'}</p>
            <h2 id="result-summary-title" className="m-0 text-2xl font-bold leading-snug text-[#173e3a] sm:text-3xl">{candidateName || 'পরীক্ষার্থী'}, আপনার ফলাফল প্রস্তুত</h2>
            <p className="mb-0 mt-2 font-sans text-sm text-[#64716b]">{totalQuestions}টি প্রশ্নের মধ্যে {answeredCount}টির উত্তর দিয়েছেন</p>
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="min-w-28 border-l-4 border-[#2e7864] pl-4">
              <p className="mb-1 font-sans text-xs font-semibold text-[#64716b]">মোট স্কোর</p>
              <p className="m-0 font-mono text-4xl font-bold leading-none text-[#173e3a] sm:text-5xl">{score}<span className="text-xl font-medium text-[#78847e]"> / {totalQuestions}</span></p>
            </div>
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-[5px] border-[#d7e4dc] bg-white text-center sm:h-24 sm:w-24">
              <span className="font-mono text-2xl font-bold leading-none text-[#26715d] sm:text-3xl">{percentage}%</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 border-b border-[#d8dfd8] py-5" aria-label="ফলাফলের সারাংশ">
          <div className="border-r border-[#d8dfd8] pr-3 sm:pr-6">
            <p className="mb-1 font-sans text-[11px] font-semibold text-[#64716b] sm:text-xs">সঠিক উত্তর</p>
            <p className="m-0 font-mono text-2xl font-bold text-[#187451] sm:text-3xl">{score}</p>
          </div>
          <div className="border-r border-[#d8dfd8] px-3 sm:px-6">
            <p className="mb-1 font-sans text-[11px] font-semibold text-[#64716b] sm:text-xs">ভুল উত্তর</p>
            <p className="m-0 font-mono text-2xl font-bold text-[#c34638] sm:text-3xl">{incorrectCount}</p>
          </div>
          <div className="pl-3 sm:pl-6">
            <p className="mb-1 font-sans text-[11px] font-semibold text-[#64716b] sm:text-xs">উত্তর দেননি</p>
            <p className="m-0 font-mono text-2xl font-bold text-[#66727d] sm:text-3xl">{unansweredCount}</p>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d8dfd8] py-5">
          <a className="font-sans text-sm font-bold text-[#26715d] underline decoration-[#26715d]/40 underline-offset-4 hover:text-[#173e3a]" href="#answer-review-title">
            উত্তরগুলো পর্যালোচনা করুন ↓
          </a>
          <button
            className="rounded-lg bg-[#1d6655] px-5 py-3 font-sans text-sm font-bold text-white transition hover:bg-[#154b40] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173e3a]"
            type="button"
            onClick={onRestart}
          >
            আবার পরীক্ষা দিন
          </button>
        </div>

        <section className="pt-8" aria-labelledby="answer-review-title">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#a66f18]">উত্তর পর্যালোচনা</p>
              <h2 id="answer-review-title" className="m-0 text-2xl font-bold text-[#173e3a]">প্রশ্নভিত্তিক ফলাফল</h2>
            </div>
            <span className="font-sans text-xs text-[#64716b]">{questions.length}টি প্রশ্ন</span>
          </div>
          <ol className="divide-y divide-[#d8dfd8]">
            {questions.map((question, index) => {
              const selectedAnswer = selectedAnswers[index];
              const isCorrect = selectedAnswer === question.answer;

              return (
                <li className="grid gap-3 py-5 sm:grid-cols-[52px_minmax(0,1fr)] sm:gap-5" key={`${index}-${question.question}`}>
                  <span className={`grid h-10 w-10 place-items-center font-mono text-sm font-bold ${isCorrect ? 'bg-[#e4f2eb] text-[#187451]' : selectedAnswer === undefined ? 'bg-[#e9ecea] text-[#66727d]' : 'bg-[#f8e7e3] text-[#b83e32]'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="m-0 flex-1 text-base font-semibold leading-relaxed text-[#172b2a]">{question.question}</h3>
                      <span className={`font-sans text-[11px] font-bold ${isCorrect ? 'text-[#187451]' : selectedAnswer === undefined ? 'text-[#66727d]' : 'text-[#b83e32]'}`}>
                        {isCorrect ? 'সঠিক' : selectedAnswer === undefined ? 'উত্তর নেই' : 'ভুল'}
                      </span>
                    </div>
                    {question.image && <img className="mt-3 max-h-44 max-w-full border border-[#d8dfd8] object-contain" src={question.image} alt={question.imageAlt || 'প্রশ্নের ছবি'} />}
                    <p className="mb-0 mt-3 border-l-2 border-[#2e7864] pl-3 font-sans text-sm leading-relaxed text-[#187451]">
                      <span className="font-bold">সঠিক উত্তর: </span>{question.options[question.answer]}
                    </p>
                    <p className={`mb-0 mt-1 border-l-2 pl-3 font-sans text-sm leading-relaxed ${isCorrect ? 'border-[#aebdb4] text-[#52635d]' : selectedAnswer === undefined ? 'border-[#cbd2ce] text-[#66727d]' : 'border-[#d78173] text-[#b83e32]'}`}>
                      <span className="font-bold">আপনার উত্তর: </span>
                      {selectedAnswer === undefined ? 'উত্তর দেওয়া হয়নি' : question.options[selectedAnswer]}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </main>
  );
}

export default ResultScreen;