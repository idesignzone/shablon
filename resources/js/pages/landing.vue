<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-primary"> <!-- shape-default / shape-dark / shape-light -->
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex pt-12 pb-12">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h1 class="display-3 text-white font-weight-700"><i class="fa fa-palette text-primary"></i> {{ title }}
                  <span>Laravel-vue starter template</span>
                </h1>
                <p class="lead  text-white">Shablon template is based on Bootstrap latest version and valid HTML5, CSS3, SCSS.</p>
                <div class="btn-wrapper">
                  <router-link to="/components" class="btn btn-info text-uppercase">
                    <i class="fa fa-code"></i>
                    components
                  </router-link>
                  <base-button tag="a"
                               href="https://github.com/idesignzone/shablon"
                               class="mb-3 mb-sm-0 text-uppercase"
                               type="white"
                               icon="fa fa-download">
                    Download
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg pt-lg-0 mt-n6">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="row row-grid">
                <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <icon name="fab fa-laravel" type="warning" rounded class="mb-4">
                    </icon>
                    <h6 class="text-warning text-uppercase">Laravel PHP Framework</h6>
                    <p class="description mt-3">Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.</p>
                    <div>
                      <badge type="warning" rounded>VueI18n</badge>
                      <badge type="warning" rounded>ESlint</badge>
                      <badge type="warning" rounded>sass-loader</badge>
                    </div>
                    <base-button tag="a" href="https://laravel.com/" target="_blank" type="warning" class="mt-4">
                      Learn more
                    </base-button>
                  </card>
                </div>
                <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <icon name="fab fa-vuejs" type="success" rounded class="mb-4">
                    </icon>
                    <h6 class="text-success text-uppercase">Vue.js JavaScript Framework</h6>
                    <p class="description mt-3">Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.</p>
                    <div>
                      <badge type="success" rounded>VueRouter</badge>
                      <badge type="success" rounded>Vuex</badge>
                      <badge type="success" rounded>vuex</badge>
                      <badge type="success" rounded>SPA</badge>
                    </div>
                    <base-button tag="a" href="https://vuejs.org/" target="_blank" type="success" class="mt-4">
                      Learn more
                    </base-button>
                  </card>
                </div>
                <div class="col-lg-4">
                  <card class="border-0" hover shadow body-classes="py-5">
                    <icon name="fab fa-bootstrap" type="primary" rounded class="mb-4">
                    </icon>
                    <h6 class="text-primary text-uppercase">Bootstrap Front-end framework</h6>
                    <p class="description mt-3">Bootstrap contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
                    <div>
                      <badge type="primary" rounded>Bootstrap-vue</badge>
                      <badge type="primary" rounded>nouislider</badge>
                      <badge type="primary" rounded>sweetalert</badge>
                    </div>
                    <base-button tag="a" href="https://getbootstrap.com/" target="_blank" type="primary" class="mt-4">
                      Learn more
                    </base-button>
                  </card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg">
        <div class="container">
          <div class="row row-grid align-items-center">
            <div class="col-md-6 order-md-2">
              <img src="img/theme/promo-1.png" class="img-fluid floating">
            </div>
            <div class="col-md-6 order-md-1">
              <div class="pr-md-5">
                <icon name="fa fa-tools" class="mb-5" size="lg" type="success" shadow
                      rounded></icon>
                <h2>Awesome features</h2>
                <p>The kit comes with pre-built pages to help you get started faster. You can change
                  the text and images and you're good to go.</p>
                <ul class="list-unstyled mt-5">
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge type="success" circle class="mr-3" icon="fa fa-magnet"></badge>
                      <h6 class="mb-0">Carefully crafted components</h6>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge type="success" circle class="mr-3" icon="fa fa-toolbox"></badge>
                      <h6 class="mb-0">Amazing page examples</h6>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge type="success" circle class="mr-3" icon="fa fa-wrench"></badge>
                      <h6 class="mb-0">Super friendly support team</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section bg-secondary">
        <div class="container">
          <div class="row row-grid align-items-center">
            <div class="col-md-6">
              <div class="card bg-default shadow border-0">
                <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="card-img-top">
                <blockquote class="card-blockquote">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                       class="svg-bg">
                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                  </svg>
                  <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                  <p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
                    the sea-ice then thaws every summer, and that process will continue whatever
                    happens.</p>
                </blockquote>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pl-md-5">
                <icon name="fa fa-crown" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                <h3>Our customers</h3>
                <p class="lead">Don't let your uses guess by attaching tooltips and popoves to any element.
                  Just make sure you enable them first via JavaScript.</p>
                <p>The kit comes with pre-built pages to help you get started faster. You can change
                  the text and images and you're good to go.</p>
                <p>The kit comes with pre-built pages to help you get started faster. You can change
                  the text and images and you're good to go.</p>
                <a href="#" class="font-weight-bold text-warning mt-5">A beautiful UI Kit for impactful
                  websites</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section section-shaped my-0 overflow-hidden">
        <div class="shape shape-style-1 bg-gradient-warning shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container py-0">
          <div class="row row-grid align-items-center">
            <div class="col-md-6 order-lg-2 ml-lg-auto">
              <div class="position-relative pl-md-5">
                <img src="img/theme/ill-2.svg" class="img-center img-fluid">
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="d-flex px-3">
                <div>
                  <icon name="fab fa-sketch" size="lg" class="bg-gradient-white" color="primary" shadow
                        rounded></icon>
                </div>
                <div class="pl-4">
                  <h4 class="text-white">Modern Interface</h4>
                  <p class="text-white">The Arctic Ocean freezes every winter and much of the sea-ice then
                    thaws every summer, and that process will continue whatever happens.</p>
                </div>
              </div>
              <card shadow class="shadow-lg--hover mt-5">
                <div class="d-flex px-3">
                  <div>
                    <icon name="fa fa-trophy" gradient="success" color="white" shadow
                          rounded></icon>
                  </div>
                  <div class="pl-4">
                    <h5 class="title text-success">Awesome Support</h5>
                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                      every summer, and that process will continue whatever happens.</p>
                    <a href="#" class="text-success">Learn more</a>
                  </div>
                </div>
              </card>
              <card shadow class="shadow-lg--hover mt-5">
                <div class="d-flex px-3">
                  <div>
                    <icon name="fa fa-medal" gradient="warning" color="white" shadow
                          rounded></icon>
                  </div>
                  <div class="pl-4">
                    <h5 class="title text-warning">Modular Components</h5>
                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                      every summer, and that process will continue whatever happens.</p>
                    <a href="#" class="text-warning">Learn more</a>
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-lg-8">
              <h2 class="display-3">The amazing Team</h2>
              <p class="lead text-muted">According to the National Oceanic and Atmospheric Administration,
                Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div class="px-4">
                <img v-lazy="'img/theme/team-1-800x800.jpg'"
                     class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                     style="width: 200px;">
                <div class="pt-4 text-center">
                  <h5 class="title">
                    <span class="d-block mb-1">Ryan Tompson</span>
                    <small class="h6 text-muted">Web Developer</small>
                  </h5>
                  <div class="mt-3">
                    <base-button tag="a" href="#" type="warning" icon="fa fa-twitter" rounded
                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="warning" icon="fa fa-facebook" rounded
                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="warning" icon="fa fa-dribbble" rounded
                                 icon-only></base-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div class="px-4">
                <img v-lazy="'img/theme/team-2-800x800.jpg'"
                     class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                     style="width: 200px;">
                <div class="pt-4 text-center">
                  <h5 class="title">
                    <span class="d-block mb-1">Romina Hadid</span>
                    <small class="h6 text-muted">Marketing Strategist</small>
                  </h5>
                  <div class="mt-3">
                    <base-button tag="a" href="#" type="primary" icon="fa fa-twitter" rounded
                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="primary" icon="fa fa-facebook" rounded
                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="primary" icon="fa fa-dribbble" rounded
                                 icon-only></base-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div class="px-4">
                <img v-lazy="'img/theme/team-3-800x800.jpg'"
                     class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                     style="width: 200px;">
                <div class="pt-4 text-center">
                  <h5 class="title">
                    <span class="d-block mb-1">Alexander Smith</span>
                    <small class="h6 text-muted">UI/UX Designer</small>
                  </h5>
                  <div class="mt-3">
                    <base-button tag="a" href="#" type="info" icon="fa fa-twitter" rounded
                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="info" icon="fa fa-facebook" rounded
                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="info" icon="fa fa-dribbble" rounded
                                 icon-only></base-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div class="px-4">
                <img v-lazy="'img/theme/team-4-800x800.jpg'"
                     class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                     style="width: 200px;">
                <div class="pt-4 text-center">
                  <h5 class="title">
                    <span class="d-block mb-1">John Doe</span>
                    <small class="h6 text-muted">Founder and CEO</small>
                  </h5>
                  <div class="mt-3">
                    <base-button tag="a" href="#" type="success" icon="fa fa-twitter" rounded
                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="success" icon="fa fa-facebook" rounded
                                 icon-only></base-button>
                    <base-button tag="a" href="#" type="success" icon="fa fa-dribbble" rounded
                                 icon-only></base-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg pt-0">
        <div class="container">
          <card gradient="warning"
                no-body
                shadow-size="lg"
                class="border-0">
            <div class="p-5">
              <div class="row align-items-center">
                <div class="col-lg-8">
                  <h3 class="text-white">We made website building easier for you.</h3>
                  <p class="lead text-white mt-3">I will be the leader of a company that ends up being
                    worth billions of dollars, because I got the answers. I understand culture.</p>
                </div>
                <div class="col-lg-3 ml-lg-auto">
                  <base-button tag="a" href="https://github.com/idesignzone/shablon"
                               type="white" block size="lg">
                    Download
                  </base-button>
                </div>
              </div>
            </div>
          </card>
        </div>
      </section>
      <section class="section section-shaped my-0 overflow-hidden">
        <div class="shape shape-style-3 bg-gradient-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container pt-lg pb-300">
          <div class="row text-center justify-content-center">
            <div class="col-lg-10">
              <h2 class="text-white">Build something</h2>
              <p class="lead text-white">According to the National Oceanic and Atmospheric Administration,
                Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent
                tihs year down to low ice.</p>
            </div>
          </div>
          <div class="row row-grid mt-5">
            <div class="col-lg-4">
              <icon name="fa fa-cut" size="lg" gradient="white" shadow round color="primary"></icon>
              <h5 class="text-white mt-3">Building tools</h5>
              <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
            </div>
            <div class="col-lg-4">
              <icon name="fa fa-cube" size="lg" gradient="white" shadow round color="primary"></icon>
              <h5 class="text-white mt-3">Grow your market</h5>
              <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
            </div>
            <div class="col-lg-4">
              <icon name="fa fa-crop" size="lg" gradient="white" shadow round color="primary"></icon>
              <h5 class="text-white mt-3">Launch time</h5>
              <p class="text-white mt-3">Some quick example text to build on the card title and make up the
                bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg pt-lg-0 section-contact-us">
        <div class="container">
          <div class="row justify-content-center mt--300">
            <div class="col-lg-8">
              <card shadow body-classes="p-lg-5 bg-gradient-secondary">
                <h4 class="mb-1">Want to work with us?</h4>
                <p class="mt-0">Your project is very important to us.</p>
                <base-input class="mt-5"
                            alternative
                            placeholder="Your name"
                            addon-left-icon="fa fa-signature">
                </base-input>
                <base-input alternative
                            placeholder="Email address"
                            addon-left-icon="fa fa-envelope">
                </base-input>
                <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="80" placeholder="Type a message..."></textarea>
                </base-input>
                <base-button type="default" round block size="lg">
                  Send Message
                </base-button>
              </card>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg">
        <div class="container">
          <div class="row row-grid justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="display-3">Do you love this awesome
                <span class="text-success">Design System for Bootstrap 4?</span>
              </h2>
              <p class="lead">Cause if you do, it can be yours for FREE. Hit the button below to download this template for free. Start a new project or give an
                old Bootstrap project a new look!</p>
              <div class="btn-wrapper">
                <a href="https://github.com/idesignzone/shablon"
                   class="btn btn-primary mb-3 mb-sm-0">Download</a>
              </div>
              <div class="text-center">
                <h4 class="display-4 mb-5 mt-5">Built using these technologies</h4>
                <div class="row justify-content-center">
                  <div class="col-lg-2 col-4">
                    <a href="https://vuejs.org/" target="_blank" data-toggle="tooltip"
                       data-original-title="Vue.js - The progressive javascript framework">
                      <img v-lazy="'img/brand/vue.jpg'" title="Vue.js"
                           class="img-fluid">
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a href="https://www.laravel.com/" target="_blank" data-toggle="tooltip"
                       data-original-title="[Coming Soon] Sketch - Digital design toolkit">
                      <img v-lazy="'/img/brand/laravel.jpg'" title="Laravel"
                           class="img-fluid">
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a href="https://getbootstrap.com/" target="_blank" data-toggle="tooltip"
                       data-original-title="Bootstrap 4 - Most popular front-end component library">
                      <img v-lazy="'img/brand/bootstrap.jpg'" title="Bootstrap"
                           class="img-fluid">
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a href="https://sass-lang.com/" target="_blank" data-toggle="tooltip"
                       data-original-title="[Coming Soon] Angular - One framework. Mobile &amp; desktop">
                      <img v-lazy="'img/brand/sass.jpg'" title="SASS"
                           class="img-fluid">
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a href="https://fontawesome.com/" target="_blank" data-toggle="tooltip"
                       data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces">
                      <img v-lazy="'img/brand/fa.jpg'" title="Font Awesome"
                           class="img-fluid">
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a href="https://www.adobe.com/products/photoshop.html" data-toggle="tooltip"
                       data-original-title="[Coming Soon] Adobe Photoshop - Software for digital images manipulation">
                      <img v-lazy="'img/brand/ps.jpg'" title="Adobe Photoshop"
                           class="img-fluid">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',
  components: {
  },
  methods: {

  },
  metaInfo () {
    return { title: this.$t('home') }
  },
  data: () => ({
    title: window.config.appName
  }),
  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
