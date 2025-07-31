import React from 'react'
import { useEffect } from 'react'
import { getPost , deletePost } from '../postApi'
import "../App.css"
import { Form } from "./Form";

const Posts = () => {
    let [posts, setPosts] = React.useState([])
    let [updateDataApi , setUpdateDataApi] = React.useState({})
    useEffect(() => {
    (async()=>{
    const res = await getPost()
    setPosts(res.data)
    
  })()

  },[])

  let handleDelete = async(id)=>{
    try {
     const res = await deletePost(id)
     if (res.status == 200) {
       const newUpdaetPost = posts.filter((curr)=>{
      return curr.id !== id
     })
     setPosts(newUpdaetPost)
     }
    } catch (error) {
      
    }
  }
  
  let handleEdit = (post)=>setUpdateDataApi(post) 

  return (
  <>
    { <section className="section-form">
        <Form
          posts={posts}
          setPosts={setPosts}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
    
        />
      </section> }
    <section className="section-post" >
      <ol >
        {
            posts.map((post)=>{
                const {id,title,body} = post
                return (
                    <li key={id}>
                        <p>Id : {id}</p>
                        <p >Title : {title}</p>
                        <p >Body : {body}</p>
                        <button className='btn-edit' onClick={()=> handleEdit(post)}>Edit</button>
                        <button className='btn-delete' onClick={()=> handleDelete(id)} >Delete</button>
                    </li>

                    
                )
            })
        }
      </ol>
      </section>
    </>
  )
}

export default Posts
