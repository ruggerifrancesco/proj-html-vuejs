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

        <!-- Services Section -->
        <section id="services" class="services-container">
            <div class="section-wrapper">
                <span class="section-subtitle">Mens Grooming</span>
                <h3>Services</h3>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <div class="service-icon">
                                <img src="../assets/icons/avadabarbers-trimcut-icon-before.png" alt="">
                            </div>
                            <h4>Trim & Cut</h4>
                            <p>
                                Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.
                            </p>
                        </div>
                        <div class="col">
                            <div class="service-icon">
                                <img src="../assets/icons/avadabarbers-washndry-icon.png" alt="">
                            </div>
                            <h4>Wash & Dry</h4>
                            <p>
                                Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.
                            </p>
                        </div>
                        <div class="col">
                            <div class="service-icon">
                                <img src="../assets/icons/avadabarbers-beardtrim-icon.png" alt="">
                            </div>
                            <h4>Beard Tidy</h4>
                            <p>
                                Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.
                            </p>
                        </div>
                    </div>
                </div>

                <a href="#" class="btn-custom">
                    Read about our services
                </a>
            </div>
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

    h3 {
        color: #b0b0b0;
        font-size: 3rem;
        margin-bottom: 30px;
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

    .services-container {
        position: relative;
        background-color: white;
        padding: $wrapper-padding-xs;
        text-align: center;

        .section-wrapper {
            .row {
                @include flex (column, flex-start, center);

                .service-icon img {
                    @include imgElement (auto, contain, center top);
                    aspect-ratio: 5/1;
                }
            }
        }

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

    .sectionDivider {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    @media (min-width: 576px) {
        .services-container {
            padding: $wrapper-padding-sm;
        }
    }

    @media (min-width: 768px) {
        .services-container {
            padding: $wrapper-padding-md;

            .section-wrapper {
                .row {
                    .service-icon img {
                        aspect-ratio: 4.5/1;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px) {

        h3 {
            font-size: 5rem;
        }
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

        .services-container {
            .section-wrapper {
                max-width: $wrapper-maxw;
                margin: 0 auto;
                padding: 28px 0 15rem 0;
                .row {
                    @include flex (row, flex-start, flex-start);

                    .service-icon img {
                        aspect-ratio: 3.2/1;
                    }
                }
            }
        }
    }

</style>