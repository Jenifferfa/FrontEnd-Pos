import React from "react";

export function Post({postTitle, description}){
    return(
        <article>
            <h2 className="Post-title">{postTitle}</h2>
            <p className="Post-description">{description}</p>
        </article>
    );
};