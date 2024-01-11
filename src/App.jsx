import { Header } from "./components/header";
import styles from "./App.module.css"
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>Poste 1</h1>
        </main>
      </div>
    </div>
  )
}


