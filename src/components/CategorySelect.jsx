function CategorySelect({ categories, onSelect }) {
  return (
    <main className="grid min-h-screen place-items-center bg-[linear-gradient(135deg,#e4f2f3,#f5f1eb)] px-5 py-10">
      <section className="w-full max-w-5xl rounded-3xl bg-white p-6 shadow-[0_24px_70px_rgba(27,82,87,0.14)] sm:p-10">
        <div className="mb-8 text-center">
          <span className="mb-3 inline-flex rounded-full border border-[rgba(36,109,115,0.2)] bg-[rgb(228,242,243)] px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[rgb(27,82,87)]">
            Takamul MCQ
          </span>
          <h1 className="m-0 text-[clamp(28px,5vw,44px)] font-bold leading-tight text-[rgb(27,82,87)]">পরীক্ষা নির্বাচন করুন</h1>
          <p className="mx-auto mt-3 max-w-xl font-sans text-sm leading-relaxed text-[#66727d]">
            আপনার কাজের category বেছে নিয়ে ১৫টি প্রশ্নের পরীক্ষা শুরু করুন।
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <button
              className="group rounded-2xl border border-[rgba(36,109,115,0.2)] bg-[linear-gradient(145deg,#ffffff,#e4f2f3)] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[rgb(36,109,115)] hover:shadow-[0_14px_30px_rgba(27,82,87,0.14)]"
              type="button"
              key={category.id}
              onClick={() => onSelect(category)}
            >
              
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-[rgb(36,109,115)] font-sans text-sm text-white shadow-[0_4px_10px_rgba(36,109,115,0.2)]">
                <img className="h-6 w-6 object-cover transition duration-300 group-hover:scale-105" src={category.image} alt={category.imageAlt} />
              </span>
              <h2 className="m-0 text-xl font-bold text-[rgb(27,82,87)] group-hover:text-[rgb(36,109,115)]">{category.title}</h2>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#66727d]">{category.description}</p>
              <span className="mt-5 block font-sans text-xs font-bold text-[rgb(36,109,115)]">১৫টি প্রশ্ন →</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CategorySelect;
