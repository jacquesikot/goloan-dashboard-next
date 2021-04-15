import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

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
} from '../../src/pageStyles/loginStyles';
import theme from '../../src/theme/theme';
import { LinkIcon1 } from '../../src/svg';
import { TextInput } from '../../src/components';
import useLogin from '../../src/pageHooks/useLogin';

const colors = theme.colors;

const Login = () => {
  const {
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
    emailValidationError,
    loading,
  } = useLogin();

  return (
    <>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/goloanFavicon.svg" />
      </Head>
      <Container>
        <ImgColumn color={colors.purple}>
          <LogoContainer>
            <LogoImg src={require('../../src/images/goloanLogoWhite.svg')} />
          </LogoContainer>
          <TextContainer>
            <HeadText>Fast Loans Secure Investments</HeadText>
          </TextContainer>
          <LoginImg src={require('../../src/images/loginImage.svg')} />
        </ImgColumn>
        <FormColumn color={colors.white}>
          <MobileLogoContainer>
            <LogoImg src={require('../../src/images/goloanLogo.svg')} />
          </MobileLogoContainer>
          <FormContainer>
            <SigninText>
              Sign in to <br /> Goloan Services
            </SigninText>
            <InputContainer onSubmit={handleSubmit} id="login">
              <TextInput
                placeholder="EMAIL"
                id="email"
                type="email"
                onChange={handleEmailChange}
                error={emailValidationError}
              />
              <TextInput
                placeholder="PASSWORD"
                id="password"
                type="password"
                onChange={handlePasswordChange}
              />
            </InputContainer>
            <ForgotPasswordContainer>
              <LinkIcon1 />
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
              <LinkIcon1 />
              <Text2>Sign up now</Text2>
            </SignUpContainer>
          </FormContainer>
        </FormColumn>
      </Container>
    </>
  );
};

export default Login;
