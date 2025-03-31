import React, { Fragment, useEffect, useState } from 'react'
import Payment from '../../until/detail';
import AddFood from '../../until/cart';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Details() {
    Payment();
    AddFood();

    const [mon_an, setData] = useState({});

    const { ma_mon_an } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/getsp/${ma_mon_an}`)
            .then((resp) => setData({ ...resp.data[0] }));
    }, [ma_mon_an]);

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };

    return (
        <Fragment>
            <main>
                <div class="container1">
                    <div class="container-dish-single">
                        <div class="imgs">
                            <div class="link-page">
                                <a href="./index.html" class="link-page__homepage">Trang chủ</a>
                                <span>/</span>
                                <a href="./food-detail.html" class="link-page__currentPage">Phở Bò Đặc Biệt</a>
                            </div>
                            <div class="index-img">
                                <div class="index-img__item active"></div>
                                <div class="index-img__item"></div>
                                <div class="index-img__item"></div>
                            </div>
                            <div class="dish-single-img">
                                <img class="food-img__main" src={mon_an.anh_monan} alt="Phở Bò Đặc Biệt" />
                                <div class="food-img__option">
                                    <div class="food-img__option-item active">
                                        <img src={mon_an.anh_monan} alt="Phở Bò Đặc Biệt" />
                                    </div>
                                    <div class="food-img__option-item">
                                        <img src={mon_an.anhhover1} alt="Phở Bò Đặc Biệt góc cận" />
                                    </div>
                                    <div class="food-img__option-item">
                                        <img src={mon_an.anhhover2} alt="Phở Bò Đặc Biệt với rau" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <h1 class="content__heading">{mon_an.ten_monan}</h1>
                            <div class="review-rating">
                                <p class="review-label">
                                    Đã bán(web): 15
                                </p>

                            </div>
                            <div class="review-rating">
                                <p class="review-label">
                                    Số lượng còn: <span class="food-quantity">{mon_an.soluong}</span> sản phẩm
                                </p>
                            </div>

                            <p class="content__price">{formatCurrency(mon_an.gia)}</p>
                            <div class="content__discount">{mon_an.khuyenmai}</div>
                            <div class="content__color">
                                <p class="content__color-heading">Lựa chọn: <b>Phở Bò Tái</b></p>
                                <div class="content__color-option">
                                    <div class="content__color-item active" title='{"option":"Phở Bò Tái","disabled":["tô lớn"]}' >
                                        <div style={{ backgroundImage: 'url(https://example.com/pho-bo-tai.jpg)' }}></div>
                                    </div>
                                    <div class="content__color-item" title='{"option":"Phở Bò Nạm","disabled":["tô đặc biệt"]}' >
                                        <div style={{ backgroundImage: 'url(https://example.com/pho-bo-nam.jpg)' }}></div>
                                    </div>
                                    <div class="content__color-item" title='{"option":"Phở Gà","disabled":["tô đặc biệt"]}' >
                                        <div style={{ backgroundImage: 'url(https://example.com/pho-ga.jpg)' }}></div>
                                    </div>
                                    <div class="content__color-item" title='{"option":"Phở Bò Tái Nạm","disabled":["tô lớn","tô đặc biệt"]}' >
                                        <div style={{ backgroundImage: 'url(https://example.com/pho-bo-tai-nam.jpg)' }}></div>
                                    </div>
                                    <div class="content__color-item" title='{"option":"Phở Đặc Biệt","disabled":["tô lớn"]}' >
                                        <div style={{ backgroundImage: 'url(https://example.com/pho-dac-biet.jpg)' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div class="content__portion">
                                <div class="content__portion-header">
                                    <span>Kích cỡ khẩu phần:</span>
                                </div>
                                <div class="content__portion-options">
                                    <div class="btn-portion small">Nhỏ</div>
                                    <div class="btn-portion medium">Vừa</div>
                                    <div class="btn-portion large">Lớn</div>
                                    <div class="btn-portion extra-large">Cực lớn</div>
                                    <div class="btn-portion special is-disabled">Đặc biệt</div>
                                    <div class="btn-portion super-large is-disabled">Siêu lớn</div>
                                </div>
                                <div class="dish-single__actions">
                                    <div class="quantity">
                                        <button class="btn-decrease">-</button>
                                        <span>1</span>
                                        <button class="btn-increase">+</button>
                                    </div>
                                    <div class="btn btn-addCart">
                                        Thêm vào giỏ
                                    </div>
                                </div>
                            </div>
                            <div class="order-policy">
                                <div class="order-policy__item">
                                    <div class="order-policy__icon">
                                        <img src="https://use.fontawesome.com/releases/v6.5.1/svgs/solid/xmark.svg" alt="Hủy đơn" />
                                    </div>
                                    <p>Hủy đơn dễ dàng trước khi chế biến</p>
                                </div>
                                <div class="order-policy__item">
                                    <div class="order-policy__icon">
                                        <img src="https://use.fontawesome.com/releases/v6.5.1/svgs/solid/truck.svg" alt="Giao hàng miễn phí" />
                                    </div>
                                    <p>Miễn phí giao hàng cho đơn từ 100k</p>
                                </div>
                                <div class="order-policy__item">
                                    <div class="order-policy__icon">
                                        <img src="https://use.fontawesome.com/releases/v6.5.1/svgs/solid/phone.svg" alt="Hỗ trợ" />
                                    </div>
                                    <p>Hotline 1900.27.27 hỗ trợ 8h-22h mỗi ngày</p>
                                </div>
                                <div class="order-policy__item">
                                    <div class="order-policy__icon">
                                        <img src="https://use.fontawesome.com/releases/v6.5.1/svgs/solid/bolt.svg" alt="Giao nhanh" />
                                    </div>
                                    <p>Giao hàng nhanh trong 30 phút</p>
                                </div>
                                <div class="order-policy__item">
                                    <div class="order-policy__icon">
                                        <img src="https://use.fontawesome.com/releases/v6.5.1/svgs/solid/money-bill-wave.svg" alt="Hoàn tiền" />
                                    </div>
                                    <p>Hoàn tiền 100% nếu giao sai món</p>
                                </div>
                                <div class="order-policy__item">
                                    <div class="order-policy__icon">
                                        <img src="https://use.fontawesome.com/releases/v6.5.1/svgs/solid/clock.svg" alt="Thời gian giao" />
                                    </div>
                                    <p>Giao hàng từ 30 phút đến 1 giờ</p>
                                </div>
                            </div>
                            <div class="dish-highlights">
                                <div class="dish-highlights__header">
                                    <span>Đặc điểm nổi bật</span>
                                </div>
                                <ul>
                                    <li class="dish-highlights__item">- Nguyên liệu: Thịt bò tươi 100%, bánh phở dai mềm</li>
                                    <li class="dish-highlights__item">- Nước dùng thơm ngon, đậm đà, hầm từ xương bò trong 12 giờ</li>
                                    <li class="dish-highlights__item">- Gia vị truyền thống, cay nhẹ, phù hợp mọi khẩu vị</li>
                                    <li class="dish-highlights__item">- Rau tươi sạch, được chọn lọc kỹ càng</li>
                                    <li class="dish-highlights__item">- Chế biến tại bếp ăn đạt chuẩn vệ sinh ở TP Hồ Chí Minh</li>
                                    <li class="dish-highlights__item">- Tự hào món ăn truyền thống Việt Nam</li>
                                    <li class="dish-highlights__item">- Khẩu phần: Phù hợp cho 1 người (khoảng 400g)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="dish-info-wrap">
                        <div class="dish-info">
                            <h2 class="dish-info__heading">Chi tiết món ăn</h2>
                            <p><b>Phở Bò Đặc Biệt</b> là món ăn truyền thống được cải tiến với công thức độc quyền, sử dụng nguyên liệu <b>thịt bò tươi cao cấp</b> và bánh phở dai mềm.
                                Một tô phở không thể thiếu trong bữa ăn, phù hợp với mọi dịp: bữa sáng nhanh, trưa văn phòng hay tối gia đình.
                                <b>Đơn giản nhưng đậm đà, truyền thống mà vẫn hiện đại</b>.</p>
                            <img src="https://vietcuongthinh.vn/wp-content/uploads/2019/11/kinh-nghiem-nau-pho-bo-thom-ngon-1.jpg" alt="Phở bò" />
                            <div class="dish-info__summary">Tô phở của chúng tôi được chế biến từ thịt bò tươi và nước dùng hầm 12 giờ,
                                mang đến trải nghiệm ẩm thực tuyệt vời nhất. "Phở Bò Đặc Biệt" là lựa chọn cho những ai tìm kiếm một món ăn ngon miệng, bổ dưỡng và đậm chất Việt.</div>
                            <img src="https://media.baoquangninh.vn/upload/image/202309/medium/2121778_638ef370f3f9e0d3daee5f2552dcc39c.jpg" alt="Nước dùng phở" />
                            <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
                                <li><b>Hương vị đậm đà, thơm ngon từ nước dùng hầm xương bò</b>, vượt trội so với phở thông thường</li>
                                <li><b>Nguyên liệu tươi sạch, đảm bảo vệ sinh</b>, không chất bảo quản, an tâm thưởng thức</li>
                                <li><b>Thoáng vị với rau tươi và gia vị tự nhiên</b>, mang lại cảm giác nhẹ nhàng, dễ chịu</li>
                            </ul>
                            <h3>Phở Bò Đặc Biệt - Sự cải tiến từ truyền thống</h3>
                            <img src="https://bizweb.dktcdn.net/100/477/987/foods/pho-bo-ha-noi-jpeg.jpg?v=1712628941747" alt="Phở bò đặc biệt" />
                            <h3>Một tô phở thay đổi cách bạn thưởng thức ẩm thực Việt</h3>
                            <p style={{ textAlign: 'center' }}><b>Phở Đặc Biệt</b> với nước dùng đậm đà và <b>hương vị vượt trội</b>. <b>Thơm - Ngon</b> ngay từ miếng đầu tiên</p>
                            <img src="https://vietnamtraveller.com.vn/upload/2023/01/pho-bat-da.jpg" alt="Tô phở" />
                            <h3>CHÚNG TÔI VÀ NHỮNG TÔ PHỞ ĐẶC BIỆT</h3>
                            <table style={{ fontSize: '13px' }}>
                                <tr>
                                    <td style={{ width: '50%' }}>
                                        <p>
                                            <b>3</b> lần cải tiến công thức từ <b>02/2023 đến 03/2025</b> để mang đến tô phở hoàn hảo nhất. Với <b>Phở Bò Đặc Biệt:</b>
                                        </p>
                                        <ul style={{ listStyleType: 'disc', margin: '24px 0', paddingLeft: '40px' }}>
                                            <li>Tinh chỉnh thời gian hầm nước dùng lên 12 giờ.</li>
                                            <li>Chọn lọc thịt bò tươi từ nguồn cung cấp uy tín.</li>
                                            <li>Cân chỉnh gia vị cho phù hợp với mọi khẩu vị.</li>
                                        </ul>
                                        <p>Và chúng tôi tự hào giới thiệu <b>Phở Bò Đặc Biệt</b> - mang đến hương vị đậm đà, thơm ngon và trải nghiệm ăn uống tuyệt vời nhất.</p>
                                    </td>
                                    <td style={{ width: '50%', textAlign: 'center' }}>
                                        <img style={{ width: '300px', margin: '0' }} src="https://tiki.vn/blog/wp-content/uploads/2023/07/nguyen-lieu-nau-pho-bo-1024x577.jpg" alt="Chế biến phở" />
                                    </td>
                                </tr>
                            </table>
                            <p style={{ margin: '20px 0' }}><b>Chúng tôi</b> tin rằng với sự tận tâm trong từng khâu chế biến,
                                <b>Phở Bò Đặc Biệt</b> sẽ là món ăn không thể thiếu trong lựa chọn của bạn.</p>
                            <img src="https://img-global.cpcdn.com/recipes/633930d18ab13aba/680x482cq70/ph%E1%BB%9F-bo-c%E1%BA%A5p-t%E1%BB%91c-ph%C6%B0%C6%A1ng-xa-recipe-main-photo.jpg" alt="Phở bò hoàn thiện" />
                        </div>
                    </div>
                    <div class="dish-reviews">
                        <div class="reviews-header">
                            <p class="reviews-count">1.250 Đánh giá</p>
                            <div class="rating-score">
                                <span>4.7 / 5</span>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="reviews-filter">
                            <div class="reviews-filter__rating">
                                <select name="" id="">
                                    <option value="">Đánh giá</option>
                                    <option value="1">1 sao</option>
                                    <option value="2">2 sao</option>
                                    <option value="3">3 sao</option>
                                    <option value="4">4 sao</option>
                                    <option value="5">5 sao</option>
                                </select>
                            </div>
                            <div class="reviews-filter__image">
                                <select name="" id="">
                                    <option value="">Ảnh</option>
                                    <option value="true">Có ảnh</option>
                                    <option value="false">Không ảnh</option>
                                </select>
                            </div>
                            <div class="reviews-filter__replied">
                                <select name="" id="">
                                    <option value="">Phản hồi</option>
                                    <option value="true">Đã phản hồi</option>
                                    <option value="false">Chưa phản hồi</option>
                                </select>
                            </div>
                        </div>
                        <div class="reviews-list">
                            <div class="row no-gutters">
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star disabled"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">NguyenHai</b>
                                            <i class="dish-option">Phở Bò Tái / Tô lớn</i>
                                            <p class="review-comment">Phở ngon, nước dùng đậm đà, thịt bò tươi, đáng giá trong tầm tiền.</p>
                                            <p class="review-date">25.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Nguyễn Huy Sơn</b>
                                            <i class="dish-option">Phở Gà / Tô vừa</i>
                                            <p class="review-comment">Bận quá không chụp ảnh được, nhưng phở ngon, giao hàng nhanh, rất hài lòng!</p>
                                            <p class="review-date">26.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star disabled"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Mai Đức Hân</b>
                                            <i class="dish-option">Phở Bò Nạm / Tô lớn</i>
                                            <p class="review-comment">Nước dùng ngon, thịt mềm, giao hàng cẩn thận. Góp ý: nên thêm ít rau hơn một chút.</p>
                                            <p class="review-date">27.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Đặng Duy Hải</b>
                                            <i class="dish-option">Phở Đặc Biệt / Tô lớn</i>
                                            <p class="review-comment">Phở thơm, nước dùng ngon, nhưng bánh phở hơi mềm quá so với khẩu vị mình.</p>
                                            <p class="review-date">28.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star disabled"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Nguyễn Hoàng Phúc</b>
                                            <i class="dish-option">Phở Bò Tái / Tô vừa</i>
                                            <p class="review-comment">Món ăn ngon, giao hàng đúng giờ, rất hài lòng.</p>
                                            <p class="review-date">24.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star disabled"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Đỗ Quang Huynh</b>
                                            <i class="dish-option">Phở Gà / Tô đặc biệt</i>
                                            <p class="review-comment">Chất lượng món ăn tốt, đáng thử.</p>
                                            <p class="review-date">20.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Đỗ Quang Huynh</b>
                                            <i class="dish-option">Phở Đặc Biệt / Tô lớn</i>
                                            <p class="review-comment">Món ăn ngon, giao nhanh, rất đáng tiền.</p>
                                            <p class="review-date">22.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star disabled"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Lê Cường</b>
                                            <i class="dish-option">Phở Bò Nạm / Tô vừa</i>
                                            <p class="review-comment">Ngon, đúng vị phở truyền thống.</p>
                                            <p class="review-date">23.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star disabled"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Nguyễn Khang</b>
                                            <i class="dish-option">Phở Bò Tái / Tô lớn</i>
                                            <p class="review-comment">Phở ngon, còn được tặng thêm trà đá miễn phí, rất ưng!</p>
                                            <p class="review-date">25.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col p-6">
                                    <div class="review-item">
                                        <div class="review-item__rating">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star disabled"></i>
                                        </div>
                                        <div class="review-item__content">
                                            <b class="reviewer-name">Khoa</b>
                                            <i class="dish-option">Phở Đặc Biệt / Tô vừa</i>
                                            <p class="review-comment">Phở ngon, nước dùng đậm vị, giao hàng nhanh, luôn là lựa chọn hàng đầu của mình.</p>
                                            <p class="review-date">26.03.2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="reviews-pagination">
                            <i class="fa-solid fa-angle-left btn-page-left"></i>
                            <span>1/19</span>
                            <i class="fa-solid fa-angle-right btn-page-right"></i>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}
