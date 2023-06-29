<template>
    <!-- Blog Section -->
    <section id="blog" class="blog-container">
        
    <SectionDivider class="sectionDivider" />
    </section>
</template>

<script>
import SectionDivider from '../misc-components/SectionDivider.vue'

export default {
    name: 'BlogSection',
    components: {
        SectionDivider, 
    },
    methods: {
        getImagePath: function(img) {
            return new URL(`../../assets/${img}`, import.meta.url).href;
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    .blog-container {
        background-color: #f5f5f5;
        height: 800px;
        position: relative;

        .sectionDivider {
            rotate: 180deg;
            position: relative;
            top: 0;
        }
    }

    @media screen and (min-width: 576px) {
    }

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
    }

</style>