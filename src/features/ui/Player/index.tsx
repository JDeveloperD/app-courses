import { FC } from 'react';
import PlayControlls from './PlayControlls';
import { Wrapper } from './player.styled';

export type PlayerProps = {
  src: string,
  thumb: string
  className?: string
}

const Player: FC<PlayerProps> = ({ src, thumb, className, ...props }) => {
  return (
    <Wrapper thumb={thumb} className={className}>
     <video {...props}>
       <source src={src}/>
       <track kind="captions"></track>
     </video>
     <PlayControlls />
    </Wrapper>
  );
};

export default Player;
