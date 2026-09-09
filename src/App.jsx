import { useState } from 'react';
import questionBank from './data/questions.json';
import ExamHeader from './components/ExamHeader';
import EndPage from './components/EndPage';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import QuestionFooter from './components/QuestionFooter';
import QuizFooter from './components/QuizFooter';
import ResultScreen from './components/ResultScreen';

function getRandomQuestions() {
  return [...questionBank].sort(() => Math.random() - 0.5).slice(0, 15);
}

function App() {
  const [questions, setQuestions] = useState(getRandomQuestions);
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
    setQuestions(getRandomQuestions());
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setIsEndPage(false);
    setIsFinished(false);
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
            <ExamHeader currentQuestion={currentQuestion} totalQuestions={questions.length} />
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