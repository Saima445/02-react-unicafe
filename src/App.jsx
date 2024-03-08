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
      return Math.round(((good * 1 + neutral * 0 + bad * -1) / all) * 10) / 10;
    }
  };
  const positivePercentage = () => {
    if (all === 0) {
      return 0;
    } else {
      return Math.round((good / all) * 1000) / 10;
    }
  };

  const show = () => {
    if (all === 0) {
      return <p>No feedback given</p>;
    } else {
      return (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average()}
          positive={positivePercentage()}
        />
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
    </>
  );
};

export default App;
