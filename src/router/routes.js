import Home from '@/pages/home'
import Detail from '@/pages/detail'
import Category from '@/pages/category'

const createRoutes = (routesArr) => routesArr.map((component) => ({ name: component.name, path: `/${component.name}`, component }))

const routes = createRoutes([Home, Detail, Category])

export default [
  ...routes,
  {
    path: '*',
    redirect: `/${Home.name}`
  }
]
