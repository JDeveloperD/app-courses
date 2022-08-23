import Button from '../Button';
import { BsShare } from '@features/ui';

const ButtonShare = ({ ...props }) => {
  return (
    <Button variant='icon' {...props}><BsShare /> Compartir</Button>
  );
};

export default ButtonShare;
