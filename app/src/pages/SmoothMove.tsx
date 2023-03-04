import React,{useEffect, useState} from 'react';
import '../assets/css/smoothMove.css'

const SmoothMove = (()=>{
    const [alertMessage, setAlertMessage] = useState<boolean>(false);
    
    function smoothMove(e: number){
        //let prevValueString = document.getElementById("box").style.left;
        // 최초값은 undifined이며, 이후 px과 합쳐진 string으로 출력되어 집니다.
        let prevValue = document.getElementById("box").offsetLeft;
        // 하여 .offsetLeft 로 값을 측정하여야 합니다.
        console.log(typeof(prevValue));
        //console.log(typeof(prevValueString));
        let x = ((prevValue == undefined) ? 0 : prevValue);
        const targetX = e; //목적지x값

        if (prevValue != e) {
            setAlertMessage(false);
            const timer = setInterval(() => {
                x = x + 0.1 * (targetX - x); // 감속운동 진행
                document.getElementById("box").style.left = x + "px";
                if (Math.round(x) === targetX) { // 정수로 치환된 float 값이 목적 좌표와 같으면
                    //.toFixed()는 결과값을 string으로 내어주기 때문에
                    // parseInt()를 사용해 int로 재 변환하는 추가과정이 소요됩니다.
                    clearInterval(timer); // 종료합니다.
                }
            }, 10);
        } else {
            setAlertMessage(true);
        }
    }

    return (
        <>
            <div className='btn-wrap'>
                <button 
                    type="button" 
                    className='btn btn-line'
                    onClick={()=>smoothMove(0)}
                >
                    reset
                </button>
                <button 
                    type="button" 
                    className='btn btn-line'
                    onClick={()=>smoothMove(200)}
                >
                    목적지 이동200
                </button>
                <button 
                    type="button" 
                    className='btn btn-line'
                    onClick={()=>smoothMove(600)}
                >
                    목적지 이동600
                </button>
                <button 
                    type="button" 
                    className='btn btn-line'
                    onClick={()=>smoothMove(1200)}
                >
                    목적지 이동1200
                </button>

            </div>
            <div>
                <div id="box">box</div>
                {
                    alertMessage && (<p className="message">이미 해당 좌표값에 위치해 있습니다.</p>)
                }
            </div>
        </>
    )
});

export default SmoothMove;