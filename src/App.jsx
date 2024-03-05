import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

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

  return (
    <>
      <h1>Give feedback</h1>
      <section class="buttons">
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </section>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average()}</p>
      <p>positive {positivePercentage()} %</p>
    </>
  );
};

export default App;
