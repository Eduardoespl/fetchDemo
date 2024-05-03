import './App.css';
import SWRComponent from './components/SWR';
import ReactQueryComponent from './components/ReactQuery';
import AxiosComponent from './components/Axios';
import UseFetchComponent from './components/UseFetchHook';
import { QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <SWRComponent />
      <QueryClientProvider client={queryClient}>
        <ReactQueryComponent />
      </QueryClientProvider>
      <AxiosComponent />
      <UseFetchComponent />
    </div>
  );
}

export default App;
