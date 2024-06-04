<template>
    <div class="container">
        <div class="left-sidebar">
            <div class="sidebar-activity">
                <h3>Recent</h3>
                <a href="">
                    <img src="./image/hashtag.png" />
                    Web Developer
                </a>
                <a href="">
                    <img src="./image/hashtag.png" />
                    Populer
                </a>
                <a href="">
                    <img src="./image/hashtag.png" />
                    Terbaru
                </a>
                <a href="">
                <img src="./image/hashtag.png" />
                    Viral
                </a>
                <h3>Groups</h3>
                <a href="">
                    <img src="./image/group.png" alt="">
                    Groups Chat
                </a>
                <div class="pengaturan">
                    <a href="">
                        <img src="./image/help.png" alt="">
                        Help
                    </a>
                    <a href="">
                        <img src="./image/logout.png" alt="">
                        Log out
                    </a>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="create-post">
                <div class="create-post-input">
                    <img src="./image/network.png"/>
                    <textarea rows="2" placeholder="Posting Sesuatu" v-model="newPostContent"></textarea>
                </div>
                <div class="create-post-links">
                    <input id="photo-input" type="file" style="display: none;" accept="image/*" @change="handlePhotoUpload">
                    <button @click="openPhotoInput">
                        <img src="./image/photo.png" alt="">
                    </button>
                    <input id="video-input" type="file" style="display: none;" accept="video/*" @change="handleVideoUpload">
                    <button @click="openVideoInput">
                        <img src="./image/video.png" alt="">
                    </button>
                    <button @click="submitPost">
                        <img src="./image/right-arrow.png" alt="">
                    </button>
                </div>
            </div>
            <div class="postingan">
                <hr>
                <h2>Post : 
                    <span>
                        top <img src="./image/down-arrow.png"/>
                    </span>
                </h2>
            </div>
            <div class="post" v-for="(post, index) in posts" :key="index">
                <div class="user-post">
                    <img src="./image/network.png" >
                <div>
                <h1>{{ post.user }}</h1>
            </div>
        </div>
          <p>{{ post.description }}</p>
          <img src="./image/gambar.jpeg" class="contoh-post-img"/>
          <div class="post-activity">
              <div class="like" :class="{ 'liked': post.liked }" @click="toggleLike(post)">
                <button>
                  👍 <span> Like  </span>
                  <span v-if="post.likes > 0">{{ post.likes }}</span>
                </button>
            </div>
            <div class="comment">
                <button @click="toggleCommentForm(post)">
                    🌫️ <span>Comment</span>
                </button>
            </div>
            <div class="share">
                <button >
                  => <span>Share</span>
                </button>
            </div>
          </div>
        <form class="comment-form" v-if="post.showCommentForm" @submit.prevent="addComment(post)">
            <input type="text" v-model="post.newComment" placeholder="Tambahkan komentar...">
            <button type="submit">Kirim</button>
          </form>
          <div class="comments" v-if="post.comments.length > 0">
            <div class="comment" v-for="(comment, commentIndex) in post.comments" :key="commentIndex">
              <p>{{ comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContainerContent',
    data() {
      return {
        newPostContent: '',
        posts: [
          {
            user: 'User 1',
            description: 'Ini deskripsi',
            image: './image/gambar.png',
            likes: 0,
            liked: false,
            comments: [],
            showCommentForm: false,
            newComment: ''
          }
         
        ]
      };
    },
    methods: {
      submitPost() {
        if (this.newPostContent.trim() !== '') {
          this.posts.unshift({
            user: 'User 1', // nama pengguna
            description: this.newPostContent,
            image: '', //  sumber gambar 
            likes: 0,
            liked: false,
            comments: [],
            showCommentForm: false,
            newComment: '',
          });
          this.newPostContent = ''; // Kosongkan textarea setelah posting dibuat
        } else {
          alert('Silakan masukkan konten posting!');
        }
      },
      toggleLike(post) {
        post.liked = !post.liked; 
        if (post.liked) {
          post.likes++; 
        } else {
          post.likes--; 
        }
      },
      toggleCommentForm(post) {
        post.showCommentForm = !post.showCommentForm; 
      },
      addComment(post) {
        if (post.newComment.trim() !== '') {
          post.comments.push(post.newComment);
          post.newComment = ''; 
          post.showCommentForm = false; 
        } else {
          alert('Silakan masukkan komentar!');
        }
      },

    }
  };
  </script>
  
  <style scoped>


  .container {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .left-sidebar {
    flex-basis: 25%;
    align-self: flex-start;
  }
  
  .main-content {
    flex-basis: 75%;
    align-self: flex-start;
  }
  
  .sidebar-activity {
    background: #fcfcfc;
    padding: 5px 25px;
    margin: 12px 0;
    height: 100vh;
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

  .sidebar-activity a:hover {
    color: #00ff11;
    border: 2px solid black;
    border-radius: 5px;
    margin: 3px 0;
  }
  
  .create-post {
    background: rgb(255, 255, 255);
  }
  
  .create-post-input {
    display: flex;
    align-items: center;
    padding: 20px 25px 10px;
    border-bottom: 1px solid #ffeded;
  }
  
  .create-post-input img {
    width: 35px;
    border-radius: 50%;
    background: #1e00ca;
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
  
  .contoh-post-img {
    max-width: 100vh;
    margin-left: 20px;
    margin-top: 5px;
    border: 2px solid #ccc;
  }
  .create-post-links {
    display: flex;
    align-items: flex-start;
  }
  
  .create-post-links button {
    border-radius: 5px;
    flex-basis: 25%;
    height: 30px;
    padding: 10px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
  }
  
  button img {
    border: none;
    background: transparent;
  }
  
  .postingan {
    display: flex;
    align-items: center;
    margin: 10px 20px;
  }
  
  .postingan hr {
    flex: 1;
    border: 0;
    height: 1px ;
    background: #6f6f6f;
  }
  
  .postingan h2 {
    font-size: 13px;
    font-style: italic;
  }
  
  .postingan h2 span {
    font-weight: 600;
  }
  
  .post {
    background: #ffffff;
    border: 3px solid #c4c4c4;
    border-radius: 30px;
    padding: 20px 25px 5px;
    margin: 5px 0px 15px;
    max-width: 1000px;
  }
  
  .user-post {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .user-post img {
    width: 35px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 2px;
  }

  .user-post h1 {
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
    color: darkblue;
  }
  
  .post-activity {
    display: flex;
    align-items: center;
    max-width: 40vh;
    justify-content: space-between;
  }
  
  .like {
    display: flex;
    align-items: center;
    margin: 20px;
    font-weight: 500;
  }
  
  .like button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .like button img {
    width: 20px;
    height: 20px;
  }
  
  .like.liked button { 
    color: rgb(3, 3, 3); 
  }
  
  .comment button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .comment button img {
    width: 20px;
    height: 20px;
  }
  
  .comment-form {
    margin-top: 10px;
  }
  
  .comment-form input[type="text"] {
    width: calc(100% - 80px);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    outline: none;
  }
  
  .comment-form button[type="submit"] {
    width: 60px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50;
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
  </style>
  