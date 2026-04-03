import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/styledComponents';
import { Home, About } from './pages';
import { Toast } from './components/Toast';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toast />
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
