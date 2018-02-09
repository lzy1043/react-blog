import ArticlesList from '../Articles/ArticlesList'
import Open from '../Open'
import About from '../About'
import ArticleDetail from '../Articles/ArticleDetail'
export default [
  {
    name: '首页',
    path: '/',
    isNav: true,
    component: ArticlesList,
    navLink: '/'
  },
  {
    name: '分类',
    path: '/category',
    isNav: true,
    component: ArticlesList
  },
  {
    name: '开源',
    path: '/open',
    isNav: true,
    component: Open
  },
  {
    name: '关于',
    path: '/about',
    isNav: true,
    component: About
  },
  {
    name: '文章列表',
    path: '/ArticlesList',
    component: ArticlesList
  },
  {
    name: '文章详情',
    path: '/articles/:id',
    component: ArticleDetail
  }
]