import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function BlogCard(props){
  const blogObject = props.blogdt
  return (
    <Container className='blogCont d-flex justify-content-center align-items-center mt-2'>
      <img src={blogObject.image} alt="simple" />
      <div className='p-2'>
        <h4>{blogObject.title} </h4>
        <p>{blogObject.blogdata} </p>
        <Container fluid className='d-flex justify-content-between'>
          <span>{blogObject.postedDate} </span>
          <span>{blogObject.readTime}min read</span>
          <Button variant='outline-secondary' size='sm'>Read More</Button>{' '}
        </Container>
      </div>
    </Container>
  )
}

export default BlogCard 