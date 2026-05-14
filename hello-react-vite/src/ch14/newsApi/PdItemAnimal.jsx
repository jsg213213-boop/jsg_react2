import styled from 'styled-components';

const AnimalItemBlock = styled.div`
  display: flex;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e9ecef;

  .thumbnail {
    margin-right: 1rem;
    img {
      width: 160px;
      height: 120px;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .contents {
    h2 {
      margin: 0 0 8px 0;
      font-size: 1.1rem;
      color: #007bff;
    }
    p {
      margin: 4px 0;
      line-height: 1.5;
      color: #333;
      font-size: 0.9rem;
    }
    .status {
      display: inline-block;
      padding: 2px 8px;
      background: #f1f3f5;
      border-radius: 4px;
      font-weight: bold;
      margin-top: 5px;
    }
  }
`;

const PdItemAnimal = ({ animal }) => {
  // API 응답 필드 예시: species(품종), happenPlace(발견장소), state(상태), filePath(이미지) 등
  // 대전 API의 실제 키값에 맞춰 구조분해 할당 (보통 classification, age, gender 등 사용)
  const { 
    species, 
    happenPlace, 
    memo, 
    filePath, 
    classification, 
    gender 
  } = animal;

  return (
    <AnimalItemBlock>
      {filePath && (
        <div className="thumbnail">
          <img src={filePath} alt="유기동물" />
        </div>
      )}
      <div className="contents">
        <h2>[{classification}] {species}</h2>
        <p><strong>발견장소:</strong> {happenPlace}</p>
        <p><strong>특징:</strong> {memo}</p>
        <p><strong>성별:</strong> {gender === '1' ? '암컷' : '수컷'}</p>
        <div className="status">공고 중</div>
      </div>
    </AnimalItemBlock>
  );
};

export default PdItemAnimal;