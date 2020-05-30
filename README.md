# [Shablon <br>Laravel-vue Starter Template](http://shablon.idesignzone.com)

 ![version](https://img.shields.io/badge/version-1.0.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/idesignzone/shablon.svg?maxAge=2592000)](https://github.com/idesignzone/shablon/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/idesignzone/shablon.svg?maxAge=2592000)](https://github.com/idesignzone/shablon/issues?q=is%3Aissue+is%3Aclosed)
 
 ## Technologies
 
 [<img src="http://shablon.idesignzone.com/img/brand/laravel.jpg" width="60" height="60"/>](https://www.laravel.com/) [<img src="http://shablon.idesignzone.com/img/brand/vue.jpg" width="60" height="60" />](https://vuejs.org/) [<img src="http://shablon.idesignzone.com/img/brand/bootstrap.jpg" width="60" height="60" />](https://getbootstrap.com/) [<img src="http://shablon.idesignzone.com/img/brand/sass.jpg" width="60" height="60" />](https://sass-lang.com/) [<img src="http://shablon.idesignzone.com/img/brand/fa.jpg" width="60" height="60" />](https://fontawesome.com/) [<img src="http://shablon.idesignzone.com/img/brand/ps.jpg" width="60" height="60" />](https://www.adobe.com/products/photoshop.html) 

| Landing | Dashboard |
| ---  | --- |
| [![Shablon Landing](http://shablon.idesignzone.com/img/theme/landing-showcase.png)](http://shablon.idesignzone.com) | [![Shablon Dashboard](http://shablon.idesignzone.com/img/theme/dashboard-showcase.png)](http://shablon.idesignzone.com/dashboard) |

## Features
- Laravel 7
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register, email verification and password reset
- Authentication with JWT
- Socialite integration
- Bootstrap 4 + Font Awesome 5

## Quick start

- [Download from Github](https://github.com/idesignzone/shablon/archive/master.zip).
- Clone the repository: `git clone https://github.com/idesignzone/shablon.git`.

## Installation
- `composer create-project --prefer-dist cretueusebiu/laravel-vue-spa`
- Edit `.env` and set your database connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `php artisan migrate`
- `npm install`

## Usage

#### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

#### Production

```bash
npm run production
```

## Email Verification

To enable email verification make sure that your `App\User` model implements the `Illuminate\Contracts\Auth\MustVerifyEmail` contract.

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



## Credits
- laravel-vue-spa: <https://github.com/cretueusebiu/laravel-vue-spa>
- vue-argon-design-system: <https://github.com/creativetimofficial/vue-argon-design-system>
- vue-argon-dashboard: <https://github.com/creativetimofficial/vue-argon-dashboard>

## Licensing

- Copyright 2020 iDesignzone (https://github.com/idesignzone/shablon/master/README.md)
- Licensed under MIT (https://github.com/idesignzone/shablon/blob/master/LICENSE)
