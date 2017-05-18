import React from 'react';

const List = ({ name, key, onToggle, id }) => (
  <div >
    <input
      type="checkbox" key={key} onChange={() => onToggle(id)}
    />
    <label htmlFor={key}>{name}</label>
  </div>

);

export default List;
