import styled from 'styled-components';

const HolidayItemBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 8px solid #ff6b6b;

  .date_circle {
    background: #ff6b6b;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
    font-size: 0.9rem;

    .day { font-size: 1.2rem; font-weight: bold; }
  }

  .content {
    h2 { margin: 0; font-size: 1.2rem; color: #333; }
    p { margin: 5px 0 0; color: #777; }
  }
`;

const PdItemHoliday = ({ holiday }) => {
  const { dateName, locdate } = holiday;
  const dateStr = String(locdate);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);

  return (
    <HolidayItemBlock>
      <div className="date_circle">
        <span>{month}월</span>
        <span className="day">{day}</span>
      </div>
      <div className="content">
        <h2>{dateName}</h2>
        <p>{dateStr.substring(0, 4)}년 {month}월 {day}일 국가 공휴일</p>
      </div>
    </HolidayItemBlock>
  );
};

export default PdItemHoliday;