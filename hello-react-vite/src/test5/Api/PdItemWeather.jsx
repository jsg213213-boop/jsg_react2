import styled from 'styled-components';

const WeatherItemBlock = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #e3f2fd;
  border-radius: 12px;
  border-left: 8px solid #2196f3;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    h2 { margin: 0; font-size: 1.2rem; color: #1976d2; }
    span { font-size: 0.8rem; color: #64b5f6; }
  }
  .wf {
    line-height: 1.6;
    color: #333;
    white-space: pre-wrap;
  }
`;

const PdItemWeather = ({ weather }) => {
  const { wf, tmFc, stnName } = weather;
  return (
    <WeatherItemBlock>
      <div className="header">
        <h2>📍 {stnName} 기상 개황</h2>
        <span>발표시각: {tmFc}</span>
      </div>
      <div className="wf">{wf}</div>
    </WeatherItemBlock>
  );
};

export default PdItemWeather;