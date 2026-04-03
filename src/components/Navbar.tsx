import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.textSecondary};
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <NavContainer>
      <NavLink to="/" $active={location.pathname === '/'}>Home</NavLink>
      <NavLink to="/about" $active={location.pathname === '/about'}>About</NavLink>
    </NavContainer>
  );
};
