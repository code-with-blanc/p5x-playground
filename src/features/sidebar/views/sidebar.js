import React from 'react';
import PropTypes from 'prop-types';


const Sidebar = ({ className }) => (
  <div className={className}>
    I'm the sidebar
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
}

export default Sidebar;
