import React, {useState} from 'react'

const FormList = ({createPost}) => {
    const [post, setPost]= useState({title: '', stack:''})
    const addPost = (e)=>{
        e.preventDefault()
        const newPost = {
            ...post,
          id: Date.now()
         
        }
        createPost(newPost)
        setPost({title:'', stack:''})
      }
  return (
    <form>
    <h4 className="text-center">Create our first post</h4>
    <input
    type='text'
    className='form-control '
    placeholder='Programming Language'
    value={post.title}
    required
    onChange={(e => setPost ({...post, title:e.target.value}))}
    />
    <input
    type='text'
    className='form-control my-2'
    placeholder='Enter your favouritte stack'
    value={post.stack}
    onChange={(e => setPost ({...post, stack:e.target.value}))}
    />
    <button className='btn btn-primary w-100' onClick={addPost}>Add post</button>
</form>
  )
}

export default FormList