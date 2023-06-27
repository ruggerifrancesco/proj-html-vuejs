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
    nav {
        min-height: calc(150px);
        background-color: black;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }

    @media screen and (min-width: 1024px) {
        nav {
            background-color: transparent;
        }
    }
</style>