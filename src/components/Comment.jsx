import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/eduardowinter.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Winter</strong>
              <time title="30 de Setembro às 08:55h" dateTime="2022-09-30 08:55:25">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!👏👏 </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>24</span>
          </button>
        </footer>
      </div>
    

    </div>
  )
}