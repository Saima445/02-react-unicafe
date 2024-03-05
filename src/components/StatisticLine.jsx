const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}:</td>
          <td>
            {props.value} {props.text2}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticLine;
