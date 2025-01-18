import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../..//assets/hand_icon.png'
import list_product_icon from '../../assets/hand_icon.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
        <div className='sidebarItem'>
            <img src={add_product_icon} alt='add product' className='sidebarIcon' />
            <p>Add Product</p>
        </div>
        </Link>

        <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
        <div className='sidebarItem'>
            <img src={list_product_icon} alt='add product' className='sidebarIcon' />
            <p>Product List</p>
        </div>
        </Link>
      
    </div>
  )
}

export default Sidebar
