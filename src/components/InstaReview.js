import React from 'react';

const InstaReview = () => {
      return (
    <div className="instareview">
      <div className="instareivew-msg">
        
        <h3>EVENT</h3>
        <p>Puppy Party의 소중한 고객님을 위해 준비했어요</p>
      </div>
      
      <ul>

        
        <li className="insta-bg">
          <h4>인스타 후기<br/>EVENT <br/>🖱️ </h4>
          <div className='sub-back1'>
          
          <div className='review-p'>
          <p>PuppyParty 인스타그램 계정을 <br/>태그하려 게시물을 업로드 해주시면</p>
          <p>추첨을 통해 <br/> 선물을 보내드립니다.</p>
          </div>
          <button className='re-btn'>Instagram 방문</button>
          </div>
        </li>

       
        <li className="first-bg"> 
          <h4>첫 구매<br/>EVENT<br/>🖱️</h4>
          <div className='sub-back2'>
          <div className='review-p'>
          <p>첫 구매 고객</p>
          <p className='coupon'>30% 할인쿠폰</p>
          </div>
          <button className='re-btn'>첫 구매 쿠폰 받기</button>
          </div>
        </li>
      </ul>
    </div>
    );
};

export default InstaReview;