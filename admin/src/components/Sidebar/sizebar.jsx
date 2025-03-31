import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
export default function Sizebar() {
  return (
    <Fragment>


<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-90">
    🍽
    </div>
    <div className="sidebar-brand-text mx-3"> FOODPARADISE <sup></sup></div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item">
    <Link className="nav-link" to="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Thống kê</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    
</div>

<li className="nav-item">
    <Link className="nav-link" to="/Indexsp">
        <i className="fas fa-bread-slice"></i>
        <span>Món Ăn</span></Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/Indexdm">
        <i className="fas fa-tags"></i>
        <span>Danh mục</span></Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/Indexhd">
        <i className="fas fa-comments-dollar"></i>
        <span>Đơn hàng</span></Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/Indexhdn">
        <i className="fas fa-comments-dollar"></i>
        <span>Hóa đơn nhập</span></Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/Indexkhohang">
        <i className="fas fa-truck"></i>
        <span>Kho hàng</span></Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/Indexkh">
        <i className="fas fa-user-friends"></i>
        <span>Khách hàng</span></Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/Indexnv">
        <i className="fas fa-user-check"></i>
        <span>Nhân viên</span></Link>
</li>

<li className="nav-item">
    <Link className="nav-link" to="/Indextaikhoan">
        <i className="fas fa-fw fa-cog"></i>
        <span>Tài khoản</span></Link>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Cài đặt</span>
    </a>
    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="{{route('slider')}}">Slider</a>
            <a className="collapse-item" href="{{route('qlyblog')}}">Blog</a>
            

        </div>
    </div>
</li>

<hr className="sidebar-divider"/>

<div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>
       
    </Fragment>
  )
}
