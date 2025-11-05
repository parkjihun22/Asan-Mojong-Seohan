import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="아산 모종 서한이다음-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '이다음' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '아산 모종 서한이다음'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          아산의 새로운 랜드마크, 모종샛들지구 중심의 1,079세대 대단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          온양온천·천안·탕정 생활권을 아우르는 편리한 교통과 풍부한 인프라.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          서한이다음 노블리스에서 시작되는 품격의 라이프스타일.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          1,079세대의 대단지, 아산 모종샛들지구의 새로운 주거 기준.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          KTX 천안아산역, 온양온천역, 아산IC로 연결되는 뛰어난 광역 접근성.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교보문고 큐레이션 서비스와 실내체육관 등 차별화된 커뮤니티.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          아산 모종 서한이다음 노블리스
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·교육·생활·자연 모두 가까운 아산 핵심 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          이마트·롯데마트·충무병원·모종초·모종중 인접, 완성된 생활 인프라 속 주거 프리미엄.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          남향 위주의 4Bay 설계, 채광과 통풍이 우수한 단지 구조.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지상 차 없는 공원형 단지, 아이와 어른이 함께 누리는 안전한 동선.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          품격과 안락함이 공존하는 아산 모종 서한이다음 노블리스.
        </div>
      </>
    );
  }
};

  
