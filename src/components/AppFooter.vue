<template>
    <footer>
        <section class="footer-primary">
            <div class="section-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <div class="image-wrapper">
                                <img src="../assets/footer/avadabarbers_footer_shop_image.png" alt="General Products Display">
                            </div>

                            <a href="#" class="btn-custom">
                                Shop our range now
                            </a>
                        </div>
                        <div class="col">
                            <div class="logo-wrapper">
                                <img src="../assets/logo/avadabarbers-logo-x2.png" alt="Main Logo">
                            </div>
                            <ul class="contact-infos">
                                <li>Avada Barbers</li>
                                <li>123 New York Street</li>
                                <li>New York City</li>
                                <li>info@yourwebsite.com</li>
                                <li>+1 (555) 555-1212</li>
                            </ul>
                            <span class="section-subtitle">Follow us</span>
                            <ul class="social-list">
                                <li>
                                    <a href="#">
                                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <font-awesome-icon :icon="['fab', 'twitter']" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <font-awesome-icon :icon="['fab', 'instagram']" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <font-awesome-icon :icon="['fab', 'youtube']" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col">
                            <div class="image-wrapper">
                                <img src="../assets/footer/avadabarbers_footer_appointment_image.png" alt="General Products Display">
                            </div>

                            <a href="#" class="btn-custom">
                                Book your Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="footer-bottom">
            <div class="section-wrapper">
                <p>
                    © Copyright 2012 - 2023 | Avada Theme by <strong>ThemeFusion</strong> | All Rights Reserved | Powered by <strong>WordPress</strong>
                </p>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    footer {
       background-color: #0f0f0f; 
       height: $footer-height;
       position: relative;
    }

    .footer-primary,
    .footer-bottom {
        .section-wrapper {
            padding: $wrapper-padding-xs;
            text-align: center;
        }
    }

    .footer-primary {
        width: 100%;
        height: 100%;
        
        .section-wrapper {
            @include flex (row, center, center);
            height: calc(100% - $footer-bottom-height);
        }
        .container-fluid {
            .row {
                .col {
                    @include flex(column, flex-start, center);
                    padding: 0 2%;
                    color: #686868;

                    .image-wrapper {
                        margin-bottom: 30px;

                        img {
                            @include imgElement (auto, contain, top center);
                        }
                    }

                    .btn-custom {
                        font-size: 14px;
                        padding: 12px 25px;
                    }

                    .logo-wrapper {
                        width: 40%;
                        margin-bottom: 30px;

                        img {
                            @include imgElement (auto, contain, top center)
                        }
                    }
                    .contact-infos {
                        margin: 16px 0 56px;
                        @include flex(column, flex-start, center);
                        gap: 0.5rem;
                    }

                    .section-subtitle {
                        margin-bottom: 15px;
                    }
                    .social-list {
                        @include flex (row, center, center);
                        gap: 1.6rem;

                        li a {
                            color: $secondary-color;
                            transition: all 0.3s ease-in-out;

                            &:hover {
                                color: $secondary-hover;
                            }
                        }
                    }
                }
                .col:first-child,
                .col:last-child {
                    display: none;
                }
            }
        }
    }

    .footer-bottom {
        background-color: #171717;
        height: $footer-bottom-height;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        .section-wrapper {
            @include flex (row, center, center);
            height: 100%;

            p {
                font-size: 0.8rem;
                color: #606060;

                strong {
                    color: $primary-color;
                    font-weight: 400;
                }
            }
        }
    }

    @media screen and (min-width: 576px) {
        .footer-primary,
        .footer-bottom {
            .section-wrapper {
                padding: $wrapper-padding-sm;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .footer-primary,
        .footer-bottom {
            .section-wrapper {
                padding: $wrapper-padding-md;
            }
        }

        .footer-primary {
        .container-fluid {
            .row {
                .col{
                    .logo-wrapper {
                        width: 60%;
                    }
                }
                .col:first-child,
                .col:last-child {
                    display: block;
                }
            }
        }
    }

    }

    @media screen and (min-width: 1024px) {
        footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
        }

        .footer-primary,
        .footer-bottom {
                .section-wrapper {
                    max-width: $wrapper-maxw;
                    margin: 0 auto;
                }
            }
    }
</style>