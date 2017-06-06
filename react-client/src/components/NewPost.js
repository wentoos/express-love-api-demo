import React from 'react'
import Form from './Form'
import axios from 'axios'


const styles = {
    content: {
      width: '100%',
      maxWidth: '600px',
      margin: '30px auto',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
    },
    title: {
      fontSize: '1.2em',
      textAlign: 'center',
      paddingTop: '20px'
    }
  }


const NewPost = (props) => {
  const publishPost = (data) => {
    axios.post(`http://express-api.haoqicat.com/post`, data)
    .then(res => {
      console.log(res.data.message)
      props.history.push('/')
    })
  }
  return (
    <div style={styles.content}>
      <div style={styles.title}>写文章</div>
      <Form publishPost={publishPost} label='发布文章' />
    </div>
  )
}

export default NewPost
