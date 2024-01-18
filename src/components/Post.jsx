import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import { format, formatDistanceToNow } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"
import styles from "./Post.module.css"
import { useState } from "react"



export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    "Olá Galera!!"
  ])
  const [formNewComment, setformNewComment] = useState("")

  const publishedAtFormat = format(publishedAt, "dd 'de' LLLL 'de' yyyy", {
    locale: ptBr
  })

  const publishedToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBr
  })

  function handleSubmitForm() {
    event.preventDefault()
    setComments(comment => [...comment, formNewComment])
    setformNewComment("")
  }

  function handleNewComment() {
    setformNewComment(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const newListDelete = comments.filter(comment => {
      return comment != commentToDelete
    })

    setComments(newListDelete)
  }

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

      <form onSubmit={handleSubmitForm} className={styles.comentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          onChange={handleNewComment}
          value={formNewComment}
          placeholder="Escreva um comentário..."
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} key={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}