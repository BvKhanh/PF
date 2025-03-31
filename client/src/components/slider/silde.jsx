import React, { Fragment } from 'react'

import { StartSlider } from '../../until/slideshow';

export default function Silde() {
 StartSlider();

  return (
    <Fragment>
       <section class="homepage-banner">
            <section>
                <div class="banner-slide"> 
                    <img  className="slide-img" src="../Images/mihoanhthanh.jpg" alt="slide"/>
                    <img  className="slide-img" src="../Images/bunbo.png" alt="slide"/>
                    <img  className="slide-img" src="../Images/pho.jpg" alt="slide"/>
                    <img  className="slide-img" src="../Images/bun_cha.jpg" alt="slide"/>
                    <img  className="slide-img" src="../Images/hutieu.jpg" alt="slide"/>
                </div>
            </section>
        </section>
    </Fragment>
  )
}

