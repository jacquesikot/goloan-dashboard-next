import React, { useState } from 'react';
import * as Yup from 'yup';

const useLogin = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (info) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(info);
      setIsLoading(false);
    }, 2000);
  };

  return {
    handleSubmit,
    loading,
    loginSchema,
  };
};

export default useLogin;
