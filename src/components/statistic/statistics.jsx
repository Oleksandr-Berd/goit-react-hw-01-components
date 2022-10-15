// import PropTypes from 'prop-types';
import data from '../statistic/data.json';

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

