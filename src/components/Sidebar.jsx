import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../public/dowell-logo.svg";
import { MdOutlineDashboardCustomize, MdRssFeed, MdOutlineLogout } from "react-icons/md";


const urls = [
  {
    icon: <MdOutlineDashboardCustomize color='#61B84C' />,
    label: 'Dashboard'
  },
  {
    icon: <MdRssFeed color='#61B84C' />,
    label: 'Report'
  }
]

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <div className='sidebar'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <hr style={{ opacity: 0.05 }}/>
        <div className='urlContainer'>
          {urls?.map((url, index) => (
            <div className='url' key={index}>
                {url?.icon}
                {url?.label}
            </div>
          ))}
          <div className='url' onClick={() => navigate('/signin')}>
            <MdOutlineLogout color='#61B84C' />
            Logout
          </div>
        </div>
    </div>
  )
}

export default Sidebar