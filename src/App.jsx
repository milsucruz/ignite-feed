import { Header } from "./components/Header";
import { Siderbar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles  from './App.module.css';

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Siderbar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
  