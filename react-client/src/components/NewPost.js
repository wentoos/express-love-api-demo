import React from 'react'
import Form from './Form';


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

const NewPost = () => (
  <div style={styles.content}>
    <div style={styles.title}>写文章</div>
    <Form label='发布文章' />
  </div>
)

export default NewPost
