import { Header } from './components/Header';
import { Post } from './Post';

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Eduardo Winter"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus fugiat beatae mollitia id reiciendis, quam repellendus neque magni corporis ipsum dolore praesentium soluta harum quod. Quos expedita fugit culpa."
      />
      <Post 
        author="Author 2"
        content="Novo post aqui."
      />
    </div>
  )
}

 