import { HeadLine, Small } from '@features/ui';
import Image from 'next/image';
import { ButtonHTMLAttributes, FC } from 'react';
import { Wrapper } from './avatar.styled';

type UserAvatarProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg',
  src?: string,
  name?: string | Element,
  profession?: string
}

const UserAvatar: FC<UserAvatarProps> = ({
  size = 'md',
  src = '/img/default-avatar.jpg',
  name,
  profession,
  ...props
}) => {
  if (name && profession) {
    return (
      <div className="d-inline-flex align-items-center gap-2">
        <Wrapper {...props} size={size}>
          <Image
            src={src}
            alt='avatar de usuario'
            layout='fill'
            objectFit='cover'
          />
        </Wrapper>
        <div className='text-start'>
          <HeadLine size={6} color='light' className='mb-0'>{name}</HeadLine>
          <Small color='gray'>{profession}</Small>
        </div>
      </div>
    );
  }

  return (
    <Wrapper {...props} size={size}>
      <Image
        src={src}
        alt='avatar de usuario'
        layout='fill'
        objectFit='cover'
      />
    </Wrapper>
  );
};

export default UserAvatar;
