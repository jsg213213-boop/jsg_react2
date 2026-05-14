import { useParams } from 'react-router-dom';
import Categories from './Categories';
import NewsList from './NewsList';

/**
 * NewsPage 컴포넌트
 * 라우터 파라미터를 받아 현재 선택된 카테고리에 맞는 리스트를 출력합니다.
 */
const NewsPage = () => {
  // URL 파라미터에서 category 값을 가져옵니다 (예: /05, /weather)
  const params = useParams();
  const category = params.category || 'all';

  // 제목 스타일 정의
  const titleStyle = {
    textAlign: 'center',
    marginTop: '30px',
    color: '#343a40',
    fontSize: '2rem',
    fontWeight: 'bold'
  };

  // 현재 카테고리에 따른 동적 제목 설정
  const getPageTitle = (cat) => {
    if (cat === 'weather') return '🌤️ 실시간 기상 개황 안내';
    if (cat === 'all') return '📅 2026년 전체 공휴일 정보';
    return `📅 2026년 ${parseInt(cat)}월 공휴일 정보`;
  };

  return (
    <>
      {/* 페이지 상단 제목 */}
      <h1 style={titleStyle}>{getPageTitle(category)}</h1>
      
      {/* 상단 카테고리 네비게이션 (1월~12월, 기상개황 버튼 포함) */}
      <Categories />
      
      {/* 선택된 카테고리에 따른 데이터 리스트 출력 */}
      {/* NewsList 내부에서 category 값에 따라 기상청 API 또는 특일 정보 API를 호출합니다. */}
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;