import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a8fa09c = () => interopDefault(import('../_theme/pages/Category.vue' /* webpackChunkName: "_theme/pages/Category" */))
const _007f5bfa = () => interopDefault(import('../_theme/pages/Checkout.vue' /* webpackChunkName: "" */))
const _4b4f6974 = () => interopDefault(import('../_theme/pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _79079d51 = () => interopDefault(import('../_theme/pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _9f29581a = () => interopDefault(import('../_theme/pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _cc0dc0cc = () => interopDefault(import('../_theme/pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _aa51a24c = () => interopDefault(import('../_theme/pages/ContactUs.vue' /* webpackChunkName: "_theme/pages/ContactUs" */))
const _1ac17d13 = () => interopDefault(import('../_theme/pages/Home.vue' /* webpackChunkName: "" */))
const _4a86695d = () => interopDefault(import('../_theme/pages/MyAccount.vue' /* webpackChunkName: "_theme/pages/MyAccount" */))
const _639597c1 = () => interopDefault(import('../_theme/pages/MyAccount/AdressBook.vue' /* webpackChunkName: "_theme/pages/MyAccount/AdressBook" */))
const _a56f38ee = () => interopDefault(import('../_theme/pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/BillingDetails" */))
const _131cd324 = () => interopDefault(import('../_theme/pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "_theme/pages/MyAccount/LoyaltyCard" */))
const _a7493172 = () => interopDefault(import('../_theme/pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyNewsletter" */))
const _866c61ea = () => interopDefault(import('../_theme/pages/MyAccount/MyProfile.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyProfile" */))
const _044cb07d = () => interopDefault(import('../_theme/pages/MyAccount/MyReviews.vue' /* webpackChunkName: "_theme/pages/MyAccount/MyReviews" */))
const _f0beeeb0 = () => interopDefault(import('../_theme/pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "_theme/pages/MyAccount/OrderHistory" */))
const _a8c1153c = () => interopDefault(import('../_theme/pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "_theme/pages/MyAccount/ShippingDetails" */))
const _6a6cad6b = () => interopDefault(import('../_theme/pages/Product.vue' /* webpackChunkName: "_theme/pages/Product" */))
const _481c3d06 = () => interopDefault(import('../_theme/pages/ResetPassword.vue' /* webpackChunkName: "" */))
const _8f8dbf48 = () => interopDefault(import('../_theme/pages/TermsAndConditions.vue' /* webpackChunkName: "_theme/pages/TermsAndConditions" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _7a8fa09c,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _007f5bfa,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _4b4f6974,
      name: "billing___en"
    }, {
      path: "payment",
      component: _79079d51,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _9f29581a,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _cc0dc0cc,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _007f5bfa,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _4b4f6974,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _79079d51,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _9f29581a,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _cc0dc0cc,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _aa51a24c,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _1ac17d13,
    name: "home___de"
  }, {
    path: "/Home",
    component: _1ac17d13,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _4a86695d,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _639597c1,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _a56f38ee,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _131cd324,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _a7493172,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _866c61ea,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _044cb07d,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _f0beeeb0,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _a8c1153c,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _6a6cad6b,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _481c3d06,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _481c3d06,
    name: "ResetPassword___en"
  }, {
    path: "/TermsAndConditions",
    component: _8f8dbf48,
    name: "TermsAndConditions___en"
  }, {
    path: "/de/Category",
    component: _7a8fa09c,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _007f5bfa,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _4b4f6974,
      name: "billing___de"
    }, {
      path: "payment",
      component: _79079d51,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _9f29581a,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _cc0dc0cc,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _007f5bfa,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _4b4f6974,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _79079d51,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _9f29581a,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _cc0dc0cc,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _aa51a24c,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _1ac17d13,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _4a86695d,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _639597c1,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _a56f38ee,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _131cd324,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _a7493172,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _866c61ea,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _044cb07d,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _f0beeeb0,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _a8c1153c,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _6a6cad6b,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _481c3d06,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _481c3d06,
    name: "ResetPassword___de"
  }, {
    path: "/de/TermsAndConditions",
    component: _8f8dbf48,
    name: "TermsAndConditions___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _4a86695d,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _6a6cad6b,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _7a8fa09c,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _4a86695d,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _6a6cad6b,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _7a8fa09c,
    name: "category___en"
  }, {
    path: "/",
    component: _1ac17d13,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
