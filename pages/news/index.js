function NewsArticleList({ articles }) {
    return (
        <div>
            <h2> List of news Article  </h2>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default NewsArticleList;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:4000/news")
    const data = await res.json()

    return {
        props: {
            articles: data
        }
    }
}