<template>
    <main>
        <!-- Awards Section -->
        <section id="awards" class="awards-container">
            <SectionDivider class="sectionDivider" />
        </section>

        <!-- Services Section -->
        <section id="services" class="services-container">
            <SectionDivider class="sectionDivider" />
        </section>

        <!-- Products Section -->
        <section id="products">
            <!-- Component And for in JS -->
        </section>

        <!-- Reviews Section -->
        <section id="reviews">
            <!-- Component And for in JS -->
        </section>

        <!-- Blog Section -->
        <section id="blog">
            <!-- Component And for in JS -->
        </section>
    </main>
</template>

<script>
import SectionDivider from '../components/misc-components/SectionDivider.vue'

export default {
    name: 'AppMain',
    components: {
        SectionDivider, 
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    .awards-container {
        height: 450px;
        @include background ('../assets/other/avadabarbers-about-introbackground.jpg', cover, center top, transparent);
        position: relative;
    }

    .services-container {
        height: 900px;
        position: relative;

        .sectionDivider {
            filter: invert(0.95);
        }
    }

    .sectionDivider {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

</style>