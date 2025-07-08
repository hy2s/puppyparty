import { useState } from "react";

const Sale = () => {

const [count, setCount] = useState(0);
const $count = queueMicrotask

  return (
    <section id="sale">
      <div className="sale-wrap">
        <div className="sale-txt">
          <p>우리 강아지의 특별한 날을 기념하기 위한 최고의 선물</p>
          <h2>생일축하 세트</h2>
          <h1>누적 판매량 <span className="count-num">894,201</span> 개</h1>
        </div>
        <button>상품 자세히 보기 →</button>
      </div>
    </section>
  );
};

export default Sale;