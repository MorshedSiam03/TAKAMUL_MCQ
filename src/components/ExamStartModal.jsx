import { useState } from 'react';

function ExamStartModal({ category, onStart }) {
  const [candidateName, setCandidateName] = useState('স্কিল ভেরিফিকেশন ট্রেনিং সেন্টার');

  function submitExamStart(event) {
    event.preventDefault();
    const trimmedName = candidateName.trim();
    if (trimmedName) {
      onStart(trimmedName);
    }
  }

  return (
    <div className="fixed inset-0 z-20 grid place-items-center bg-[rgba(23,33,43,0.52)] p-4 backdrop-blur-sm">
      <form
        className="w-full max-w-lg rounded-2xl border border-[#dce3e8] bg-white p-6 shadow-[0_24px_70px_rgba(27,82,87,0.24)] sm:p-9"
        onSubmit={submitExamStart}
        aria-labelledby="exam-start-title"
      >
        <p className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-[rgb(36,109,115)]">Takamul MCQ</p>
        <h2 id="exam-start-title" className="mb-6 text-2xl font-bold text-[rgb(27,82,87)]">পরীক্ষা শুরু করার তথ্য</h2>

        <label className="mb-4 block font-sans text-sm font-semibold text-[#17212b]">
          পরীক্ষার্থীর নাম
          <input
            className="mt-2 block min-h-12 w-full rounded-lg border border-[#cbd5db] bg-white px-4 text-base font-normal outline-none transition focus:border-[rgb(36,109,115)] focus:ring-2 focus:ring-[rgba(36,109,115,0.2)]"
            type="text"
            name="candidateName"
            autoComplete="name"
            value={candidateName}
            onChange={(event) => setCandidateName(event.target.value)}
            placeholder="আপনার নাম লিখুন"
            required
            autoFocus
          />
        </label>

        <label className="mb-7 block font-sans text-sm font-semibold text-[#17212b]">
          পরীক্ষার নাম
          <input
            className="mt-2 block min-h-12 w-full rounded-lg border border-[#dce3e8] bg-[#f4f7f8] px-4 text-base font-normal text-[#52616b]"
            type="text"
            value={category.headerTitle}
            readOnly
          />
        </label>

        <button
          className="w-full rounded-lg bg-[rgb(27,82,87)] px-6 py-4 font-sans text-lg font-bold text-white shadow-[0_5px_14px_rgba(27,82,87,0.2)] transition hover:bg-[rgb(36,109,115)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(27,82,87)]"
          type="submit"
        >
          পরীক্ষা শুরু করুন
        </button>
      </form>
    </div>
  );
}

export default ExamStartModal;