import { StatusBar, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';

import theme from './src/theme';
import { SignIn } from '@screens/SignIn';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if(!fontsLoaded){
    return (
      <Loading />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <SignIn />
    </ThemeProvider>
  
  );
}
