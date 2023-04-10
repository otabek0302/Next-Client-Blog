import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/">
            <div className={styles.logo}>NEXT | BLOG</div>
          </Link>
          <Link href='/add-post' className={styles.add_btn}>
            Add Post
          </Link>
        </nav>
      </div>
    </header>
  )
}
