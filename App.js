import React from 'react';
import { creatDrawerNavigator} from "@react-navigation/drawer";
import { NavigatorContainer} from "@react-navigation/native";
import Tela1 from './componentes/Tela1'
import Tela2 from './componentes/Tela2'

const Drawer = creatDrawerNavigator();

export default function App(){
   return (
   <NavigationContainer>
      <Drawer.Navigator>
         <Drawer.Screen name="Tela1" component={Tela1}/>
         <Drawer.Screen name="Tela2" component={Tela2}/>
      </Drawer.Navigator>
 
   </NavigationContainer>>
   )

}