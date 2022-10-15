import PropTypes from 'prop-types';

const StatisticsList = ({ items }) => {


  return <ul>
    {items.map(item => (
      <li className="itemStatisticsList" key={item.id}>
        <span className="labelStatisticsList">{item.label}: </span>
        <span className="percentageStatisticsList">{item.percentage}%</span>
      </li>
    ))}
    </ul>
}

StatisticsList.prototype = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsList;

