import axios from 'axios';
import React from 'react'

export default function Contact() {

  const msgFun = async (e) => {
    e.preventDefault();
    
    let formdata = new FormData(e.target);
    
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    formdata.append('date', date);
    
    let ObjForm = Object.fromEntries(formdata); 
    console.log(ObjForm);
    //https://port-0-reactproject-br-server-6w1j2alm4a7mi8.sel5.cloudtype.app/portfolio_one
    //`${process.env.FIRST_PORTFOLIO_SERVER}/portfolio_one`
    const getDt = await axios.post('https://port-0-reactproject-br-server-6w1j2alm4a7mi8.sel5.cloudtype.app/portfolio_one', ObjForm);
    console.log('결과: ', getDt);

    if(getDt){
      alert('소중한 메시지에 감사드립니다. :D \n메시지는 최소 2일 내로 확인됩니다.');
    }else{
      alert('메시지 전송에 오류가 났습니다.');

    }

  }//msgFun()

  return (
    <article className='contact'>
      <div className='contentsWrapper'>
        <h2>CONTACT</h2>
        <div className='contactContentsWrapper'>
          <a className='goToEmailSvg' href='mailto:tlatlago824@gmail.com'>
            <svg className='rocketSvg' xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960">
              <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/>
            </svg>
          </a>
          <p>
          제 포트폴리오가 마음에 드셨다면<br/>
          아이콘을 클릭하거나, 메시지를 남겨주세요.
          </p>
          <form className='message' onSubmit={msgFun}>
            <input type='text' name='title' className='title' placeholder='title'/>
            <textarea name='msg' className='msg' placeholder='message'/>
            <button className='send'>SEND</button>
          </form>
        </div>{/* div.contactContentsWrapper */}
      </div>{/* div.contentsWrapper */}

      <div className='bgWrapper'>
        <ul className='plantWrapper'>
          <li><img src='/portfolio_react_ver/img/pinkPlanet.png' alt='분홍색 행성'/></li>
          <li><img src='/portfolio_react_ver/img/orangeAndGreenPlant.png' alt='주황색, 연두색 행성'/></li>
          <li><img src='/portfolio_react_ver/img/bigSaturn.png' alt='고리가 있는 보라색 행성'/></li>
          <li><img src='/portfolio_react_ver/img/greenPlanet.png' alt='연두색 행성'/></li>
        </ul>

        <ul className='starWrapper'>
          <li><img src='/portfolio_react_ver/img/greenStar.png' alt='연두색 별'/></li>
          <li><img src='/portfolio_react_ver/img/whiteStar.png' alt='하얀색 별'/></li>
          <li><img src='/portfolio_react_ver/img/yellowStar.png' alt='금색 별'/></li>
          <li><img src='/portfolio_react_ver/img/whiteStar.png' alt='하얀색 별'/></li>
          <li><img src='/portfolio_react_ver/img/whiteStar.png' alt='하얀색 별'/></li>
          <li><img src='/portfolio_react_ver/img/greenStar.png' alt='연두색 별'/></li>
          <li><img src='/portfolio_react_ver/img/whiteStar.png' alt='하얀색 별'/></li>
          <li><img src='/portfolio_react_ver/img/whiteStar.png' alt='하얀색 별'/></li>
        </ul>
      </div>
    </article>
  )
}
