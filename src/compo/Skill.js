import React, { useEffect, useRef } from 'react'
import skillItem from '../json/skill.json';

let skillArOffset = {top: 0, bottom: 0, h: 0, percen: 0}; 


export default function Skill() {
  const elSkillAr = useRef();
  const elItemUl = useRef();
  const elArrowI = useRef();

  const stickedFun = () => {
    const skillAr = document.querySelector('article.skill');
    const itemUl = skillAr.querySelector('div.sticked>div.contentsWrapper>ul.itemWrapper');
  
    itemUl.style.width = itemUl.scrollWidth - window.innerWidth + 'px'; //itemUl의 translateX()를 위한 너비 인식범의를 정함 
    skillAr.style.height = itemUl.scrollWidth + window.innerHeight + 'px'; //360
    
    skillArOffset.top = skillAr.offsetTop;
    skillArOffset.h = itemUl.scrollWidth;
    skillArOffset.bottom = skillAr.offsetTop + skillArOffset.h;
  
  }//stickedFun() 함수정의
  
  if(window){
    // 크기 바꿀 때)
    window.addEventListener("resize", () => {
      stickedFun();
    })
    
    // 스크롤 할 때)
    window.addEventListener('scroll', function(){

      //뷰포트가 sticky의 부모 내부에 있을 때 스크롤 이벤트 발동)
      if(skillArOffset.top < window.pageYOffset && skillArOffset.bottom > window.pageYOffset + window.innerWidth){ //+ window.innerHeight 
        let scrollW = skillArOffset.h - window.innerWidth ; //전체 스크롤량 정함 // skillArOffset.h == itemUl.scrollWidth //

        if(!elSkillAr.current) return; // elSkillAr.current가 존재하지 않을 때는 넘어가기

        skillArOffset.percen = ( (window.pageYOffset - skillArOffset.top) / scrollW) * 100;

        if(!elItemUl.current) return;
        elItemUl.current.style.transform = `translateX(-${skillArOffset.percen}%)`; // 왼쪽으로 움직이라고 '-(마이너스)' 걸기
        elArrowI.current.style.width = `${skillArOffset.percen}%` // 화살표 크기도 퍼센트에 따라 커지기

      }//if(skillArOffset.top < window.pageYOffset && skillArOffset.bottom > window.pageYOffset + window.innerHeight)
    });//window.addEventListener
  }//if(window)

  useEffect(()=>{
    
    stickedFun();
  }, [])

  return (
    <article className='skill' ref={elSkillAr}>
      <div className='sticked'>
        <div className='contentsWrapper'>
          <div className='titleWrapper'>
            <h2>SKILL</h2>
            <p className='arrowWrapper'>
              <img src='/portfolio_react_ver/img/skillArrow.svg' alt='arrowBg'/>
              <i className='progress' ref={elArrowI}><img src='/portfolio_react_ver/img/skillArrow.svg' alt='arrowBg_progress'/></i>
            </p>
          </div>
          
          <ul className='itemWrapper' ref={elItemUl} title='설명 내용이 넘어가 있다면, 스크롤 하시면 볼 수 있습니다.'>
            {
              skillItem.map((item, key) => (
                <li key={key}>
                  <figure className='skillLogoWrapper'>
                    <i className='skillLogo'><img src={item.img} alt={item.title}/></i>
                    <figcaption>{item.title}</figcaption>
                    <div className='level' title='Familiar>Normal>Tried'>
                      {item.level}
                    </div>
                  </figure>
                  <ul className='levelDescription'>
                    {
                      item.exText.map((txt, k)=>(
                        <li key={k}>
                          {txt}
                        </li>
                      ))
                    } 
                  </ul>
                </li>
              ))
            }
            
          </ul>
        </div>
        <div className='bgWrapper' />
      </div>
    </article>
  )
}
