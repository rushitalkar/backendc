import React, { useState , useEffect } from "react";
import { addpost , updatePost } from "../postApi";

export const Form = ({ posts, setPosts, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
 })
    let isEmpty = Object.keys(updateDataApi).length === 0;



    useEffect(()=>{
       (()=>{
          updateDataApi && (
        setAddData({
          title : updateDataApi.title || '',
          body : updateDataApi.body || ''

        })    
          )
          
       })()

    },[updateDataApi])


  
      let handleInputChange =(e)=>{
        let name = e.target.name
        let value = e.target.value

        setAddData((prev)=>{
          return {
            ...prev,
            [name] : value
          }
        })
      }

      let addPostData = async()=>{
       const res = await addpost(addData)
       console.log(posts);
       if (res.status === 201) {
          setPosts([...posts , res.data])
          setAddData({title : "", body : ""})
       }
       
       
      }
       let updatePostData = async()=>{
       let res = await updatePost(updateDataApi.id , addData)
       console.log(res);
       
       if (res.status == 200) {
          setPosts((prev)=>{
            return (
              prev.map((curr)=>curr.id === res.data.id ? res.data : curr )
            )
          })
          setAddData({title : '' , body : ''})
       setUpdateDataApi({})
       }
       
   }

      
      let handleSubmit = async (e)=>{
        e.preventDefault()
        let action = e.nativeEvent.submitter.value
        if (action === "Add") {
          addPostData()
        }else{
            updatePostData();
      }
      
    }

return(
    <>
        <form  onSubmit={handleSubmit}>
            
            <div>
              <label  htmlFor="body"></label>
              <input style={{backgroundColor : "white"}} type="text"
              autoComplete="off"
              id="title"
              name="title"
              placeholder="Enter Title "
              value={addData.title}
              onChange={handleInputChange}
              
              />
            </div>
            <div>
              <label htmlFor="body"></label>
              <input style={{backgroundColor : "white"}} type="text"
              id="body" 
              name="body"
              value={addData.body}
              placeholder="Enter text"
              onChange={handleInputChange}
              />
              
            </div>
            <button type="submit"  value={isEmpty ? "Add" : "Update"} >
                {isEmpty ? "Add" : "Update"} 
            </button>

        </form>
    </>
)
}