import React, { FC, ReactNode } from 'react';
import { Comment } from '@features/ui';
import { useToggle } from '@hooks';
import LessonCommentActionEdit from './Action/Edit';
import LessonCommentActionLike from './Action/Like';
import LessonCommentActionReplyTo from './Action/ReplyTo';
import LessonCommentContent from './Content';
import LessonCommentBox from './Box';

type LessonCommentGroupProps = {
  children?: ReactNode
  reply?: boolean
}

const LessonCommentGroup: FC<LessonCommentGroupProps> = ({ children, reply, replies }) => {
  const [isEditing, toggleIsEditing] = useToggle();
  const [showBoxAddComment, toggleShowBoxAddComment] = useToggle();

  const handleEdit = () => {
    toggleIsEditing();
  };

  const childrenWithProp = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { reply: true }, null);
    }

    return child;
  });

  return (
    <Comment
      reply={reply}
      avatar='/img/profile/fiorela.jpg'
      name='David Sandoval'
      dateTime={'2014-01-02T11:42Z'}
      content={
        <LessonCommentContent
          edit={isEditing}
          value={
            <div>
              We supply a series of design principles, practical patterns and high quality design
              resources <b>(Sketch and Axure)</b>, to help people create their product <i>prototypes beautifully
              and efficiently</i>.<br /> Puedes unirte aquí: <a href="https://enlace.com">https://enlace.com</a>
            </div>
          }
        />
      }
      actions={[
        <LessonCommentActionLike
          key='action-like-comment'
          totalLikes={20}
        />,
        <LessonCommentActionEdit
          key='action-edit-comment'
          onClick={handleEdit}
        />,
        <LessonCommentActionReplyTo
          key='action-reply-to-comment'
          onClick={toggleShowBoxAddComment}
        />
      ]}
    >
      {showBoxAddComment && (
        <LessonCommentBox value={''} />
      )}
      {childrenWithProp}
    </Comment>
  );
};

export default LessonCommentGroup;
