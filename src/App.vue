<template>
  <!-- <Home /> -->
  <!-- <router-link to="/">Home </router-link>   -->
  <!-- <Result /> -->
   <router-view></router-view>
</template>


<script setup>
import Home from './components/Home.vue'
import Result from './components/Result.vue'
</script>


<style scoped>
/* Top Header */

/* Auto layout */
.nav{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 22px 80px;
gap: 10px;

width: 1440px;
height: 77px;

/* Studio / Darkmode / Allwhite #FFFFFF */
background: #FFFFFF;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
</style>
