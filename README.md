# Takamol MCQ

স্কিল ভেরিফিকেশন ট্রেনিং সেন্টার (SVTC), ঢাকার জন্য তৈরি একটি বাংলা-ভিত্তিক অনলাইন MCQ পরীক্ষা ও মূল্যায়ন অ্যাপ। পরীক্ষার্থী কাজের বিভাগ বেছে নিয়ে নির্দিষ্ট সময়ের মধ্যে প্রশ্নের উত্তর দিতে পারেন এবং শেষে স্কোর, পাসের অবস্থা ও প্রতিটি প্রশ্নের উত্তর পর্যালোচনা করতে পারেন।

## বৈশিষ্ট্য

- ১৩টি কাজের বিভাগের জন্য আলাদা প্রশ্নব্যাংক
- প্রতিটি পরীক্ষায় প্রশ্ন ও উত্তর বিকল্প এলোমেলোভাবে দেখানো
- বিভাগভেদে ১৫ বা ৩০টি প্রশ্নের পরীক্ষা
- পরীক্ষার্থীর নাম ও নির্বাচিত পরীক্ষার তথ্য দিয়ে পরীক্ষা শুরু
- ৩০ মিনিটের কাউন্টডাউন; সময় শেষ হলে পরীক্ষা স্বয়ংক্রিয়ভাবে জমা হয়
- প্রশ্ন নেভিগেশন, উত্তর দেওয়া প্রশ্নের অগ্রগতি এবং নির্বাচিত উত্তরের চিহ্ন
- পরীক্ষা জমা দেওয়ার আগে নিশ্চিতকরণ
- স্কোর, শতকরা ফল, সঠিক/ভুল/অনুত্তরিত প্রশ্নের হিসাব
- ৬০% বা তার বেশি পেলে উত্তীর্ণ হিসেবে ফলাফল
- প্রশ্নভিত্তিক উত্তর পর্যালোচনা এবং নতুন প্রশ্ন নিয়ে পরীক্ষা পুনরায় দেওয়ার সুবিধা
- মোবাইল, ট্যাবলেট ও ডেস্কটপের উপযোগী responsive layout

## পরীক্ষার বিভাগ

| বিভাগ | প্রশ্ন |
| --- | ---: |
| Loading & Unloading Worker | ১৫ |
| Office Facilities Cleaning Worker | ১৫ |
| Packaging Worker | ১৫ |
| Kitchen Appliance Worker | ১৫ |
| Private Car Driver | ১৫ |
| Warehouse Worker | ১৫ |
| Vehicle Cleaner | ৩০ |
| Port Worker | ১৫ |
| Scaffold Laborer | ১৫ |
| Barber | ১৫ |
| Laundry Worker | ১৫ |
| Garden Cleaner | ১৫ |
| Landscaping Worker | ৩০ |

## ব্যবহৃত প্রযুক্তি

- React 19
- Vite 8
- Tailwind CSS 4
- React Router 7
- ESLint

## চালানোর আগে

- Node.js `22.12.0` বা তার পরের সংস্করণ
- npm

## লোকাল পরিবেশে চালানো

```bash
npm install
npm run dev
```

টার্মিনালে দেখানো লোকাল URL ব্রাউজারে খুলুন (সাধারণত `http://localhost:5173`)।

## npm স্ক্রিপ্ট

| কমান্ড | কাজ |
| --- | --- |
| `npm run dev` | Vite development server চালু |
| `npm run build` | production build তৈরি করে `dist/`-এ রাখে |
| `npm run preview` | production build লোকালি preview |
| `npm run lint` | ESLint দিয়ে কোড পরীক্ষা |

## প্রকল্পের কাঠামো

```text
.
├── public/
│   └── images/                 # লোগো, বিভাগ ও প্রশ্নের ছবি
├── src/
│   ├── components/             # পরীক্ষা, প্রশ্ন, ফলাফল ও বিভাগ নির্বাচন UI
│   ├── data/                   # বিভাগের MCQ প্রশ্নব্যাংক (JSON)
│   ├── App.jsx                 # বিভাগ, পরীক্ষা ও ফলাফলের মূল flow
│   ├── index.css               # Tailwind ও modal animation
│   └── main.jsx                # React entry point ও router
├── index.html
├── package.json
└── vite.config.js
```

## প্রশ্নব্যাংক সম্পাদনা

প্রতিটি বিভাগের প্রশ্ন `src/data/`-এর সংশ্লিষ্ট JSON ফাইলে থাকে। উদাহরণ:

```json
{
  "question": "প্রশ্নের লেখা",
  "options": ["প্রথম উত্তর", "দ্বিতীয় উত্তর", "তৃতীয় উত্তর", "চতুর্থ উত্তর"],
  "answer": 0,
  "image": "/images/example.jpg",
  "imageAlt": "ছবির বর্ণনা"
}
```

- `question`: প্রশ্নের লেখা
- `options`: দেখানো উত্তর বিকল্পগুলোর array
- `answer`: সঠিক উত্তরের zero-based index (`0` হলো প্রথম বিকল্প)
- `image` এবং `imageAlt`: ঐচ্ছিক; ছবিসহ প্রশ্নের জন্য ব্যবহার করুন

পরিবর্তনের সময় JSON-এর বৈধতা, প্রতিটি `answer` index-এর জন্য সংশ্লিষ্ট option থাকা, এবং ছবির URL/পাথ কাজ করছে কি না যাচাই করুন। পরীক্ষায় যত প্রশ্ন নির্ধারিত আছে, সংশ্লিষ্ট প্রশ্নব্যাংকে অন্তত ততগুলো বৈধ প্রশ্ন থাকতে হবে। বিভাগের সংখ্যা বা পরীক্ষার প্রশ্নসংখ্যা বদলালে `src/App.jsx`-এর বিভাগ কনফিগারেশনও হালনাগাদ করুন।

## যাচাই

পরিবর্তন প্রকাশের আগে চালান:

```bash
npm run lint
npm run build
```

## Vercel-এ প্রকাশ

রিপোজিটরিটি Vercel-এ import করে Vite project হিসেবে deploy করুন। এই রিপোজিটরির `vercel.json`-এ build ও SPA routing সেট করা আছে।

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite
