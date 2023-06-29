<template>
    <section id="products" class="products-container">

        <!-- Mobile & Tablet -->
        <div class="products-list-mobile">
            <span class="section-subtitle">
                We have you covered
            </span>
            <h3>Avada Grooming Products</h3>

            <div class="products-list-wrapper mobile">
                <div class="btn-scroll left">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                </div>

               <article class="product-card">
                   <img src="../../assets/products/brush_dark.png" alt="">
                   <h4>Brush</h4>
                   <span class="price-product">$15.00</span>
               </article>

                <div class="btn-scroll right">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </div>
            </div>

            <a href="#" class="btn-custom">
                Shop our Product Range
            </a>
        </div>

        <!-- Desktop -->
        <div class="products-list-desktop">
            <span class="section-subtitle">
                We have you covered
            </span>
            <h3>Avada Grooming Products</h3>
        
            <div class="products-list-wrapper desktop">

                <article v-for="product in productsArray" class="product-card">
                    <a href="#">
                        <img :src="getImagePath(product.src)" :alt="product.name">
                        <h4>{{ product.name }}</h4>
                        <span class="price-product">{{ product.price }}</span>
                    </a>
                </article>

            </div>

            <a href="#" class="btn-custom">
                Shop our Product Range
            </a>
        </div>

        <div class="product-special-container">
            <div class="image-wrapper">
                <img src="../../assets/products/shaving_butter.png" alt="">
            </div>

            <div class="content-product">
                <span class="section-subtitle">
                    This months featured product
                </span>
                <h4 class="special-product-title">Shaving Butter</h4>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet enim est, vel molestie 
                    dolor ultrices ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <a href="#" class="btn-custom">
                    Buy Now
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProductsSection',
    props: {
        productsArray: Array,
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

    h4 {
        color: $primary-color;
        font-size: 2rem;
    }
    .special-product-title {
        color: $secondary-color;
        font-size: 4rem;
        margin-bottom: 30px;
    }

    .price-product {
        color: #be9359;
        font-size: 0.8rem;
    }

    .products-container {
        background-color: white;

        .products-list-mobile,
        .products-list-desktop {
            @include background ('../../assets/other/avadabarbers-reviewsbackground.jpg', cover, center top, transparent);
        }

        .products-list-mobile {
            display: block;
            text-align: center;
            padding: 6% 30px;

            .section-subtitle {
                margin-bottom: 2rem;
            }

            .products-list-wrapper {
                position: relative;
                .product-card {
                    margin-bottom: 4rem;

                    img {
                        @include imgElement ( auto, contain, top center);
                        aspect-ratio: 1/1;
                    }
                }

                .btn-scroll {
                    position: absolute;
                    transform: translateY(-50%);
                    cursor: pointer;
                    color: white;
                    width: 2rem;
                    height: 2rem;
                    @include flex (row, center, center);
                    background-color: rgba(0, 0, 0, 0.5);

                    &.left {
                        top: 50%;
                        left: 0;
                    }

                    &.right {
                        top: 50%;
                        right: 0;
                    }
                }
            }
        }
        .products-list-desktop,
        .product-special-container {
            display: none;
        }
    }

    @media screen and (min-width: 576px) {
        .products-list-mobile {
            h3 {
                font-size: 4rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
        .products-container {

            .products-list-mobile {
                display: none;
            }
            .products-list-desktop {
                display: block;
                padding: 6% 6% 60px 6%;
                text-align: center;

                .products-list-wrapper {
                    @include flex (row, flex-start, center);
                    gap: 0.5rem;
                    width: 100%;
                    margin-bottom: 55px;

                    .product-card {
                        width: calc(100% / 5);

                        img {
                            @include imgElement ( auto, contain, top center);
                            aspect-ratio: 1/1;
                        }
                    }
                }
                
                .btn-custom {
                    margin-bottom: 75px;
                }
            }

            .product-special-container {
                height: 450px;
                max-width: calc( 1140px + 0px );
                background-color: black;
                border-top: 4px solid $primary-color;
                margin: -50px auto 0;
                @include flex (row, flex-start, null);

                .image-wrapper {
                    width: 40%;
                    height: 100%;
                    @include background ('../../assets/other/avadabarbers-cta-background.jpg', cover, center, transparent);

                    img {
                        @include imgElement ( 100%, cover, top center);
                    }
                }

                .content-product {
                    width: 60%;
                    padding: 68.4px 55px 68.4px 68.4px;

                    p {
                        line-height: 32.4px;
                        color: #686868;
                        font-size: 1.1rem;
                        margin-bottom: 1.25rem;
                    }
                }
            }
        }
    }
</style>