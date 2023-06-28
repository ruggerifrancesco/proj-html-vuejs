<template>
    <!-- Reviews Section -->
    <section id="reviews" class="reviews-container">
        <div class="section-wrapper">
            <span class="section-subtitle">What people say</span>
            <h3>Reviews</h3>   

            <div class="container-fluid">
                <div class="row">

                    <div class="col review-user-card" v-for="review in reviewsArray">
                        <p>
                            {{ review.text }}
                        </p>
                        <div class="image-profile-wrapper">
                            <img :src="getImagePath(review.src)" :alt="review.name">
                        </div>
                        <span class="profile-name">{{ review.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ReviewsSection',
    props: {
        reviewsArray: Array,
    },
    methods: {
        getImagePath: function(img) {
            return new URL(`../../assets/${img}`, import.meta.url).href;
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    .reviews-container {
        background-color: white;
        padding: $wrapper-padding-xs;
        text-align: center;

        .section-wrapper {
            padding: 6% 0 3%;

            .row {
                @include flex (column, flex-start, flex-start);
                .review-user-card {
                    @include flex (column, flex-start, center);
                    padding: 0 6%;
                    margin-bottom: 40px;

                    p {
                        margin-bottom: 20px;
                        line-height: 32.4px;
                        color: #767676;
                        font-size: 1.1rem;
                    }

                    .image-profile-wrapper {
                        max-width: 120px;
                        margin-bottom: 15px;

                        img {
                            @include imgElement (100%, cover, center);
                            border-radius: 50%;
                        }
                    }

                    .profile-name {
                        font-style: italic;
                        color: #be9359;
                        font-weight: bold;
                        font-size: 1.3rem;
                        display: block;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 576px) {

        .reviews-container {
            padding: $wrapper-padding-sm;
        }
    }
    @media screen and (min-width: 768px) {
        .reviews-container {
            padding: $wrapper-padding-md;
        }
    }
    @media screen and (min-width: 1024px) {
        .reviews-container {
            .section-wrapper {
                max-width: $wrapper-maxw;
                margin: 0 auto;

                .row {
                    @include flex (row, flex-start, flex-start);

                    .review-user-card {
                        padding: 0 30px;
                    }
                }
            }
        }
    }
    
</style>