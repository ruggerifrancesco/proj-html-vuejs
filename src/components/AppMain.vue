<template>
    <main>
        <!-- Awards Section -->
        <section id="awards" class="awards-container">
            <SectionDivider class="sectionDivider" />
        </section>

        <!-- Services Section -->
        <section id="services" class="services-container">
            <SectionDivider class="sectionDivider" />
        </section>

        <!-- Products Section -->
        <section id="products" class="products-container">
            <!-- Component And for in JS -->

            <div class="products-list-container"></div>
            <div class="product-special-container"></div>
        </section>

        <!-- Reviews Section -->
        <section id="reviews" class="reviews-container">
            <!-- Component And for in JS -->
        </section>

        <!-- Blog Section -->
        <section id="blog" class="blog-container">
            <!-- Component And for in JS -->
            <SectionDivider class="sectionDivider" />
        </section>
    </main>
</template>

<script>
import SectionDivider from '../components/misc-components/SectionDivider.vue'

export default {
    name: 'AppMain',
    components: {
        SectionDivider, 
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    main {
        margin-bottom: 620px;
    }

    .awards-container {
        height: 450px;
        @include background ('../assets/other/avadabarbers-about-introbackground.jpg', cover, center top, transparent);
        position: relative;
    }

    .services-container {
        height: 900px;
        position: relative;
        background-color: white;

        .sectionDivider {
            filter: invert(0.95);
        }
    }

    .products-container {
        background-color: white;
        .products-list-container {
            height: 790px;
            @include background ('../assets/other/avadabarbers-reviewsbackground.jpg', cover, center top, transparent)

        }

        .product-special-container {
            height: 450px;
            max-width: calc( 1140px + 0px );
            margin-top: -50px;
            background-color: black;
            border-top: 4px solid red;
        }
    }

    .reviews-container {
        height: 750px;
        background-color: white;
    }
    
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

    .sectionDivider {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

</style>