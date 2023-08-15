import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  border-bottom: 3px solid #e2e2e2;
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;
export const StyledLi = styled.li`
  text-decoration: none;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  &.active {
    color: red;
  }
`;
