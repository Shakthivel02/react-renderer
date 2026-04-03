import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ErrorBox = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background-color: #fff8f8;
`;

export const StyledTypography = styled.p<{ $variant?: string }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme, $variant }) => ($variant === 'secondary' ? theme.colors.textSecondary : theme.colors.text)};
  font-size: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'h1': return '28px';
      case 'h2': return '22px';
      case 'title': return '18px';
      default: return theme.typography.size.md;
    }
  }};
  font-weight: ${({ $variant }) => ($variant?.startsWith('h') ? 700 : $variant === 'title' ? 600 : 400)};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 100%;
`;

export const StyledButton = styled.button<{ $variant?: string }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: 600;
  color: #fff;
  background: ${({ $variant }) =>
    $variant === 'danger' ? 'linear-gradient(135deg, #ff4b4b, #e02828)' : 
    $variant === 'primary' ? 'linear-gradient(135deg, #4361ee, #3a0ca3)' : 'linear-gradient(135deg, #6c757d, #495057)'};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const GridContainer = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
`;

export const StyledInput = styled.input<{ $size?: string; $variant?: string }>`
  padding: ${({ $size }) =>
    $size === 'lg' ? '12px 16px' : $size === 'sm' ? '6px 8px' : '10px 14px'};
  font-size: ${({ theme, $size }) =>
    $size === 'lg' ? theme.typography.size.lg : $size === 'sm' ? theme.typography.size.sm : theme.typography.size.md};
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15);
    background: #ffffff;
  }
`;

export const PremiumTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  
  th, td {
    padding: ${({ theme }) => theme.spacing.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  tbody tr {
    transition: background 0.2s ease;
    
    &:hover {
      background: rgba(67, 97, 238, 0.04);
    }
    
    &:last-child td {
      border-bottom: none;
    }
  }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const ToastContainer = styled.div<{ $type: 'success' | 'error' }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px 24px;
  background: ${({ $type, theme }) => ($type === 'success' ? '#10b981' : theme.colors.error)};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  font-weight: 500;
  animation: ${slideIn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  z-index: 1000;
`;
