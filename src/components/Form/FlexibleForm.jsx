import React, { useState, useEffect } from 'react';
import TextField from '../TextField';
import validator from '../../utils/validator';
import validatorConfig from '../../utils/validatorConfig';
import CheckBox from '../CheckBox';
import ToggleCheckBox from '../ToggleCheckBox';
import ButtonsSubmit from '../ButtonsSubmit';
import RadioButtons from '../RadioButtons';
import Dropdown from '../Dropdown';

const FlexibleForm = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    labelText: '',
    remember: false,
    toggle: false,
    selectedOption: 1,
  });
  const [errors, setErros] = useState({});
  const handleChange = ({ target }) => {
    if (target.name === 'selectedOption') {
      setData((prevState) => ({ ...prevState, [target.name]: Number(target.value) }));
    } else {
      setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
    alert(JSON.stringify(data));
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErros(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  return (
    <div className="container mt-5" style={{ width: '40%' }}>
      <div className="row">
        <div className="col-mb-6 offset-mb-3 shadow p-4">
          <form onSubmit={handleSubmit}>
            <TextField
              name="username"
              handleChange={handleChange}
              title="Username"
              type="text"
              error={errors.username}
              placeHolder="Enter username"
            />
            <TextField
              name="password"
              handleChange={handleChange}
              title="Password"
              type="password"
              error={errors.password}
              placeHolder="Enter password"
            />
            <TextField
              name="labelText"
              handleChange={handleChange}
              title="Input Text Label"
              type="text"
              error={errors.labelText}
              placeHolder="Enter text"
            />
            <CheckBox handleChange={handleChange} name="remember" />
            <ToggleCheckBox handleChange={handleChange} name="toggle" value={data.toggle} />
            <RadioButtons
              handleChange={handleChange}
              selectedOption={data.selectedOption}
              name="selectedOption"
            />
            <Dropdown handleChange={handleChange} name="dropDown" />
            <ButtonsSubmit isValid={isValid} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlexibleForm;
