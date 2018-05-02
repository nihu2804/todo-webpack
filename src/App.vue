<template>
  <div class="container">
    <div class="container" style="margin: 20px;">
      <router-link to="/"><h3>Welcome</h3></router-link>
      <hr>
      <ul class="nav nav-pills">
        <router-link :to="{ name: 'profile'}" tag="li">
          <button class="btn btn-primary" style="margin-right: 5px;">Profile</button>
        </router-link>
        <router-link :to="{ name: 'todo'}" tag="li">
          <button class="btn btn-primary">Todo</button>
        </router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
