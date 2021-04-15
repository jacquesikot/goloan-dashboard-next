import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';

import {
  Container,
  ImgColumn,
  FormColumn,
  TextContainer,
  LogoContainer,
  LogoImg,
  HeadText,
  LoginImg,
  FormContainer,
  SigninText,
  InputContainer,
  ForgotPasswordContainer,
  ForgotText,
  LoginButton,
  SignUpContainer,
  Text1,
  Text2,
  MobileLogoContainer,
} from './styles';
import theme from '../../theme/theme';
import { LinkIcon1 } from '../../svg';
import { TextInput } from '../../components';
import useLogin from './useLogin';

const colors = theme.colors;

const Login = () => {
  const { handleSubmit, loading, loginSchema } = useLogin();

  return (
    <Container>
      <ImgColumn color={colors.purple}>
        <LogoContainer>
          <LogoImg src={require('../../images/goloanLogoWhite.svg')} />
        </LogoContainer>
        <TextContainer>
          <HeadText>Fast And Secure Loans</HeadText>
        </TextContainer>
        <LoginImg src={require('../../images/loginImage.svg')} />
      </ImgColumn>
      <FormColumn color={colors.white}>
        <MobileLogoContainer>
          <LogoImg src={require('../../images/goloanLogo.svg')} />
        </MobileLogoContainer>
        <FormContainer>
          <SigninText>Sign in to Goloan</SigninText>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, handleChange, handleSubmit }) => (
              <InputContainer onSubmit={handleSubmit} id="login">
                <TextInput
                  placeholder="EMAIL"
                  id="email"
                  type="email"
                  onChange={handleChange}
                  error={errors.email ? true : false}
                />
                <TextInput
                  placeholder="PASSWORD"
                  id="password"
                  type="password"
                  onChange={handleChange}
                />
              </InputContainer>
            )}
          </Formik>
          <ForgotPasswordContainer>
            <Link href="">
              <ForgotText fontWeight="bold">Forgot Password?</ForgotText>
            </Link>
          </ForgotPasswordContainer>
          <LoginButton
            isLoading={loading}
            type="submit"
            form="login"
            colorScheme="brandPurple"
          >
            Sign in
          </LoginButton>
          <SignUpContainer>
            <Text1>Not a member?</Text1>
            <Text2>Sign up now</Text2>
          </SignUpContainer>
        </FormContainer>
      </FormColumn>
    </Container>
  );
};

export default Login;
