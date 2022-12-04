import Head from 'next/head'
import { Search } from '../components/Search'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | GetHub Play</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>GetHub Play</h1>
          <p>Veja detalhes dos seus filmes e séries favoritos. Explore novos filmes e compartilhe com os amigos. 😉</p>
          <Search/>
        </section>
      </main>
    </>
  )
}
