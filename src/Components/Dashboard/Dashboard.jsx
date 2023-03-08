import React , { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate()

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])

    const handleLogout = () =>{
        localStorage.removeItem('token')
        navigate('/')
    }

    useEffect(() => {
        const fetchPosts = async () => {
          const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
          const commentsResponse = await axios.get( 'https://jsonplaceholder.typicode.com/posts');
    
          const postsWithComments = postsResponse.data.map(post => {
            const comments = commentsResponse.data.filter(comment => comment.postId === post.id);
            return { ...post, comments };
          });
    
          setPosts(postsWithComments);
        };
    
        fetchPosts();
      }, []);
    

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

      const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    <h1>This is a dashboard Page</h1>
    <button onClick={handleLogout}>Logout</button>

    <div className="container">
      <h1 className="my-5">Dashboard</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {currentPosts.map(post => (
          <div key={post.id} className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{post.comments.length} comments</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination justify-content-center my-5">
          {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(number => (
            <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(number + 1)}>{number + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>


    </>
  )
}

export default Dashboard;