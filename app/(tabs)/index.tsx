import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";
import { Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_1280.jpg

export default function explore() {
    return (
        <SafeAreaView style={{flex:1}}>
           <ParallaxScrollView headerBackgroundColor={{dark:"black",light:"white"}} headerImage={<Image style={{flex:1}} source={{uri:"https://cdn.pixabay.com/photo/2022/12/15/09/13/nature-7657230_1280.jpg"}}></Image>}></ParallaxScrollView>
        </SafeAreaView>
    )
}