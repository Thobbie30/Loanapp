import React from 'react';
import Logo from '../Components/Logo';
import StepsContainer from '../Components/StepsContainer';
import OtpForm from '../Components/OtpForm2';

const SignUpStep2 = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="background-container">
          <Logo />
          <StepsContainer />
        </div>
        <div className="right-side">
          <OtpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpStep2;
