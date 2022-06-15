import { Post } from "./Post";
import   AllPosts   from "../posts.json";

export function Posts(){
    return(
        <ul>
            {
                AllPosts.posts.map( post => {
                    return(
                        <Post title={ post.title } description={ post.description } id={ post.id }/>
                    )
                })
            }
        </ul>
    )
};