import { FC } from 'react';
import Image from 'next/image';
import { HeadLine, Paragraph, SocialLink } from '@features/ui';
import {
  Wrapper,
  Figure,
  Info,
  Position
} from './cardDefault.styled';

export type InstructorCardDefaultTypes = {
  name: string,
  position: string
  excerpt: string
  photo: string
}

const InstructorCardDefault: FC<InstructorCardDefaultTypes> = ({
  name,
  position,
  excerpt,
  photo
}) => {
  return (
    <Wrapper>
      <Figure>
        <Image src={photo} layout="fill" objectFit="cover" />
        <Info>
          <HeadLine className='mb-0' size={5} color='light'>{name}</HeadLine>
          <Position>
            {position}
          </Position>
        </Info>
      </Figure>
      <Paragraph color="gray" className='my-4'>
        {excerpt}
      </Paragraph>
      <SocialLink />
    </Wrapper>
  );
};

export default InstructorCardDefault;
