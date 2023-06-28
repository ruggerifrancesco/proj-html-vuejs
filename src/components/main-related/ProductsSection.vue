<template>
    <section id="products" class="products-container">

        <!-- Component And for in JS -->
        <div class="products-list-mobile"></div>
        <div class="products-list-desktop"></div>
        <div class="product-special-container">
            <div class="image-wrapper">
                <img src="../../assets/products/shaving_butter.png" alt="">
            </div>

            <div class="content-product">
                <span class="section-subtitle">
                    This months featured product
                </span>
                <h4>Shaving Butter</h4>
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

    .products-container {
        background-color: white;

        .products-list-mobile,
        .products-list-desktop {
            height: 790px;
            @include background ('../../assets/other/avadabarbers-reviewsbackground.jpg', cover, center top, transparent);
        }

        .products-list-desktop {
            display: none;
        }
    }

    @media screen and (min-width: 576px) {
    }
    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
        .products-container {

            .products-list-desktop {
                display: block;
            }
            .products-list-mobile {
                display: none;
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