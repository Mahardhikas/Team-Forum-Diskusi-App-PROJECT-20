<template>
        <header class="header">
            <nav>
                <a href="#" class="logo">DiscussionHub</a>
                <ul class="nav-links">
                  <router-link v-if="isLoggedIn" to="/login">Dashboard</router-link>
                  <router-link v-else to="/login">Login</router-link>
                </ul>
            </nav>
        </header>
        <section class="hero">
            <div class="container">
                <h2 class="hero-title">Join the DiscussionHub Community</h2>
                <p class="hero-subtitle">Connect with like-minded people, share your thoughts, and explore new ideas.</p>
                <a href="#" class="btn btn-primary">Get Started</a>
            </div>
        </section>
  <!-- Testimonials Section -->
        <section class="testimonials">
            <div class="container-content-coment">
                <h2>What Our Customers Say</h2>
                <div class="testimonial">
                    <p>"I've been a member of DiscussionHub for years. It's an amazing platform to engage with others and exchange ideas."</p>
                    <p class="author">- John Doe</p>
                </div>
                <div class="testimonial">
                    <p>"DiscussionHub has helped me connect with people who share my interests. I've made new friends and learned so much!"</p>
                    <p class="author">- Jane Smith</p>
                </div>
            </div>
        </section>
  <!-- Subscription Section -->
        <section class="subscription">
            <div class="container">
                <h2>Subscribe to DiscussionHub</h2>
                <p>Unlock unlimited access to discussions, exclusive content, and more.</p>
                <div class="subscription-plans">
                    <div class="plan">
                        <h3>Basic</h3>
                        <p>$9.99/month</p>
                        <button class="btn btn-primary">Subscribe Now</button>
                    </div>
                    <div class="plan">
                        <h3>Premium</h3>
                        <p>$19.99/month</p>
                        <button class="btn btn-primary">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </section>
    <!-- Footer Section -->
        <footer class="footer">
            <div class="container">
                <p>&copy; 2024 DiscussionHub</p>
            </div>
        </footer>
</template>

<script>

export default {
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Basic styles */
body {
  font-family: Arial, sans-serif;
}


.header {
  background-color: #4CAF50;
  padding: 20px 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
}

/* Media query for small screens */
@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }

}

.container-content-coment h2 {
    text-align: center;
    padding: 10px;
}

/*end navbar */
.hero {
  background-color: #323232;
  color: #ffffff;
  text-align: center;
  padding: 100px 0;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.btn {
  display: inline-block;
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
}

.btn:hover {
  background-color: #45a049;
}

.testimonials {
  background-color: #fff;
  padding: 50px 0;
}

.testimonial {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.testimonial p {
  font-style: italic;
  margin-bottom: 10px;
  text-align: center;
}

.testimonial .author {
  font-weight: bold;
}

.subscription {
  background-color: #f9f9f9;
  padding: 50px 0;
}

.subscription h2 {
  text-align: center;
  margin-bottom: 30px;
}

.subscription p {
  text-align: center;
  margin-bottom: 30px;
}

.subscription-plans {
  display: flex;
  justify-content: center;
}

.plan {
  text-align: center;
  margin: 0 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.plan h3 {
  margin-bottom: 10px;
}

.plan p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.plan button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
}

.plan button:hover {
  background-color: #0056b3;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}


</style>
