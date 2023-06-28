<template>
    <section id="products" class="products-container">

            <!-- Component And for in JS -->
            <div class="products-list-mobile"></div>
            <div class="products-list-desktop">
                <span class="section-subtitle">
                    We have you covered
                </span>
                <h3>Avada Grooming Products</h3>

                <div class="products-list-wrapper">
                    <article class="product-card">
                        <img src="../../assets/products/brush_dark.png" alt="">
                        <h4>Brush</h4>
                        <span class="price-product">$15.00</span>
                    </article>
                    <article class="product-card">
                        <img src="../../assets/products/scissors.png" alt="">
                        <h4>Scissors</h4>
                        <span class="price-product">$85.00</span>
                    </article>
                    <article class="product-card">
                        <img src="../../assets/products/hot_oil_dark.png" alt="">
                        <h4>Hot Oil</h4>
                        <span class="price-product">$15.00</span>
                    </article>
                    <article class="product-card">
                        <img src="../../assets/products/straight_razor_dark.png" alt="">
                        <h4>Straight Razor</h4>
                        <span class="price-product">$30.00</span>
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
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    h4 {
        color: #be9359;
        font-size: 2rem;
    }
    .special-product-title {
        color: #b0b0b0;
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
            height: 790px;
        }
        .products-list-desktop,
        .product-special-container {
            display: none;
        }
    }

    @media screen and (min-width: 576px) {
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
                padding: 3% 6% 60px 6%;
                text-align: center;

                .products-list-wrapper {
                    @include flex (row, flex-start, center);
                    gap: 0.5rem;
                    width: 100%;
                    margin-bottom: 55px;

                    .product-card {
                        width: calc(100% / 4);

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
                border-top: 4px solid #be9359;
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