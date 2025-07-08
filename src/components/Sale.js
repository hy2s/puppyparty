import { useEffect, useRef, useState } from "react";
import Confetti from 'react-confetti';

const Sale = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const sectionRef = useRef(null);

  const target = 894201;
  const duration = 1500;
  const frameRate = 30;
  const totalFrames = Math.round(duration / (1000 / frameRate));
  const increment = Math.round(target / totalFrames);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
        setShowConfetti(true); // 🎉 여기서 confetti 실행
        setTimeout(() => setShowConfetti(false), 10000); // 3초 후 제거
      }
      setCount(current);
    }, 1000 / frameRate);
  };

  return (
    <section id="sale" ref={sectionRef}>
      {showConfetti && <Confetti 
          width={sectionRef.current.offsetWidth} 
          height={sectionRef.current.offsetHeight} 
          numberOfPieces={100}
          />}
      <div className="sale-wrap">
        <div className="sale-txt">
          <p>우리 강아지의 특별한 날을 기념하기 위한 최고의 선물</p>
          <h2>생일축하 세트</h2>
          <h1>누적 판매량 <span>{count.toLocaleString()}</span> 개</h1>
        </div>
        <button>상품 자세히 보기 →</button>
      </div>
    </section>
  );
};

export default Sale;