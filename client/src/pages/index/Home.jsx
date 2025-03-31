import React, { Fragment, useEffect, useState } from 'react'
import Silde from '../../components/slider/silde';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Addfood from '../../until/cart';
export default function Home() {
    Addfood();
    const [data, setData] = useState([]);

    const loadData = async () => {
        try{
        const response = await axios.get("http://localhost:5000/api/top5foods");
        setData(response.data);}
        catch (error) {
            console.error("Error in top5foods:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };
    return (
        <Fragment>
            <div className="main">
                <Silde />
                <section id="section-discounts">
                    <div className="container">
                        <div className="section-discounts-wrapper">
                            <div className="homepage-coupon-card">
                                <div className="coupon-card-item">
                                    <div className="coupon-card-item-top">
                                        <div className="description-amount">
                                            <div className="coupon-card-limit"> (Còn 50 lượt) </div>
                                            <p>Giảm 80K</p>
                                        </div>
                                        <div className="description-info">
                                            <p>"cho đơn hàng từ 399K (trừ Combo gia đình, áp dụng món chính)"</p>
                                        </div>
                                    </div>
                                    <div className="coupon-card-item-bottom">
                                        <span className="coupon-card-coupon"> FOOD80K </span>
                                        <span className="btn btnluuma">Lưu mã</span>
                                    </div>
                                </div>
                                <div className="coupon-card-item">
                                    <div className="coupon-card-item-top">
                                        <div className="description-amount">
                                            <div className="coupon-card-limit"> (Còn 70 lượt) </div>
                                            <p>Giảm 90K</p>
                                        </div>
                                        <div className="description-info">
                                            <p>"cho đơn hàng từ 999K (trừ Combo gia đình, áp dụng toàn menu)"</p>
                                        </div>
                                    </div>
                                    <div className="coupon-card-item-bottom">
                                        <span className="coupon-card-coupon"> TASTY90K </span>
                                        <span className="btn btnluuma">Lưu mã</span>
                                    </div>
                                </div>
                                <div className="coupon-card-item">
                                    <div className="coupon-card-item-top">
                                        <div className="description-amount">
                                            <div className="coupon-card-limit"> (Còn 70 lượt) </div>
                                            <p>Giảm 20K</p>
                                        </div>
                                        <div className="description-info">
                                            <p>"cho đơn hàng từ 199K (trừ Combo gia đình, áp dụng món ăn nhanh)"</p>
                                        </div>
                                    </div>
                                    <div className="coupon-card-item-bottom">
                                        <span className="coupon-card-coupon"> YUM20K </span>
                                        <span className="btn btnluuma">Lưu mã</span>
                                    </div>
                                </div>
                                <div className="coupon-card-item">
                                    <div className="coupon-card-item-top">
                                        <div className="description-amount">
                                            <div className="coupon-card-limit"> (Còn 72 lượt) </div>
                                            <p>Giảm 10K</p>
                                        </div>
                                        <div className="description-info">
                                            <p>"cho đơn hàng từ 99K (trừ Combo gia đình, áp dụng đồ uống)"</p>
                                        </div>
                                    </div>
                                    <div className="coupon-card-item-bottom">
                                        <span className="coupon-card-coupon"> DRINK10K </span>
                                        <span className="btn btnluuma">Lưu mã</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-search">
                    <div className="container-medium">
                        <div className="homepage-search-wrapper">
                            <h2 className="homepage-search-heading">Bạn muốn ăn gì hôm nay?</h2>
                            <div className="homepage-search-inner">
                                <form action="/spotlight" method="GET">
                                    <input
                                        type="text"
                                        name="keyword"
                                        placeholder="Hãy thử bắt đầu với Phở bò xem sao"
                                        className="homepage-search-control"
                                    />
                                    <button className="homepage-search-submit">
                                        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="homepage-search-content">
                                <p className="home-search-description">Từ khóa nổi bật ngày hôm nay</p>
                                <div className="homepage-search-buttons">
                                    <a href="#" className="homepage-search-button">Cơm tấm</a>
                                    <a href="#" className="homepage-search-button">Bún bò</a>
                                    <a href="#" className="homepage-search-button">Pizza</a>
                                    <a href="#" className="homepage-search-button">Gà rán</a>
                                    <a href="#" className="homepage-search-button">Trà sữa</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-collections">
                    <div className="container--full">
                        <div className="homepage-collections__wrapper">
                            <div className="homepage-collections__item">
                                <Link to="/food" className="collection-grid">
                                    <div className="collection-grid__thumbnail">
                                        <picture style={{ width: '100%' }}>
                                            <img src="../Images/bunchahanoi.jpg" alt="Bún Chả Hà Nội"/>
                                        </picture>
                                    </div>
                                </Link>
                            </div>
                            <div className="homepage-collections__item">
                                <Link to="/food" className="collection-grid">
                                    <div className="collection-grid__thumbnail">
                                        <picture style={{ width: '100%' }}>
                                            <img src="../Images/hutieuthapcam.jpg" alt="Món ăn hàng ngày"/>
                                        </picture>
                                    </div>
                                </Link>
                            </div>
                            <div className="homepage-collections__item">
                                <Link to="/food" className="collection-grid">
                                    <div className="collection-grid__thumbnail">
                                        <picture style={{ width: '100%' }}>
                                            <img src="../Images/banhmi.jpg" alt="Món ăn nhanh"/>
                                        </picture>
                                    </div>
                                </Link>
                            </div>
                            <div className="homepage-collections__item">
                                <Link to="/food" className="collection-grid">
                                    <div className="collection-grid__thumbnail">
                                        <picture style={{ width: '100%' }}>
                                            <img src="../Images/tratraicaynhietdoi.jpg" alt="Trà trái cây nhiệt đới"/>
                                        </picture>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container1">
                        <div className="homepage-food__heading">FoodParadise Top Picks</div>
                        <div className="food-type">
                            <div className="row">
                                {/* Render món ăn từ dữ liệu */}
                                {data.map((item) => (
                                    <div key={item.ma_mon_an} className="col p-2-4">
                                        <div id={`${item.ma_mon_an}`} className="food">
                                            <div className="food-img-wrap" style={{ marginBottom: '8px' }}>
                                                <Link to={`/detail/${item.ma_mon_an}`} className="food-img food-img--small">
                                                    <img className="food-img-1" src={item.anh_monan} alt={item.ten_mon_an}/>
                                                    <img className="food-img-2" src={item.anhhover1} alt={item.ten_mon_an}/>
                                                </Link>
                                                <div className="food-size">
                                                    <p>Thêm nhanh vào giỏ hàng +</p>
                                                    <div className="btn btn--size">Nhỏ</div>
                                                    <div className="btn btn--size">Vừa</div>
                                                    <div className="btn btn--size">Lớn</div>
                                                </div>
                                            </div>
                                            <div className="food-grid__reviews">
                                                <div className="reviews-rating">
                                                    <div className="reviews-rating__vote">5.0</div>
                                                    <div className="reviews-rating__star"></div>
                                                    <div className="reviews-rating__number">({item.total_quantity})</div>
                                                </div>
                                            </div>
                                            <div className="food-content">
                                                <div style={{ display: 'none' }} className="food-content__option">
                                                    <div className="food-content__option-item-wrap active">
                                                        <span data={item.ghi_chu}></span>
                                                    </div>
                                                </div>
                                                <a className="food-name">{item.ten_mon_an}</a>
                                                <div className="food-price-wrap">
                                                    <div className="food-price">{formatCurrency(item.gia)}</div>
                                                </div>
                                                <div className="food-discount">{item.thongbao}</div>
                                                <div className="promotion-tag food-tag">{item.promotion}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-food">
                    <div className="container">
                        <div className="homepage-food__heading">Daily Meal Favorites</div>
                        <div className="bestseller__content active">
                            <div className="row">
                                <div className="col p-2-4">
                                    <div className="food">
                                        <div className="food-img-wrap" style={{ marginBottom: '8px' }}>
                                            <a href="./food-detail.html" className="food-img food-img--small">
                                                <img className="food-img-1" src="/Images/bunmoc.jpg" alt="Bún Mọc"/>
                                                <img className="food-img-2" src="/Images/bunmoctopmo.jpg" alt="Bún Mọc"/>
                                            </a>
                                            <div className="food-size">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--size">Nhỏ</div>
                                                <div className="btn btn--size">Vừa</div>
                                                <div className="btn btn--size">Lớn</div>
                                            </div>
                                        </div>
                                        <div className="food-content">
                                            <div style={{ display: 'none' }} className="food-content__option">
                                                <div className="food-content__option-item-wrap active">
                                                    <span data="Không cay"></span>
                                                </div>
                                            </div>
                                            <a href="./food-detail.html" className="food-name">Bún Mọc</a>
                                            <div className="food-price-wrap">
                                                <div className="food-price-new">45.000đ</div>
                                                <div className="food-price">60.000đ</div>
                                                <div className="food-percent">-25%</div>
                                            </div>
                                            <div className="food-discount">Ưu đãi giờ trưa đặc biệt</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-2-4">
                                    <div className="food">
                                        <div className="food-img-wrap" style={{ marginBottom: '8px' }}>
                                            <a href="./food-detail.html" className="food-img food-img--small">
                                                <img className="food-img-1" src="/Images/pho.jpg" alt="Phở Bò"/>
                                                <img className="food-img-2" src="/Images/phobo.jpg" alt="Phở Bò"/>
                                            </a>
                                            <div className="food-size">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--size">Nhỏ</div>
                                                <div className="btn btn--size">Vừa</div>
                                                <div className="btn btn--size">Lớn</div>
                                            </div>
                                        </div>
                                        <div className="food-content">
                                            <div style={{ display: 'none' }} className="food-content__option">
                                                <div className="food-content__option-item-wrap active">
                                                    <span data="Thêm bánh"></span>
                                                </div>
                                            </div>
                                            <a href="./food-detail.html" className="food-name">Phở Bò Tái</a>
                                            <div className="food-price-wrap">
                                                <div className="food-price-new">50.000đ</div>
                                                <div className="food-price">60.000đ</div>
                                                <div className="food-percent">-17%</div>
                                            </div>
                                            <div className="food-discount">Mua 2 giảm thêm 10K</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-2-4">
                                    <div className="food">
                                        <div className="food-img-wrap" style={{ marginBottom: '8px' }}>
                                            <a href="./food-detail.html" className="food-img food-img--small">
                                                <img className="food-img-1" src="/Images/bun_cha.jpg" alt="Bún Chả Hà Nội"/>
                                                <img className="food-img-2" src="/Images/bunchahanoi.jpg" alt="Bún Chả Hà Nội"/>
                                            </a>
                                            <div className="food-size">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--size">Nhỏ</div>
                                                <div className="btn btn--size">Vừa</div>
                                                <div className="btn btn--size">Lớn</div>
                                            </div>
                                        </div>
                                        <div className="food-content">
                                            <div style={{ display: 'none' }} className="food-content__option">
                                                <div className="food-content__option-item-wrap active">
                                                    <span data="Không hành"></span>
                                                </div>
                                            </div>
                                            <a href="./food-detail.html" className="food-name">Bún Chả Hà Nội</a>
                                            <div className="food-price-wrap">
                                                <div className="food-price-new">40.000đ</div>
                                                <div className="food-price">50.000đ</div>
                                                <div className="food-percent">-20%</div>
                                            </div>
                                            <div className="food-discount">Ưu đãi cuối tuần</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-2-4">
                                    <div className="food">
                                        <div className="food-img-wrap" style={{ marginBottom: '8px' }}>
                                            <a href="ThongTinMonAn.Html" className="food-img food-img--small">
                                                <img className="food-img-1" src="/Images/ga_ran_1.jpg" alt="Gà Rán Crispy"/>
                                                <img className="food-img-2" src="/Images/ga_ran.png" alt="Gà Rán Crispy"/>
                                            </a>
                                            <div className="food-size">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--size">Nhỏ</div>
                                                <div className="btn btn--size">Vừa</div>
                                                <div className="btn btn--size">Lớn</div>
                                            </div>
                                        </div>
                                        <div className="food-content">
                                            <a href="ThongTinMonAn.Html" className="food-name">Gà Rán Crispy</a>
                                            <div className="food-price-wrap">
                                                <div className="food-price-new">65.000đ</div>
                                                <div className="food-price">80.000đ</div>
                                                <div className="food-percent">-19%</div>
                                            </div>
                                            <div className="food-discount">Combo gia đình giảm 15K</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-2-4">
                                    <div className="food">
                                        <div className="food-img-wrap" style={{ marginBottom: '8px' }}>
                                            <a href="ThongTinMonAn.Html" className="food-img food-img--small">
                                                <img className="food-img-1" src="/Images/trasuatruyenthong.jpg" alt="Trà Sữa Trân Châu"/>
                                                <img className="food-img-2" src="/Images/trasuatruyenthong1.jpg" alt="Trà Sữa Trân Châu"/>
                                            </a>
                                            <div className="food-size">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--size">Nhỏ</div>
                                                <div className="btn btn--size">Vừa</div>
                                                <div className="btn btn--size">Lớn</div>
                                            </div>
                                        </div>
                                        <div className="food-content">
                                            <a href="ThongTinMonAn.Html" className="food-name">Trà Sữa Trân Châu</a>
                                            <div className="food-price-wrap">
                                                <div className="food-price-new">25.000đ</div>
                                                <div className="food-price">35.000đ</div>
                                                <div className="food-percent">-29%</div>
                                            </div>
                                            <div className="food-discount">Mua 2 tặng 1 ly nhỏ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-basic">
                    <div className="homepage-basic__wrapper">
                        <div className="homepage-basic__content">
                            <h2>Combo Meal 7 Days</h2>
                            <p>
                                Nhập
                                <span style={{ fontWeight: 'bold' }}>Food7Days </span>
                                - Tặng 1 ly trà sữa miễn phí
                            </p>
                            <a href="#" className="btn-primary">Đặt ngay</a>
                        </div>
                        <div className="homepage-basic__image">
                            <a href="#">
                                <picture style={{ width: '100%' }}>
                                    <img src="../Images/combomeal.png" alt="Combo Meal" />
                                </picture>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="homepage-brands">
                    <div className="container--full">
                        <div className="homepage-brands__wrapper">
                            <div className="homepage-banner__item homepage-banner__item--cm24">
                                <div className="homepage-brands__image">
                                    <img src="../Images/menu1.jpg" alt="Món Ngon Mỗi Ngày" />
                                </div>
                                <div className="homepage-brands__content">
                                    <h2>Món Ngon Mỗi Ngày</h2>
                                    <p>
                                        Thực đơn phong phú cho mọi bữa ăn
                                        <br className="mobile--hidden" />
                                        <b style={{ fontSize: '130%' }}>Món chính chỉ từ 39K</b>
                                    </p>
                                    <a href="#" className="btn-brands">Đặt ngay</a>
                                </div>
                            </div>
                            <div className="homepage-banner__item homepage-banner__item--cm24">
                                <div className="homepage-brands__image">
                                    <img src="../Images/douong.jpg" alt="Đồ Uống FoodParadise"/>
                                </div>
                                <div className="homepage-brands__content">
                                    <h2>FoodParadise Drinks</h2>
                                    <p>
                                        Đồ uống tươi mát cho mọi thời điểm
                                        <br className="mobile--hidden" />
                                        <b style={{ fontSize: '130%' }}>Combo 2 ly chỉ từ 49K</b>
                                    </p>
                                    <a href="#" className="btn-brands">Đặt ngay</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-care-and-share">
                    <div className="container--full">
                        <div className="homepage-care-and-share__inner">
                            <a href="#">
                                <div className="homepage-care-and-share__image">
                                    <picture>
                                        <img src="../Images/care_and_share.png" alt="Chia Sẻ Bữa Ăn" />
                                    </picture>
                                </div>
                                <div className="homepage-care-and-share__content">
                                    <picture>
                                        <img src="https://cdn-icons-png.flaticon.com/512/8673/8673386.png" alt="FoodParadise Charity"/>
                                    </picture>
                                    <h2>
                                        Góp phần mang lại <br /> bữa ăn ấm no
                                        <br className="mobile--hidden" />
                                        cho trẻ em khó khăn
                                    </h2>
                                    <div className="btn--primary">Tìm hiểu thêm về Chia Sẻ Bữa Ăn</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="homepage-hashtag">
                    <div className="container--full">
                        <div className="homepage-hashtag__inner">
                            <p className="homepage-hashtag__left">
                                Các món ăn tươi ngon được chế biến tại Việt Nam và dành cho người Việt Nam!
                                <br />
                                Hơn 3 triệu bữa ăn đã được giao đến tay khách hàng và nhận được sự hài lòng!
                            </p>
                            <p className="homepage-hashtag__title">#FoodParadise</p>
                            <p className="homepage-hashtag__right">
                                Giải pháp đặt món
                                <br />
                                Ngon mỗi ngày
                            </p>
                        </div>
                    </div>
                </section>
                <section className="homepage-service">
                    <div className="container--full">
                        <div className="homepage-service__grid">
                            <div className="homepage-service__item">
                                <div className="infomation-card">
                                    <a href="#" className="infomation-card">
                                        <div className="infomation-card__thumbnail">
                                            <img src="../Images/foodparadise-investors.png" alt="Câu chuyện FoodParadise"/>
                                        </div>
                                        <div className="infomation-card__buttons">
                                            <span className="infomation-card__title">Câu chuyện FoodParadise</span>
                                            <span className="infomation-card__button">
                                                <i className="fa-solid fa-arrow-up fa-rotate-45"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="homepage-service__item">
                                <div className="infomation-card">
                                    <a href="#" className="infomation-card">
                                        <div className="infomation-card__thumbnail">
                                            <img src="../Images/giaodoan.jpg" alt="Các nền tảng giao hàng"/>
                                        </div>
                                        <div className="infomation-card__buttons">
                                            <span className="infomation-card__title">Các nền tảng giao hàng</span>
                                            <span className="infomation-card__button">
                                                <i className="fa-solid fa-arrow-up fa-rotate-45"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="homepage-service__list">
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Miễn phí giao hàng
                                    <br />
                                    cho đơn từ 100K
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Hoàn tiền trong 24h
                                    <br />
                                    nếu món ăn không ngon
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Giao tận nơi nhanh chóng
                                    <br />
                                    trong 30 phút
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Nguyên liệu tươi sạch
                                    <br />
                                    từ Việt Nam
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-irl">
                    <div className="container--full">
                        <h2 className="homepage-irl__title">Nhật ký FoodParadise</h2>
                        <p className="homepage-irl__description">Chia sẻ những bữa ăn ngon cùng #FoodParadise</p>
                        <div className="homepage-irl__slide slick-slider">
                            <button className="slick-arrow slick-prev">
                                <i className="fa-solid fa-arrow-left fa-2xl"></i>
                            </button>
                            <div className="slick-list">
                                <img src="../Images/meal1.jpg" alt="Bữa ăn FoodParadise 1" />
                                <img src="../Images/meal2.jpg" alt="Bữa ăn FoodParadise 2" />
                                <img src="../Images/meal3.jpg" alt="Bữa ăn FoodParadise 3" />
                                <img src="../Images/meal4.png" alt="Bữa ăn FoodParadise 4" />
                                <img src="../Images/foodparadise-charity.png" alt="Bữa ăn FoodParadise 5"/>
                            </div>
                            <button className="slick-arrow slick-next">
                                <i className="fa-solid fa-arrow-right fa-2xl"></i>
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </Fragment>
    );
}
