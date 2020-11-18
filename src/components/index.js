import Vue from 'vue'
import YHeader from './y-header'
import YNav from './y-nav'

const components = [YHeader, YNav]
components.map(cpt => Vue.component(cpt.name, cpt))
