import { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    localStorage.setItem('userName', formValues.username);
    localStorage.setItem('Password', formValues.password);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='formStyle'>
        <div className='logoStyle'></div>
        <h1 className='header'>Login Form</h1>
        <div>
            <label className='userName'>Username</label>
            <input
                className='userInput'
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
            />
        </div>
        <p className="userNameError">{formErrors.username}</p>
        <div>
        <label className='password'>Password</label>
        <input
            className='passwordInput'
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
        />
        </div>
          <p className='passwordError'>{formErrors.password}</p>
          <button className='btn'>Submit</button>
          <a className='lostPassword' href='index.html'>Lost the password?</a>
          <h3 className='account'>Don't have an account?</h3>
      </form>
    </div>
  );
}

export default Form;