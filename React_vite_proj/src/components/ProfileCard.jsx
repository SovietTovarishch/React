import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
    const [posts, setPosts] = useState([
        {
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
    ])

    const [title, setTitle] = useState('');
    const [text, setText] = useState("");

    function addPost(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Viktor"
        }

        setPosts([...posts, newPost]);
        setTitle("");
        setText("");
    }

    function deletePost(id) {
        setPosts(
            posts.filter((post) => post.id !== id
        ));
    }

    return(
    <section className="profile-card">
        <div className="profile">
            <div className="avatar">avatar</div>
            <div className="profile-info">
                <h2>Name</h2>
                <p>@nickname</p>
            </div>
        </div>

        <form className="post-form" onSubmit={addPost}>
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <textarea 
                placeholder="текст для поста"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button type="submit">
                Опубликовать
            </button>
        </form>
        
        {posts.length > 0 ? (posts.map((post) => (
            <Post
            key={post.id}
            author={post.author}
            title={post.title}
            text={post.text}
            onDelete={deletePost}
            id={post.id}/>
        ))
    ) : (
        <p className="empty-message">Опубликуйте свой первый пост</p>
    )}

        {/* 
        <Post author="Viktor" title="Study react for frontend" likes={17} text="какой-то осмысленный текст" />
        <Post author="Petya" title="Study nuclear reactors for power" likes={17} text="какой-то ядерный текст" />
        <Post author="Misha" title="Study emotional reaction for psychology" likes={17} text="какой-то психологический текст" />
        <Post author="Tanya" title="Study reactive substances for chemistry" likes={17} text="какой-то химический текст" />
        <Post author="Sanya" title="Study reacting for youtube" likes={17} text="какой-то текст" />
        <Post author="Fedya" title="Study tractor for agriculture" likes={17} text="какой-то трактор" /> 
        */}
    </section>
    )
}

export default ProfileCard;