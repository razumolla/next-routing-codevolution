export default function Post({ post }) {
    return (
        <>
            <h2>
                {post.id}: {post.title}
            </h2>
            <h3> {post.body} </h3>
        </>
    )
}


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map((post) => (
        { params: { postId: `${post.id}` } }
    ));

    return {
        // paths: [
        //     { params: { postId: '1' } },
        //     { params: { postId: '2' } }
        // ],
        paths,
        fallback: false,
    }
}


export async function getStaticProps(ctx) {
    const { params } = ctx;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()

    return {
        props: {
            post: data,
        }
    }
}

