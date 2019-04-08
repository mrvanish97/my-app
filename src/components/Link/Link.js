import React from 'react';
import PropTypes from 'prop-types';
import Button from 'carbon-components-react/lib/components/Button';

const Link = ({ active, children, onClick }) => (
  <Button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;