import CustomBottomSheet from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ flex: 1 }}> {/* Add a View with flex: 1 */}
      <Text>Account Page</Text>
      <Button title="Open" onPress={() => setPictureOpen(true)} />
        {pictureOpen ? <CustomBottomSheet  onCloseSheet={()=>{setPictureOpen(false)}}/> : null} 
      </View>
    </SafeAreaView>
  );
}