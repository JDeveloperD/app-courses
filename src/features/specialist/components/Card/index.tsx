import { FC } from 'react';
import Image from 'next/image';
import { HeadLine, Paragraph, SocialLink } from '@features/ui';
import CardSpecialistStyled from './cardEspecialist.styled';

export type CardSpecialistTypes = {
  name: string,
  position: string
  excerpt: string
  photo: string
}

const CardSpecialist: FC<CardSpecialistTypes> = ({
  name,
  position,
  excerpt,
  photo
}) => {
  return (
    <CardSpecialistStyled.Wrapper>
      <CardSpecialistStyled.Figure>
        <Image src={photo} layout="fill" objectFit="cover" />
        <CardSpecialistStyled.Info>
          <HeadLine className='mb-0' size={5} color='light'>{name}</HeadLine>
          <CardSpecialistStyled.Position>
            {position}
          </CardSpecialistStyled.Position>
        </CardSpecialistStyled.Info>
      </CardSpecialistStyled.Figure>
      <Paragraph color="gray" className='my-4'>
        {excerpt}
      </Paragraph>
      <SocialLink />
    </CardSpecialistStyled.Wrapper>
  );
};

export default CardSpecialist;
