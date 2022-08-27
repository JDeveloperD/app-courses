import { Badge } from '@features/ui';
import { FC } from 'react';

type UserTypeBadgeProps = {
  type?: string
}

const UserTypeBadge: FC<UserTypeBadgeProps> = ({ type, ...props }) => {
  if (type === 'instructor') {
    return <Badge
      {...props}
      shape='rounded'
      color='primary'
      className='ms-2'>PROFESOR</Badge>;
  }

  if (type === 'admin') {
    return <Badge
      {...props}
      shape='rounded'
      color='secondary'
      className='ms-2'>ADMIN</Badge>;
  }

  return <Badge
    {...props}
    shape='rounded'
    color='gray'
    className='ms-2'>ESTUDIANTE</Badge>;
};

export default UserTypeBadge;
