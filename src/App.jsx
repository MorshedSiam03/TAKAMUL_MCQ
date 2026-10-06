import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import questionBank from './data/loadunlodQuestion.json';
import cleaningQuestions from './data/cleaningQuestions.json';
import packagingQuestions from './data/packagingQuestions.json';
import kitchenApplianceQuestions from './data/kitchenApplianceQuestions.json';
import privateCarDriverQuestions from './data/privateCarDriverQuestions.json';
import warehouseWorkerQuestions from './data/warehouseWorkerQuestions.json';
import vehicleCleanerQuestions from './data/vehicleCleanerQuestions.json';
import portWorkerQuestions from './data/portWorkerQuestions.json';
import scaffoldLaborerQuestions from './data/scaffoldLaborerQuestions.json';
import barberQuestions from './data/barberQuestions.json';
import laundryWorkerQuestions from './data/laundryWorkerQuestions.json';
import gardenCleanerQuestions from './data/gardenCleanerQuestions.json';
import CategorySelect from './components/CategorySelect';
import ExamStartModal from './components/ExamStartModal';
import ExamCompleteScreen from './components/ExamCompleteScreen';
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
  {
    id: 'vehicle-cleaner',
    title: 'Vehicle Cleaner',
    headerTitle: 'ভেহিকেল ক্লিনার পরীক্ষা',
    description: 'গাড়ি পরিষ্কার, ক্লিনিং কেমিক্যাল ও কর্মস্থলের নিরাপত্তা।',
    image: '/images/Cleaning.png',
    imageAlt: 'পরিষ্কারের সরঞ্জাম',
    icon: 'V',
    questions: vehicleCleanerQuestions,
  },
  {
    id: 'port-worker',
    title: 'Port Worker',
    headerTitle: 'পোর্ট ওয়ার্কার পরীক্ষা',
    description: 'বন্দরের কার্গো হ্যান্ডলিং, সংকেত, PPE ও জরুরি নিরাপত্তা।',
    image: '/images/LOAD-UNLOAD.png',
    imageAlt: 'পণ্য পরিবহনের ট্রাক',
    icon: 'P',
    questions: portWorkerQuestions,
  },
  {
    id: 'scaffold-laborer',
    title: 'Scaffold Laborer',
    headerTitle: 'স্ক্যাফোল্ড শ্রমিক পরীক্ষা',
    description: 'উচ্চতায় কাজ, scaffold inspection ও fall prevention।',
    image: '/images/forklift.svg',
    imageAlt: 'কর্মস্থলের সরঞ্জাম',
    icon: 'S',
    questions: scaffoldLaborerQuestions,
  },
  {
    id: 'barber',
    title: 'Barber',
    headerTitle: 'বারবার পরীক্ষা',
    description: 'গ্রাহক সেবা, যন্ত্রপাতির পরিচ্ছন্নতা ও ব্যক্তিগত স্বাস্থ্যবিধি।',
    image: '/images/Cleaning.png',
    imageAlt: 'পরিষ্কার-পরিচ্ছন্নতার সরঞ্জাম',
    icon: 'B',
    questions: barberQuestions,
  },
  {
    id: 'laundry-worker',
    title: 'Laundry Worker',
    headerTitle: 'লন্ড্রি কর্মী পরীক্ষা',
    description: 'লন্ড্রি যন্ত্র, কেমিক্যাল, গরম সরঞ্জাম ও কাপড়ের নিরাপদ ব্যবস্থাপনা।',
    image: '/images/Cleaning.png',
    imageAlt: 'পরিষ্কারের সরঞ্জাম',
    icon: 'L',
    questions: laundryWorkerQuestions,
  },
  {
    id: 'garden-cleaner',
    title: 'Garden Cleaner',
    headerTitle: 'গার্ডেন ক্লিনার পরীক্ষা',
    description: 'বাগানের সরঞ্জাম, গাছপালা, কেমিক্যাল ও বাইরের কাজের নিরাপত্তা।',
    image: '/images/Cleaning.png',
    imageAlt: 'পরিষ্কারের সরঞ্জাম',
    icon: 'G',
    questions: gardenCleanerQuestions,
  },
];

