import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Navbar } from '../../components/Navbar'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

export default function Post ({ data }) {
  if (!data) return `Loading...`
  const { _id, title, imgUrl, text } = data.post
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    setIsDeleting(true)
    try {
      const res = await axios.delete(`http://localhost:8000/api/post/${_id}`)
      window.location.href = '/'
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Head>
          <title>NEXT BLOG | POST</title>
        </Head>
        <Navbar />
        <div className={styles.container}>
          <a href='/' className={styles.back_post}>
            <Image
              alt='Picture of the author'
              src='/img/scooter.svg'
              width={24}
              height={15}
            />
            Back
          </a>
          <div className={styles.postWrappper}>
            <div className={styles.postItem}>
              <h1 className={styles.postTitle}>{title}</h1>
              <p className={styles.postText}>{text}</p>
            </div>
            <div className={styles.postItem}>
              <img
                src={imgUrl}
                alt='Picture of the author'
                width={500}
                height={316}
              />
            </div>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className={styles.removePostBtn}
            >
              {isDeleting ? 'Deleting...' : 'Remove Post'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps ({ query }) {
  try {
    const { id } = query
    const res = await axios.get(`http://localhost:8000/api/post/${id}`)
    const data = res.data

    return { props: { data } }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}

