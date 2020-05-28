<template>
    <section class="section-hero section-shaped my-0" >
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center pt-12 pb-12">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
<!--                        <img src="img/brand/white.png" style="width: 200px;" class="img-fluid">-->
                      <h1><i class="fa fa-palette text-primary"></i> <span class="font-weight-900 text-white">Shablon</span></h1>
                        <p class="lead text-white mt-4 mb-5">A beautiful Design System for Bootstrap 4. It's Free and Open Source.</p>
                        <div class="btn-wrapper">
                          <router-link to="/" class="btn btn-info text-uppercase">
                            <i class="fa fa-code"></i>
                            Landing
                          </router-link>
                            <base-button tag="a"
                                         href="#"
                                         class="mb-3 mb-sm-0 text-uppercase"
                                         type="white"
                                         icon="ni ni-cloud-download-95">
                                Download
                            </base-button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around stars-and-coded">
                    <div class="col-sm-4">
                        <span class="text-white alpha-7 ml-3">Star us on</span>
                        <a href="https://github.com/idesignzone/shablon" target="_blank" title="Support us on Github">
                            <img src="img/brand/github-white-slim.png" style="height: 26px; margin-top: -3px">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Combined by</span>
                        <a href="https://www.idesignzone.com" target="_blank" title="Design, Development and Customization">
<!--                            <img src="#" class="ml-3" style="height: 30px;">-->
                          <h2 class="d-inline font-weight-800 text-white"><span class="text-info"> i</span>Designzone</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
