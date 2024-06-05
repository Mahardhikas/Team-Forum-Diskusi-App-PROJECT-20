import fa from ''

<template>
  <div class="login-container">
    <form @submit.prevent="register">
      <div class="form-container">
        <div class="form-header">
          <h3 class="form-title">Halo Akun Baru!</h3>
        </div>
        
        <div class="form-inputs">
          <div class="input-grup">
            <label for="Nama" class="input-label">Nama</label>
            <div class="input-wrapper">
              <font-awesome-icon :icon="['fas', 'user']" />
              <input type="text" class="input-field" placeholder="Masukkan Nama" v-model="username"/>
            </div>
          </div>
          
          <div class="input-grup">
            <label for="Email" class="input-label">Email</label>
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
        </div>
        <br/>
        <button class="btn-login" type="submit" :disabled="loading">
          <span v-if="loading">Registering...</span>
          <span v-else>Register</span>
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
      username: '',
      email: '',
      password: '',
      loading: false,
      error: ''
    };
  },
  methods: {
    async register() {
      console.log('Register button clicked'); // Log untuk memastikan klik berfungsi
      this.loading = true;
      this.error = '';
      try {
        console.log('Sending request to backend'); // Log sebelum mengirim permintaan
        const response = await Api.post('/register', {
          username: this.username,
          email: this.email,
          password: this.password
        });
        console.log('Response received:', response.data); // Log respons dari backend
        alert('Registration successful!');
        this.$router.push('/login');
      } catch (error) {
        console.error('Error during registration:', error); // Log error untuk debugging
        if (error.response && error.response.data.message === 'Email already used') {
          alert('Email already used!');
        } else {
          alert('Registration failed!');
        }
        this.error = error.response ? error.response.data.message : 'Registration failed';
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
