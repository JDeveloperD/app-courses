import { FC } from 'react';
import { HeadLine, Paragraph } from '@features/ui';
import Image from 'next/image';
import FeatureIconStyled from './featureIcon.styled';

type FeatureIconProps = {
  urlIcon: string,
  title: string,
  caption?: string
}

const FeatureIcon: FC<FeatureIconProps> = ({ urlIcon, title, caption }) => {
  return (
    <FeatureIconStyled.Wrapper>
      <Image
        src={urlIcon}
        width={64}
        height={64}
      />
      <HeadLine
        color='light'
        size={4}
        className='mt-4 mb-3'>
        {title}
      </HeadLine>
      <Paragraph color='gray'>
        {caption}
      </Paragraph>
    </FeatureIconStyled.Wrapper>
  );
};

export default FeatureIcon;
