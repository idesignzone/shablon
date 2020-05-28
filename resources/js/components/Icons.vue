<template>
    <section class="section section-lg section-nucleo-icons pb-250">
        <div class="container" @mouseleave="showIconsAnimation = false">
            <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
                <div class="col-lg-8 text-center">
                    <h2 class="display-3">Font Awesome Icons</h2>
                    <p class="lead">
                        The free package contains over 1588 icons which are looking great in any design. Make sure you check all of them and use those that you like the most.
                    </p>
                    <div class="btn-wrapper">
                        <a href="https://fontawesome.com/icons?d=gallery&m=free"
                           class="btn btn-primary" target="_blank">View free icons</a>
                        <a href="https://fontawesome.com/icons" target="_blank" class="btn btn-default mt-3 mt-md-0">View
                            all icons</a>
                    </div>
                </div>
            </div>
            <div class="blur--hover">
                <a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html">
                    <div class="icons-container blur-item mt-5" :class="{'on-screen': showIconsAnimation}">
                        <!-- Center -->
                        <i class="fa fa-font-awesome-flag"></i>
                        <!-- Right 1 -->
                        <i class="fa fa-font-awesome-flag"></i>
                        <i class="fa fa-font-awesome-flag"></i>
                        <i class="fa fa-font-awesome-flag"></i>
                        <!-- Right 2 -->
                        <i class="fa fa-font-awesome-flag"></i>
                        <i class="fa fa-font-awesome-flag"></i>
                        <i class="fa fa-font-awesome-flag"></i>
                        <!-- Left 1 -->
                        <i class="fa fa-font-awesome-flag"></i>
                        <i class="fa fa-font-awesome-flag"></i>
                        <i class="fa fa-font-awesome-flag"></i>
                        <!-- Left 2 -->
                        <i class="fa fa-font-awesome-flag"></i>
                        <i class="fa fa-font-awesome-flag"></i>
                        <i class="fa fa-font-awesome-flag"></i>
                    </div>
                    <span class="blur-hidden h5 text-success">Explore all the 1588+ Fontawesome Icons</span>
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      showIconsAnimation: false
    }
  },
  methods: {
    onScroll (evt) {
      console.log(evt)
    }
  }
}
</script>
<style>
</style>
