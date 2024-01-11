import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.avatar}>
          <img src="https://github.com/wwilliamsantana.png" />
          <div className={styles.avatarInfo}>
            <strong>William Santana</strong>
            <span>Devops</span>
          </div>
        </div>
        <time title="11 de janeiro de 2023" dateTime="11/01/2024 12:00:00">Públicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
      {/* 
      <footer>
        <strong>Deixe seu feedback</strong>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Publicar</button>
      </footer> */}
    </article>
  )
}