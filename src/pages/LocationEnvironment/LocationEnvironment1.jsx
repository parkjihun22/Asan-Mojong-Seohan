import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
const LocationSection = [
  {
    img: section2Image1,
    titleText: "모종샛들지구 중심<br />아산 핵심 생활권 입지",
    contentText:
      "아산시청·온양온천역·터미널 인접<br />풍부한 생활·행정 인프라로 완성된 중심 입지",
  },
  {
    img: section2Image2,
    titleText: "의료·교육 인프라 밀집<br />안심 학세권·메디컬 생활권",
    contentText:
      "충무병원·아산병원 등 의료시설 인접<br />초·중·고 도보 통학권으로 교육환경 우수",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망 확충<br />서울·천안 접근성 강화",
    contentText:
      "KTX·SRT 천안아산역 약 10분 거리<br />서해선 복선전철(예정)·국도 21호선 등 교통 호재",
  },
  {
    img: section2Image4,
    titleText: "원스톱 도심 인프라<br />생활 편의시설 집약",
    contentText:
      "이마트·하나로마트·아산터미널 등 인접<br />카페거리·은행·공공기관 등 생활 인프라 완비",
  },
  {
    img: section2Image5,
    titleText: "브랜드 대단지 프리미엄<br />1,079세대 서한이다음 노블리스",
    contentText:
      "지하 2층~지상 29층, 총 10개동 규모<br />피트니스·골프·북카페 등 커뮤니티 특화",
  },
  {
    img: section2Image6,
    titleText: "자연과 함께하는 힐링 입지<br />쾌적한 주거 환경",
    contentText:
      "모종근린공원·온천천 인접<br />산책·레저를 즐기는 여유로운 일상",
  },
];




const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>아산 모종 서한이다음 - 입지환경</title>
  <meta
    name="description"
    content="충남 아산시 모종샛들지구 중심 입지, 아산 모종 서한이다음의 입지환경을 확인하세요. KTX 천안아산역, 서해선 복선전철(예정) 등 교통망과 시청·터미널·이마트·하나로마트 등 생활 인프라, 모종근린공원·온천천 등 쾌적한 자연환경까지."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.cssdesign.kr/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="아산 모종 서한이다음" />
  <meta property="og:title" content="아산 모종 서한이다음 - 입지환경" />
  <meta
    property="og:description"
    content="KTX 천안아산역, 서해선 복선전철(예정) 등 교통망과 풍부한 생활 인프라, 모종근린공원·온천천 자연환경까지 누리는 아산 핵심 입지."
  />
  <meta property="og:url" content="https://www.cssdesign.kr/LocationEnvironment/intro" />
  <meta property="og:image" content="https://www.cssdesign.kr/img/og/location.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="아산 모종 서한이다음 - 입지환경" />
  <meta
    name="twitter:description"
    content="KTX 천안아산역, 서해선 복선전철(예정), 시청·터미널·이마트 등 생활 인프라와 모종근린공원·온천천이 어우러진 아산 모종 서한이다음의 입지환경."
  />
  <meta name="twitter:image" content="https://www.cssdesign.kr/img/og/location.jpg" />
  <meta name="twitter:url" content="https://www.cssdesign.kr/LocationEnvironment/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "아산 모종 서한이다음 - 입지환경",
      "url": "https://www.cssdesign.kr/LocationEnvironment/intro",
      "description":
        "충남 아산시 모종샛들지구 중심 입지, KTX 천안아산역과 서해선 복선전철(예정), 시청·터미널·이마트 등 풍부한 생활 인프라와 모종근린공원·온천천이 어우러진 쾌적한 환경.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.cssdesign.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.cssdesign.kr/" },
          { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.cssdesign.kr/LocationEnvironment/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />
<MenuBar contents={menuContents} />

{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>아산 모종 서한이다음 - 입지안내</h1>
<p className={styles.screenReaderOnly}>
  아산 모종 서한이다음의 입지 정보를 확인하세요. KTX 천안아산역과 서해선 복선전철(예정) 등
  광역 교통망, 아산시청·터미널·이마트·하나로마트 등 생활 인프라, 모종근린공원·온천천 등
  자연환경을 모두 갖춘 아산 핵심 주거 입지입니다.
</p>

<div className={styles.textBox}>
  <div>갈수록 편리해질 아산</div>
  <div>살수록 높아질 이다음</div>
  <div>도시를 압도할 자부심, 아산 모종 서한이다음</div>
</div>



      <img
        src={page1}
        className={styles.image2}
        alt="아산 모종 서한이다음입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 아산 모종 서한이다음사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
