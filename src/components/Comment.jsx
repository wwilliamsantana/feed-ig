import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/wwilliamsantana.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentUser}>
              <strong>William Santana</strong>
              <time title="11 de janeiro de 2023" dateTime="11/01/2024 12:00:00">Cerca de 2h atrás</time>
            </div>
            <Trash size={24} />
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={16} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}