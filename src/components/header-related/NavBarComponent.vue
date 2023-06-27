<template>
    <nav class="navbar" :class="{ 'scrolled': isNavScrolled }">
        <div class="nav-container">

            <div class="brand-container">
                <img src="../../assets/logo/avadabarbers-stickylogo-x2.png" alt="">
            </div>

            <div class="user-calls-btns">

                <div class="shop-redirect">
                    <a href="#" class="shop-btn">
                        <font-awesome-icon :icon="['fas', 'bars']" />
                    </a>
                </div>

                <div class="primary-menu">
                    <a class="nav-btn" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                        <font-awesome-icon :icon="['fas', 'bars']" />
                    </a>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasExampleLabel">
                      <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div class="offcanvas-body p-0">
                        <ul>
                            <li class="active">
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Shop</a>
                            </li>
                            <li>
                                <a href="">Our Team</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                      </div>
                    </div>
                </div>

            </div>

        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBarComponent',
    data() {
        return {
            isNavScrolled: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isNavScrolled = window.pageYOffset > 0;
        },
    },
}
</script>
<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    nav {
        min-height: calc($navBar-height);
        background-color: black;

        .nav-container {
            padding: $wrapper-padding-xs;
            height: 100%;
            width: 100%;
            @include flex (row, space-between, center);

            .brand-container {
                width: 40%;
                
                img {
                    @include imgElement (100%, cover, center)
                }
            }

            .user-calls-btns {
                @include flex (row, null, center);

                .shop-btn, .nav-btn {
                    color: white; 
                    font-size: 24px;
                    margin-left: 1.5rem;
                }

                .nav-btn {
                    color: #b08852;
                }

                .offcanvas {
                    width: 100%;
                    height: 100vh;
                    background-color: black;

                    .offcanvas-header {
                        position: absolute;
                        right: 0;

                    }

                    ul {
                        @include flex (column, center, center);
                        margin: 0;
                        padding: 2rem;
                        width: 100%;
                        height: 100%;

                        li {
                            width: 100%;
                            text-align: center;
                            padding: 12px 20px;

                            &.active a {
                                color: #b08852;
                            }
                            & a:hover {
                                color: #b08852;
                            }

                            a {
                                color: white;
                                text-decoration: none;
                                font-size: 1.8rem;
                                font-weight: 400;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 576px) {
        nav {
            .nav-container {
                padding: $wrapper-padding-sm;
                
                .brand-container {
                    width: 30%;
                }
            }
        }
    }

    @media (min-width: 768px) {
        nav {
            .nav-container {
                padding: $wrapper-padding-md;

                .brand-container {
                    width: 20%;
                }
            }  
        }
    }

    @media screen and (min-width: 1024px) {
        nav {
            background-color: transparent;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            z-index: 10;
            transition: background-color 0.3s ease-in-out;
            transition: min-height 0.8s ease-out, 0.15s ease-in;

            &.scrolled {
              background-color: black;
              min-height: calc($navBar-height-scrolled);
            }

            .nav-container {
                max-width: $wrapper-maxw;
                margin: 0 auto;

                .brand-container {
                    width: 18%;
                }
            }
        }
    }
</style>