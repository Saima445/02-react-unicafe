const StatisticLine = (props) => {
  return (
    <p>
      {props.text}: <span>{props.value}</span> {props.text2}
    </p>
  );
};

export default StatisticLine;
