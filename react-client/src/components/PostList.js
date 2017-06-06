import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
     button: {
       display: 'block',
       margin: '30px auto',
       width: '120px',
       height: '36px',
       lineHeight: '36px',
       textAlign: 'center',
       backgroundColor: '#ff4081',
       fontSize: '1em',
       color: '#fff',
       textDecoration: 'none',
       borderRadius: '20px'
     }
 }


const PostList = () => (
  <div>
    <Link style={styles.button} to='/post/new'>写文章</Link>
    PostList
  </div>
)

export default PostList
