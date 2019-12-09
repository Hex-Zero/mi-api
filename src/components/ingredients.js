import React, { useState } from "react";

const Ingredients = ({ setState, value }) => {
  const [amount, setAmount] = useState([1, 2]);

  const handleAddIngredients = () => {
    setAmount([...amount, amount[amount.length - 1] + 1]);
  };
  const handleRemoveIngredients = () => {
    setAmount(
      amount.filter(item => {
        if (item == 1) {
          return 1;
        }
        if (item != [amount.length]) {
          return item;
        }
      })
    );
  };

  return (
    <div className="form-group">
      <label>Ingredients amout: </label>
      <div onClick={handleAddIngredients}>ADD </div>
      <div onClick={handleRemoveIngredients}>REMOVE</div>
      {amount.map(item => {
        return (
          <>
            <label>Ingredient {item}: </label>
            <input
              type="text"
              required
              className="form-control"
              value={value[0]}
            />
          </>
        );
      })}
    </div>
  );
};

export default Ingredients;
