import { ChakraProvider, theme} from '@chakra-ui/react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Homepage from './pages/Homepage';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
