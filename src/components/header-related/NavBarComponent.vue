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
                    <a class="nav-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <font-awesome-icon :icon="['fas', 'bars']" />
                    </a>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div class="offcanvas-body">
                        <div>
                          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                        </div>
                        <div class="dropdown mt-3">
                          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
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