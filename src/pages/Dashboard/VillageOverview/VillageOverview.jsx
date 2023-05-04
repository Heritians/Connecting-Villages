import React from 'react'
import './VillageOverview.css'
import Sidebar from '../../../components/Dashboard/Sidebar/Sidebar'
import DashboardDropdown from '../../../components/Dashboard/DashboardDropdown/DashboardDropdown'
const VilageOverview = () => {
  return (
    <div className="villageOverviewContainer">
      <Sidebar />
      <div className="sidebarRightSide">
        <div className="sidebarRightSideTop">
          <div className="dashboardTitle">
            <h2>Dashboard - Village Overview</h2>
          </div>
          <DashboardDropdown/>
        </div>
      </div>
    </div>
  )
}

export default VilageOverview