import { Button, HiOutlineReply } from '@features/ui';

const LessonCommentActionReplyTo = ({ ...props }) => {
  return (
    <Button variant='link' color= 'light' {...props}>
      <HiOutlineReply />
      Responder
    </Button>
  );
};

export default LessonCommentActionReplyTo;
