import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
      
      <div className={styles.profile}>
          <Avatar src="https://github.com/eduardowinter.png" />

          <strong>Eduardo Winter</strong>
          <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Edit profile
        </a>
      </footer>
    </aside>
  );
}                   