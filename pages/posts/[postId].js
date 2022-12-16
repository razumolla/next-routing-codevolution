import { useRouter } from "next/router"


export default function Post({ post }) {

    // if fallback: true > then don't show  404-page, automatic generate new html page
    // ----------------
    // const router = useRouter()
    // if (router.isFallback) {
    //     return <h1> Loading... </h1>
    // }

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

    if (!data.id) {
        return {
            notFound: true,
        }
    }
    console.log(`generating page for /posts/${params.postId}`);


    return {
        props: {
            post: data,
        }
    }
}

