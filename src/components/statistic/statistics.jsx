

const StatisticsList = ({items}) => {
  return <ul>
    {items.map(item => (
      <li className="item" key={item.id}>
        <span className="label">{item.label}: </span>
        <span className="percentage">{item.percentage}%</span>
      </li>
    ))}
    </ul>
}

export default StatisticsList

