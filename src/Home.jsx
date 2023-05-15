import React, { useState } from "react";
import { useEffect } from "react";
import ComponentsBlogList from "./ComponentsBlogList";

const Home = () => {
    const [blog, setBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const handleDeleteBlog = (id) => {
        setBlog(blog.filter((item) => item.id !== id));
    };
    useEffect(() => {
        try {
            setIsLoading(true);
            const fetData = async () => {
                const res = await fetch("http://localhost:8000/blogs");
                const { data } = await res.json();
                console.log("data: ", data);
                if (data?.length > 0) {
                    setBlog(data);
                    setIsLoading(false);
                }
            };
            fetData();
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    }, []);
    return (
        <div>
            {isError && <div>server does not exist</div>}
            {isLoading && <div>Please waiting for minutes</div>}
            {blog.length && (
                <ComponentsBlogList
                    handleDeleteBlog={handleDeleteBlog}
                    blog={blog}
                    author="phong dev"
                ></ComponentsBlogList>
            )}
        </div>
    );
};

export default Home;
