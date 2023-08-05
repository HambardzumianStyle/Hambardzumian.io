import { sidebarData } from './sidebarData'
import SidebarItem from '../arrays/SidebarItem'

export default function SlidebarDatamap({color}) {

  return (
    <div className='sidebar'>
      {sidebarData.map((el,index) => <SidebarItem key={index} elm ={el} color={color}/> )}
    </div>
  )
}