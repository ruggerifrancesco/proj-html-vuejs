<template>
    <div class="section-divider">
        <img src="../../assets/triangle.svg" alt="Section Divider">
    </div>
</template>

<script>
export default {
    name: 'SectionDivider',
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    .section-divider {
        height: 100px;
        display: none;

        img {
            @include imgElement (100%, null, null);
        }
    }

    @media screen and (min-width: 992px){
        .section-divider {
            display: block;
        }
    }
    
</style>