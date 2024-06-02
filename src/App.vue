<template>
  <HomePage/>
  <Home/>
  <users/>
</template>

<script>
  import HomePage from "./components/HomePage.vue"
  import Home from "./components/Home.vue"
  import users from "./components/users.vue"
export default {
  name: 'App',
  components: {
      HomePage,
      Home,
      users
     
  }
}
</script>

<style>
 
</style>
