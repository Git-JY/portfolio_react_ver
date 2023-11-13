import React, { useEffect, useRef, useState } from 'react'

export default function About() {
  let elArAbout;
  const ArArr = ['nameAnswer', 'nameAnswer scroll', 'birthAnswer scroll', 'emailAnswer scroll'];
  const [arArrIdx, setArArrIdx] = useState(0);

  
  useEffect(()=>{
    elArAbout = document.querySelector('article.about');
  },[])

  const infoClickFun = (num=1) => {
    switch (num) {
      case 1:
        setArArrIdx(1); 
        break;
      case 2:
        setArArrIdx(2); 
        break;
      case 3:
        setArArrIdx(3);
        break;
      default:
        console.log('오류');
    }
  }//infoClickFun 함수정의
  
  return (
      <article className={`about ${ArArr[arArrIdx]}`}>

        <div className='contentsWrapper'>

          <div className='leftWrapper'>
            <div className='txtWrapper'>
              <div className='titleWrapper'>
                <h2>ABOUT ME</h2>
                <a href="https://github.com/Git-JY?tab=stars" className='gitBtn'>
                  <i className="ri-github-fill"/>
                </a>
              </div>

              <p>
                <strong>우주와 같은 드넓은 상상력</strong>을 현실로 구현하고자,
                수 많은 경험과 기술을 얻으려 노력합니다. 
              </p>
              <p>
              <strong>새로운 기술과 창의적인 아이디어</strong>를 결합하여 
              사용자에게 <strong>인상적이고 편의</strong>를 중시한 웹을 구축해가며, 
              지속적인 성장과 개선을 통해 혁신적인 솔루션을 만들어내는 프론트엔드
              그것이 제 목표입니다. 
              </p>
            </div>{/* div.txtWrapper */}

            <ul className='btnWrapper'>
              <li className='nameWrapper'>

                <button type="button" className='contents' onClick={()=>{infoClickFun(1)}}>
                  <i className='ri-user-line'/> <span>Name</span> 
                </button>
                <p className='mbAnswer'>이주영</p>

              </li>

              <li className='birthWrapper'>

                <button type="button" className='contents' onClick={()=>{infoClickFun(2)}}>
                  <i className='ri-cake-2-line'/> <span>Birth</span>
                </button>
                <p className='mbAnswer'>
                  2000<br/>
                  .08.24
                </p>

              </li>

              <li className='emailWrapper'>

                <button type="button" className='contents' onClick={()=>{infoClickFun(3)}}>
                  <i className='ri-mail-line'/> <span>Email</span>
                </button>
                <p className='mbAnswer'>
                  tlatlago824<br/>
                  @gmail.com
                </p>

              </li>
            </ul>
            
          </div> {/* div.leftWrapper */}
          
          <div className='rightWrapper'>
            <ul className='infoWrapper'>
              <li className='nameAnswer'>이주영</li>
              <li className='birthAnswer'>
                2000<br/>
                .08.24
              </li>
              <li className='emailAnswer'>
                tlatlago824<br/>
                @gmail.com
              </li>
            </ul>{/* div.txtWrapper */}
          </div>{/* div.rightWrapper */}

        </div>{/* div.contentsWrapper */}

        <div className='bgWrapper' />
      </article>
  )
}
