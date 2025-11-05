import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
	{ label: '사업명', value: '아산 모종 서한이다음 노블리스' },
	{ label: '사업위치', value: '충청남도 아산시 모종동 211번지 일원 (모종샛들지구 A-1블록)' },
	{ label: '대지면적', value: '59,964.00㎡' },
	{ label: '건축면적', value: '9,749.20㎡' },
	{ label: '연면적', value: '142,696.74㎡' },
	{ label: '건축규모', value: '지하 2층 ~ 지상 29층, 총 10개동' },
	{ label: '세대수', value: '총 1,079세대 (일반분양 969세대 / 임대 110세대)' },
	{ label: '주택형', value: '전용 59㎡ · 84㎡ · 101㎡ · 154㎡' },
	{ label: '입주예정', value: '2028년 9월 예정' },
  ];
  
  

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>

<Helmet>
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>아산 모종 서한이다음 - 사업안내</title>
  <meta
    name="description"
    content="충남 아산시 모종동 211번지 일원(모종샛들지구 A-1블록)에 들어서는 아산 모종 서한이다음의 사업 개요를 확인하세요. 총 1,079세대(지하 2층~지상 29층, 10개동), 전용 59·84·101·154㎡ 구성, 위치·규모·입주(예정) 정보 안내."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.cssdesign.kr/BusinessGuide/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="아산 모종 서한이다음" />
  <meta property="og:title" content="아산 모종 서한이다음 - 사업안내" />
  <meta
    property="og:description"
    content="모종샛들지구 중심 생활권, 총 1,079세대 대단지. 위치·규모·타입 구성(59·84·101·154㎡)과 입주(예정) 정보를 한눈에 확인하세요."
  />
  <meta property="og:url" content="https://www.cssdesign.kr/BusinessGuide/intro" />
  <meta property="og:image" content="https://www.cssdesign.kr/img/og/business.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="아산 모종 서한이다음 사업안내 대표 이미지" />
  <meta property="og:locale" content="ko_KR" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="아산 모종 서한이다음 - 사업안내" />
  <meta
    name="twitter:description"
    content="총 1,079세대(10개동, 지상 29층)·전용 59·84·101·154㎡ 구성. 모종샛들지구 중심 입지와 규모·일정 안내."
  />
  <meta name="twitter:image" content="https://www.cssdesign.kr/img/og/business.jpg" />
  <meta name="twitter:url" content="https://www.cssdesign.kr/BusinessGuide/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "아산 모종 서한이다음 - 사업안내",
      "url": "https://www.cssdesign.kr/BusinessGuide/intro",
      "description":
        "충남 아산시 모종동 211번지 일원(모종샛들지구 A-1블록)에 조성되는 아산 모종 서한이다음의 위치, 규모, 타입 구성(59·84·101·154㎡), 입주(예정) 정보를 제공합니다. 총 1,079세대, 지하 2층~지상 29층, 10개동.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.cssdesign.kr/img/og/business.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.cssdesign.kr/" },
          { "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://www.cssdesign.kr/BusinessGuide/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

{/* h1: 접근성 + SEO */}
<h1 className={styles.screenReaderOnly}>아산 모종 서한이다음 - 사업안내</h1>
<p className={styles.screenReaderOnly}>
  아산 모종 서한이다음은 충남 아산시 모종샛들지구 중심 생활권에 조성되는 총 1,079세대의 브랜드 대단지입니다.
  이 페이지에서는 위치와 규모, 전용 59·84·101·154㎡ 타입 구성, 특화 설계와 주변 인프라 등 사업의 핵심 정보를 안내합니다.
</p>

<div className={styles.textBox}>
  <div>아산의 새로운 라이프 컬렉션</div>
  <div>서한이다음 노블리스, 모종샛들지구의 중심에 서다</div>
</div>



			<img className={styles.img3} src={page1} alt="아산 모종 서한이다음-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
