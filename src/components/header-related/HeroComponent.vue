<template>
    <section class="hero">
        <div class="container-fluid hero-container">
          <div class="row hero-row">
            <div class="col col-custom-6">
                <div class="hero-introduction">

                    <div class="title-container">
                        <h1 class="title-intro">Barber Shop</h1>
                    </div>
                    <div class="divider-container">
                        <div class="intro-divider"></div>
                    </div>
                    <div class="subtitle-container">
                        <span class="intro-subtitle">The Pinaccle of Male Grooming</span>
                    </div>
                    <div class="btn-container">
                        <a href="#" class="btn-custom">
                            Learn More
                        </a>
                    </div>

                </div>
            </div>
            <div class="col-6 hero-image">
              <img src="../../assets/hero/avadabarbers_hero_focalmirror.png" alt="Barber with client">
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

    .hero-introduction {
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title-container {
            margin-bottom: 20px;
        }
        .title-intro {
            color: #e8e8e8;
            font-size: 5rem;
            text-align: center;
        }

        .divider-container {
            margin-bottom: 30px;
            @include flex (row, center, center)
        }

        .intro-divider {
            height: 6px;
            width: 50%;
            background-color: #be9359;
        }

        .subtitle-container {
            margin-bottom: 20px;
        }

        .intro-subtitle {
            font-size: 24px;
            color: #686868;
        }

        .btn-container {
            margin-top: 15px;
        }
    }
    .hero-image {
        display: none;
    }

    @media screen and (min-width: 1024px) {

        .col-custom-6 {
            flex: 0 0 auto;
            width: 50%;
            max-width: 50%;
            padding: 0 1.5rem;
            @include flex (column, center, stretch);
        }

        .hero-container {
            max-width: 1185.6px;
            padding-top: 90px;
        }

        .hero-introduction {
            text-align: start;
            .title-intro {
                text-align: start;
                font-size: 5.5rem;
            }

            .divider-container {
                @include flex (row, flex-start, flex-start);
            }

            .intro-divider {
                width: 45%;
            }
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