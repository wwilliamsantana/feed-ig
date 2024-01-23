import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string
  onDeleteComment: (content: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(state => state + 1)
  }

  function deleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/wwilliamsantana.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentUser}>
              <strong>William Santana</strong>
              <time title="11 de janeiro de 2023" dateTime="11/01/2024 12:00:00">Cerca de 2h atrás</time>
            </div>
            <Trash size={24} onClick={deleteComment} />
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleClick}>
            <ThumbsUp size={16} />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}