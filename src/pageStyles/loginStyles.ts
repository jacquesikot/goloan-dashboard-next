import styled from 'styled-components';
import { Button } from '@chakra-ui/react';

import theme from '../theme/theme';

const colors = theme.colors;

const MOBILE_FORM_WIDTH = '89%';

interface Props {
  color: string;
  width: string;
}

const defaultComp = () => {};

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
`;

export const ImgColumn = styled.div`
  width: ${({ width }: Props) => (width ? width : '43vw')};
  height: 100vh;
  background-color: ${({ color }) => (color ? color : colors.white)};
  flex-direction: column;
  display: flex;
  padding: 90px 80px;

  @media screen and (max-width: 1025px) {
    display: none;
  }
`;

export const FormColumn = styled.div`
  width: ${({ width }: Props) => (width ? width : '57vw')};
  height: 100vh;
  background-color: ${({ color }) => (color ? color : colors.white)};
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1025px) {
    width: 100vw;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 155px;
  flex-direction: column;

  @media screen and (max-width: 1250px) {
    width: 350px;
  }
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 30px;
`;

export const LogoImg = styled.img`
  width: 123px;
`;

export const HeadText = styled.p`
  font-size: 56px;
  color: ${colors.white};
  margin-bottom: 20px;
  font-weight: 600;
  line-height: 62px;
`;

export const LoginImg = styled.img`
  width: 70vw;
  position: fixed;
  top: 280px;
  right: 600px;

  @media screen and (max-width: 1250px) {
    left: -400px;
    width: 1000px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 53%;
  height: 75%;
  margin: 10px 20px;

  @media screen and (max-width: 414px) {
    width: ${MOBILE_FORM_WIDTH};
  }
`;

export const SigninText = styled.p`
  font-size: 32px;
  color: ${colors.primary};
  width: 70%;
  font-weight: 600;
  line-height: 40px;

  @media screen and (max-width: 800px) {
    width: ${MOBILE_FORM_WIDTH};
  }
`;

export const InputContainer = styled.form`
  margin-top: 50px;
  margin-bottom: 20px;
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ForgotText = styled.p`
  margin-left: 10px;
  font-size: 13px;
  color: ${colors.purple};
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-family: 'Inter', sans-serif;

  &:hover {
    color: ${colors.primary};
  }
`;

export const LoginButton = styled(Button)`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  margin-top: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 5%;
  align-items: center;
  justify-content: center;
`;

export const Text1 = styled.p`
  color: ${colors.primary};
  font-size: 13px;
  font-weight: 700;
  margin-right: 10px;
  letter-spacing: 0.5px;
  font-family: 'Inter', sans-serif;
`;

export const Text2 = styled.p`
  color: ${colors.purple};
  font-size: 13px;
  font-weight: 700;
  margin-left: 8px;
  letter-spacing: 0.5px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;

export const MobileLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: ${MOBILE_FORM_WIDTH};
  margin-bottom: 10px;

  @media screen and (min-width: 450px) {
    display: none;
  }
`;

export default defaultComp;
