import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistic from "./components/Statistic";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = () => {
    if (all === 0) {
      return 0;
    } else {
      return (good * 1 + neutral * 0 + bad * -1) / all;
    }
  };
  const positivePercentage = () => {
    if (all === 0) {
      return 0;
    } else {
      return (good / all) * 100;
    }
  };

  const show = () => {
    if (all === 0) {
      return <p>No feedback given</p>;
    } else {
      return (
        <>
          <Statistic value={good} text="good" />
          <Statistic value={neutral} text="neutral" />
          <Statistic value={bad} text="bad" />
          <Statistic value={all} text="all" />
          <Statistic value={average()} text="average" />
          <Statistic value={positivePercentage()} text="positive" text2="%" />
        </>
      );
    }
  };

  return (
    <>
      <h1>Give feedback</h1>
      <section className="buttons">
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </section>
      <h2>Statistics</h2>
      {show()}
      {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average()}</p>
      <p>positive {positivePercentage()} %</p> */}
    </>
  );
};

export default App;
