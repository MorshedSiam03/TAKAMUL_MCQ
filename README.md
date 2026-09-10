# Takamul MCQ

A responsive Bengali MCQ examination platform for loading and unloading safety training.

The application supports three exam categories and selects 15 random questions from the selected category's question bank. Questions can include real equipment photos, and the exam includes answer tracking, progress navigation, final submission confirmation, and score calculation.

## Features

- 15 random questions selected from the question bank
- Bengali loading and unloading safety questions
- Image-based equipment questions with real photos
- Radio-button answer selection
- Answer required before moving to the next question
- Vertical question navigator with answered and current states
- Responsive layout for desktop, tablet, and mobile
- Three randomly positioned finish buttons on the end page
- Two-step final confirmation with red cancel and green confirm controls
- Automatic score and percentage result
- Restart option with a fresh set of questions
- Tailwind CSS styling with a teal theme
- Three selectable exam categories: Loading & Unloading, Office Facilities Cleaning, and Packaging Worker

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint

## Project Structure

```text
src/
├── components/
│   ├── EndPage.jsx
│   ├── ExamHeader.jsx
│   ├── ProgressBar.jsx
│   ├── QuestionCard.jsx
│   ├── QuestionFooter.jsx
│   ├── QuizFooter.jsx
│   └── ResultScreen.jsx
├── data/
│   ├── cleaningQuestions.json
│   ├── packagingQuestions.json
│   └── questions.json
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Requirements

- Node.js `22.12+`
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The development server will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Managing Questions

Questions are stored in these category-specific files:

- [src/data/questions.json](src/data/questions.json): Loading and unloading
- [src/data/cleaningQuestions.json](src/data/cleaningQuestions.json): Office facilities cleaning
- [src/data/packagingQuestions.json](src/data/packagingQuestions.json): Packaging worker

Each question follows this format:

```json
{
  "question": "এই যন্ত্রটির নাম কী?",
  "image": "/images/equipment.jpg",
  "imageAlt": "যন্ত্রটির ছবি",
  "options": ["ফর্কলিফট", "কনভেয়ার", "প্যালেট ট্রাক", "হ্যান্ড ট্রাক"],
  "answer": 0
}
```

The `image` and `imageAlt` fields are optional. The `answer` value is the zero-based index of the correct option:

- `0` = first option
- `1` = second option
- `2` = third option
- `3` = fourth option

Keep at least 15 valid questions in the bank so the random exam can be generated correctly.

## Production Build

Create the production bundle with:

```bash
npm run build
```

The output is generated in the `dist` directory.

## Deploying to Vercel

This is a Vite application and includes a `vercel.json` configuration.

1. Import the repository into Vercel.
2. Set the project root to the folder containing `package.json`.
3. Use the Vite framework preset.
4. Use `npm run build` as the build command.
5. Use `dist` as the output directory.
6. Deploy the project.

If the repository contains `my-react-app` as a subfolder, set Vercel's **Root Directory** to `my-react-app`.

## Development Notes

- Use Node.js `22.12+` to match the Vite and Rolldown engine requirements.
- Do not add platform-specific native packages directly to `package.json`.
- Keep image URLs reachable from the deployed site.
- Run both `npm run build` and `npm run lint` before deploying.
