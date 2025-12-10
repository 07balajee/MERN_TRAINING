import {useParams,Link} from 'react-router';
import {useEffect, useState} from 'react';

const Blogdetails = ()=>{
    const {id} = useParams();
    const [post, setPost] = useState();
    
    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            setPost(data);
        }
        fetchPost();
    },[id]);
    
    if (!post) {
        return <div className="text-center text-2xl mt-10">Loading...</div>;
    }
    
    return(
        <Link to={`/blogs/${id}`}>
        <div className="max-w-2xl mx-auto p-6 mt-10">
            <h2 className="text-lg font-semibold text-gray-600">Blog ID: {post.id}</h2>
            <h1 className="text-4xl font-bold mb-4">Title: {post.title}</h1>
        </div>
        </Link>
    )
}
export default Blogdetails;