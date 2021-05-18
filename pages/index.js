import Head from 'next/head'
import LoginForm from '../components/Auth/LoginForm';
// import styles from '../styles/Home.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container bg-linear">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="login-wrapper d-center">
        <LoginForm/>
      </div>

      
    </div>
  )
}
