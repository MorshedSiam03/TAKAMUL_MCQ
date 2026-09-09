import { useState } from 'react';

const targetPositions = [
  { top: '16%', left: '14%' },
  { top: '16%', left: '32%' },
  { top: '16%', left: '50%' },
  { top: '16%', left: '68%' },
  { top: '16%', left: '86%' },
  { top: '32%', left: '14%' },
  { top: '32%', left: '32%' },
  { top: '32%', left: '50%' },
  { top: '32%', left: '68%' },
  { top: '32%', left: '86%' },
  { top: '48%', left: '14%' },
  { top: '48%', left: '32%' },
  { top: '48%', left: '50%' },
  { top: '48%', left: '68%' },
  { top: '48%', left: '86%' },
  { top: '64%', left: '14%' },
  { top: '64%', left: '32%' },
  { top: '64%', left: '50%' },
  { top: '64%', left: '68%' },
  { top: '64%', left: '86%' },
  { top: '80%', left: '14%' },
  { top: '80%', left: '32%' },
  { top: '80%', left: '50%' },
  { top: '80%', left: '68%' },
  { top: '80%', left: '86%' },
];

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function EndPage({ onComplete }) {
  const [positions] = useState(() => shuffle(targetPositions).slice(0, 3));
  const [clickedTargets, setClickedTargets] = useState([]);
  const [confirmationStep, setConfirmationStep] = useState(0);

  function clickTarget(targetIndex) {
    setClickedTargets((clicked) => {
      if (targetIndex !== clicked.length) {
        return clicked;
      }

      const nextClicked = [...clicked, targetIndex];
      if (nextClicked.length === positions.length) {
        setConfirmationStep(1);
      }
      return nextClicked;
    });
  }

  return (
    <section className="w-full px-3 py-10 text-center sm:px-8 sm:py-12" aria-live="polite">
      <div className="relative mx-auto h-[55vh] min-h-[280px] w-full max-w-5xl overflow-hidden rounded-2xl border border-[rgba(36,109,115,0.25)] bg-[linear-gradient(135deg,#f4fbfb,#ffffff_55%,#e4f2f3)] shadow-[inset_0_0_0_10px_rgba(255,255,255,0.75),0_18px_40px_rgba(27,82,87,0.1)] sm:h-[58vh] sm:min-h-[350px]">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(36,109,115,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(36,109,115,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        {clickedTargets.length < positions.length && (
          <button
            className="absolute z-[1] h-16 w-[clamp(112px,16vw,150px)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#d9363e] px-2 font-sans text-[clamp(16px,2vw,20px)] font-bold text-white shadow-[0_8px_18px_rgba(217,54,62,0.28)] transition hover:scale-105 hover:bg-[#ae252d]"
            type="button"
            style={positions[clickedTargets.length]}
            onClick={() => clickTarget(clickedTargets.length)}
          >
            সমাপ্ত
          </button>
        )}
      </div>
      {confirmationStep > 0 && (
        <div className="fixed inset-0 z-10 grid place-items-center bg-[rgba(23,33,43,0.52)] p-5 backdrop-blur-sm" role="presentation">
          <div
            key={`confirmation-${confirmationStep}`}
            className="flex h-[400px] w-[min(100%,580px)] animate-[zoom-in_220ms_ease-out] items-center justify-center rounded-3xl border border-[rgba(36,109,115,0.2)] bg-white/95 px-6 py-10 shadow-[0_28px_70px_rgba(27,82,87,0.28)] sm:px-12"
            role="dialog"
            aria-modal="true"
            aria-label={confirmationStep === 1 ? 'First exam confirmation' : 'Final exam confirmation'}
          >
            <div className="flex items-center justify-center gap-5 sm:gap-28">
              <button
                className="grid h-28 w-28 shrink-0 place-items-center rounded-full  font-sans text-[78px] leading-none text-[#d9363e]    sm:h-32 sm:w-32 sm:text-[104px]"
                type="button"
                aria-label={confirmationStep === 1 ? 'Cancel finish' : 'Return to previous confirmation'}
                onClick={() => setConfirmationStep(confirmationStep === 1 ? 0 : 1)}
              >
                &#10005;
              </button>
              <button
                className="grid h-28 w-28 shrink-0 place-items-center rounded-full  font-sans text-[78px] leading-none text-[#55ad3e] -100 hover:brightness-95 sm:h-32 sm:w-32 sm:text-[104px]"
                type="button"
                aria-label={confirmationStep === 1 ? 'Continue to final confirmation' : 'Confirm finish'}
                onClick={() => {
                  if (confirmationStep === 1) {
                    setConfirmationStep(2);
                  } else {
                    onComplete();
                  }
                }}
              >
                &#10003;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default EndPage;