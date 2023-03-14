import React from "react";
import { Post } from "./Post";

export function PostList (){
    const posts = [
        {
            title: "Title1",
            description:"Description1",
        },
        {
            title: "Title2",
            description:"Description2",
        },
        {
            title: "Title3",
            description:"Description3",
        },
    ];

    return(
        <section>
            {posts.map((post)=>(
                <Post postTitle={post.title} description={post.description} />
            ))}
        </section>
    )
};