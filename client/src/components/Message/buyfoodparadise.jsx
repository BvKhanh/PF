import React from 'react'
import { Link } from 'react-router-dom'

export default function Buyparadisefood() {
  return (
    <div>
      <div className="notify-added">
            <div className="notify-added__header">Đã thêm vào giỏ hàng</div>
            <div className="notify-added__item">
                <div className="notify-added-img">
                    <img src="../Images/" alt=""/>
                </div>
                <div className="notify-food__content">
                    <span className="notify-food__title"></span>
                    <div style={{display :'flex'}}> 
                    <span style={{ display: 'block' }} className="notify-food__color"></span>
                    <p> \ </p>
                    <span style={{ display: 'block' }} className="notify-food__size"></span>
                    </div>
                    <span style={{ color: 'red', fontSize: '15px' }} className="notify-food__prices"></span>
                </div>
                
            </div>
            <Link to="/cart" className="btn btn-watch-cart">Xem giỏ hàng</Link>
         </div>
    </div>
  )
}
