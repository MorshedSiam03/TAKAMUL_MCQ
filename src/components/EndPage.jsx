import { useEffect, useRef, useState } from 'react';

function EndPage({ onComplete, onCancel, answeredCount = 0, totalQuestions = 0 }) {
  const [confirmationStep, setConfirmationStep] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const onCancelRef = useRef(onCancel);

  const allQuestionsAnswered = totalQuestions > 0 && answeredCount >= totalQuestions;

  useEffect(() => {
    onCancelRef.current = onCancel;
  }, [onCancel]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => onCancelRef.current(), 60_000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const closeWithAnimation = (callback) => {
    setIsClosing(true);
    window.setTimeout(() => callback(), 120);
  };

  return (
    <div
      className="fixed inset-0 z-20 grid place-items-center bg-[rgba(18,20,22,0.38)] p-2 backdrop-blur-[2px] sm:p-4"
      style={{
        animation: isClosing ? 'fadeOut 160ms ease-in forwards' : 'fadeIn 140ms ease-out forwards',
      }}
    >
      <section
        className="relative w-full max-w-[720px] origin-center overflow-hidden rounded-[20px] border border-[#dfe7e4] bg-[#efefed] shadow-[0_10px_28px_rgba(15,23,24,0.12)]"
        style={{
          animation: isClosing ? 'modalOut 180ms cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'modalIn 180ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
          transformOrigin: 'center',
        }}
        role="dialog"
        aria-modal="true"
        aria-label={confirmationStep === 1 ? 'পরীক্ষা সমাপ্তির নিশ্চয়তা' : 'পরীক্ষা জমা দেওয়ার চূড়ান্ত নিশ্চয়তা'}
      >
        <header className="flex h-[60px] items-center justify-center bg-[linear-gradient(90deg,#0a5d5a,#0f6966_58%,#0f5d5c)] px-4  sm:h-[86px]">
          <h2 className="m-0 text-center font-serif text-[clamp(20px,2.2vw,38px)] font-light uppercase tracking-[0.06em] text-[#edf8f5] opacity-95">
            confirm termination
          </h2>
        </header>

        <div className="relative px-3  pb-5 pt-5 sm:px-5 sm:pb-5 sm:pt-10">
          <div className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.45) 0px, rgba(255,255,255,0.45) 1px, transparent 1px, transparent 5px)' }} />

          <div className="relative">
            <div className="mb-4 flex justify-center sm:mb-5">
              <div className="grid h-[88px] w-[88px] place-items-center rounded-full border-[4px] border-[#1a7bb7] bg-[#19a3ea] shadow-[0_0_0_3px_rgba(16,118,171,0.08)] sm:h-[110px] sm:w-[110px]">
                <span className="font-sans text-[62px] font-black leading-none text-white sm:text-[76px]">?</span>
              </div>
            </div>

            {confirmationStep === 1 ? (
              <>
                <p className="mx-auto max-w-[620px] mt-8 text-center font-serif text-[clamp(20px,2vw,26px)] leading-[1.4] text-[#101b1d]">
                  {allQuestionsAnswered
                    ? 'আপনি সব প্রশ্নের উত্তর দিয়েছেন।'
                    : 'আপনি সব প্রশ্নের উত্তর দেননি।'}
                  
                  {allQuestionsAnswered
                    ? ' আপনি এখনই পরীক্ষা সমাপ্ত করতে পারেন।'
                    : ' আপনি যদি এখন সমাপ্ত করেন, তাহলে বাকি উত্তর জমা হবে না।'}
                </p>

                <p className="mt-6 text-center font-serif text-[clamp(18px,1.8vw,24px)] leading-[1.35] text-[#111d20]">
                  আপনি কি নিশ্চিতভাবে পরীক্ষা সমাপ্ত করবেন?
                </p>

                <div className="my-8 grid  sm:grid-cols-2 gap-4 sm:gap-0  ">
                  <button
                    type="button"
                    aria-label="সমাপ্ত করুন"
                    onClick={() => setConfirmationStep(2)}
                    className="mx-auto flex w-full max-w-[260px] min-h-[58px] items-center justify-center gap-2 rounded-[8px] border border-[#b9c6c2] bg-[#dfe7e4] px-3 py-2 text-center text-[#173b3f] shadow-[inset_0_0_0_1px_rgba(22,64,70,0.06)] transition hover:bg-[#d8e6e1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173b3f] sm:min-h-[70px] sm:px-4"
                  >
                    <span className="font-serif text-[clamp(14px,1.6vw,24px)] leading-tight">সমাপ্ত</span>
                    <span className="font-sans text-[clamp(24px,3vw,34px)] font-black leading-none text-[#0c5f5e]">✓</span>
                  </button>

                  <button
                    type="button"
                    aria-label="সমাপ্ত করতে চাই না"
                    onClick={() => closeWithAnimation(onCancel)}
                    className="mx-auto flex w-full max-w-[260px] min-h-[58px] items-center justify-center gap-2 rounded-[8px] border border-[#b9c6c2] bg-[#dfe7e4] px-3 py-2 text-center text-[#173b3f] shadow-[inset_0_0_0_1px_rgba(22,64,70,0.06)] transition hover:bg-[#d8e6e1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173b3f] sm:min-h-[70px] sm:px-4"
                  >
                    <span className="font-serif text-[clamp(14px,1.6vw,24px)] leading-tight">বাতিল করুন</span>
                    <span className="font-sans text-[clamp(24px,3vw,45px)] pb-2 font-black leading-none text-[#1b2a2d]">×</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="mx-auto mt-10 max-w-[620px] text-center font-serif text-[clamp(20px,2vw,26px)] leading-[1.4] text-[#101b1d]">
                  আপনি যদি সমাপ্ত করেন, তবে আপনার পরীক্ষা জমা দেওয়া হবে ? আপনি আর প্রশ্নগুলিতে ফিরে যেতে পারবেন না। 
               
                </p>

                <div className="my-8 grid  sm:grid-cols-2 gap-4 sm:gap-0 ">
                  <button
                    type="button"
                    aria-label="সমাপ্ত করতে চাই না"
                    onClick={() => setConfirmationStep(1)}
                    className="mx-auto flex w-full max-w-[260px] min-h-[58px] items-center justify-center gap-2 rounded-[8px] border border-[#b9c6c2] bg-[#dfe7e4] px-3 py-2 text-center text-[#173b3f] shadow-[inset_0_0_0_1px_rgba(22,64,70,0.06)] transition hover:bg-[#d8e6e1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173b3f] sm:min-h-[70px] sm:px-4"
                  >
                    <span className="font-serif text-[clamp(14px,1.6vw,24px)] leading-tight">বাতিল করুন</span>
                    <span className="font-sans text-[clamp(24px,3vw,45px)] pb-2 font-black leading-none text-[#1b2a2d]">×</span>
                  </button>

                  <button
                    type="button"
                    aria-label="সমাপ্ত করুন"
                    onClick={() => closeWithAnimation(onComplete)}
                    className="mx-auto flex w-full max-w-[260px] min-h-[58px] items-center justify-center gap-2 rounded-[8px] border border-[#b9c6c2] bg-[#dfe7e4] px-3 py-2 text-center text-[#173b3f] shadow-[inset_0_0_0_1px_rgba(22,64,70,0.06)] transition hover:bg-[#d8e6e1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173b3f] sm:min-h-[70px] sm:px-4"
                  >
                    <span className="font-serif text-[clamp(14px,1.6vw,24px)] leading-tight">সমাপ্ত</span>
                    <span className="font-sans text-[clamp(24px,3vw,34px)] font-black leading-none text-[#0c5f5e]">✓</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = `
  @keyframes modalIn {
    0% {
      opacity: 0;
      transform: scale(0.92) translateY(10px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes modalOut {
    0% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    100% {
      opacity: 0;
      transform: scale(0.96) translateY(8px);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('end-page-modal-animations');
  if (!existingStyle) {
    const element = document.createElement('style');
    element.id = 'end-page-modal-animations';
    element.textContent = styles;
    document.head.appendChild(element);
  }
}

export default EndPage;