import { Fragment, useEffect, useState } from "react";
import Foodd from "../../until/layoutauto"; 
import useFoodFilter from "../../until/fillter"; 
import { Link, useSearchParams } from "react-router-dom";
import AddFood from "../../until/cart"; 
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default function Dishes() { 
    Foodd(); // Kiểm tra hàm này có cần đổi không
    useFoodFilter(); // Kiểm tra hàm này có cần đổi không
    AddFood(); // Kiểm tra hàm này có cần đổi không

    const [data, setData] = useState([]);
    const [totalDishes, setTotalDishes] = useState(0); 
    const [searchParams, setSearchParams] = useSearchParams();

    const loadData = async () => {
        try {
            const page = searchParams.get('page') || 1;
            const response = await axios.get(`http://localhost:5000/api/getalldishes?page=${page}`); // Đổi endpoint
            setTotalDishes(response.data[0].totaldishes); 
            setData(response.data);
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu món ăn", error);
        }
    };

    const itemsPageSize = 10;

    const handlePageClick = (event) => {
        setSearchParams(params => {
            params.set('page', event.selected + 1);
            console.log(event.selected + 1);
            return params;
        });
    };
    const pageCount = Math.ceil(totalDishes / itemsPageSize); 

    useEffect(() => {
        if (searchParams.has('page')) {
            loadData();
        } else {
            setSearchParams(params => {
                params.set('page', 1);
                return params;
            });
        }
    }, [searchParams, setSearchParams]);

    const handleSearch = async (e) => {
        const searchTerm = e.target.value;
        if (!searchTerm) {
            loadData();
        } else {
            try {
                const response = await axios.get(`http://localhost:5000/api/searchdish/${searchTerm}`);
                setData(response.data);
            } catch (error) {
                console.error("Lỗi khi tìm kiếm món ăn", error);
            }
        }
    };

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };

    return (
        <Fragment>
            <div className="all-dishes-container" style={{ paddingBottom: '30px' }}>
                <div className="dishes-filter">
                    <h2>Món ăn</h2>
                    <div className="dishes-search">
                        <input onChange={handleSearch} placeholder="Tìm kiếm món ăn..." type="text"/>
                        <button>
                            <img src="../Images/icon-search.svg" alt="Tìm kiếm"/>
                        </button>
                    </div>
                    <div className="portion-filter filter-option">
                        <div className="filter-option__inner">
                            <span>Khẩu phần</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <ul className="filter-option__list">
                            <li>Tô nhỏ</li>
                            <li>Tô vừa</li>
                            <li>Tô lớn</li>
                            <li>Combo 2 người</li>
                            <li>Combo 4 người</li>
                        </ul>
                    </div>
                    <div className="dish-type-filter filter-option">
                        <div className="filter-option__inner">
                            <span>Loại món ăn</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <ul className="filter-option__list">
                            <li>Phở</li>
                            <li>Bún</li>
                            <li>Cơm</li>
                            <li>Món nước</li>
                            <li>Món khô</li>
                        </ul>
                    </div>
                    <div className="dishes-sort filter-option">
                        <div className="filter-option__inner">
                            <span>Sắp xếp</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <ul className="filter-option__list">
                            <li>Mới nhất</li>
                            <li>Bán chạy</li>
                            <li>Giá thấp đến cao</li>
                            <li>Giá cao đến thấp</li>
                            <li>% Giảm nhiều nhất</li>
                        </ul>
                    </div>
                </div>
                <div className="container1">
                    <div className="dish-list">
                        <div className="row">
                            {data.map((item) => (
                                <div key={item.ma_mon_an} className="col p-2-4"> {/* ma_mon_an */}
                                    <div id={`${item.ma_mon_an}`} className="dish-item">
                                        <div className="dish-img-wrap" style={{ marginBottom: '8px' }}>
                                            <Link to={`/detail/${item.ma_mon_an}`} className="dish-img dish-img--small">
                                                <img className="dish-img-1" src={item.anh_monan} alt="" />
                                                <img className="dish-img-2" src={item.anhhover1} alt="" />
                                            </Link>
                                            <div className="portion-select">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--portion">Tô nhỏ</div>
                                                <div className="btn btn--portion">Tô vừa</div>
                                                <div className="btn btn--portion">Tô lớn</div>
                                            </div>
                                        </div>
                                        <div className="dish-content">
                                            <div style={{ display: 'none' }} className="dish-content__details">
                                                <div className="dish-content__details-item active">
                                                    <span data={item.loai_mon}></span>
                                                    <span data={item.soluong}></span>
                                                </div>
                                            </div>
                                            <a className="dish-name">{item.ten_mon_an}</a>
                                            <div className="dish-price-wrap">
                                                <div className="dish-price">{formatCurrency(item.gia)}</div>
                                            </div>
                                            <div className="dish-note">
                                                {item.thongbao}
                                            </div>
                                            <div className="promo-tag dish-tag">{item.promotion}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Trang tiếp >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< Trước"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />
            </div>
        </Fragment>
    );
}