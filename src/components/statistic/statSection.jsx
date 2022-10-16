import PropTypes from 'prop-types';
import css from "components/statistic/statistics.module.css";

export const StatSection = ({ title }) => {
    return <section>{title && <h2 className = {css.statTitle}>{title}</h2> }</section>
}

StatSection.prototype = {
    title: PropTypes.string,
}

