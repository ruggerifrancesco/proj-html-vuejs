<template>
    <main>
        <AwardsSection />
        <ServicesSection />
        <ProductsSection :productsArray="productsList" />
        <ReviewsSection :reviewsArray="reviewsList"/>
        <BlogSection />
    </main>
</template>

<script>
import SectionDivider from '../components/misc-components/SectionDivider.vue'
import AwardsSection from './main-related/AwardsSection.vue';
import ServicesSection from './main-related/ServicesSection.vue';
import ProductsSection from './main-related/ProductsSection.vue';
import ReviewsSection from './main-related/ReviewsSection.vue';
import BlogSection from './main-related/BlogSection.vue';

export default {
    name: 'AppMain',
    components: {
        SectionDivider,
        AwardsSection,
        ServicesSection, 
        ProductsSection,
        ReviewsSection,
        BlogSection
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
            ],
            reviewsList: [
                {
                    src: 'gallery/avadabarbers-trimcut-gallery6.jpg',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
                    name: 'John Doe'
                },
                {
                    src: 'gallery/avadabarbers-trimcut-gallery7.jpg',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
                    name: 'Pete Jones'
                },
                {
                    src: 'gallery/avadabarbers-trimcut-gallery3.jpg',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
                    name: 'Mark Wilson'
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
    
</style>