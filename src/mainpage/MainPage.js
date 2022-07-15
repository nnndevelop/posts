import { useState, useEffect } from 'react';
import FilteredAndSearch from '../components/FilteredAndSearch';
import FormList from '../components/FormList';
import TableList from '../components/TableList';
import MyModal from '../components/UI/modal/MyModal';
import {usePosts} from '../hooks/useCretePosts'
import Post from '../Api/Posts';
import { useFetching } from '../hooks/useFetching';
import { getPageArray, getPageCount } from '../utilits/page';
import Loader from '../components/UI/Loader/Loader';


function MainPage() {
  const  [posts, setPosts,] = useState([]);
  
  const [filter,  setFilter] = useState({sort: '', query: ''})
  const[modal, setModal] = useState(false)  
  const [totalPage, setTotalPage] = useState(0)  
  const [limit,setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const pageArray = getPageArray(totalPage)


  
 
  const [fetchPosts, isLoading,postError] = useFetching(async () => {
    const response = await Post.getAllPosts(limit,page) 
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPage(getPageCount(totalCount,limit))
  })
 
  useEffect(() =>{
    fetchPosts()
  },[page])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(s=> s.id !==post.id))
  }
  const chagePage = (page) => {
    setPage(page)
  }

  return (
    <div className="cont">
      <div className="app">
        <btn 
        className='btn btn-primary w-100'
        onClick={() => setModal (true)}
        >Add Post</btn>
      <MyModal modal={modal} setModal={setModal}>
        <FormList createPost={createPost}/>
      </MyModal>
        <FilteredAndSearch filter={filter} setFilter={setFilter}/>
        {postError && <p>Error</p>}
        {isLoading
        ? <Loader/>
        : <TableList remove={removePost} posts={sortedAndSearchPosts}  title='Posts'/>     }
        {pageArray.map(item => (
          <button
          onClick={() => chagePage(item)}
          key={item} 
          className={page === item ? ' btn btn-primary' : 'btn btn-outline-primary'}>{item}</button>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
