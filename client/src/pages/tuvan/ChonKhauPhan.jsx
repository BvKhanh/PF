import React from 'react';

export default function ChonKhauPhan() {
  return (
    <div style={{ width: '1280px', margin: '150px auto 0px' }}>
      <h2 style={{ textAlign: 'center', margin: '40px 0', fontWeight: '500' }}>
        Hướng dẫn chọn khẩu phần món ăn
      </h2>
      <div className="portion-steps">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="row">
        <div className="col p-4">
          <p style={{ textAlign: 'center', fontWeight: '700', fontSize: '14px', marginBottom: '20px' }}>
            Loại món ăn
          </p>
          <div className="dish-select" style={{ position: 'sticky', top: '10px' }}>
            <div className="dish-chooser">
              <span>-- Chọn món ăn bạn muốn --</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div style={{ width: '100%' }}>
              <img className="dish-image" src="../Images/pho-bo.jpg" alt="Phở bò" />
            </div>
          </div>
        </div>
        <div className="col p-8">
          <div className="row" style={{ borderBottom: '1px solid #d9d9d9', paddingBottom: '35px' }}>
            <div className="col p-6">
              <p style={{ textAlign: 'center', fontWeight: '700', fontSize: '14px', marginBottom: '20px' }}>
                Thông tin khẩu phần
              </p>
              <div className="portion-config">
                <div className="row">
                  <div className="col p-4">
                    <div className="taste-pref light"></div>
                  </div>
                  <div className="col p-4">
                    <div className="taste-pref standard active"></div>
                  </div>
                  <div className="col p-4">
                    <div className="taste-pref rich"></div>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', marginBottom: '10px' }}>
                    <span>Số người dùng</span>
                    <span className="people">2 người</span>
                  </div>
                  <input
                    type="range"
                    name="c-people"
                    step="1"
                    min="1"
                    max="5"
                    value="2"
                    id="input-people"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', marginBottom: '10px' }}>
                    <span>Độ đậm vị</span>
                    <span className="taste">Trung bình</span>
                  </div>
                  <input
                    type="range"
                    name="c-taste"
                    step="1"
                    min="1"
                    max="3"
                    value="2"
                    id="input-taste"
                  />
                </div>
              </div>
            </div>
            <div className="col p-6">
              <p style={{ textAlign: 'center', fontWeight: '700', fontSize: '14px', marginBottom: '20px' }}>
                Gợi ý khẩu phần
              </p>
              <div className="portion-result">
                Tô lớn
              </div>
            </div>
          </div>
          <h3 style={{ textAlign: 'center', fontSize: '20.5px', margin: '30px 0 30px', fontWeight: '500' }}>
            Bảng khẩu phần
          </h3>
          <div style={{ marginBottom: '40px' }}>
            <img src="../Images/portion-chart-pho.png" alt="Bảng khẩu phần phở" className="portion-chart" />
          </div>
        </div>
      </div>
    </div>
  );
}