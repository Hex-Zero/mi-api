import React, { useState } from "react";

const Ingredients = ({ onChangeIngredients, value }) => {
  const [amount, setAmount] = useState([1]);
  console.log(amount);
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
      <div onClick={handleAddIngredients}>ADD {amount[amount.length - 1]}</div>
      <div onClick={handleRemoveIngredients}>remove</div>
      {amount.map(item => {
        return (
          <>
            <label>Ingredients: </label>
            <input
              type="text"
              required
              className="form-control"
              value={value}
              onChange={onChangeIngredients}
            />
          </>
        );
      })}
    </div>
  );
};

export default Ingredients;
