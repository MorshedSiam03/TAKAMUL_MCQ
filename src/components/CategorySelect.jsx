function CategorySelect({ categories, onSelect }) {
  return (
    <main className="min-h-screen bg-[#f4f5f1] text-[#172b2a]">
      <header className="relative overflow-hidden border-b-4 border-[#e7a52b] bg-[linear-gradient(112deg,#123d3b,#1d5550_62%,#28665c)] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(135deg,transparent_49.7%,white_50%,transparent_50.3%)] [background-size:28px_28px]" />
        <div className="relative mx-auto flex w-full max-w-7xl items-center gap-5 px-5 py-6 sm:px-8 sm:py-8">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-white p-2 shadow-[0_8px_20px_rgba(0,0,0,0.16)] sm:h-20 sm:w-20">
            <img className="h-full w-full object-contain" src="/images/link-preview-svp-removebg-preview.png" alt="SVTC logo" />
          </div>
          <div className="min-w-0">
            <p className="mb-1 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-[#f2c15b] sm:text-xs">SVTC · Dhaka</p>
            <h1 className="m-0 text-[clamp(21px,4vw,34px)] font-bold leading-tight text-white">স্কিল ভেরিফিকেশন ট্রেনিং সেন্টার</h1>
            <p className="mt-2 max-w-3xl font-sans text-xs leading-relaxed text-white/80 sm:text-sm">
              আলম ম্যানশন (৪র্থ তলা), ৫৭১ বেগম রোকেয়া সরণি, কাজী পাড়া, ঢাকা-১২১৬।
            </p>
          </div>
          <span className="ml-auto hidden shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-sans text-xs font-semibold text-white/90 lg:inline-flex">
            TRAINING & ASSESSMENT
          </span>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pt-11">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#d8dfd8] pb-5 sm:mb-8">
          <div>
            <p className="mb-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#b97816]">পরীক্ষার বিভাগ</p>
            <h2 className="m-0 text-[clamp(25px,4vw,36px)] font-bold leading-tight text-[#173e3a]">কাজের ক্ষেত্র বেছে নিন</h2>
          </div>
          <span className="rounded-full border border-[#d7dfd9] bg-white px-3 py-1.5 font-sans text-xs font-semibold text-[#52635d]">
            {categories.length}টি বিভাগ
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <button
              className="group rounded-2xl border border-[rgba(36,109,115,0.2)] bg-[linear-gradient(145deg,#ffffff,#e4f2f3)] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[rgb(36,109,115)] hover:shadow-[0_14px_30px_rgba(27,82,87,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(36,109,115)]"
              type="button"
              key={category.id}
              onClick={() => onSelect(category)}
            >
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-[rgb(36,109,115)] font-sans text-sm text-white shadow-[0_4px_10px_rgba(36,109,115,0.2)]">
                <img className="h-6 w-6 object-cover transition duration-300 group-hover:scale-105" src={category.image} alt={category.imageAlt} />
              </span>
              <h3 className="m-0 text-xl font-bold text-[rgb(27,82,87)] group-hover:text-[rgb(36,109,115)]">{category.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#66727d]">{category.description}</p>
              <span className="mt-5 block font-sans text-xs font-bold text-[rgb(36,109,115)]">১৫টি প্রশ্ন →</span>
            </button>
          ))}
        </div>
      </section>
      <footer className="border-t-4 border-[#e7a52b] bg-[#123d3b] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-7 px-5 py-8 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-white p-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.16)]">
                <img className="h-full w-full object-contain" src="/images/link-preview-svp-removebg-preview.png" alt="SVTC logo" />
              </span>
              <div>
                <p className="m-0 font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#f2c15b]">SVTC · Dhaka</p>
                <h2 className="mt-1 text-lg font-bold leading-snug text-white">স্কিল ভেরিফিকেশন ট্রেনিং সেন্টার</h2>
              </div>
            </div>
            <h3 className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-[#f2c15b]">ঠিকানা ও যাতায়াত</h3>
            <p className="m-0 font-sans text-sm font-semibold leading-relaxed text-white/95">
              আলম ম্যানশন (৪র্থ তলা), ৫৭১ বেগম রোকেয়া সরণি, কাজী পাড়া, ঢাকা-১২১৬।<br />
              কাজী পাড়া বাস স্ট্যান্ড ও মেট্রোরেলের ২৮৪ নং পিলারের ঠিক পূর্ব পাশে, প্রিমিয়াম সুইটস ভবন।
            </p>
            <p className="mb-3 mt-3 max-w-3xl font-sans text-sm leading-relaxed text-white/75">
              মেট্রোরেলের কাজী পাড়া স্টেশনের ‘B’ গেট দিয়ে নেমে বা কাজী পাড়া বাস স্ট্যান্ডে নেমে সোজা ২ মিনিট হাঁটুন। ২৮৪ নং পিলারের ঠিক পূর্ব পাশের প্রিমিয়াম সুইটস ভবনের ৪র্থ তলায় চলে আসুন।
            </p>
            <a
              className="inline-flex items-center gap-2 font-sans text-sm font-bold text-[#f2c15b] underline decoration-[#f2c15b]/50 underline-offset-4 transition hover:text-white"
              href="https://maps.app.goo.gl/WP22oecvgFardW4w7?g_st=ic"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps-এ দেখুন <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-white/15 bg-white/[0.06] p-4">
              <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-wider text-[#f2c15b]">যোগাযোগ</h2>
              <a className="block font-sans text-base font-semibold text-white underline decoration-white/40 underline-offset-4 transition hover:text-[#f2c15b]" href="tel:+8801620009550">
                +880 1620-009550
              </a>
              <a className="mt-2 block font-sans text-sm font-medium text-white/80 underline decoration-white/25 underline-offset-4 transition hover:text-[#f2c15b]" href="tel:+8801954456543">
                +880 1954-456543
              </a>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/[0.06] p-4">
              <h2 className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-[#f2c15b]">খোলার সময়</h2>
              <p className="m-0 font-sans text-sm leading-relaxed text-white/90">শনিবার–বুধবার · সকাল ১১টা–সন্ধ্যা ৭টা</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default CategorySelect;
