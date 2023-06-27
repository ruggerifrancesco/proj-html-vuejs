<template>
    <header>
        <NavBarComponent />
        <div class="hero-wrapper">
            <HeroComponent />
        </div>
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

    .hero-wrapper {
        min-height: calc(100vh);
        @include background ('../assets/hero/avadabarbers-homepage-hero-bg.jpg', cover, left top, transparent);
    }

    @media screen and (min-width: 1024px) {
        
    }
    
</style>