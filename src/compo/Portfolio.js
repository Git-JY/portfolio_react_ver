import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { Pagination } from 'swiper/modules';

import portfolioItem from '../json/portfolio.json';

export default function Portfolio() {
  const [imgSwiper, setImgSwiper] = useState();
  const [ptItemIdx, setPtItemIdx] = useState(0); 
  const elDetail = useRef();
  const elHandIconI = useRef();

  const detailFun = (k) => {
    console.log(elDetail.current);
    setPtItemIdx(k);
    elDetail.current.classList.add('active');
  }//detailFun() 함수정의

  const detailCloseFun = () => {
    if (imgSwiper) {
      imgSwiper.slideTo(0, 10); //  해당 인덱스로 이동한다. // 이거 쓰면 버튼이 처음에 작동을 안해서 버튼 뺌(대신 한 번 슬라이드 하면, 버튼 작동됨)
    }
    elDetail.current.classList.remove('active');
    elHandIconI.current.classList.add('none');
  }//detailFun() 함수정의

  // const test = (idx) => {
  //   console.log('idx: ');
  //   console.log(idx);
  // }//test(idx) 함수정의


  return (
    <>
      <article className='portfolio'>
        <div className='bgWrapper'>
          <div className='titleWrapper'>
            <div className='titleTopWrapper'>
              <h2>
                <strong> PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO &nbsp; </strong>
                <strong> PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO </strong>
              </h2>
            </div>
            <div className='titleBottomWrapper'>
              <h2>
                <strong> PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO &nbsp; </strong>
                <strong> PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO PORTFOLIO </strong>
              </h2>
            </div>
          </div>
        </div>  

        <ul className='portfolioItemWrapper'>
          {
            portfolioItem.map((item, k)=>(
              <li className='item' key={k} onClick={()=>{detailFun(k)}}>
                <img src={item.img[0]} alt={item.title} />
                <div className='contentsWrapper'>
                  <strong>
                    {item.title}
                  </strong>
                  <p>{item.type}</p>
                  <span>{item.period}</span>
                </div>
              </li>
            ))
          }
          
        </ul>  

      </article>

      <div className='detailPopupAllWrapper' ref={elDetail}>
        <button className='xBtn' onClick={detailCloseFun}><i className='ri-close-line'/></button>
        
        <div className='detailPopupWrapper'>
          <div className='leftWrapper'>
            <i ref={elHandIconI}>
              <img src='/portfolio_react_ver/img/icon_hand2.svg' alt='이미지를 드래그해서 볼 수 있음을 알리는 아이콘'/>
            </i>
            <Swiper className='imgSwiper'
            onSwiper={setImgSwiper}
            // onSlideChange={(swiper) => test(swiper.activeIndex)} // 시험삼아 해본 거(됨)
            pagination={{
              type: 'fraction',
            }}
            modules={[Pagination]}
            loop={true}
            >
              {
                portfolioItem[ptItemIdx].img.map((imgSrc, k)=>(
                  <SwiperSlide className='slide' key={k}>
                    <img src={imgSrc} alt={k}/>
                  </SwiperSlide>
                ))
              }
            </Swiper>{/* div.imgSwiper */}
          </div>
          
          <div className='rightWrapper'>
            <div className='contentsWrappper'>
              <div className='titleWrapper'>
                <strong className='title'>{portfolioItem[ptItemIdx].title}</strong>
                <a className='gitBtn' href={portfolioItem[ptItemIdx].gitHref} target='_blank'>
                  <i className="ri-github-fill"/>
                </a>
              </div>
              <b className='type'><i className="ri-code-box-line" />{portfolioItem[ptItemIdx].type}</b>
              <b className='period'><i className="ri-calendar-2-line" />{portfolioItem[ptItemIdx].period}</b>
              <p className='explanation'>
                {portfolioItem[ptItemIdx].exTxt}
              </p>
              <a href={portfolioItem[ptItemIdx].webHref} target='_blank'>웹 페이지로 이동</a>
            </div>{/* div.contentsWrappper */}
          </div>{/* div.rightWrapper */}
        </div>{/* div.detailPopupWrapper */}

      </div>  
    </>
  )
}
