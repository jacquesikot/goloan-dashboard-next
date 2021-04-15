import React from 'react';
import {
  Container,
  Placeholder,
  Input,
  EyeOpen,
  EyeClose,
  Check,
  Error,
} from './styles';
import useTextInput from './useTextInput';

interface Props {
  placeholder: string;
  id: string;
  type: string;
  error?: boolean;
  onChange?: any;
}

const TextInput = ({
  placeholder,
  id,
  type,
  error,
  onChange,
  ...props
}: Props) => {
  const {
    handleOnBlur,
    handleSelect,
    controls,
    focus,
    visible,
    handleEyeClick,
    iconSize,
    inputValue,
  } = useTextInput(id);

  const returnEye = () =>
    visible ? (
      <EyeClose size={iconSize} onClick={handleEyeClick} />
    ) : (
      <EyeOpen size={iconSize} onClick={handleEyeClick} />
    );

  const returnValidation = () =>
    inputValue &&
    (error ? <Error size={iconSize} /> : <Check size={iconSize} />);

  return (
    <Container focus={focus} input={inputValue}>
      <Placeholder onClick={handleSelect} animate={controls}>
        {placeholder}
      </Placeholder>
      <Input
        variant="unstyled"
        type={type}
        id={id}
        focus={focus}
        input={inputValue}
        onSelect={handleSelect}
        onBlur={handleOnBlur}
        onChange={onChange}
        {...props}
      />
      {type === 'password' ? returnEye() : returnValidation()}
    </Container>
  );
};

export default TextInput;
