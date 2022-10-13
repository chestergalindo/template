import { QueryClient, QueryClientProvider } from 'react-query';
import { RouteList } from '../../routes/RouteList';
import { AppProvider } from '../../storage/artist/context';

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
