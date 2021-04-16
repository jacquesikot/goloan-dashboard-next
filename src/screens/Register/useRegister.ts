import React, { useState } from 'react';
import * as Yup from 'yup';

const useRegister = () => {
  const [loading, setIsLoading] = useState<boolean>(false);

  const registerSchema = Yup.object().shape({
    full_name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    phone_number: Yup.string().min(10).max(12).required(),
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
    registerSchema,
  };
};

export default useRegister;
