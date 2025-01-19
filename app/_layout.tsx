import { Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{
        headerShown:false
      }} >
            <Stack.Screen name="(nobottombar)/accountInfo" options={{headerShown:true,headerTitle:"Account Info", headerBackTitle:"Go Back"}} />
        </Stack>
    </GestureHandlerRootView>
  );
}