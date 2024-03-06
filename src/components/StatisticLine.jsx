const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td className="tdvalues">
        {props.value} {props.text2}
      </td>
    </tr>
    // <p>
    //   {props.text} <span>{props.value}</span> {props.text2}
    // </p>
  );
};
export default StatisticLine;
