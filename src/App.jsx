import { useState } from 'react';
import questionBank from './data/questions.json';
import cleaningQuestions from './data/cleaningQuestions.json';
import packagingQuestions from './data/packagingQuestions.json';
import kitchenApplianceQuestions from './data/kitchenApplianceQuestions.json';
import privateCarDriverQuestions from './data/privateCarDriverQuestions.json';
import warehouseWorkerQuestions from './data/warehouseWorkerQuestions.json';
import CategorySelect from './components/CategorySelect';
import ExamHeader from './components/ExamHeader';
import EndPage from './components/EndPage';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import QuestionFooter from './components/QuestionFooter';
import QuizFooter from './components/QuizFooter';
import ResultScreen from './components/ResultScreen';

const categories = [
  {
    id: 'loading-unloading',
    title: 'Loading & Unloading Worker',
    headerTitle: 'লোডিং ও আনলোডিং পরীক্ষা',
    description: 'লোডিং, আনলোডিং, PPE এবং warehouse safety সম্পর্কে পরীক্ষা।',
    image: '/images/LOAD-UNLOAD.png',
    imageAlt: 'পণ্য পরিবহনের ট্রাক',
    icon: '',
    questions: questionBank,
  },
  {
    id: 'office-cleaning',
    title: 'Office Facilities Cleaning Worker',
    headerTitle: 'অফিস ফ্যাসিলিটিজ ক্লিনিং পরীক্ষা',
    description: 'Office cleaning, chemicals, PPE, waste handling এবং hygiene safety।',
    image: '/images/Cleaning.png',
    imageAlt: 'কর্মস্থলের সরঞ্জাম',
    icon: '✦',
    questions: cleaningQuestions,
  },
  {
    id: 'packaging-worker',
    title: 'Packaging Worker',
    headerTitle: 'প্যাকেজিং ওয়ার্কার পরীক্ষা',
    description: 'Packaging material, labels, box handling এবং machine safety।',
    image: '/images/Packaging.png',
    imageAlt: 'পণ্য সরানোর সরঞ্জাম',
    icon: '□',
    questions: packagingQuestions,
  },
  {
    id: 'kitchen-appliance-worker',
    title: 'Kitchen Appliance Worker',
    headerTitle: 'কিচেন অ্যাপ্লায়েন্স ওয়ার্কার পরীক্ষা',
    description: 'রান্নাঘরের যন্ত্রপাতি, বৈদ্যুতিক নিরাপত্তা এবং পরিষ্কার-পরিচ্ছন্নতা।',
    image: '/images/Cleaning.png',
    imageAlt: 'রান্নাঘরের সরঞ্জাম',
    icon: 'K',
    questions: kitchenApplianceQuestions,
  },
  {
    id: 'private-car-driver',
    title: 'Private Car Driver',
    headerTitle: 'প্রাইভেট কার ড্রাইভার পরীক্ষা',
    description: 'সড়ক নিরাপত্তা, গাড়ি পরীক্ষা এবং নিরাপদ চালনার নিয়ম।',
    image: '/images/LOAD-UNLOAD.png',
    imageAlt: 'যানবাহন',
    icon: 'D',
    questions: privateCarDriverQuestions,
  },
  {
    id: 'warehouse-worker',
    title: 'Warehouse Worker',
    headerTitle: 'ওয়্যারহাউস ওয়ার্কার পরীক্ষা',
    description: 'গুদাম নিরাপত্তা, পণ্য সংরক্ষণ, PPE এবং সরঞ্জাম ব্যবহার।',
    image: '/images/Packaging.png',
    imageAlt: 'গুদামের সরঞ্জাম',
    icon: 'W',
    questions: warehouseWorkerQuestions,
  },
];

function shuffleQuestionOptions(question) {
  const options = question.options.map((option, index) => ({
    option,
    isCorrect: index === question.answer,
  }));

  for (let index = options.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [options[index], options[randomIndex]] = [options[randomIndex], options[index]];
  }

  return {
    ...question,
    options: options.map(({ option }) => option),
    answer: options.findIndex(({ isCorrect }) => isCorrect),
  };
}

function getRandomQuestions(bank, shouldShuffleOptions = false) {
  const randomQuestions = [...bank].sort(() => Math.random() - 0.5).slice(0, 15);
  return shouldShuffleOptions ? randomQuestions.map(shuffleQuestionOptions) : randomQuestions;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isEndPage, setIsEndPage] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const answeredCount = selectedAnswers.filter((answer) => answer !== undefined).length;
  const score = selectedAnswers.reduce(
    (total, answer, index) => total + (answer === questions[index].answer ? 1 : 0),
    0,
  );

  function startExam(category) {
    setSelectedCategory(category);
    setQuestions(getRandomQuestions(category.questions, category.id === 'packaging-worker'));
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setIsEndPage(false);
    setIsFinished(false);
  }

  function selectAnswer(optionIndex) {
    setSelectedAnswers((answers) => {
      const nextAnswers = [...answers];
      nextAnswers[currentQuestion] = optionIndex;
      return nextAnswers;
    });
  }

  function goToNext() {
    if (currentQuestion === questions.length - 1) {
      setIsEndPage(true);
      return;
    }
    setCurrentQuestion((index) => index + 1);
  }

  function restartQuiz() {
    startExam(selectedCategory);
  }

  function changeCategory() {
    setSelectedCategory(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setIsEndPage(false);
    setIsFinished(false);
  }

  if (!selectedCategory) {
    return <CategorySelect categories={categories} onSelect={startExam} />;
  }

  if (isEndPage) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f5f1eb] p-0">
        <EndPage onComplete={() => {
          setIsEndPage(false);
          setIsFinished(true);
        }} />
      </main>
    );
  }

  if (isFinished) {
    return (
      <main className="quiz-shell">
        <ResultScreen
          score={score}
          totalQuestions={questions.length}
          answeredCount={answeredCount}
          onRestart={restartQuiz}
        />
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f1eb] p-0">
      <section className="flex min-h-screen w-full flex-col bg-white">
        <div className="grid flex-1 grid-cols-[140px_minmax(0,1fr)] items-stretch max-[900px]:grid-cols-[112px_minmax(0,1fr)] max-[600px]:grid-cols-[64px_minmax(0,1fr)]">
          <QuizFooter
            answeredCount={answeredCount}
            totalQuestions={questions.length}
            currentQuestion={currentQuestion}
            selectedAnswers={selectedAnswers}
            onQuestionSelect={setCurrentQuestion}
          />
          <div className="flex min-w-0 flex-col">
            <ExamHeader
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
              title={selectedCategory.headerTitle}
              onChangeCategory={changeCategory}
            />
            <ProgressBar
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
              answeredCount={answeredCount}
            />
            <div className="flex min-w-0 flex-1 flex-col">
              <QuestionCard
                question={question}
                questionNumber={currentQuestion + 1}
                selectedAnswer={selectedAnswer}
                onSelect={selectAnswer}
              />
              <QuestionFooter
                answeredCount={answeredCount}
                totalQuestions={questions.length}
                isAnswerSelected={selectedAnswer !== undefined}
                isFirstQuestion={currentQuestion === 0}
                isLastQuestion={currentQuestion === questions.length - 1}
                onBack={() => setCurrentQuestion((index) => index - 1)}
                onNext={goToNext}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;