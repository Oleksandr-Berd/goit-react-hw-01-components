import PropTypes from 'prop-types';

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

StatisticsList.prototype = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsList

