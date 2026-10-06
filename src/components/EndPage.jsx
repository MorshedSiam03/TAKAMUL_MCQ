import { useEffect, useRef, useState } from 'react';

function EndPage({ onComplete, onCancel }) {
  const [confirmationStep, setConfirmationStep] = useState(1);
  const onCancelRef = useRef(onCancel);

  useEffect(() => {
    onCancelRef.current = onCancel;
  }, [onCancel]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => onCancelRef.current(), 60_000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 z-20 grid place-items-center bg-[rgba(23,33,43,0.48)] p-4 backdrop-blur-[2px]">
      <section
        className="flex min-h-80 w-full max-w-[660px] items-center justify-evenly rounded-[28px] border border-[#e5e8e8] bg-white px-6 py-5 shadow-[0_18px_55px_rgba(23,33,43,0.24)] sm:px-14"
        role="dialog"
        aria-modal="true"
        aria-label={confirmationStep === 1 ? 'পরীক্ষা সমাপ্তির নিশ্চয়তা' : 'পরীক্ষা জমা দেওয়ার চূড়ান্ত নিশ্চয়তা'}
      >
        {confirmationStep === 1 ? (
          <>
            <button
              className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl font-sans text-[84px] leading-none text-[#14865f] transition hover:bg-[#eff9f4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14865f] sm:h-32 sm:w-32 sm:text-[100px]"
              type="button"
              aria-label="পরবর্তী নিশ্চিতকরণ"
              onClick={() => setConfirmationStep(2)}
            >
              &#10003;
            </button>
            <button
              className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl font-sans text-[84px] leading-none text-[#ed563f] transition hover:bg-[#fff2ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ed563f] sm:h-32 sm:w-32 sm:text-[100px]"
              type="button"
              aria-label="পরীক্ষা চালিয়ে যান"
              onClick={onCancel}
            >
              &#10005;
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-1">
              <button
                className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl font-sans text-[84px] leading-none text-[#ed563f] transition hover:bg-[#fff2ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ed563f] sm:h-32 sm:w-32 sm:text-[100px]"
                type="button"
                aria-label="বাতিল করুন"
                onClick={() => setConfirmationStep(1)}
              >
                &#10005;
              </button>
              <span className="font-sans text-sm font-semibold text-[#d9363e]">বাতিল করুন</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <button
                className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl font-sans text-[84px] leading-none text-[#14865f] transition hover:bg-[#eff9f4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14865f] sm:h-32 sm:w-32 sm:text-[100px]"
                type="button"
                aria-label="সমাপ্ত"
                onClick={onComplete}
              >
                &#10003;
              </button>
              <span className="font-sans text-sm font-semibold text-[#14865f]">জমা দিন</span>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default EndPage;