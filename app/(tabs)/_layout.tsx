import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="foryou" options={{title:"For You"}}/>
      <Tabs.Screen name="index" options={{title:"Explore"}} />
      <Tabs.Screen name="account" options={{title:"Account"}} />
    </Tabs>
  );
}
