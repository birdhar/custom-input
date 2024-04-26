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

  return (
    <div className={style.input}>
      <label style={labelStyle}>{title}</label>
      <input
        name="input"
        type={type}
        value={value}
        onChange={handleChange}
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
