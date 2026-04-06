import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './styles/styledComponents';
import { Home, About } from './pages';
import { Toast } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Modal } from './components/Modal';
import { themes } from './styles/themes';
import type { RootState } from './redux/store';
import styled from 'styled-components';

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const LoadingFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.size.md};
`;

function App() {
  const themeKey = useSelector((state: RootState) => state.theme.key);

  return (
    <ThemeProvider theme={themes[themeKey]}>
      <GlobalStyle />
      <Toast />
      <Modal />
      <AppLayout>
        <Navbar />
        <MainContent>
          <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </MainContent>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
