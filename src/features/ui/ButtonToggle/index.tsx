import { useToggle } from '@hooks';
import { createElement } from 'react';
import { Button } from '@features/ui';

const ButtonToggle = ({ defaultIcon, toggleIcon, children, ...props }) => {
  const [icon, toggle] = useToggle();
  return (
    <Button {...props} onClick={toggle}>
      {createElement(icon ? toggleIcon : defaultIcon)}
      {children}
    </Button>
  );
};

export default ButtonToggle;
