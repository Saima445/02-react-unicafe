const Statistic = (props) => {
  return (
    <section>
      <p>
        {props.text}: <span>{props.value}</span> {props.text2}
      </p>
    </section>
  );
};

export default Statistic;
