<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <div class="form-container">
        <div class="form-header">
          <h3 class="form-title">Selamat Datang!</h3>
          <p>Masukkan Email dan Password Anda.</p>
        </div>
        
        <div class="form-inputs">
          <div class="input-grup">
            <label for="email" class="input-label">Email</label>
            <div class="input-wrapper">
              <font-awesome-icon :icon="['fas', 'envelope']" />
              <input type="text" class="input-field" placeholder="Masukkan Email" v-model="email"/>
            </div>
          </div>
          
          <div class="input-grup">
            <label for="password" class="input-label">Password</label>
            <div class="input-wrapper">
              <font-awesome-icon :icon="['fas', 'lock']" />
              <input type="password" class="input-field" placeholder="Masukkan Password" v-model="password"/>
            </div>
          </div>
        <p class="new">Akun Baru? <router-link to="/register">Daftar</router-link></p>
        </div>
        <br/>
        
        <!-- Display error message if login fails -->
        <div v-if="error" class="error-message">{{ error }}</div>

        <button class="btn-login" type="submit" :disabled="loading">
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Api from '../services/Api';

export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: ''
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.error = '';
      try {
        const response = await Api.post('/login', {
          email: this.email,
          password: this.password
        });

        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/home');
        } else {
          this.error = 'Login failed! Invalid email or password.';
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          this.error = 'Invalid email or password.';
        } else {
          this.error = 'Login failed! Please try again later.';
        }
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  width: 320px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 6px 19px 2px rgba(0, 0, 0, 0.49);
  background: hsl(0, 0%, 91%);
}

.form-header {
  text-align: center;
  margin-bottom: 20px;
}

.form-title {
  margin: 0;
  font-size: 24px;
}

.form-inputs {
  display: grid;
  gap: 15px;
}

.input-grup {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.input-label {
  margin-bottom: 5px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
}

.input-field {
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 5px;
}

.btn-login {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #45a049;
}

.new{
  font-size: smaller;
}
</style>
