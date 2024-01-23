
import styles from "./App.module.css"
import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";
import { Header } from "./components/Header";


const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/wwilliamsantana.png",
      name: "William Santana",
      role: "Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera, beleza?!" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2023-05-10 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/songtianyi.png",
      name: "Lais Silva",
      role: "Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera, beleza?!" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2023-07-10 10:00:00")
  }
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


