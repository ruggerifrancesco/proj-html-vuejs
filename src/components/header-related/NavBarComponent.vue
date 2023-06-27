<template>
    <nav>
        
    </nav>
</template>

<script>
export default {
   name: 'NavBarComponent',
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    nav {
        min-height: calc($navBar-height);
        background-color: black;
    }

    @media screen and (min-width: 1024px) {
        nav {
            background-color: transparent;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: 10;
        }
    }
</style>