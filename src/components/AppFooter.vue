<template>
    <footer>
        <section class="footer-primary">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        Test
                    </div>
                    <div class="col">
                        Test
                    </div>
                    <div class="col">
                        Test
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
    }

    .footer-primary,
    .footer-bottom {
        padding: $wrapper-padding-xs;
    }

    .footer-primary {
        .container-fluid {
            .row {
                .col:first-child,
                .col:last-child {
                    display: none;
                }
            }
        }
    }

    @media screen and (min-width: 576px) {
        .footer-primary,
        .footer-bottom {
            padding: $wrapper-padding-sm;
        }
    }

    @media screen and (min-width: 768px) {
        .footer-primary,
        .footer-bottom {
            padding: $wrapper-padding-md;
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
            max-width: $wrapper-maxw;
            margin: 0 auto;
            }
    }
</style>