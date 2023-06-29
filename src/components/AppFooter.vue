<template>
    <footer>
        <section class="footer-primary">
            <div class="section-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            Test
                        </div>
                        <div class="col">
                            <div class="logo-wrapper">
                                <img src="../assets/logo/avadabarbers-logo-x2.png" alt="Main Logo">
                            </div>
                            <ul>
                                <li>Avada Barbers</li>
                                <li>123 New York Street</li>
                                <li>New York City</li>
                                <li>info@yourwebsite.com</li>
                                <li>+1 (555) 555-1212</li>
                            </ul>
                            <span class="section-subtitle">Follow us</span>
                            <ul>
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
                            Test
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="footer-bottom">

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
                    padding: 0 3%;
                    text-align: center;
                    color: #686868;
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