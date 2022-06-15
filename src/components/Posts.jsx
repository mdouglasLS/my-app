import { Post } from "./Post";
import { posts } from "../posts.json";

export function Posts(){
    return(
        <ul>
            <Post title={posts[0].title} description={posts[0].description}/>
        </ul>
    )
};