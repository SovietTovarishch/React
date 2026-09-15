import Actions from "./Actions";

function Post({author, title, text}) {
    return(
        <article className="post">
            <h2>{title}</h2>
            <p className="post-text">{text}</p>
            <p className="post-author">Автор: {author}</p>
            
            <Actions/>
        </article>
    )
}

export default Post;