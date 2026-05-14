import axios from 'axios';
import styled from 'styled-components';
import usePromise from './usePromise';
import PdItemHoliday from './PdItemHoliday';
import PdItemWeather from './PdItemWeather'; // 기상 전용 컴포넌트

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) { padding: 0 1rem; }
`;

const publicDataApiKey = import.meta.env.VITE_Public_Data_API_KEY;

const NewsList = ({ category = 'all' }) => {
  const sendData = () => {
    if (category === 'weather') {
      // 이미지 image_ca0a22.png의 기상청 단기예보 통보문 조회서비스 연동
      return axios.get(
        `https://apis.data.go.kr/1360000/VilageFcstMsgService/getWthrSituation?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=10&dataType=JSON&stnId=108`
      );
    } else {
      // 한국천문연구원 특일 정보 연동
      const monthParam = category === 'all' ? '' : `&solMonth=${category}`;
      return axios.get(
        `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${publicDataApiKey}&solYear=2026${monthParam}&_type=json&numOfRows=100`
      );
    }
  };

  const [loading, resolved, error] = usePromise(sendData, [category]);

  if (loading) return <NewsListBlock><p>⏳ 데이터를 불러오는 중...</p></NewsListBlock>;
  if (error) return <NewsListBlock><p style={{ color: 'red' }}>에러가 발생했습니다.</p></NewsListBlock>;
  if (!resolved) return null;

  // ESLint 에러 해결: let 대신 const를 사용하고 삼항 연산자로 바로 할당합니다.
  const rawItem = resolved.data.response?.body?.items?.item;
  
  const resultData = category === 'weather'
    ? (rawItem || []) // 기상 정보 처리
    : (Array.isArray(rawItem) ? rawItem : rawItem ? [rawItem] : []); // 휴일 정보 처리

  // 데이터가 없을 때의 처리
  if (resultData.length === 0) {
    return (
      <NewsListBlock>
        <p style={{ textAlign: 'center' }}>📭 표시할 정보가 없습니다.</p>
      </NewsListBlock>
    );
  }

  return (
    <NewsListBlock>
      {resultData.map((item, index) => (
        category === 'weather' 
          ? <PdItemWeather key={index} weather={item} />
          : <PdItemHoliday key={index} holiday={item} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;