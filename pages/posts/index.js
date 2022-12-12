import Link from 'next/link';
function PostList({ posts }) {
    return (
        <>
            <h2> List of posts</h2>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`/posts/${post.id}`}>

                                <h2>  {post.id}: {post.title} </h2>
                            </Link>
                            <hr />

                        </div>
                    )
                })
            }
        </>
    )
}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props: {
            posts: data,
        }
    }
}

export default PostList;