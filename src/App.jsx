import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Eduardo Winter"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus fugiat beatae mollitia id reiciendis, quam repellendus neque magni corporis ipsum dolore praesentium soluta harum quod. Quos expedita fugit culpa."
          />
          <Post 
            author="Author 2"
            content="Novo post aqui."
          />
        </main>
      </div>
    </div>
  )
}

 