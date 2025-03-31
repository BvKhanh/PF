import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../until/userContext';
import { LoadData } from '../../until/cartactive';

export default function Navbar() {
    const { user, logoutUser } = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutUser();
        navigate('/');
        var list = JSON.parse(localStorage.getItem("cart")) || [];
        list = [];
            localStorage.setItem("cart", JSON.stringify(list));
            LoadData();
      };
  return (

      <Fragment>
      <header className="site-header">
        
        <div className="topbar" style={{display: 'block'}}>
            <a href="">Ưu đãi giảm giá 20% hôm nay  </a>
            <a href="Allmonan.html"> " Mua ngay "</a>

        </div>
        <div className="header">
            <div className="header-inner">

                <div className="header__logo">
                    <Link to="/">
                        <img src="../Images/logo.png" alt="logo-FoodParadise" />
                    </Link>

                </div>
                <div className="header__navbar hide-on-mobile-tablet">

                    <ul className="header__navbar-list">
                        <li className="header__navbar-food">
                            <Link to="/food" className="header__navbar-link">
                                FoodParadise
                            </Link>
                            
                            <div className="header__navbar-food-menu-wrap">
                                <div className="header__navbar-food-menu">

                                    <div className="header__navbar-food-col">
                                        <a href="" className="header__navbar-food-heading">Thực đơn</a>
                                        <ul>
                                            <li>
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Thu Đông</p>
                                                    <p className="header__navbar-food-item-link-content">Các món súp và lẩu nóng hổi</p>
                                                </a>
                                            </li>  
                                            <li>
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Chia Sẻ Yêu Thương</p>
                                                    <p className="header__navbar-food-item-link-content">10% doanh thu hỗ trợ trẻ em</p>
                                                </a>
                                            </li> 
                                            <li>
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Hương Vị Việt</p>
                                                    <p className="header__navbar-food-item-link-content">Món ăn đậm chất truyền thống</p>
                                                </a>
                                            </li> 
                                            <li>
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Combo Cơ Bản<span className="hot-food">HOT</span></p>
                                                    <p className="header__navbar-food-item-link-content">Giá rẻ - Ngon tuyệt hảo</p>
                                                </a>
                                            </li>   
                                        </ul>
                                    </div>
                                    
                                    <div className="header__navbar-food-col">
                                        <a href="" className="header__navbar-food-heading">Danh mục</a>
                                        <ul>
                                            <li className="header__navbar-food-item ">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Tất cả</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Món khai vị</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Món chính</p>
                                                </a>
                                            </li>
                                           
                                            <li className="header__navbar-food-item ">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Món chiên</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Tráng miệng</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Đồ uống</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item ">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Combo</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Món chay</p>
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <div className="header__navbar-food-col">
                                        <a href="" className="header__navbar-food-heading">Xu hướng</a>
                                        <ul>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Đặt trước món mới <span className="new-food">NEW</span></p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Ưu đãi lớn nhất</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Bán chạy nhất<span className="promotion-food">PROMOTION</span></p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Món mới ra mắt</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header__navbar-food-col">
                                        <a href="" className="header__navbar-food-heading">Phổ biến</a>
                                        <ul>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Món hàng ngày</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Đồ mặc trong</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Món gia đình</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Combo tiết kiệm</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header__navbar-food-col">
                                        <a href="" className="header__navbar-food-heading">Công nghệ</a>
                                        <ul>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Edible Coatings</p>
                                                    <p className="header__navbar-food-item-link-content">Lớp phủ ăn được</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Antimicrobial Packaging</p>
                                                    <p className="header__navbar-food-item-link-content">An toàn 99,99%</p>
                                                </a>
                                            </li>
                                            <li className="header__navbar-food-item">
                                                <a href="" className="header__navbar-food-item-link">
                                                    <p className="header__navbar-food-item-link-name">Smart Freezing<span className="hot-food-tag">HOT</span></p>
                                                    <p className="header__navbar-food-item-link-content">Đông lạnh thông minh giữ vị ngon</p>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </li>

                        <li className="header__navbar-item navbar-item--about-foodparadise">
                            <Link to="/about" className="header__navbar-link">Về FoodParadise</Link>
                            <div className="navbar-item--about-foodparadise__menu-wrap">
                                <div className="about-foodparadise__menu-inner">
                                    <a href="index.html">Food</a>
                                    <div className="row">
                                        <div className="col p-3">
                                            <a href="" className="about-foodparadise__menu-inner-item">
                                                <img className="about-foodparadise__menu-item-img" src="./Images/" alt=""/>
                                                <p className="about-foodparadise__menu-item-name">FoodParadise 111</p>
                                                <p className="about-foodparadise__menu-item-content">Tìm hiểu mọi điều về FoodParadise</p>
                                            </a>
                                            
                                        </div>
                                        <div className="col p-3">
                                            <a href="" className="about-foodparadise__menu-inner-item">
                                                <img className="about-foodparadise__menu-item-img" src="./Images/" alt=""/>
                                                <p className="about-foodparadise__menu-item-name">Dịch vụ 100% hài lòng</p>
                                                <p className="about-foodparadise__menu-item-content">Cam kết mang đến trải nghiệm ẩm thực tuyệt vời</p>
                                            </a>
                                            
                                        </div>
                                        <div className="col p-3">
                                            <a href="" className="about-foodparadise__menu-inner-item">
                                                <img className="about-foodparadise__menu-item-img" src="./Images/" alt=""/>
                                                <p className="about-foodparadise__menu-item-name">Paradiseclub - Khách hàng thân thiết</p>
                                                <p className="about-foodparadise__menu-item-content">Những ưu đãi hấp dẫn dành cho khách hàng thân thiết</p>
                                            </a>
                                            
                                        </div>
                                        <div className="col p-3">
                                            <a href="" className="about-foodparadise__menu-inner-item">
                                                <img className="about-foodparadise__menu-item-img" src="./Images/" alt=""/>
                                                <p className="about-foodparadise__menu-item-name">Câu chuyện của chúng tôi</p>
                                                <p className="about-foodparadise__menu-item-content">Hành trình mang ẩm thực đến mọi nhà</p>
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                    </ul>

                </div>

                <div className="header__actions">
                    <div className="header__actions-search">
                        <a className="header__actions-link">
                            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                        </a>
                    </div>
                    <div className="header__actions-account">
                    <Link to="/DangNhap" className="header__actions-link">
                        <i className="fa-solid fa-user fa-xl"></i>
                    </Link>
                    <div className="dropdown-menu">
                        {/* Hiển thị thông tin người dùng hoặc "Tên tài khoản" nếu không có người dùng */}
                        {user ? (
                            <>
                                <a href="" className="dropdown-item">
                                    <i className="fas fa-user"></i> {' '}
                                    {user.name}
                                </a>
                                <Link to="/donhang" className="dropdown-item">
                                    <i className="fas fa-shopping-bag"></i> Đơn hàng
                                </Link>
                                <a href="" className="dropdown-item" onClick={handleLogout}>
                                    <i className="fas fa-sign-out-alt"></i> Đăng xuất
                                </a>
                            </>
                        ) : (
                            <>
                                <Link to="/DangNhap" className="dropdown-item">
                                    <i className="fas fa-sign-in-alt"></i> Đăng nhập
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                    <div className="header__actions-cart-icon">
                        <span className="header__actions-cart-notify">0</span>
                        <Link to="/cart" className="header__actions-link">
                            <i className="fa-solid fa-bag-shopping fa-xl"></i>
                        </Link>
                        <div className="mini-cart-wrap">
                            <div className="mini-cart">
                                <div className="mini-cart-head">
                                    <span><span className="added-food"></span> Sản phẩm </span>
                                    <a href="Cart-page.html">Xem tất cả</a>
                                </div>
                                <ul className="mini-cart__list">
                                    
                                </ul>
                            </div>
                        </div>
                        

                    </div>

                </div>
            </div>
            <div className="search" style= {{ display: 'none'}}>
                <div className="search__inner">
                    <input placeholder="Tìm kiếm sản phẩm..." className="search__input" type="text"/>
                    <img className="search__img" style= {{width: '20px'}}  src="/Images/" alt=""/>
                </div>
            </div>
        </div>

    </header>
      </Fragment>
  )
}
