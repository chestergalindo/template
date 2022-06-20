import { QueryClient, QueryClientProvider } from 'react-query';
import { RouteList } from '../Routes/RouteList';
import { AppProvider } from './context';

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouteList />
      </AppProvider>
    </QueryClientProvider>
  );
};
