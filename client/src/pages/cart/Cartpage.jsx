import React, { Fragment, useEffect, useState } from 'react'
import ActiveCart, { LoadData } from '../../until/cartactive';
import axios from "axios";
import { useUser } from '../../until/userContext';


export default function Cartpage() {

    ActiveCart();

    var list = JSON.parse(localStorage.getItem("cart")) || [];

    const { user } = useUser();

    const [state, setState] = useState({

        ten_khach_hang: '',
        sdt: '',
        dia_chi: '',
        tinh_thanh: '',
        quan_huyen: '',
        phuong_xa: '',
        ghi_chu: '',
        tong_tien: 0
    });

    const { ten_khach_hang, sdt, dia_chi, tinh_thanh, quan_huyen, phuong_xa, ghi_chu, tong_tien } = state;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handlePayment = (e) => {

        if (window.confirm("Xác nhận lại thông tin đơn hàng , xác nhận đặt hàng ?")) {
            e.preventDefault();

            const orderData = {
                ma_khach_hang: user.id, // Thay đổi giá trị này thành ID của khách hàng
                ngay_dat_hang: new Date().toISOString().slice(0, 10), // Lấy ngày hiện tại
                tong_tien: tong_tien, // Tổng tiền
                trang_thai: 1,
                ten_khach: ten_khach_hang,
                dia_chi: `${dia_chi}, ${phuong_xa}, ${quan_huyen}, ${tinh_thanh}`,
                ghi_chu: ghi_chu,
                sdt: sdt,

                chi_tiet_don_hang: list.map(item => ({
                    ma_mon_an: Number(item.id),
                    ten_mon_an: item.name,
                    so_luong: item.quantity,
                    gia: item.price,
                    size_mon: item.size,
                    loai_mon: item.category,
                    anh_monan: item.img
                }))
            }
            axios.post("http://localhost:5000/api/addOrder", orderData)
                .then(() => {
                    setState({ ten_khach_hang: "", sdt: "", dia_chi: "", tinh_thanh: "", phuong_xa: "", quan_huyen: "", ghi_chu: "" })
                    list = [];
                    localStorage.setItem("cart", JSON.stringify(list));
                    LoadData();
                    alert("Bạn đã đặt hàng thành công");

                })
                .catch(error => {
                    console.error(error);
                    alert("Đã có lỗi xảy ra, vui lòng thử lại sau");
                });
        }

    }

    useEffect(() => {
        const tongTienElement = document.querySelector('.btn-pay--price');
        if (tongTienElement) {
            const value = tongTienElement.innerText || tongTienElement.textContent;
            const numberValue = parseInt(value.replace(/[^\d]/g, ''), 10); // Loại bỏ các ký tự không phải số và chuyển đổi sang số nguyên
            setState((prevState) => ({ ...prevState, tong_tien: numberValue }));
        }
    }, []);
    return (
        <Fragment>
            <div className="main">

                {/* <!-- Phần container --> */}
                <div className="cartPage-container">
                    <form className="info">
                        <div className="info-header">
                            <h2>Thông tin vận chuyển</h2>
                        </div>
                        <div className="row info-body">
                            <div className="col p-6">
                                <input className="input-name" name="ten_khach_hang" onChange={handleInputChange} value={ten_khach_hang} placeholder="Họ tên" type="text" />
                            </div>
                            <div className="col p-6">
                                <input className="input-phone" name="sdt" onChange={handleInputChange} value={sdt} placeholder="Số điện thoại" type="text" />
                            </div>
                            <div className="col p-12">
                                <input className="input-adress" name="dia_chi" onChange={handleInputChange} value={dia_chi} placeholder="Địa chỉ" type="text" />
                            </div>
                            <div className="adress col p-4">
                                <select onChange={handleInputChange} value={tinh_thanh} name="tinh_thanh">
                                    <option value="">Chọn Quận/Huyện</option>
                                    <option value="Quận 1">Quận 1</option>
                                    <option value="Quận 2">Quận 2</option>
                                    <option value="Quận 3">Quận 3</option>
                                    <option value="Quận 4">Quận 4</option>
                                    <option value="Quận 5">Quận 5</option>
                                    <option value="Quận 6">Quận 6</option>
                                    <option value="Quận 7">Quận 7</option>
                                    <option value="Quận 8">Quận 8</option>
                                    <option value="Quận 9">Quận 9</option>
                                    <option value="Quận 10">Quận 10</option>
                                    <option value="Quận 11">Quận 11</option>
                                    <option value="Quận 12">Quận 12</option>
                                    <option value="Quận Bình Tân">Quận Bình Tân</option>
                                    <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
                                    <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                                    <option value="Quận Phú Nhuận">Quận Phú Nhuận</option>
                                    <option value="Quận Tân Bình">Quận Tân Bình</option>
                                    <option value="Quận Tân Phú">Quận Tân Phú</option>
                                    <option value="Quận Thủ Đức">Quận Thủ Đức</option>
                                    <option value="Huyện Bình Chánh">Huyện Bình Chánh</option>
                                    <option value="Huyện Cần Giờ">Huyện Cần Giờ</option>
                                    <option value="Huyện Củ Chi">Huyện Củ Chi</option>
                                    <option value="Huyện Hóc Môn">Huyện Hóc Môn</option>
                                    <option value="Huyện Nhà Bè">Huyện Nhà Bè</option>
                                </select>
                            </div>
                            <div className="adress col p-4">
                                <select onChange={handleInputChange} value={quan_huyen} name="quan_huyen">
                                    <option value="">Chọn Quận/Huyện</option>
                                    <option value="Quận 1">Quận 1</option>
                                    <option value="Quận 2">Quận 2</option>
                                    <option value="Quận 3">Quận 3</option>
                                    <option value="Quận 4">Quận 4</option>
                                    <option value="Quận 5">Quận 5</option>
                                    <option value="Quận 6">Quận 6</option>
                                    <option value="Quận 7">Quận 7</option>
                                    <option value="Quận 8">Quận 8</option>
                                    <option value="Quận 9">Quận 9</option>
                                    <option value="Quận 10">Quận 10</option>
                                    <option value="Quận 11">Quận 11</option>
                                    <option value="Quận 12">Quận 12</option>
                                    <option value="Quận Bình Tân">Quận Bình Tân</option>
                                    <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
                                    <option value="Quận Gò Vấp">Quận Gò Vấp</option>
                                    <option value="Quận Phú Nhuận">Quận Phú Nhuận</option>
                                    <option value="Quận Tân Bình">Quận Tân Bình</option>
                                    <option value="Quận Tân Phú">Quận Tân Phú</option>
                                    <option value="Quận Thủ Đức">Quận Thủ Đức</option>
                                    <option value="Huyện Bình Chánh">Huyện Bình Chánh</option>
                                    <option value="Huyện Cần Giờ">Huyện Cần Giờ</option>
                                    <option value="Huyện Củ Chi">Huyện Củ Chi</option>
                                    <option value="Huyện Hóc Môn">Huyện Hóc Môn</option>
                                    <option value="Huyện Nhà Bè">Huyện Nhà Bè</option>
                                </select>
                            </div>
                            <div className="adress col p-4">
                                <select onChange={handleInputChange} value={phuong_xa} name="phuong_xa">
                                    <option value="">Chọn Phường/Xã</option>
                                    <option value="Phường Bình Thuận">Phường Bình Thuận</option>
                                    <option value="Phường Phú Mỹ">Phường Phú Mỹ</option>
                                    <option value="Phường Phú Thuận">Phường Phú Thuận</option>
                                    <option value="Phường Tân Hưng">Phường Tân Hưng</option>
                                    <option value="Phường Tân Kiểng">Phường Tân Kiểng</option>
                                    <option value="Phường Tân Phong">Phường Tân Phong</option>
                                    <option value="Phường Tân Phú">Phường Tân Phú</option>
                                    <option value="Phường Tân Quý">Phường Tân Quý</option>
                                    <option value="Phường Tân Thuận Đông">Phường Tân Thuận Đông</option>
                                    <option value="Phường Tân Thuận Tây">Phường Tân Thuận Tây</option>
                                </select>
                            </div>
                            <div className="col p-12">
                                <input onChange={handleInputChange} value={ghi_chu} name="ghi_chu" className="input-adress" placeholder="Ghi chú thêm" type="text" />
                            </div>
                        </div>
                        <div className="payments">
                            <h2 className="payments">Hình thức thanh toán</h2>
                            <div className="payments-item active">
                                <input type="radio" className="check" name="check" value="ZaloPay" />
                                <img src="https://upload.wikimedia.org/wikipedia/vi/7/77/ZaloPay_Logo.png" alt="" />
                                <p className="payments-item__text">Ví điện tử ZaloPay</p>
                            </div>
                            <div className="payments-item">
                                <input type="radio" className="check" name="check" value="COD" />
                                <img style={{ width: '35px', height: '35px' }} src="https://homepage.momocdn.net/img/momo-amazone-s3-api-241028104806-638657092865001677.png" alt="" />
                                <div className="payments-item__text">
                                    <p>COD</p>
                                    <p>Thanh toán khi nhận món ăn</p>
                                </div>
                            </div>
                            <div className="payments-item">
                                <input type="radio" className="check" name="check" value="AFTEE" />
                                <img src="https://homepage.momocdn.net/fileuploads/svg/momo-file-240411162904.svg" alt="" />
                                <div className="payments-item__text" style={{ display: 'block' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', display: 'block' }} className="aftee-cm-title-container">
                                        <p>MOMO- Đặt món dễ dàng, linh hoạt</p>
                                        <p>Thanh toán dễ dàng</p>
                                    </div>
                                </div>
                            </div>
                            <div className="payments-item">
                                <input type="radio" className="check" name="check" value="ShopeePay" />
                                <img style={{ width: '35px', height: '35px' }} src="https://gateway.zalopay.vn/image/emvco/icon-vietqr.svg" alt="" />
                                <div className="payments-item__text">
                                    <p>Quét QR & Thanh toán bằng ứng dụng ngân hàng</p>
                                    <i style={{ fontSize: '13px' }}>Mở ứng dụng ngân hàng để thanh toán đơn hàng</i>
                                </div>
                            </div>
                            <div className="payments-item">
                                <input type="radio" className="check" name="check" value="VNPay" />
                                <img style={{ width: '55px' }} src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png" alt="" />
                                <div className="payments-item__text">
                                    <p>Thẻ ATM / Internet Banking</p>
                                    <p>Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card) VNPay QR</p>
                                </div>
                            </div>
                            <p style={{ paddingLeft: '5px' }}>
                                Nếu món ăn không đúng yêu cầu? Bạn có thể yêu cầu hoàn tiền hoặc đổi món. Tìm hiểu thêm{' '}
                                <a style={{ fontWeight: '700' }} href="">tại đây</a>.
                            </p>
                            <button type="submit" onClick={handlePayment} className="btn-pay">
                                Thanh toán <span className="btn-pay--price"></span> (<span className="type-payment">ZaloPay</span>)
                            </button>
                        </div>
                    </form>

                    {/* <!-- tạo khuôn đổ dữ liệu --> */}
                    <div className="list-food">
                        <div className="list-food__inner">
                            <h2>Giỏ hàng</h2>
                            <div className="list-food__item">
                                <div className="list-food__item-img">
                                    <img src="https://file.hstatic.net/200000385717/article/fa57c14d-6733-4489-9953-df4a4760d147_1daf56255c344ad79439608b2ef80bd1.jpeg" alt="" />
                                </div>

                                <div className="list-food__item-content">
                                    <div className="list-food__item-name">Cơm gà chiên</div>
                                    <div className="list-food__item-type">Đùi/Lớn</div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '28px 0 6px' }} className="">
                                        <div className="single-food-category single-food-select">
                                            <span>Đùi</span>
                                            <i className="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div className="single-food-size single-food-select">
                                            <span>Lớn</span>
                                            <i className="fa-solid fa-angle-down"></i>
                                        </div >
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="quantity-food">
                                            <button>
                                                <svg data-v-0d8807a2="" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g data-v-0d8807a2=""><line data-v-0d8807a2="" stroke-width="1.5" id="svg_6" y2="8" x2="10" y1="8" x1="5" stroke="#000000" fill="none"></line></g></svg>
                                            </button>
                                            <span>1</span>
                                            <button>
                                                <svg data-v-0d8807a2="" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g data-v-0d8807a2=""><line data-v-0d8807a2="" stroke-width="1.5" y2="8" x2="12.9695" y1="8" x1="3.0305" stroke="#000000" fill="none"></line> <line data-v-0d8807a2="" stroke-width="1.5" transform="rotate(90, 8, 8)" y2="8" x2="13" y1="8" x1="3" stroke="#000000" fill="none"></line></g></svg>
                                            </button>
                                        </div>
                                        <div className="food-price">
                                            <div className="food-new-price">55.000đ</div>
                                            <div className="food-old-price">35.000đ</div>
                                        </div>
                                    </div>
                                    <div className="list-food__close">
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='cart-viewing-users mgt--10'>
                            <i>
                                <span>Có </span>
                                <b>5</b>
                                <span> người đang thêm cùng sản phẩm giống bạn vào giỏ hàng.</span>
                            </i>
                        </div>
                        <div className='coupon'>
                            <div className='coupon-public'>
                                <div className='coupons'>
                                    <div className='coupon coupon--FOOD05'>
                                        <div className='coupon-left'>

                                        </div>
                                        <div className='coupon-right'>
                                            <div className='coupon-title'>
                                                FOOD05
                                                <span className='coupon-count'>
                                                    <i>(Còn 1159)</i>
                                                </span>
                                            </div>
                                            <div className='coupon-description'>
                                                Giảm 50K cho đơn hàng từ  390K
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='discount-box'>
                                <input data-v-48bbe076 type="text" placeholder='Nhập mã giảm giá' />
                                <button data-v-48bbe076 disabled="disabled"> Áp dụng</button>
                            </div>

                        </div>
                        <div style={{ marginTop: '10px' }} className="cost-detail">
                            <span>Tạm tính</span>
                            <span className="tamTinh"></span>
                        </div>
                        <div className="cost-detail">
                            <span>Giảm giá</span>
                            <span className="promotion-off">0đ</span>
                        </div>
                        <div className="cost-detail">
                            <span>Phí giao hàng</span>
                            <span className="delever-cost">Miễn phí</span>
                        </div>
                        <div className="total">
                            <span>Tổng</span>
                            <span className="total__price"></span>
                        </div>
                    </div>

                </div>

            </div>
        </Fragment>
    );
}
