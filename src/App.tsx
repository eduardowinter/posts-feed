import { Header } from './components/Header'; 
import { Post, PostProps } from './components/Post';
import { Sidebar } from './components/Sidebar'; 

import styles from './App.module.css';

import "./global.css";

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/eduardowinter.png',
      name: 'Eduardo Winter',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey, Folks! 👋' },
      { type: 'paragraph', content: 'Just added a new project to my portfolio. Be sure to check it out in the link below. 🚀' },
      { type: 'link', content: 'github.com/eduardowinter' },
    ],
    publishedAt: new Date('2022-09-30 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/eduardowinter.png',
      name: 'Eduardo Winter',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey, Folks! 👋' },
      { type: 'paragraph', content: 'Just added a new project to my portfolio. Be sure to check it out in the link below. 🚀' },
      { type: 'link', content: 'github.com/eduardowinter' },
    ],
    publishedAt: new Date('2022-10-01 15:00:00'),
  },
];

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

