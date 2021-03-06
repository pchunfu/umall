import Vue from "vue"
import Vuex from "vuex"

import role from "./modules/role"
import manage from "./modules/manage"
Vue.use(Vuex)
import {state,getters,mutations} from "./mutations"
import {actions} from "./actions"
import menu from "./modules/menu"
import cate from "./modules/cate"
import specs from "./modules/specs"
import goods from "./modules/goods"
import member from "./modules/member"
import banner from '../store/modules/banner'
import seckill from '../store/modules/seckill'
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        menu,
        role,
        manage,
        cate,
        specs,
        goods,
        member,
        banner,
        seckill
    }
})