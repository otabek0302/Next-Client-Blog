import React, { useState } from 'react'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router';
export default function AddPost () {
  const [title, setTitle] = React.useState('')
  const [text, setText] = React.useState('')
  const [imgUrl, setImgUrl] = React.useState('')
  const router = useRouter()
  const addPost = async () => {
    try {
      await axios.post('http://localhost:8000/api/post/add', {
        title,
        text,
        imgUrl
      })
      .then(() => {
        router.push('/')
        setTitle("")
        setText("")
        setImgUrl("")
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Head>
          <title>Add Post</title>
        </Head>
        <Navbar />
        <div className={styles.container}>
          <Link href='/' className={styles.back_post}>
            <Image
              alt='Picture of the author'
              src='/img/scooter.svg'
              width={24}
              height={15}
            />
            Back
          </Link>
          <div className={styles.formWrappper}>
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
              <div className={styles.inputField}>
                <label className={styles.label}>Enter Name of Blog</label>
                <input
                  onChange={e => setTitle(e.target.value)}
                  type='text'
                  placeholder='Enter your post Name'
                />
              </div>
              <div className={styles.inputField}>
                <label className={styles.label}>Enter Text of Blog</label>
                <textarea
                  onChange={e => setText(e.target.value)}
                  cols='30'
                  rows={4}
                  placeholder='Enter your post Text'
                />
              </div>
              <div className={styles.inputField}>
                <label className={styles.label}>Enter URl of Blog Img</label>
                <input
                  onChange={e => setImgUrl(e.target.value)}
                  type='text'
                  placeholder='Enter your post Img'
                />
              </div>
              <button onClick={addPost} className={styles.form_btn}>
                Add Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
