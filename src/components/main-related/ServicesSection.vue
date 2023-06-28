<template>
    <section id="services" class="services-container">
        <div class="section-wrapper">
            <span class="section-subtitle">Mens Grooming</span>
            <h3>Services</h3>

            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="service-icon">
                            <img src="../../assets/icons/avadabarbers-trimcut-icon-before.png" alt="">
                        </div>
                        <h4>Trim & Cut</h4>
                        <p>
                            Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.
                        </p>
                    </div>
                    <div class="col">
                        <div class="service-icon">
                            <img src="../../assets/icons/avadabarbers-washndry-icon.png" alt="">
                        </div>
                        <h4>Wash & Dry</h4>
                        <p>
                            Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.
                        </p>
                    </div>
                    <div class="col">
                        <div class="service-icon">
                            <img src="../../assets/icons/avadabarbers-beardtrim-icon.png" alt="">
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

</template>

<script>
import SectionDivider from '../misc-components/SectionDivider.vue'

export default {
    name: 'ServicesSection',
    components: {
        SectionDivider, 
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    h4 {
        color: #be9359;
        font-size: 2rem;
        margin-bottom: 20px;
    }

    p {
        color: #686868;
        margin-bottom: 20px;
        font-size: 1.1rem;
        line-height: 2rem;
    }

    .col {
        padding: 30px 50px;
    }

    .services-container {
        position: relative;
        background-color: white;
        padding: $wrapper-padding-xs;
        text-align: center;
        .section-wrapper {
            .row {
                @include flex (column, flex-start, center);
                .service-icon {
                    margin-bottom: 2rem;

                    img {
                        @include imgElement (auto, contain, center top);
                        aspect-ratio: 5/1;
                    }
                }
            }
        }
        .sectionDivider {
            filter: invert(0.95);
        }
    }

    @media screen and (min-width: 576px) {
    .services-container {
            padding: $wrapper-padding-sm;
            }
    }

    @media screen and (min-width: 768px) {
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