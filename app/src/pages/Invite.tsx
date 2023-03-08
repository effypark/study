import React from 'react';
import '../assets/css/invite.css'

const Invite = () => {
    return (
        <div className="wrap">
            <b className='title'>(주)모시깽이에 초대합니다</b>
            <p className='info-text'>
                홍길동님(대표 담당자)이 왕만원님을 모시깽이로 초대했습니다.
                동료들과 함께 인재 매칭을 요청하고 인재에게 직접 제안할 수 있습니다.
            </p>
            <ul className="invite-info">
                <li>기업명 : (주)모시깽이</li>
                <li>담당자 : 왕만원</li>
                <li>부서 : 서비스실</li>
                <li>직급/직책 : 팀장</li>
            </ul>
            <p className="alert">* 본인이 아니거나 정보가 다를 경우 대표담당자에게 문의해주세요.</p>
            <div className='btn-wrap'>
                <button 
                    type='button'
                    onClick={()=>{
                        alert('띠용!');
                    }}
                    className="btn btn-main"
                >
                    다음
                </button>
            </div>
        </div>
    )
}

export default Invite;