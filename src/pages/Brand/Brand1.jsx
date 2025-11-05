import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/brand1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>아산 모종 서한이다음 - 브랜드 소개</title>
  <meta
    name="description"
    content="㈜서한의 프리미엄 주거 브랜드 ‘서한이다음 노블리스’의 철학과 가치를 소개합니다. 차별화된 커뮤니티와 품질 기준으로 일상의 품격을 높이는 아산 모종 서한이다음."
  />
  <link rel="canonical" href="https://www.cssdesign.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="아산 모종 서한이다음" />
  <meta property="og:title" content="아산 모종 서한이다음 - 브랜드 소개" />
  <meta
    property="og:description"
    content="서한이다음 노블리스 브랜드 소개: 고객 중심 설계, 신뢰의 품질, 차별화된 커뮤니티로 완성하는 프리미엄 라이프."
  />
  <meta property="og:url" content="https://www.cssdesign.kr/Brand/intro" />
  <meta property="og:image" content="https://www.cssdesign.kr/images/og/main.jpg" />
  <meta property="og:image:alt" content="아산 모종 서한이다음 브랜드 소개 메인 이미지" />
  <meta property="og:locale" content="ko_KR" />

  {/* Twitter Card (선택) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="아산 모종 서한이다음 - 브랜드 소개" />
  <meta
    name="twitter:description"
    content="서한이다음 노블리스의 브랜드 철학과 커뮤니티 가치를 확인하세요."
  />
  <meta name="twitter:image" content="https://www.cssdesign.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />

<MenuBar contents={menuContents} />

{/* h1: 접근성 + SEO */}
<h1 className={styles.screenReaderOnly}>아산 모종 서한이다음 - 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  아산 모종 서한이다음은 ㈜서한의 프리미엄 브랜드 ‘서한이다음 노블리스’를 적용했습니다.
  고객 중심 설계와 신뢰의 품질, 차별화된 커뮤니티로 쾌적하고 안전한 주거 환경을 제공합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>생활의 모든 것을 한 걸음에</div>
  <div>서한이다음 노블리스, 아산의 중심에 서다</div>
</div>



            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="아산 모종 서한이다음brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
