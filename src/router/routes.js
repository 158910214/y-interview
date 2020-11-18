import Home from '@/pages/home'

const createRoutes = (routesArr) => routesArr.map((component) => ({ name: component.name, path: `/${component.name}`, component }))

const routes = createRoutes([Home])

export default [
  ...routes,
  {
    path: '*',
    redirect: `/${Home.name}`
  }
]
