<template>
    <main>
        <AwardsSection />
        <ServicesSection />
        <ProductsSection :productsArray="productsList" />

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
import AwardsSection from './main-related/AwardsSection.vue';
import ServicesSection from './main-related/ServicesSection.vue';
import ProductsSection from './main-related/ProductsSection.vue';

export default {
    name: 'AppMain',
    components: {
        SectionDivider,
        AwardsSection,
        ServicesSection, 
        ProductsSection,
    },
    data() {
        return {
            productsList: [
                {
                    src: 'products/safety_set.png',
                    type: 'normal',
                    name: 'Safety Set',
                    price: '$45.00',
                },
                {
                    src: 'products/brush_dark.png',
                    type: 'normal',
                    name: 'Brush',
                    price: '$15.00',
                },
                {
                    src: 'products/scissors.png',
                    type: 'normal',
                    name: 'Scissors',
                    price: '$85.00',
                },
                {
                    src: 'products/hot_oil_dark.png',
                    type: 'normal',
                    name: 'Hot Oil',
                    price: '$15.00',
                },
                {
                    src: 'products/straight_razor_dark.png',
                    type: 'normal',
                    name: 'Razor',
                    price: '$30.00',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    main {
        margin-bottom: 620px;
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

    @media screen and (min-width: 576px) {
    }

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
    }

</style>