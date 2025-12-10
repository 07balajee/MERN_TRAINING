import {useEffect, useState} from 'react';

const BlogList = ()=>{
    const [posts,setposts]=useState([]);
    useEffect(()=>{
        const fetchPosts = async()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await response.json();
            setposts(data);
        }
        fetchPosts();
    },[]);

    return(
        <div className="flex flex-col max-w-3xl mx-auto p-6 mt-10">
            {posts.map((post) => (
                <div key={post.id} className="border p-4 rounded shadow-md">
                    <h2 className="text-lg font-semibold text-gray-600">Blog ID: {post.id}</h2>
                    <h3 className="text-xl font-bold mb-2">Title: {post.title}</h3>
                </div>
            ))}
        </div>
    )
}
export default BlogList;