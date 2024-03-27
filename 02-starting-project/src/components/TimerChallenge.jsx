import { useState, useRef } from "react";
import ResultModel from "./ResultModel";
export default function Timerchallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeremaining, setTimerisrunning] = useState(targetTime * 1000);

  const timerIsActive = timeremaining > 0 && timeremaining < targetTime * 1000;

  if (timeremaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function resettimer() {
    setTimerisrunning(targetTime * 1000);
  }

  function handlestart() {
    timer.current = setInterval(() => {
      setTimerisrunning((prevtimeremaining) => prevtimeremaining - 10);
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        result="Lost"
        timeremaining={timeremaining}
        onReset={resettimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handlestart}>
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "timer is running...." : "Timer is stop..."}
        </p>
      </section>
    </>
  );
}
