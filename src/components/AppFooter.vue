<template>
    <footer>
        
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    footer {
       background-color: #0f0f0f; 
       height: $footer-height;
       position: fixed;
       bottom: 0;
       left: 0;
       right: 0;
       z-index: -1;
    }
</style>