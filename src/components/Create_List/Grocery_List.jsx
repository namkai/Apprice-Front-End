import React, { Component } from 'react';
import List from './List';
import uuid from 'node-uuid';

// 📜🍋
const Grocery_List = ({ groceries, onToggle }) => {
  const generateGroceryList = () => {
    return groceries.map((food) => {
      if (food.products !== undefined) {
        const { name, id } = food.products;
        const key = uuid();
        return (<List key={key} id={id} {...food} name={name} onToggle={onToggle} />);
      }
      const { name, id } = food;
      const key = uuid();
      return (<List key={key} id={id} {...food} name={name} onToggle={onToggle} />);
    });
  };
  return (
    <div>
      <ul id="list-ul">
        {generateGroceryList()}
      </ul>
    </div>
  );
};
export default Grocery_List;
