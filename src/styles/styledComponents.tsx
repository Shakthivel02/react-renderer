import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-y: scroll;
    scrollbar-gutter: stable;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.size.md};
    line-height: 1.6;
    min-height: 100vh;
    transition: background 0.25s ease, color 0.25s ease;
  }

  #root {
    width: 100%;
    max-width: 100%;
    margin: 0;
    text-align: left;
    border: none;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const ErrorBox = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.errorLight};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const StyledTypography = styled.p<{ $variant?: string }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'secondary': return theme.colors.textSecondary;
      case 'muted': return theme.colors.textMuted;
      default: return theme.colors.text;
    }
  }};
  font-size: ${({ $variant }) => {
    switch ($variant) {
      case 'h1': return '24px';
      case 'h2': return '18px';
      case 'title': return '16px';
      default: return '14px';
    }
  }};
  font-weight: ${({ $variant }) => {
    if ($variant === 'h1') return 700;
    if ($variant === 'h2') return 600;
    if ($variant === 'title') return 600;
    return 400;
  }};
  letter-spacing: ${({ $variant }) => $variant?.startsWith('h') ? '-0.02em' : 'normal'};
  line-height: ${({ $variant }) => $variant?.startsWith('h') ? '1.3' : '1.6'};
  margin-bottom: ${({ theme, $variant }) =>
    $variant?.startsWith('h') ? theme.spacing.sm : theme.spacing.md};
`;

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${fadeIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const StyledButton = styled.button<{ $variant?: string; $size?: 'sm' | 'md' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: 8px;
  padding: ${({ $size }) => ($size === 'sm' ? '6px 12px' : '10px 20px')};
  font-size: ${({ theme, $size }) => ($size === 'sm' ? theme.typography.size.sm : theme.typography.size.md)};
  font-weight: 600;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ $variant, theme }) =>
    $variant === 'danger' ? theme.colors.error :
      $variant === 'primary' ? '#ffffff' : theme.colors.textSecondary};
  background: ${({ $variant, theme }) =>
    $variant === 'danger' ? 'transparent' :
      $variant === 'primary' ? theme.colors.primary : 'transparent'};
  border: 1px solid ${({ $variant, theme }) =>
    $variant === 'danger' ? theme.colors.error :
      $variant === 'primary' ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ $variant, theme }) =>
    $variant === 'danger' ? theme.colors.errorLight :
      $variant === 'primary' ? theme.colors.primaryDark : theme.colors.background};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.background};
    filter: grayscale(0.2);
    transform: none !important;
    box-shadow: none !important;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    outline-offset: 2px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const GridContainer = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 6px;
  font-weight: 500;
  letter-spacing: 0.01em;
`;

export const StyledInput = styled.input<{ $size?: string; $variant?: string }>`
  padding: ${({ $size }) =>
    $size === 'lg' ? '12px 14px' : $size === 'sm' ? '6px 10px' : '10px 14px'};
  font-size: ${({ theme }) => theme.typography.size.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: all 0.15s ease;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryGhost};
  }
`;

const rowEntry = keyframes`
  from { opacity: 0; transform: scale(0.99) translateY(4px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

export const PremiumTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: ${({ theme }) => theme.typography.size.md};

  th, td {
    padding: 12px ${({ theme }) => theme.spacing.md};
    text-align: left;
  }

  th {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: ${({ theme }) => theme.colors.primaryGhost};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

    &:first-child {
      border-radius: ${({ theme }) => theme.borderRadius.md} 0 0 0;
    }
    &:last-child {
      border-radius: 0 ${({ theme }) => theme.borderRadius.md} 0 0;
    }
  }

  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
    color: ${({ theme }) => theme.colors.text};
  }

  tbody tr {
    transition: background 0.15s ease;
    animation: ${rowEntry} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryGhost};
    }

    &:last-child td {
      border-bottom: none;
    }
  }
`;

const slideIn = keyframes`
  from { transform: translateX(100%) scale(0.95); opacity: 0; }
  to { transform: translateX(0) scale(1); opacity: 1; }
`;

export const ToastContainer = styled.div<{ $type: 'success' | 'error' }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 14px 22px;
  background: ${({ $type, theme }) => ($type === 'success' ? theme.colors.success : theme.colors.error)};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size.md};
  animation: ${slideIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledSelect = styled.select`
  padding: 10px 14px;
  font-size: ${({ theme }) => theme.typography.size.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: all 0.15s ease;
  width: 100%;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryGhost};
  }
`;

export const DropzoneContainer = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryGhost};
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const SwitchToggle = styled.div<{ $checked: boolean }>`
  width: 44px;
  height: 24px;
  background: ${({ $checked, theme }) => ($checked ? theme.colors.primary : theme.colors.border)};
  border-radius: 12px;
  position: relative;
  transition: all 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ $checked }) => ($checked ? '22px' : '2px')};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
`;

export const IconButton = styled.button`
  background: ${({ theme }) => theme.colors.errorLight};
  color: ${({ theme }) => theme.colors.error};
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: white;
    transform: scale(1.1);
  }
`;

export const FlexRow = styled.div<{ $justify?: string; $align?: string; $gap?: string }>`
  display: flex;
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'center'};
  gap: ${({ $gap, theme }) => $gap || theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  h2, h3, h1 {
    margin-bottom: 0;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;
  animation: ${fadeIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const CircleButton = styled.button<{ $variant?: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({ theme, $variant }) => $variant === 'danger' ? theme.colors.error : theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-left: auto;

  &:hover {
    transform: scale(1.1) rotate(90deg);
    background: ${({ theme, $variant }) => $variant === 'danger' ? '#b91c1c' : theme.colors.primaryDark};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const PaginationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md};
`;

export const PaginationInfo = styled.div`
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

export const PaginationActions = styled.div`
  display: flex;
  gap: 8px;
`;


export const StyledPageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;
