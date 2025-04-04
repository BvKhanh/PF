import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Viewhoadon() {
    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };  
    const [chiTiet ,setData] = useState([]);

    const{ma_don_hang} = useParams();

    useEffect(() => {
        // Thay đổi cách lấy dữ liệu thành một mảng
        axios.get(`http://localhost:5000/api/getctdh/${ma_don_hang}`)
            .then((resp) => setData(resp.data))
            .catch((error) => console.error(error));
    }, [ma_don_hang]);
  return (
    <div>
            <div class="card shadow mb-4">
        <div class="d-flex align-items-center justify-content-between card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Chi tiết đơn hàng</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Kích cỡ món</th>
                            <th>Loại Món</th>
                            <th>Số lượng</th>
                            <th>Giá</th>

                        </tr>
                    </thead>
                    <tbody>
                        {chiTiet.map((item)=>{
                            return(
                            <tr key={item.ma_chi_tiet_don_hang}>
                                <td><img style={{borderRadius: '5px'}} src={item.anh_monan} width='60' height='60' className="img img-responsive" /></td>
                                <td>{item.ten_mon_an}</td>
                                <td>{item.size_mon}</td>
                                <td>{item.loai_mon}</td>
                                <td>{item.so_luong}</td>
                                <td>{formatCurrency(item.gia)}</td>
                                
                            </tr>)
                        })}
                        

                    </tbody>

               
                </table>
            </div>
        </div>
    </div>
    </div>
  )
}
