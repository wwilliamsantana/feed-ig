import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import { format, formatDistanceToNow } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"
import styles from "./Post.module.css"



export function Post({ author, content, publishedAt }) {
  const publishedAtFormat = format(publishedAt, "dd 'de' LLLL 'de' yyyy", {
    locale: ptBr
  })

  const publishedToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBr
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.avatar}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.avatarInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtFormat} dateTime={publishedAt.toString()}>{publishedToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>
          } else if (line.type === "link") {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
        />
        <button type="submit">Publicar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}