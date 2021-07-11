import React from 'react';
import {useCallback} from 'react';
import SignUpTemplate from '../templates/SignUpTemplate';

const SignUpPage = () => {
  const onClickSignUp = useCallback((annual: string, ageRange: string) => {
    console.log('ddata:', annual, ageRange);
    // API Call to saving user
  }, []);

  return <SignUpTemplate onClick={onClickSignUp} />;
};

export default SignUpPage;
