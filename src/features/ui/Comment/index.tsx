import {
  Button,
  Small
} from '@features/ui';
import { UserAvatar, UserTypeBadge } from '@features/user';
import { useToggle } from '@hooks';
import { formatTimeO } from '@utils/formatTime';
import { Children, createElement, FC, ReactNode } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import {
  Wrapper,
  ActionsGroup,
  Content,
  MetaInfo
} from './comment.styled';

type CommentProps = {
  actions?: any[],
  children?: ReactNode,
  name: string,
  dateTime: Date,
  avatar: string,
  className?: string
  reply?: boolean,
  content: any
}

const Comment: FC<CommentProps> = ({
  actions,
  children,
  name,
  dateTime,
  avatar,
  className,
  reply,
  content
}) => {
  const [showReplies, toggleShowReplies] = useToggle();
  const countReplies = Children.toArray(children).length;
  return (
    <Wrapper className={className} reply={reply}>
      <UserAvatar src={avatar} size={reply ? 'sm' : undefined} />
      <div>
        <MetaInfo>
          <Small className='fw-bold' color='light'>
            {name}
            <UserTypeBadge />
          </Small>
          <Small color='gray'>{formatTimeO(dateTime)}</Small>
        </MetaInfo>
        <Content>
          {content}
        </Content>
        <ActionsGroup>
          {actions}
        </ActionsGroup>
        {countReplies > 0 && (
          <div className='mt-2'>
            <Button
              color='secondary'
              variant='link'
              onClick={toggleShowReplies}
            >
              {createElement(showReplies ? AiOutlineCaretUp : AiOutlineCaretDown)}
              Respuestas
            </Button>
              <div>
                {showReplies && children}
              </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Comment;
