import React from 'react'; //Para o JSX
import { NavigationContainer } from '@react-navigation/native'; //Para a navegação entre telas
import { createStackNavigator } from '@react-navigation/stack'; //Para a navegação em stack

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes(){
    return(

        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>

    );
}