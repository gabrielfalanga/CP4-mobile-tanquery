import QueryClientProvider from './src/QueryClientProvider'
import HomeScreen from './src/screens/HomeScreen'

export default function App() {
  return (
   <QueryClientProvider>
    <HomeScreen/>
   </QueryClientProvider>
  );
}
