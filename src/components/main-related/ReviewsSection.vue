<template>
    <!-- Reviews Section -->
    <section id="reviews" class="reviews-container">

        <!-- Component And for in JS -->
    </section>
</template>

<script>
export default {
    name: 'ReviewsSection',
    props: {

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

    .reviews-container {
        height: 750px;
        background-color: white;
    }
    
</style>