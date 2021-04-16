import React from 'react';
import Head from 'next/head';

import { Register as RegisterScreen } from '../src/screens';

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <RegisterScreen />
    </>
  );
};

export default Register;
