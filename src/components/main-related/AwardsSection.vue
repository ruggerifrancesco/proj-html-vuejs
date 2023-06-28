<template>
    <section id="awards" class="awards-container">
        <div class="section-wrapper">
            <span class="section-subtitle">Award Winning</span>
            <h3>Pro Barbers</h3>
            <a href="#" class="btn-custom">
                Meet your new barber
            </a>
        </div>
    <SectionDivider class="sectionDivider" />
    </section>
</template>

<script>
import SectionDivider from '../misc-components/SectionDivider.vue'
export default {
    name: 'AwardsSection',
    components: {
        SectionDivider, 
    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/_mixins.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

    .awards-container {
        @include background ('../../assets/other/avadabarbers-about-introbackground.jpg', cover, center top, transparent);
        position: relative;
        text-align: center;
        padding: 6% 30px;
        .section-wrapper {
            width: 100%;
            padding: 0;
        }
    }

    @media screen and (min-width: 576px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1024px) {
    }
</style>