import react, { useState } from 'react';
import { useAnimation } from 'framer-motion';

const useTextInput = (id: string) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const iconSize = 24;
  const controls = useAnimation();

  const inputValue =
    typeof window !== 'undefined' &&
    (<HTMLInputElement>document.getElementById(id)).value;

  const handleSelect = () => {
    setFocus(true);
    document.getElementById(id).focus();
    controls.start({
      y: -14,
      transition: {
        duration: 0.2,
      },
    });
  };

  const handleOnBlur = () => {
    setFocus(false);
    if (inputValue) return;
    controls.start({
      y: 0,
      transition: {
        duration: 0.2,
      },
    });
  };

  const handleEyeClick = () => {
    const input = document.getElementById('password');

    if (visible) {
      setVisible(!visible);
      input.setAttribute('type', 'password');
    } else {
      setVisible(!visible);
      input.setAttribute('type', 'text');
    }
  };

  return {
    handleSelect,
    handleOnBlur,
    controls,
    focus,
    visible,
    iconSize,
    handleEyeClick,
    inputValue,
  };
};

export default useTextInput;
