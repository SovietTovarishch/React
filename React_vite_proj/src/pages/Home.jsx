import Post from "../components/Post";

function Home() {
    const posts = [{
            id: 1,
            author: 'Viktor',
            title: 'Study React for frontend',
            text: "какой-то осмысленный текст" 
        },
        {
            id: 2,
            author: 'Viktor',
            title: 'Study nuclear reactors for power',
            text: "какой-то ядерный текст" 
        },
        {
            id: 3,
            author: 'Viktor',
            title: 'Study emotional reaction for psychology',
            text: "какой-то психологический текст" 
        },
        {
            id: 4,
            author: 'Viktor',
            title: 'Study reactive substances for chemistry',
            text: "какой-то химический текст" 
        },
        {
            id: 5,
            author: 'Viktor',
            title: 'Study reacting for youtube',
            text: "какой-то текст" 
        },
        {
            id: 6,
            author: 'Viktor',
            title: 'Study tractor for agriculture',
            text: "какой-то трактор" 
        }
    ]

    return (
        <section>
            <h1>Главная страница</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text} />
                ))}
            </div>
        </section>
    )
}

export default Home;