import React, { useEffect  } from 'react';

const Foodd = () => {

  useEffect(() => {
    setMarginTop('.all-dishes-container', '.site-header');
  }, []); // Chỉ gọi hàm một lần sau khi component được mount

  function setMarginTop(elementSelector, referenceSelector) {
    const element = document.querySelector(elementSelector);
    const referenceElement = document.querySelector(referenceSelector);
    
    if (element && referenceElement) {
      const referenceHeight = referenceElement.offsetHeight;
      element.style.marginTop = `${referenceHeight}px`;
    }
  }

  return (
    <div className="all-dishes-container" style={{paddingBottom: '30px'}}>
      {/* Các phần tử của sản phẩm */}
    </div>
  );
  
  
}

export default Foodd;


