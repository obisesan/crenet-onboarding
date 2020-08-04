export { default as About } from '../../components/About.vue'
export { default as ComicsSection } from '../../components/ComicsSection.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as LatestVideos } from '../../components/LatestVideos.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MarvelHq } from '../../components/MarvelHq.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as News } from '../../components/News.vue'
export { default as FeaturedVideos } from '../../components/featuredVideos.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/About'}" */).then(c => c.default || c)
export const LazyComicsSection = import('../../components/ComicsSection.vue' /* webpackChunkName: "components/ComicsSection'}" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer'}" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header'}" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/Hero'}" */).then(c => c.default || c)
export const LazyLatestVideos = import('../../components/LatestVideos.vue' /* webpackChunkName: "components/LatestVideos'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyMarvelHq = import('../../components/MarvelHq.vue' /* webpackChunkName: "components/MarvelHq'}" */).then(c => c.default || c)
export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/Modal'}" */).then(c => c.default || c)
export const LazyNews = import('../../components/News.vue' /* webpackChunkName: "components/News'}" */).then(c => c.default || c)
export const LazyFeaturedVideos = import('../../components/featuredVideos.vue' /* webpackChunkName: "components/featuredVideos'}" */).then(c => c.default || c)
