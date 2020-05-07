//用来把组件全部收集起来
import Button from "./button";//按钮组件
import Pagination from "./pagination";//分页组件
import Swiper from "./swiper";
import SwiperItem from "./swiper-item";
import Tree from "./tree";
import Select from "./select";
import Option from "./option";


//把所有组件存储起来

const components = [Button,Pagination,Swiper,SwiperItem,Tree,Select,Option]

const install = Vue => {
    //按需引入
    //判断我们的组件是否安装
    if(install.installed) return;
    install.installed = true;
    components.map(component=>Vue.use(component))
}

if(typeof window !== 'undefined' && window.Vue){
    install()
}

export default{
    install
}
export {
    Button,
    Pagination,
    Swiper,
    SwiperItem,
    Tree,
    Select,
    Option
}

