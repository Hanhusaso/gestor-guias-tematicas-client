import Head from 'next/head'
import LoginForm from '../components/Auth/LoginForm';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm/>

      
    </div>
  )
}
