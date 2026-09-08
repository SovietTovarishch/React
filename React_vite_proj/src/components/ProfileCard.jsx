import Post from "./Post";

function ProfileCard() {
    return(
    <section>
        <div>
            <div>avatar</div>
            <div>
                <h2>Name</h2>
                <p>@nickname</p>
            </div>
        </div>

        <Post />
    </section>
    )
}

export default ProfileCard;