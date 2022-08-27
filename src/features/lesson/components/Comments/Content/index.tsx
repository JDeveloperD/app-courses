import { FC } from 'react';
import LessonCommentBox from '../Box';

type LessonCommentContentProps = {
  edit?: boolean
  value: any
}

const LessonCommentContent: FC<LessonCommentContentProps> = ({ edit, value }) => {
  if (!edit) {
    return value;
  }

  return <LessonCommentBox value={value} />;
};

export default LessonCommentContent;
