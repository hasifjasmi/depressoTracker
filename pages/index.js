import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'

export default function Home() {

  var result = formatDistanceToNowStrict(
    new Date(2022, 9, 22), { unit: 'day'}
  )
console.log(result);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {result} since Zafira last <Link href="posts/first-post">Depresso</Link>
        </h1>

        <p className={styles.description}>
          Congratulations zaf for not being depressed
        </p>

        <div className={styles.grid}>
          <a href="https://twitter.com/acipooh" className={styles.card}>
            <h2>Hasif's Twitter &rarr;</h2>
            <p>Follow me for shit posting zaf's existence</p>
          </a>

          <a target="_blank" href="https://twitter.com/zafirazan" className={styles.card}>
            <h2>Zaf's Twitter &rarr;</h2>
            <p>My loyal victim's twitter account</p>
          </a>

          <a target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/hacips/"
            className={styles.card}
          >
            <h2>My insta &rarr;</h2>
            <p>idk im just putting random shit</p>
          </a>

          <a
            href="https://www.linkedin.com/in/zafirazannajas/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Zaf's linkedin &rarr;</h2>
            <p>
              again, im just putting random stuff asjkdhaskjd
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
           <Link href={"posts/first-post"}> <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></Link>
          </span>
        </a>
      </footer>
    </div>
  )
}
