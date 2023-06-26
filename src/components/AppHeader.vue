<template>
    <header>
        
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    header {
        min-height: calc(100vh);
        @include background ('../assets/hero/avadabarbers-homepage-hero-bg.jpg', cover, left top, transparent);
    }
</style>