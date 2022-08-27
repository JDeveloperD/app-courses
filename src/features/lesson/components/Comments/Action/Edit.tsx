import { Button, FiEdit2 } from '@features/ui';
import { FC } from 'react';

type LessonCommentActionEditProps = {
  onClick: any
}

const LessonCommentActionEdit: FC<LessonCommentActionEditProps> = ({ onClick }) => {
  return (
    <Button
      color='light'
      variant='link'
      onClick={onClick}
    >
      <FiEdit2 />Editar
    </Button>
  );
};

export default LessonCommentActionEdit;
