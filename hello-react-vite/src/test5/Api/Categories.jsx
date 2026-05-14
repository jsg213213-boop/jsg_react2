import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  { name: 'all', text: '전체 휴일' },
  { name: 'weather', text: '🌤️ 기상 개황' },
  { name: '01', text: '1월' }, { name: '02', text: '2월' },
  { name: '03', text: '3월' }, { name: '04', text: '4월' },
  { name: '05', text: '5월' }, { name: '06', text: '6월' },
  { name: '07', text: '7월' }, { name: '08', text: '8월' },
  { name: '09', text: '9월' }, { name: '10', text: '10월' },
  { name: '11', text: '11월' }, { name: '12', text: '12월' },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Category = styled(NavLink)`
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  background: #f1f3f5;
  color: #495057;
  text-decoration: none;
  transition: all 0.2s;

  &:hover { background: #e9ecef; }
  &.active {
    background: #ff6b6b;
    color: white;
    font-weight: 600;
  }
`;

const Categories = () => (
  <CategoriesBlock>
    {categories.map((c) => (
      <Category
        key={c.name}
        to={c.name === 'all' ? '/' : `/${c.name}`}
        end={c.name === 'all'}
      >
        {c.text}
      </Category>
    ))}
  </CategoriesBlock>
);

export default Categories;