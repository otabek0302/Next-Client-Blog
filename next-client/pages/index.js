import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import Link from 'next/link'
import axios from 'axios'

export default function Home ({ data }) {
  if (!data) return `Loading...`
  return (
    <div>
      <Head>
        <title>NEXT BLOG | HOME</title>
      </Head>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.post_wrapper}>
            {data.map((post, ind) => {
              return (
                <Link href={'/post/[id]'} as={`/post/${post._id}`} key={ind}>
                  <div
                    style={{
                      background: `url(${post.imgUrl}) center / cover no-repeat`
                    }}
                    className={styles.post}
                  >
                    <div className={styles.post_title}>{post.title}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps () {
  try {
    // Fetch data from external API
    const res = await axios.get(`http://localhost:8000/api/post`)
    const data = res.data

    // Log the data to the console for debugging
    // console.log('Data fetched successfully:', data)

    // Pass data to the page via props
    return { props: { data } }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { props: { error: 'Failed to fetch data' } }
  }
}