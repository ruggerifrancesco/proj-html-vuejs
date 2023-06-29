<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>


<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
}
</script>

<style lang="scss">
@use './styles/partials/_variables.scss' as *;
@import "bootstrap/scss/bootstrap";
@import "./styles/general.scss";
</style>