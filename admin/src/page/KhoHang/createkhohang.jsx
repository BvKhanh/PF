import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initiaState = {
    ma_mon_an:"",
    ten_mon_an: "",
    ngay_che_bien: "",
    so_luong :"",
    loai_mon :"",
    size_mon:"",
    anh_monan:"",
}

export default function Createkhohang() {

    const [state, setState] = useState(initiaState);
  
    const{ma_mon_an ,ten_mon_an,ngay_che_bien,so_luong,loai_mon ,size_mon,anh_monan} = state;
  
    const navigate = useNavigate();

    const handleInputChange = (e) =>{
      const{name, value} = e.target;
      setState({...state,[name]:value});
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setState({ ...state, anh_monan: `/images/${file.name}` });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!ten_mon_an || !ngay_che_bien || !so_luong || !loai_mon){
            toast.error("Vui lòng nhập đủ thông tin ")
        } else{
            axios.post("http://localhost:5000/api/createkhohang",{
                ma_mon_an,ten_mon_an,ngay_che_bien,so_luong,loai_mon,size_mon,anh_monan
            }).then(()=> {setState({ma_mon_an:"", ten_mon_an:"",ngay_che_bien:"",so_luong:"", loai_mon:"",size_mon:""})})
            .catch((err) => toast.error(err.response.data));
            toast.success("Thêm sản phẩm thành công !")
            setTimeout(() => navigate("/Indexkhohang"),500);
        }
    }
  return (
    <div>
      <h3 className="mb-0">Thêm sản phẩm vào kho</h3>
    <hr />
    <form onSubmit={handleSubmit}  enctype="multipart/form-data">
    
        <div className="row mb-3">

            <div className="col">
                <input type="text" name="ma_mon_an" onChange={handleInputChange} value={ma_mon_an} className="form-control" placeholder="Mã sản phẩm"/>
            </div>
            <div className="col">
                <input type="text" name="ten_mon_an" onChange={handleInputChange} value={ten_mon_an} className="form-control" placeholder="Tên sản phẩm "/>
            </div>
            
        </div>
        <div className='row mb-3'>
        <div className="col">
                <input type="file" name="anh_monan" onChange={handleFileChange} className="form-control" placeholder="Ảnh sản phẩm"/>
            </div>
        </div>
        <div class="row mb-3">
            <div className="col">
                <input type="text" name="so_luong" onChange={handleInputChange} value={so_luong} className="form-control" placeholder="Số lượng"/>
            </div>
            <div className="col">
                <input type="text" name="loai_mon" onChange={handleInputChange} value={loai_mon} className="form-control" placeholder="Màu sắc"/>
            </div>

        </div>
        <div className='row mb-3'>
        <div className="col">
                <input type="text" name="size_mon" onChange={handleInputChange} value={size_mon} className="form-control" placeholder="Màu sắc"/>
            </div>
            <div class="col">
                <input type="date" name="ngay_che_bien" onChange={handleInputChange} value={ngay_che_bien} className="form-control" placeholder="Ngày nhập kho"/>
        </div>
        </div>
        <div class="row">
            <div class="d-grid">
                <button style={{marginLeft: '10px'}} type="submit" class="btn btn-primary">Thêm</button>
            </div>
        </div>
    </form>
    </div>
  )
}
