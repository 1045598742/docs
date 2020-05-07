import SwiperItem from "./src/swiper-item";

SwiperItem.install = Vue => {
    Vue.component(SwiperItem.name,SwiperItem)
}

export default SwiperItem