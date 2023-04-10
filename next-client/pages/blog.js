import Head from "next/head";
import styles from '../styles/Home.module.css'
import {Navbar} from '../components/Navbar';

export default function Blog () {
    return (
      <div className={styles.wrapper}>
        <Head>
          <title>Blog Page</title>
        </Head>
        <Navbar />
      </div>
    )
  }