<template>
    <header>
        <NavBarComponent />
        <HeroComponent />
    </header>
</template>

<script>
import NavBarComponent from './header-related/NavBarComponent.vue';
import HeroComponent from './header-related/HeroComponent.vue';

export default {
    name: 'AppHeader',
    components: {
        NavBarComponent,
        HeroComponent,
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    header {
        margin-top: 150px;
        min-height: calc(100vh);
        @include background ('../assets/hero/avadabarbers-homepage-hero-bg.jpg', cover, left top, transparent);
    }

    @media screen and (min-width: 1024px) {
        header {
            margin-top: 0;
        }
    }
</style>