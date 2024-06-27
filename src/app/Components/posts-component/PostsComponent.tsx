import React, {FC} from 'react';

const PostsComponent: FC = async () => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    console.log(posts);

    return (
        <div>
<ul>
    {
        posts.map((post: IPost) => (
            <li key={post.id}>
                {post.id}: {post.title} <br/><br/>{post.body}<br/><br/>
            </li>
        ))
    }
</ul>
        </div>
    );
};

export default PostsComponent;