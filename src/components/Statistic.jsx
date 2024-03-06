import StatisticLine from "./StatisticLine";

const Statistic = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" text2="%" value={positive} />
      </tbody>
    </table>
    // <section>
    //   <StatisticLine
    //     text={props.text}
    //     text2={props.text2}
    //     value={props.value}
    //   />
    // </section>
  );
};

export default Statistic;
