<template>
    <main>
        <!-- Awards Section -->
        <section id="awards" class="awards-container">
            <div class="section-wrapper">
                <span class="section-subtitle">Award Winning</span>
                <h3>Pro Barbers</h3>
                <a href="#" class="btn-custom">
                    Meet your new barber
                </a>
            </div>
            <SectionDivider class="sectionDivider" />
        </section>

        <ServicesSection />

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
import ServicesSection from './main-related/ServicesSection.vue';

export default {
    name: 'AppMain',
    components: {
        SectionDivider,
        ServicesSection, 
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
        @include background ('../assets/other/avadabarbers-about-introbackground.jpg', cover, center top, transparent);
        position: relative;
        text-align: center;
        padding: 6% 30px;

        .section-wrapper {
            width: 100%;
            padding: 0;
        }
    }

    .products-container {
        background-color: white;
        .products-list-container {
            height: 790px;
            @include background ('../assets/other/avadabarbers-reviewsbackground.jpg', cover, center top, transparent)

        }

        .product-special-container {
            display: none;
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

    @media screen and (min-width: 576px) {
    }

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
        .product-special-container {
            display: block !important;
            height: 450px;
            max-width: calc( 1140px + 0px );
            background-color: black;
            border-top: 4px solid red;
            margin: -50px auto 0;
        }
        .awards-container {
            .section-wrapper {
                padding: 28px 0 78px 0;
            }
        }
    }

</style>