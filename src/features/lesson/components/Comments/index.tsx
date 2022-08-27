import { FC } from 'react';

import LessonCommentGroup from './Group';

type LessonCommentsProps = {
  comments: any[]
}

const LessonComments: FC<LessonCommentsProps> = ({ comments, reply }) => {
  return (
    <div className='d-flex flex-column gap-3'>
      {comments.map(tree => (
        <CommentsTree
          reply={reply}
          key={tree.id}
          node={tree}
        />
      ))}
    </div>
  );
};

const CommentsTree = ({ node, reply }) => {
  const hasReplies = node.replies.length > 0;

  return (
  <LessonCommentGroup reply={reply}>
    {hasReplies && (
      <LessonComments
        comments={node.replies}
      />
    )}
  </LessonCommentGroup>
  );
};

export default LessonComments;
