import React from 'react';

function PreArrowComponent(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',

        left: '20px',
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <i className='fa fa-facebook'></i>
    </div>
  );
}

export default PreArrowComponent;
