import Home from '@/pages/home'
import Mine from '@/pages/mine'
import Friends from '@/pages/friends'

const route = [
  {
    path:'/',
    exact:true,
    name:'发现音乐',
    component:Home
  },
  {
    path:'/mine',
    name:'我的音乐',
    component:Mine
  },
  {
    path:'/',
    name:'朋友',
    component:Friends
  }
]
export default route
