import { useState } from "react";
import style from "./Input.module.css";

function InputComponent(props) {
  const {
    type,
    value,
    handleChange,
    maxLength,
    minLength,
    holder,
    labelStyle,
    inputStyle,
    required,
    title,
    disabled,
    handleDelete,
  } = props;
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    const val = event.target.value;
    setInputValue(val);
    handleChange(val);
  };
  return (
    <div className={style.input}>
      <label style={labelStyle}>{title}</label>
      <input
        name="input"
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={holder}
        style={inputStyle}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
}

export default InputComponent;
