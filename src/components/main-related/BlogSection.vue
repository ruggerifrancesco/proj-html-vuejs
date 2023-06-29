<template>
    <!-- Blog Section -->
    <section id="blog" class="blog-container">
        <SectionDivider class="sectionDivider" />

        <div class="section-wrapper">
            <span class="section-subtitle">
                Tales from the barber shop
            </span>
            <h3>Recent Blog Post</h3>

            <div class="articles-list-wrapper">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col" v-for="article in blogsArray">
                            <a href="#">
                                <div class="blog-image-wrapper"
                                    @mouseover="addHoverClass($event)"
                                    @mouseout="removeHoverClass($event)">
                                    <img :src="getImagePath(article.src)" :alt="article.title">
                                </div>
                                <h4>{{ article.title }}</h4>
                            </a>
                            <p>
                                {{ article.text }}
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <a href="#" class="btn-custom">
                Read more from our blog
            </a>
        </div>
    </section>
</template>

<script>
import SectionDivider from '../misc-components/SectionDivider.vue'

export default {
    name: 'BlogSection',
    components: {
        SectionDivider, 
    },
    props: {
        blogsArray: Array,
    },
    methods: {
        getImagePath: function(img) {
            return new URL(`../../assets/${img}`, import.meta.url).href;
        },
        addHoverClass(event) {
            const blogImageWrapper = event.currentTarget
            blogImageWrapper.querySelector('img').classList.add('hovered')
        },
        removeHoverClass(event) {
            const blogImageWrapper = event.currentTarget
            blogImageWrapper.querySelector('img').classList.remove('hovered')
        },
    },
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    .blog-container {
        background-color: #f5f5f5;
        position: relative;
        text-align: center;

        .section-wrapper {

            .row {
                @include flex (column, flex-start, center);

                .col {
                    
                    .blog-image-wrapper {
                        overflow: hidden;
                        height: 250px;
                        margin-bottom: 15px;

                        img {
                            @include imgElement (100%, cover, top center);
                            aspect-ratio: 1/1;
                            transform: scale(1);
                            transition: transform 0.8s;

                            &.hovered {
                                transform: scale(1.1);
                            }
                        }
                    }
                    
                    h4 {
                        color: #be9359;
                    }

                    p {
                        margin-bottom: 20px;
                        line-height: 32.4px;
                        color: #767676;
                        font-size: 1.1rem;
                    }
                }
            }
        }

        .sectionDivider {
            rotate: 180deg;
            position: relative;
            top: 0;
        }
    }

    @media screen and (min-width: 576px) {
    }

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1024px) {
        .blog-container {

            .section-wrapper {
                max-width: $wrapper-maxw;
                margin: 0 auto;
                padding: 4% 0 6%;
                .row {
                    @include flex (row, flex-start, flex-start);

                    .col {
                        width: calc(100% / 3);

                        h4 {
                            font-size: 2.2rem;
                        }
                    }
                }
            }   

            .sectionDivider {
                rotate: 180deg;
                position: relative;
                top: 0;
            }
        }   
    }
</style>