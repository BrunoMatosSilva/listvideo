import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { GlobalStyles, PagesWrapper } from './styles/global'
import { MemoryRouter as Router } from "react-router-dom";
import { RoutesComponent } from './routes';
import { LoadingProvider } from './contexts/LoadingContext';
import { Loading } from './components/Loading';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <LoadingProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <PagesWrapper>
              <Loading />
              <RoutesComponent />
            </PagesWrapper>
          </ThemeProvider>
        </AuthProvider>
      </LoadingProvider>
    </Router>
  )
}

export default App
