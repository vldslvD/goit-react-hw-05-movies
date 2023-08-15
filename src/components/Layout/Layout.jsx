import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLi, StyledLink, StyledUl, NavBar } from './Layout.styled';
const Layout = () => {
  return (
    <div>
      <NavBar>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/movies">Search</StyledLink>
          </StyledLi>
        </StyledUl>
      </NavBar>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
