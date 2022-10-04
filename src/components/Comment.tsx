import { format, formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
  publishedAtComment: Date;
}

export function Comment({ content, onDeleteComment, publishedAtComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  const publishedDateFormattedComment = format(publishedAtComment, "LLLL d 'at' HH:mm'h'", {
    locale: enUS,
  })

  const publishedDateRelativeToNowComment = formatDistanceToNow(publishedAtComment, {
    locale: enUS,
    addSuffix: true,
  })

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/eduardowinter.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Winter</strong>
              <time 
                title={publishedDateFormattedComment}  
                dateTime={publishedAtComment.toISOString()}
              >
                {publishedDateRelativeToNowComment}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    

    </div>
  )
}