const EXAM_DURATION_SECONDS = 30 * 60;

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

function ExamSetupRoute({ onStart }) {
  const { categoryId } = useParams();
  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <CategorySelect categories={categories} onSelect={() => {}} />
      <ExamStartModal category={category} onStart={(name) => onStart(category, name)} />
    </>
  );
}

function ExamRoute({
  selectedCategory,
  questions,
  currentQuestion,
  selectedAnswers,
  answeredCount,
  elapsedSeconds,
  isEndPage,
  onChangeCategory,
  onFinishRequest,
  onFinishConfirm,
  onFinishCancel,
  onQuestionSelect,
  onAnswerSelect,
  onBack,
  onNext,
  isFinished,
}) {
  const { categoryId } = useParams();

  if (!selectedCategory || selectedCategory.id !== categoryId || questions.length === 0) {
    return <Navigate to={selectedCategory ? `/setup/${categoryId}` : '/'} replace />;
  }

  if (isFinished) {
    return <Navigate to={`/result/${categoryId}`} replace />;
  }

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];

  return (
    <main className="h-screen w-full overflow-hidden bg-[#f5f1eb] p-0">
      <section className="flex h-full min-h-0 w-full flex-col bg-white">
        <div className="grid min-h-0 flex-1 grid-cols-[140px_minmax(0,1fr)] items-stretch max-[900px]:grid-cols-[112px_minmax(0,1fr)] max-[600px]:grid-cols-[64px_minmax(0,1fr)]">
          <QuizFooter
            answeredCount={answeredCount}
            totalQuestions={questions.length}
            currentQuestion={currentQuestion}
            selectedAnswers={selectedAnswers}
            onQuestionSelect={onQuestionSelect}
          />
          <div className="flex min-h-0 min-w-0 flex-col">
            <div className="shrink-0">
              <ExamHeader
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                title={selectedCategory.headerTitle}
                remainingSeconds={Math.max(EXAM_DURATION_SECONDS - elapsedSeconds, 0)}
                onChangeCategory={onChangeCategory}
                onFinishExam={onFinishRequest}
              />
              <ProgressBar
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                answeredCount={answeredCount}
              />
            </div>
            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <QuestionCard
                  question={question}
                  questionNumber={currentQuestion + 1}
                  selectedAnswer={selectedAnswer}
                  onSelect={onAnswerSelect}
                />
              </div>
              <QuestionFooter
                answeredCount={answeredCount}
                totalQuestions={questions.length}
                isAnswerSelected={selectedAnswer !== undefined}
                isFirstQuestion={currentQuestion === 0}
                isLastQuestion={currentQuestion === questions.length - 1}
                onBack={onBack}
                onNext={onNext}
              />
            </div>
          </div>
        </div>
      </section>
      {isEndPage && (
        <EndPage onComplete={onFinishConfirm} onCancel={onFinishCancel} />
      )}
    </main>
  );
}

function ExamResultRoute({ selectedCategory, isFinished, resultProps }) {
  const { categoryId } = useParams();

  if (!selectedCategory || selectedCategory.id !== categoryId) {
    return <Navigate to="/" replace />;
  }

  if (!isFinished) {
    return <Navigate to={`/exam/${categoryId}`} replace />;
  }

  return (
    <main className="quiz-shell">
      <ResultScreen {...resultProps} />
    </main>
  );
}

function ExamCompleteRoute({ selectedCategory, isFinished, onShowResult, onRestart }) {
  const { categoryId } = useParams();

  if (!selectedCategory || selectedCategory.id !== categoryId) {
    return <Navigate to="/" replace />;
  }

  if (!isFinished) {
    return <Navigate to={`/exam/${categoryId}`} replace />;
  }

  return (
    <ExamCompleteScreen
      onShowResult={() => onShowResult(categoryId)}
      onRestart={onRestart}
    />
  );
}

