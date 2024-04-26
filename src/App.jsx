import { useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import { useCallback } from "react";

function App() {
  const [indexx, setIndexx] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [inputInfo, setInputInfo] = useState({
    type: "text",
    value: "",
    placeholder: "Enter Something",
    required: true,
    title: "Custom Input",
    disabled: false,
    maxLength: 8,
    minLength: 3,
  });
  const handleChange = (e) => {
    setInputInfo({ ...inputInfo, value: e.target.value });
  };

  const customStyles = {
    padding: "0.5rem",
    width: "100%",
    border: "0.1px solid gray ",
  };
  const labelStyle = {
    fontSize: "0.9rem",
    fontWeight: "500",
  };
  const handleEdit = (index) => {
    setInputInfo(inputs[index]);
  };
  const handleDelete = (i) => {
    const filteredArray = inputs.filter((item, index) => {
      return index !== i;
    });
    setInputs(filteredArray);
  };

  const handleEditInfo = () => {
    const filteredInputs = inputs.filter((item, index) => {
      return index !== indexx;
    });

    setInputs([...filteredInputs, inputInfo]);

    setInputInfo({
      type: "text",
      value: "",
      placeholder: "Enter Something",
      required: true,
      title: "Custom Input",
      disabled: false,
      maxLength: 8,
      minLength: 3,
    });
    setIndexx(null);
  };

  return (
    <>
      <h2>Custom Input</h2>

      {indexx !== null && (
        <div className="container">
          <label htmlFor="select">Input Type</label>
          <select
            className="select"
            value={inputInfo.type}
            name="select"
            id="select"
            onChange={(e) =>
              setInputInfo({ ...inputInfo, type: e.target.value })
            }
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="pasword">Password</option>
          </select>

          <label htmlFor="required">Input Required</label>
          <select
            className="select"
            id="required"
            value={inputInfo.required}
            name="select"
            onChange={(e) =>
              setInputInfo({ ...inputInfo, required: e.target.value })
            }
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>

          <label htmlFor="placeholder">Input Placeholder</label>
          <input
            className="input"
            type="text"
            id="placeholder"
            name="placeholder"
            value={inputInfo.placeholder}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, placeholder: e.target.value })
            }
          />
          <label htmlFor="title">Input Label</label>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            value={inputInfo.title}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, title: e.target.value })
            }
          />

          <label htmlFor="maxLength">Max Length</label>
          <input
            className="input"
            type="number"
            id="maxLength"
            name="maxLength"
            value={inputInfo.maxLength}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, maxLength: e.target.value })
            }
          />

          <label htmlFor="minLength">Min Length</label>
          <input
            className="input"
            type="number"
            id="minLength"
            name="minLength"
            value={inputInfo.minLength}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, minLength: e.target.value })
            }
          />

          <label htmlFor="disabled"> Disabled or not</label>
          <select
            className="select"
            id="disabled"
            value={inputInfo.disabled}
            name="select"
            onChange={(e) =>
              setInputInfo({ ...inputInfo, disabled: e.target.value })
            }
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>

          <button onClick={handleEditInfo} className="btn infoadd">
            Add Info
          </button>
        </div>
      )}

      <button
        onClick={() => setInputs([...inputs, inputInfo])}
        className="btn add"
      >
        Add
      </button>

      {inputs?.map((item, index) => (
        <div key={index}>
          <InputComponent
            type={item.type}
            value={item.value}
            handleChange={(e) => handleChange(e)}
            holder={item.placeholder}
            inputStyle={customStyles}
            labelStyle={labelStyle}
            required={item.required}
            title={item.title}
            disabled={item.disabled}
            maxLength={item.maxLength}
            minLength={item.minLength}
          />
          <button className="btn" onClick={() => handleDelete(index)}>
            Delete
          </button>
          <button
            className="btn edit"
            onClick={(e) => {
              setIndexx(index);
              handleEdit(index, e);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
