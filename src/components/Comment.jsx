import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css'

export function Comment(){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='16 de Março às 14:30' dateTime='2023-03-16 14:30' >Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>

          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}