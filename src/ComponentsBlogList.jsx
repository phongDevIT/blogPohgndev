import React from "react";

const ComponentsBlogList = (props) => {
    const { blog, author } = props;
    return (
        <div className="home">
            <div className="blog-list">
                <h2>{author}</h2>
                {blog.length &&
                    blog.map((item) => (
                        <div key={item.id} className="blog-preview">
                            <h2>{item.title}</h2>
                            <h2>{item.body}</h2>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ComponentsBlogList;
