import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/about")
  }
  return (
    <div>
      <h2>This is Home page</h2>
      <Link href="/about">
        <h3>go to about page</h3>
      </Link>
      <Link href="/posts">
        <h3>go to see all posts</h3>
      </Link>
      <button onClick={handleClick}> Submit</button>
    </div>
  )
}
