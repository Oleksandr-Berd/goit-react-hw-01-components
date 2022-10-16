import PropTypes from 'prop-types';

export const StatSection = ({ title }) => {
    return <section>{title && <h2>{title}</h2> }</section>
}

StatSection.prototype = {
    title: PropTypes.string,
}

