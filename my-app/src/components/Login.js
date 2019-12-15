/* Resource support: Eric Bishard, February 21, 2019 
https://www.telerik.com/blogs/up-and-running-with-react-form-validation
https://reactjs.org/docs/forms.html
https://www.w3schools.com/react/react_forms.asp
                        Sign in form
*/
import React, {Component} from 'react';
import './Login.css';

const validateForm = (formErrors) => {
  let valid = true;
  // checks if the form errors were empty
  Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));

  // Checks if the form details are filled out
  Object.values(formErrors).forEach(val => { val === null && (valid = false);
  });
  //users are prevented from submiting unless all forms are validated
  const isDisabled = Object.keys(formErrors).some(x => formErrors[x]);

  return (valid, !isDisabled);
}; 

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username:null, 
      password:null,
      formErrors: {username: "", password: ""},
      username_valid: false,
      password_valid: false,

      };     
    }
  
// checks on the console, if user submit details correctly or not
  handleSubmit = event => {
    event.preventDefault();
    if(validateForm(this.state.formErrors)) {
      console.log(' User has entered a Valid Form ')
    }
    };

  handleChange = event => {
    event.preventDefault();

    const { name, value } = event.target;
    let formErrors = this.state.formErrors;
    let username_valid = this.state.username_valid;
    let password_valid = this.state.password_valid;

    // Frontend validation checks for username and password
    switch (name) {
      case 'username':
        username_valid = value.match(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/);
        formErrors.username = username_valid ? "" : "Invalid username";
        break;
      case 'password':
        password_valid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
        formErrors.password = password_valid ? "" : "At least 8 characters long, 1 number, 1 uppercase & lowercase";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {

  const { formErrors } = this.state;
  const isDisabled = Object.keys(formErrors).some(x => formErrors[x]);

  return (
    <div className = "wrapper">
      <div className = "form-wrapper">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} noValidate>
        <div className="username">
          <label htmlFor="username"> Username </label>
          <input placeholder="Please enter your username address" type ="username" name="username"
          noValidate onChange={this.handleChange}/>
          {formErrors.username.length > 0 && (<span className="errorMessage">{formErrors.username}</span>)}
        </div>

        <div className = "password"> 
        <label htmlFor="password"> Password</label>
        <input placeholder="Please enter your password" type = "password" name = "password"
        noValidate onChange={this.handleChange}/>
        {formErrors.password.length > 0 && (<span className="errorMessage">{formErrors.password}</span>)}
        </div>

        <div className = "createLogin"> 
        <button type="submit" disabled={isDisabled}>Sign In</button>
        </div>
        </form>
      </div>
    </div>
  );
  }
}

export default Login;
