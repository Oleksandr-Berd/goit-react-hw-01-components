import PropTypes from 'prop-types';

const StatSection = ({ title }) => {
    return <section>{title && <h2>{title}</h2> }</section>
}

StatSection.prototype = {
    title: PropTypes.string,
}

export default StatSection;