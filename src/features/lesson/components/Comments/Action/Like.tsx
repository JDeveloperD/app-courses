import { Button, FiThumbsUp, IoMdThumbsUp } from '@features/ui';
import { useToggle } from '@hooks';
import { createElement, FC, useState } from 'react';

type LessonCommentActionLikeProps = {
  totalLikes: number
}

const LessonCommentActionLike: FC<LessonCommentActionLikeProps> = ({ totalLikes }) => {
  const [likes, setLikes] = useState(totalLikes);

  const [like, toggleLike] = useToggle();

  const handleLik = () => {
    toggleLike();
    setLikes(100);
  };
  return (
    <Button
      color='light'
      variant='link'
      onClick={handleLik}
    >
      {createElement(like ? IoMdThumbsUp : FiThumbsUp)}
      {likes}
    </Button>
  );
};

export default LessonCommentActionLike;
