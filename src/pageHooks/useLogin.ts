import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import * as Yup from 'yup';

const useLogin = () => {
  const toast = useToast();
  const [emailValue, setEmailValue] = useState<string>();
  const [passwordValue, setPasswordValue] = useState<string>();
  const [validationError, setValidationError] = useState<boolean>(false);
  const [emailValidationError, setEmailValidationError] = useState<boolean>(
    false
  );
  const [loading, setIsLoading] = useState<boolean>(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(5).max(20).required(),
  });

  const emailSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const data = { email: emailValue, password: passwordValue };

    loginSchema.isValid(data).then((valid) => {
      if (valid) {
        setTimeout(() => {
          setIsLoading(false);
          toast({
            description: 'Login Successfull',
            status: 'success',
            duration: 7000,
            isClosable: true,
            position: 'top',
          });
        }, 3000);
      }
    });

    setValidationError(true);
    loginSchema.validate(data).catch((e) => {
      showError(e.errors);
      setIsLoading(false);
    });
  };

  const handleEmailChange = async (event) => {
    setEmailValue(event.target.value);

    const data = { email: emailValue };

    emailSchema
      .isValid(data)
      .then((valid) => valid && setEmailValidationError(false));

    setEmailValidationError(true);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const input =
    typeof window !== 'undefined' && document.getElementById('email');

  typeof window !== 'undefined' &&
    input.addEventListener('blur', (e) => {
      const data = { email: emailValue };

      emailSchema
        .isValid(data)
        .then((valid) => valid && setEmailValidationError(false));

      setEmailValidationError(true);
    });

  const showError = (error: any) => {
    toast({
      description: error,
      status: 'error',
      duration: 7000,
      isClosable: true,
      position: 'top',
    });
  };

  return {
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
    validationError,
    emailValidationError,
    loading,
  };
};

export default useLogin;
