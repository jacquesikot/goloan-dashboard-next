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
  LoginButton,
  MobileLogoContainer,
} from './styles';
import theme from '../../theme/theme';
import { TextInput } from '../../components';
import useRegister from './useRegister';

const colors = theme.colors;

const Register = () => {
  const { handleSubmit, loading, registerSchema } = useRegister();

  return (
    <Container>
      <ImgColumn color={colors.purple}>
        {' '}
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
          <SigninText>Sign up</SigninText>
          <Formik
            initialValues={{
              full_name: '',
              email: '',
              phone_number: '',
              password: '',
            }}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, handleChange, handleSubmit, touched }) => {
              console.log(errors.email);

              return (
                <InputContainer
                  onSubmit={handleSubmit}
                  id="register"
                  autoComplete="off"
                >
                  <TextInput
                    placeholder="FULL NAME"
                    id="full_name"
                    type="text"
                    onChange={handleChange}
                    error={errors.full_name ? true : false}
                    touched={touched.full_name ? true : false}
                  />

                  <TextInput
                    placeholder="EMAIL"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    error={errors.email ? true : false}
                    touched={touched.email ? true : false}
                  />

                  <TextInput
                    placeholder="PHONE NUMBER"
                    id="phone_number"
                    type="phone"
                    onChange={handleChange}
                    error={errors.phone_number ? true : false}
                    touched={touched.phone_number ? true : false}
                  />

                  <TextInput
                    placeholder="PASSWORD"
                    id="password"
                    type="password"
                    onChange={handleChange}
                    error={errors.phone_number ? true : false}
                    touched={touched.phone_number ? true : false}
                  />
                </InputContainer>
              );
            }}
          </Formik>
          <LoginButton
            isLoading={loading}
            type="submit"
            form="register"
            colorScheme="brandPurple"
          >
            Sign up
          </LoginButton>
        </FormContainer>
      </FormColumn>
    </Container>
  );
};

export default Register;
