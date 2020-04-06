import React from 'react';
import PropTypes from 'prop-types';


const Sidebar = ({ className, sketches, addSketch }) => (
  <div className={className}>
    {sketches.map(s => (
      <div>
        {s.name}
      </div>
    ))}

    <div style={{padding: "10px"}}>
      <button onClick={() => {
        addSketch();
      }}>
        Add
      </button>
    </div>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  sketches: PropTypes.array,

  addSketch: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  className: '',
  sketches: [],
}

export default Sidebar;
