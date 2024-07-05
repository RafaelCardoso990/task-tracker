import HomeScreen from './Screen/HomeScreen';
import AppNavigator from './components/AppNavigator';
import { PageProvider } from './providers/TablistProvider';

export default function App() {  
  // return <HomeScreen/>
  return (
    <PageProvider>
      {/* <AppNavigator/> */}
      <HomeScreen/>
    </PageProvider>
    
  )
}

