import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
  


    return (
        <>



            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion static-top shadow" id="accordionSidebar" style={{ marginTop: '0' }}>

                {/* <!-- Sidebar - Brand --> */}
                <div className="sidebar-brand d-flex align-items-center justify-content-center" href="" style={{ fontSize: "20px", color: "black" }}  >





                </div>
                <br />
                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0 " />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/grocery" onClick={() => {
                       
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Grocery</span></Link>
                </li>

                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/mobiles" onClick={() => {
                      
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Mobiles</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/fashion" onClick={() => {
                       
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}> Fashion</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/electronics" onClick={() => {
                     
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Electronics</span></Link>

                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/portal/furniture" onClick={() => {
                        
                    }}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{ fontSize: "17px" }}>Home & Furniture</span></Link>

                </li>
              
            </ul >





        </>
    )
}

export default Sidebar