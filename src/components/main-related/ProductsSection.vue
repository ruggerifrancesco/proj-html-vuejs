<template>
    <section id="products" class="products-container">

        <!-- Component And for in JS -->
        <div class="products-list-container"></div>
        <div class="product-special-container"></div>
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
        .products-list-container {
            height: 790px;
            @include background ('../../assets/other/avadabarbers-reviewsbackground.jpg', cover, center top, transparent)

        }

        .product-special-container {
            display: none;
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