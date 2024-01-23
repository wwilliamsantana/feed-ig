import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import { format, formatDistanceToNow } from "date-fns"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { ptBR } from "date-fns/locale"




export interface PostProps {
  id?: number
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: {
    type: "link" | "paragraph"
    content: string
  }[]
  publishedAt: Date

}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([
    "Olá Galera!!"
  ])
  const [formNewComment, setformNewComment] = useState("")

  const publishedAtFormat = format(publishedAt, "dd 'de' LLLL 'de' yyyy", {
    locale: ptBR
  })

  const publishedToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR
  })

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
    setComments(comment => [...comment, formNewComment])
    setformNewComment("")
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setformNewComment(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse comentário está vazio!")
  }

  function deleteComment(commentToDelete: string) {
    const newListDelete = comments.filter(comment => {
      return comment != commentToDelete
    })

    setComments(newListDelete)
  }

  const isDisabledComment = formNewComment.length === 0

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
          name="comment"
          onInvalid={handleNewCommentInvalid}
          required
          onChange={handleNewComment}
          value={formNewComment}
          placeholder="Escreva um comentário..."
        />
        <footer>
          <button type="submit" disabled={isDisabledComment} >Publicar</button>
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