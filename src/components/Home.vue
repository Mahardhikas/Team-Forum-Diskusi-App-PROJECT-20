<template>
    <div class="container">
        <div class="left-sidebar">
            <div class="sidebar-profile-box">
                <img src="./img/cover-pic.png" alt="" width="100%">
                <div class="sidebar-profile-info">
                    <img src="./img/user-1.png" alt="">
                    <h1>Rayan</h1>
                    <h3>Web developer</h3>
                    <ul>
                        <li>Your Profil view<span>52</span></li>
                        <li>Your Profil view<span>52</span></li>
                        <li>Your Profil view<span>52</span></li>
                    </ul>
                </div>
                <div class="sidebar-pofile-link">
                    <a href=""><img src="./img/items.png" alt=""> My Items</a>
                    <a href=""><img src="./img/premium.png" alt=""> Try Premium</a>
                </div>
            </div>
            <div class="sidebar-activity">
                <h3>Recent</h3>
                <a href="">
                    <img src="./img/recent.png" />
                    Web Developer
                </a>
                <a href=""><img src="./img/recent.png" />User Interface</a>
                <a href=""><img src="./img/recent.png" />Online</a>
                <a href=""><img src="./img/recent.png" />Learn online</a>
                <a href=""><img src="./img/recent.png" />code </a>
                <a href=""><img src="./img/recent.png" />Web Developer</a>
                <h3>Groups</h3>
                <a href=""><img src="./img/group.png" />Groups Chat</a>
            </div>
        </div>
        <div class="main-content">
            <div class="create-post">
                <div class="create-post-input">
                    <img src="./img/user-1.png"/>
                    <textarea rows="2" placeholder="..."></textarea>
                </div>
                <div class="create-post-links">
                        <button type="submit">
                            <img src="./img/photo.png" />
                        </button>

                        <button type="submit">
                            <img src="./img/photo.png" />
                        </button>
                        <button type="submit">
                            <img src="./img/video.png" />
                        </button>

                </div>
            </div>
        </div>
        <div class="right-sidebar">
            <div class="slidebar-news">
                <img src="./img/setting.png" class="info-icon"/>
                <h3>Trending</h3>

                <a href="">#taqqqqqq</a>
                <span>2000 penonton styory</span>
                <a href="">#taqqqqqq</a>
                <span>2000 penonton styory</span>

                <a href="">#taqqqqqq</a>
                <span>2000 penonton styory</span>

                <a href="">#taqqqqqq</a>
                <span>2000 penonton styory</span>

                <a href="">#taqqqqqq</a>
                <span>2000 penonton styory</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: [],
                newPostText: '',
                profile: {
                    name: 'Rayan',
                    role: 'Web developer',
                    profileViews: 52
                },
                trendingTopics: ['#taqqqqqq', '#taqqqqqq', '#taqqqqqq', '#taqqqqqq', '#taqqqqqq']
            };
        },
        methods: {
            addPost() {
                if (this.newPostText.trim() !== '') {
                    this.posts.unshift({
                        text: this.newPostText,
                        author: this.profile.name,
                        timestamp: new Date().toLocaleString()
                    });
                    this.newPostText = '';
                }
            }
        }
    };
</script>


<style scoped>
    .container {
        padding: 10px 6%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .left-sidebar {
        flex-basis: 25%;
        align-self: flex-start;
    }


    .main-content {
        flex-basis: 50%;
    }

    .sidebar-profile-box {
        background: #fff;
    }
    .sidebar-profile-info {
        padding: 0 25px;
    }
    .sidebar-profile-info img {
        width: 90px;
        border-radius: 50%;
        background: #fff;
        padding: 4px;
        margin-top: -45px;
    }

    .sidebar-profile-info h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #222;
    }

    .sidebar-profile-info h3 {
        font-size: 14px;
        font-weight: 500;
        color: #777;
    }

    .sidebar-profile-info ul {
        list-style: none;
        margin: 20px 0;
    }

    .sidebar-profile-info li {
        width: 100%;
        margin: 5px 0;
        font-size: 13px;
    }
    .sidebar-profile-info ul li span {
        float: right;
        color:  #045be6;
    }

    .sidebar-pofile-link {
        display: flex;
        align-items: center;
        border-top: 1px solid #ccc;
    }
    .sidebar-pofile-link a {
        flex-basis: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 0;
        font-size: 13px;
        border-left: 1px solid #ccc;
    }

    .sidebar-pofile-link a:first-child{
        border-left: 0;
    }
    .sidebar-pofile-link a img {
        width: 20px;
        margin-right: 10px;
    }

    .sidebar-activity {
        background: #fff;
        padding: 5px 25px;
        margin: 12px 0;
        
    }
    .sidebar-activity h3 {
        color: #000000;
        font-size: 14px;
        font-weight: 500;
        margin: 20px 0 10px;
    }

    .sidebar-activity a {
        display: flex;
        font-size: 12px;
        align-items: center;
        color: #000000;
        font-weight: 500;
        font-style: italic;
        margin: 3px 0;
    }

    .slidebar-news {
        background: #fff;
        padding: 10px 25px;
    }

    .info-icon {
        width: 11px;
        float: right;
        margin-top: 15px;
    }
    .slidebar-news h3 {
        font-size: 14px;
        font-weight: 600;
        color: #333;
        margin: 10px 0 30px;
    }

    .slidebar-news a {
        display: block;
        font-size: 12px;
        font-weight: 600;
        margin-top: 10px;
        margin-bottom: -5px;
        color: #045be6;
    }

    .slidebar-news span {
        font-size: 12px;

    }

    .create-post {
        background: #fff;
    }

    .create-post-input {
        display: flex;
        align-items: center;
        padding: 20px 25px 10px;
        border-bottom: 1px solid #ccc;
    }

    .create-post-input img {
        width: 35px;
        border-radius: 50%;
        background: #fff;
        margin-right: 10px;
    }

    .create-post-input textarea {
        width: 100%;
        height: 100%;
        padding: 10px;
        border: 0;
        outline: none;
        resize: none;
        margin-top: 8px;
    }

    ::placeholder {
        font-weight: 500;
    }

    .create-post-links {
        display: flex;
        align-items: flex-start;
    }

    .create-post-links button {
        border-top: 1px solid #ccc;
        border-radius: 5px;
        flex-basis: 25%;
        height: 30px;
        padding: 10px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }



</style>