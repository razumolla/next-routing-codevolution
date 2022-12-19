import { useSWRConfig } from "swr";
import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}

function DashboardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)
    if (error) return <div>An error has occured x </div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            <h1>
                This is  SWR Dashboard
            </h1>
            <h2>posts- {data.posts} </h2>
            <h2>Likes- {data.likes} </h2>
            <h2>Followers- {data.followers} </h2>
            <h2>Following- {data.following} </h2>
        </div>
    );
}

export default DashboardSWR;