import React, { useEffect, useRef, useState } from 'react'



export default function Main() {
    // let [typingIdx1, setTypingIdx1] = useState(0);
    let [typingTxt1, setTypingTxt1] = useState("");
    let typingIdx1 = useRef(0);

    // let [typingIdx2, setTypingIdx2] = useState(0);
    // let [typingTxt2, setTypingTxt2] = useState("");

    let tyInt1;
    // let tyInt2;

    let elBack = useRef(); 
    let elMiddle = useRef(); 
    let elFront = useRef(); 

    const typingFun = (str, num = 1) => {
        if(num == 1){
            if(typingIdx1.current < str.length){             
                setTypingTxt1(`${typingTxt1 + str[typingIdx1.current]}`);            
                // setTypingIdx1(typingIdx1 + 1); 
                typingIdx1.current += 1;
            }
        }
        // else{
        //     if(typingIdx2 < str.length){             
        //         setTypingTxt2(`${typingTxt2 + str[typingIdx2]}`);            
        //         setTypingIdx2(typingIdx2 + 1); 
        //     }

        // }
    }//typingFun() 함수정의

    useEffect(()=>{        
        clearTimeout(tyInt1); 
        tyInt1 = setTimeout(typingFun, 80,'WELCOME! LEE JU YEONG PORTFOLIO');               
    }, [typingTxt1]);


    // useEffect(()=>{   

    //     clearTimeout(tyInt2);       
    //     tyInt2 = setTimeout(typingFun, 100,'PORTFOLIO', 2);    
        
    // }, [typingTxt2]);

    useEffect(() => {
        setTimeout(()=>{
            elFront.current.classList.add('active');
        }, 0);
        setTimeout(()=>{
            elMiddle.current.classList.add('active');
        }, 650);
        setTimeout(()=>{
            elBack.current.classList.add('active');
        }, 1250);
    }, [])

    // console.log(typingTxt1);
  return (
    <article className='main'>
        <h1 className='titleWrapper'>
            <strong>{typingTxt1}<i className='cursor'/></strong>
            {/* <strong>{typingTxt2}<i className='cursor'/></strong> */}
        </h1>

        <div className='animationBgWrapper'>
            <ul className='starWrapper'>
                <li/>
                <li/>

            </ul>
        
            <div className='animationBg'>
                <i className='back' ref={elBack}></i>
                <i className='middle' ref={elMiddle}></i>
                <i className='front' ref={elFront}></i>
            </div>

        </div>
    </article>
  )
}
