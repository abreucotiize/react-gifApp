import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategorie = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const editInput = (e) => {
    setInputValue(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={submit}>
      <h2>Add Category</h2>

      <input type="text" value={inputValue} onChange={editInput}></input>
    </form>
  );
};

AddCategorie.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
