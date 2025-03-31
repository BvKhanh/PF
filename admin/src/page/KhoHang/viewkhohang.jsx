import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Viewkhohang() {
    const[khohang,setData] = useState({});

    const {ma_kho_hang} = useParams();
  
    useEffect(()=>{
      axios.get(`http://localhost:5000/api/getkhohang/${ma_kho_hang}`)
      .then((resq)=> setData({...resq.data[0]}));
    },[ma_kho_hang]);

  return (
    <div>
        <h3 class="mb-0">Thông tin kho hàng</h3>
    <hr />
    <div className='row'>
    <img style={{borderRadius: '10px', marginLeft: '10px'}}  src={khohang.anh_monan}  width='150' height='180' class="img img-responsive" />
    </div>
    <div class="row">
        <div class="col mb-3">
            <label class="form-label">Mã món ăn</label>
            <input type="text" name="ma_mon_an" class="form-control" placeholder="Mã món ăn" value={khohang.ma_mon_an} readonly/>
        </div>
        <div class="col mb-3">
            <label class="form-label">Tên món ăn</label>
            <input type="text" name="ten_mon_an" class="form-control" placeholder="Tên món ăn" value={khohang.ten_mon_an} readonly/>
        </div>
    </div>

    <div class="row">
        <div class="col mb-3">
            <label class="form-label">Số lượng</label>
            <input type="text" name="so_luong" class="form-control" placeholder="Số lượng" value={ khohang.so_luong } readonly/>
        </div>
        <div class="col mb-3">
            <label class="form-label">Ngày nhập kho</label>
            <input type="text" name="ngay_che_bien" class="form-control" placeholder="Ngày nhập kho" value={khohang.ngay_che_bien } readonly/>
        </div>

    </div>
    <div class="row">
        <div class="col mb-3">
            <label class="form-label">Màu sắc</label>
            <input type="text" name="loai_mon" class="form-control" placeholder="Loại Món" value={khohang.loai_mon } readonly/>
        </div>
        <div class="col mb-3">
            <label class="form-label">Kích cx</label>
            <input type="text" name="size_mo" class="form-control" placeholder="Loại món" value={khohang.size_mo } readonly/>
        </div>
    </div>
    </div>
  )
}
