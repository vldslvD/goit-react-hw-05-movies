import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  display: block;
`;

export const DescrDev = styled.section`
  display: flex;
  gap: 30px;
`;
export const Button = styled(Link)`
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
    font-size: 16px;
  font-weight: 600;
  margin: 10px;
  min-height: 20px;
width: 200px;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);

&:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}
&:active {
  box-shadow: none;
  transform: translateY(0);
}
`;
export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;
export const StyledLi = styled.li`
  text-decoration: none;
`;
