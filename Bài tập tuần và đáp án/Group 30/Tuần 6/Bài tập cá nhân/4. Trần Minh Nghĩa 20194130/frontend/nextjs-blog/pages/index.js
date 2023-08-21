import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Blog from '../components/blog';
import Blogs from '../components/blogs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Blogs />
        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
