import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import theme from '../../theme/theme';

const colors = theme.colors;

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 15px 20px;
  border-radius: 12px;
  background-color: ${({ focus }) => (focus ? colors.white : colors.light)};
  display: flex;
  align-items: center;
  border-width: 2px;
  border-color: ${({ focus }) => (focus ? colors.blue : colors.white)};
`;

export const Placeholder = styled(motion.p)`
  color: ${colors.grey};
  font-size: 13px;
  font-weight: 900;
  font-family: Inter;
  letter-spacing: 0.7px;
  position: absolute;
`;

export const Input = styled(motion.input)`
  margin-top: 15px;
  height: 20px;
  width: 100%;
  border-radius: none;
  background-color: ${({ focus }) => (focus ? colors.white : colors.light)};
  font-family: Inter;
  color: ${colors.dark};
  font-size: 14px;
  font-weight: 900;

  &:focus {
    outline-width: 0;
  }
`;

export const EyeOpen = styled(FiEye)`
  color: ${colors.grey};
  cursor: pointer;
`;
export const EyeClose = styled(FiEyeOff)`
  color: ${colors.grey};
  cursor: pointer;
`;

export const Check = styled(FiCheck)`
  color: ${colors.green};
`;

export const Error = styled(FiX)`
  color: red;
`;
