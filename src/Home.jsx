import React, { useState } from "react";
import ComponentsBlogList from "./ComponentsBlogList";

const Home = () => {
    const [blog, setBlog] = useState([
        {
            title: "Running Man",
            body: "Lorem...",
            author: "mario",
            id: "1",
        },
        {
            title: "Running Women",
            body: "Lorem...",
            author: "mario",
            id: "2",
        },
        {
            title: "Hello World",
            body: "Lorem...",
            author: "yoshi",
            id: "3",
        },
        {
            title: "Hello FrontEnd",
            body: "Lorem...",
            author: "yoshi",
            id: "4",
        },
        {
            title: "Hello FrontEnd",
            body: "Lorem...",
            author: "phongdev",
            id: "4",
        },
    ]);
    return (
        <div>
            <ComponentsBlogList
                blog={blog.filter((item) => item.author === "mario")}
                author="mario blog"
            ></ComponentsBlogList>
            <ComponentsBlogList
                blog={blog.filter((item) => item.author === "yoshi")}
                author="yoshi blog"
            ></ComponentsBlogList>
            <ComponentsBlogList
                blog={blog.filter((item) => item.author === "phongdev")}
                author="Phong blog"
            ></ComponentsBlogList>
        </div>
    );
};

export default Home;
