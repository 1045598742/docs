import Swiper from "./src/swiper";

Swiper.install = Vue => {
    Vue.component(Swiper.name,Swiper)
}

export default Swiper