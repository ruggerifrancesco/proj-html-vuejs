<template>
    <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col col-lg-6 hero-introduction">
              Column
            </div>
            <div class="col-6 hero-image">
              <img src="../../assets/hero/avadabarbers_hero_focalmirror.png" alt="">
            </div>
          </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'HeroComponent',
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    .hero-image {
        display: none;
    }

    @media screen and (min-width: 1024px) {

        .container {
            max-width: 1185.6px;
            padding-top: 90px;
        }

        .hero-introduction {
            padding: 0 1.5rem;
        }

        .hero-image {
            display: block;
            padding: 0 1.5rem;

            img {
                @include imgElement (100%, contain, 50% 50%);
            }
        }
    }
</style>