function App() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [candidateName, setCandidateName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [examStartedAt, setExamStartedAt] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isEndPage, setIsEndPage] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const answeredCount = selectedAnswers.filter((answer) => answer !== undefined).length;
  const score = selectedAnswers.reduce(
    (total, answer, index) => total + (answer === questions[index].answer ? 1 : 0),
    0,
  );

  useEffect(() => {
    if (!selectedCategory || examStartedAt === null || isFinished) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - examStartedAt) / 1000);
      if (elapsed >= EXAM_DURATION_SECONDS) {
        setElapsedSeconds(EXAM_DURATION_SECONDS);
        setIsEndPage(false);
        setIsFinished(true);
        navigate(`/complete/${selectedCategory.id}`);
        return;
      }
      setElapsedSeconds(elapsed);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [examStartedAt, isFinished, navigate, selectedCategory]);

  function startExam(category, name = candidateName) {
    setSelectedCategory(category);
    setCandidateName(name);
    setQuestions(getRandomQuestions(category.questions, true));
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setExamStartedAt(Date.now());
    setElapsedSeconds(0);
    setIsEndPage(false);
    setIsFinished(false);
    navigate(`/exam/${category.id}`);
  }

  function selectAnswer(optionIndex) {
    setSelectedAnswers((answers) => {
      const nextAnswers = [...answers];
      nextAnswers[currentQuestion] = optionIndex;
      return nextAnswers;
    });
  }

  function requestExamFinish() {
    setIsEndPage(true);
  }

  function goToNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((index) => index + 1);
    }
  }

  function restartQuiz() {
    startExam(selectedCategory, candidateName);
  }

  function finishExam() {
    setIsEndPage(false);
    setIsFinished(true);
    navigate(`/complete/${selectedCategory.id}`);
  }

  function showResult(categoryId) {
    navigate(`/result/${categoryId}`);
  }

  function changeCategory() {
    setSelectedCategory(null);
    setCandidateName('');
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setExamStartedAt(null);
    setElapsedSeconds(0);
    setIsEndPage(false);
    setIsFinished(false);
    navigate('/');
  }

  function selectCategory(category) {
    setSelectedCategory(null);
    setCandidateName('');
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setExamStartedAt(null);
    setElapsedSeconds(0);
    setIsEndPage(false);
    setIsFinished(false);
    navigate(`/setup/${category.id}`);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<CategorySelect categories={categories} onSelect={selectCategory} />}
      />
      <Route path="/setup/:categoryId" element={<ExamSetupRoute onStart={startExam} />} />
      <Route
        path="/complete/:categoryId"
        element={(
          <ExamCompleteRoute
            selectedCategory={selectedCategory}
            isFinished={isFinished}
            onShowResult={showResult}
            onRestart={restartQuiz}
          />
        )}
      />
      <Route
        path="/exam/:categoryId"
        element={(
          <ExamRoute
            selectedCategory={selectedCategory}
            questions={questions}
            currentQuestion={currentQuestion}
            selectedAnswers={selectedAnswers}
            answeredCount={answeredCount}
            elapsedSeconds={elapsedSeconds}
            isEndPage={isEndPage}
            isFinished={isFinished}
            onChangeCategory={changeCategory}
            onFinishRequest={requestExamFinish}
            onFinishConfirm={finishExam}
            onFinishCancel={() => setIsEndPage(false)}
            onQuestionSelect={setCurrentQuestion}
            onAnswerSelect={selectAnswer}
            onBack={() => setCurrentQuestion((index) => index - 1)}
            onNext={goToNext}
          />
        )}
      />
      <Route
        path="/result/:categoryId"
        element={(
          <ExamResultRoute
            selectedCategory={selectedCategory}
            isFinished={isFinished}
            resultProps={{
              candidateName,
              examTitle: selectedCategory?.headerTitle ?? '',
              questions,
              selectedAnswers,
              score,
              totalQuestions: questions.length,
              answeredCount,
              onRestart: restartQuiz,
            }}
          />
        )}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;