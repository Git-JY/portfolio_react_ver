import './sass/global.scss';

import Main from './compo/Main';
import About from './compo/About';
import Skill from './compo/Skill';
import Portfolio from './compo/Portfolio';
import Contact from './compo/Contact';
import 'remixicon/fonts/remixicon.css'
import { useEffect } from 'react';


function App() {
  let elHeader;
  useEffect(()=>{
    elHeader = document.querySelector('header.header');
    const elAllLi = elHeader.querySelectorAll('nav>ul>li');
    const elAllAr = document.querySelectorAll('main>article');

    elAllLi.forEach((ele, k)=>{
      ele.onclick = () => {
        elAllAr[k].scrollIntoView( //elSection[k]있는 곳으로 스크롤을 이동시켜라
        {behavior: "smooth", block: "start"}
      );
      }//ele.onclick
    })
    //===== ===== ===== ===== =====

    const contents = (entries, observer) => {
      entries.forEach(function(entry){     
          if(entry.isIntersecting){ 
              entry.target.classList.add('scroll'); 
              observer.unobserve(entry.target); //observer.unobserve('감시자'); //감시자 해체
          }else{
              //entry.target.classList.remove('on'); //보통 한번 나타나고 사라지는 않으니 빼줌
          }
      });
    }//contents() 함수 정의

    let opt = {
      rootMargin: '0px',
      threshold: 0.5
    };

    const intersection = new IntersectionObserver(contents, opt);

    elAllAr.forEach((elAr) => {
        intersection.observe(elAr);
    });

  }, [])

  const navFun = () => {
    elHeader.classList.add('active');
  }//navFun() 함수정의 

  const navCloseFun = () => {
    elHeader.classList.remove('active');
  }//navCloseFun() 함수정의 

  const scrollBarFun = () => {
    document.body.classList.toggle('scrollbar');
  }//scrollBarFun() 함수정의

  return (
    <div className="App">
      <header className="header">
        <button type='button' className='openBtn' onClick={navFun}>
          <i className='ri-menu-3-line' />
        </button>
        <nav>
          <button type='button' className='closeBtn' onClick={navCloseFun} title='close버튼은 모바일에서만 보입니다.'>
            <i className='ri-close-line' />
          </button>
          <ul>
            <li>Main</li>
            <li>About</li>
            <li>Skill</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <button className='scrollBarBtn' onClick={scrollBarFun}>
        scroll<br/>
        on/off
      </button>
      <main>
        <Main/> {/* 화면 크기대로 */}
        <About/>
        <Skill/>  {/* 화면 크기대로 */} 
        <Portfolio/>
        <Contact/>  {/* 화면 크기대로 */}  
      </main>
    </div>
  );
}

export default App;
