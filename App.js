import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GeneralPage from './components/pages/GeneralPage';
import ReportIssue from './components/pages/ReportIssue';
import SuggestFeature from './components/pages/SuggestFeature';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home} 
          options={{title: 'Cauli'}}  
        />
        <Stack.Screen 
          name="GeneralPage"
          component={GeneralPage} 
          options={{title: 'FAQ', headerTitleAlign: 'center', headerShadowVisible: false}}            
        />
        <Stack.Screen 
          name="ReportIssue"
          component={ReportIssue} 
          options={{title: 'Report an Issue', 
            headerTitleAlign: 'center', 
            headerShadowVisible: false,
            headerStyle: {backgroundColor: 'rgb(230,230,230)'},
            headerTitleStyle: {fontSize: 16, fontWeight: '700'}
          }}            
        />
        <Stack.Screen 
          name="SuggestFeature"
          component={SuggestFeature} 
          options={{title: 'Suggest a feature', 
            headerTitleAlign: 'center', 
            headerShadowVisible: false,
            headerStyle: {backgroundColor: 'rgb(230,230,230)'},
            headerTitleStyle: {fontSize: 16, fontWeight: '700'}
          }}            
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


