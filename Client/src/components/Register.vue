import fa from ''

<template>
  <div class="login-container">
    <div class="form-container">
      <div class="form-header">
        <h3 class="form-title">Halo Akun Baru!</h3>
      </div>
      
      <div class="form-inputs">
        <div class="input-grup">
          <label for="Nama" class="input-label">Nama</label>
          <div class="input-wrapper">
            <font-awesome-icon :icon="['fas', 'user']" />
            <input type="text" class="input-field" placeholder="Masukkan Nama"/>
          </div>
        </div>
        
        <div class="input-grup">
          <label for="Email" class="input-label">Email</label>
          <div class="input-wrapper">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <input type="password" class="input-field" placeholder="Masukkan Email"/>
          </div>
        </div>

        <div class="input-grup">
          <label for="password" class="input-label">Password</label>
          <div class="input-wrapper">
            <font-awesome-icon :icon="['fas', 'lock']" />
            <input type="password" class="input-field" placeholder="Masukkan Password"/>
          </div>
        </div>
      </div>
      <br/>
      <button class="btn-login">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
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
