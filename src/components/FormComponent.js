import React from 'react';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import './FormComponent.css';

const FormComponent = () => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
