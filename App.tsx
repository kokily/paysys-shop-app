import 'react-native-gesture-handler';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContextProvider } from './src/libs/context/UserContext';
import { ThemeProvider } from 'react-native-elements';
import Navigation from './src/navigation/Navigation';

const queryClient = new QueryClient();

function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Navigation />
        </ThemeProvider>
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App;
