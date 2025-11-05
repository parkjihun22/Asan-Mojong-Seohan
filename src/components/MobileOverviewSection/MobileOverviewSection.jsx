// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
<ul className={styles.detailList}>
  <li>
    <strong>사업명</strong>
    <span>아산 모종 서한이다음 노블리스</span>
  </li>
  <li>
    <strong>대지위치</strong>
    <span>충청남도 아산시 모종동 211번지 일원 (모종샛들지구 A-1블록)</span>
  </li>
  <li>
    <strong>건축규모</strong>
    <span>지하 2층 ~ 지상 29층, 총 10개동</span>
  </li>
  <li>
    <strong>주택형</strong>
    <span>전용 59㎡ · 84㎡ · 101㎡ · 154㎡ (실수요 중심)</span>
  </li>
  <li>
    <strong>세대수</strong>
    <span>총 1,079세대 (일반분양 969세대 / 임대 110세대)</span>
  </li>
  <li>
    <strong>시공사</strong>
    <span>㈜서한</span>
  </li>
  <li>
    <strong>입주예정</strong>
    <span>2028년 9월 예정</span>
  </li>
</ul>

    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
          모종샛들지구 중심 생활권과 학세권을 누리는<br />
          아산 모종 서한이다음 프리미엄 라이프
        </p>

        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "아산 모종샛들지구 중심 입지",
      desc:
        "온양온천·천안·탕정 생활권을 모두 누리는 입지<br/>도심 속 풍부한 생활 인프라와 쾌적한 자연환경<br/>아산의 새로운 중심, 모종샛들지구 프리미엄",
    },
    {
      img: slide2,
      title: "편리한 교통 네트워크",
      desc:
        "KTX 천안아산역·온양온천역 인접, 전국 어디든 빠르게<br/>아산IC·탕정IC 등 고속도로 접근 용이<br/>GTX-C(예정)·광역도로 확충으로 교통 가치 상승",
    },
    {
      img: slide3,
      title: "풍부한 생활·교육 인프라",
      desc:
        "모종초·모종중 도보권 학세권 입지<br/>이마트·롯데마트·농협 하나로마트 인접<br/>충무병원 등 의료·행정·문화 인프라 완비",
    },
    {
      img: slide4,
      title: "개발 호재로 미래가치 상승",
      desc:
        "탕정2지구·온양온천지구 도시개발사업 추진<br/>삼성디스플레이시티·스마트밸리 산업단지 인접<br/>GTX-C 연장 검토 등 교통·산업 시너지 기대",
    },
    {
      img: slide5,
      title: "아산 최대 규모 1,079세대 대단지",
      desc:
        "지하 2층~지상 29층, 총 10개동 규모<br/>전용 59·84·101·154㎡ 다채로운 타입 구성<br/>남향 위주 4Bay 판상형 설계로 채광·통풍 우수",
    },
    {
      img: slide6,
      title: "서한이다음 노블리스 브랜드 가치",
      desc:
        "교보문고 북큐레이션 서비스 등 차별화된 커뮤니티<br/>실내체육관·게스트하우스·수영장 등 프리미엄 시설<br/>㈜서한 시공, 2028년 9월 입주 예정",
    },
  ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
