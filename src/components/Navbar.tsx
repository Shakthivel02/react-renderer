import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeReducer/action';
import type { RootState, AppDispatch } from '../redux/store';

const NavWrapper = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease;
`;

const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  height: 56px;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size.lg};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.div`
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
`;

const NavLink = styled(Link) <{ $active?: boolean }>`
  text-decoration: none;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size.md};
  color: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.textSecondary};
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.15s ease;

  ${({ $active, theme }) => $active && `
    background: ${theme.colors.primaryGhost};
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryGhost};
  }
`;

const NavRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ThemeToggle = styled.button`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryGhost};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;
`;

const UserName = styled.span`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size.md};
  color: ${({ theme }) => theme.colors.text};
`;

export const Navbar: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const isDark = useSelector((state: RootState) => state.theme.key === 'dark');

  return (
    <NavWrapper>
      <NavInner>
        <Logo>
          <LogoIcon>FE</LogoIcon>
        </Logo>
        <NavLinks>
          <NavLink to="/" $active={location.pathname === '/'}>Dashboard</NavLink>
          <NavLink to="/about" $active={location.pathname === '/about'}>About</NavLink>
        </NavLinks>
        <NavRight>
          <ThemeToggle onClick={() => dispatch(toggleTheme())} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? '☀️' : '🌙'}
          </ThemeToggle>
          <UserName>Admin</UserName>
          <UserAvatar>A</UserAvatar>
        </NavRight>
      </NavInner>
    </NavWrapper>
  );
};
