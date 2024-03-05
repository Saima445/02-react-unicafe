import StatisticLine from "./StatisticLine";

const Statistic = (props) => {
  return (
    <section>
      <StatisticLine
        text={props.text}
        text2={props.text2}
        value={props.value}
      />
    </section>
  );
};

export default Statistic;
