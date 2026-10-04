import * as Device from "expo-device";
// eslint-disable-next-line import/no-unresolved
import "../../global.css";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";
import { HintRow } from "@/components/hint-row";
import { Text } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { WebBadge } from "@/components/web-badge";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { LightSpeedInLeft } from "react-native-reanimated";
import { FlatList } from "react-native";
import { ScrollView ,GestureHandlerRootView} from "react-native-gesture-handler";
import { useState } from "react";

type ItemData = {
  id: string;
  title: string;
};
const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Leg Press',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Leg Extension',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Leg Curl',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '' : '';
    const color = item.id === selectedId ? 'white' : 'white';
    return (
      <Text
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor, color, padding: 10 }}
      >
        {item.title}
      </Text>
    );
  };
  return (
    <SafeAreaView className="items-center">
      <View className="flex flex-row py-3 pt-10 mx-3">
        <View className=" flex-none rounded-xl" p-5>
          <View className="flex flex-column gap-2">
            <View className=" basis-auto rounded-xl bg-[#0D0D0D] border-[#1A1A1A] border-2">
              <Text className="text-[#BBDC12] px-5 pt-5 text-5xl font-bold">1700</Text>
              <Text className="text-[#fdf0d5] pb-5 px-5">Calories Consumed</Text>
              
            </View>
            <View className=" basis-auto rounded-xl bg-[#0D0D0D] border-[#1A1A1A] border-[1px]">
              <Text className="text-[#BBDC12] px-5 pt-5 text-5xl font-bold">120</Text>
              <Text className="text-[#fdf0d5] px-5 pb-5">Protein Consumed</Text>
            </View>
          </View>
        </View>
        <View className=" basis-auto grow rounded-xl p-5 mx-3 bg-[#0D0D0D] border-[#1A1A1A] border-[1px]"><Text className="text-[#fdf0d5]">Graph</Text></View>
      </View>
      <View className="flex flex-row py-2">
        <View className=" h-64 flex-1 rounded-xl p-5 mx-3 bg-[#0D0D0D] border-[#1A1A1A] border-[1px]">
          <Text className="text-[#48A111] font-black text-3xl">🏋️ Weight Tracker</Text>
          <Text className="text-[#fdf0d5] font-black py-3 text-6xl">149
              <Text className="text-[#BBDC12] font-black text-3xl">  lbs</Text>
          </Text>
          <Text className="text-white italic">You have lost 5lbs as compared to last month</Text>
        </View>
      </View>
      <View className="flex flex-row gap-2">
        <View className=" w-64 rounded-xl p-5 bg-[#0D0D0D] border-[#1A1A1A] border-[1px]">
          <Text className="text-[#48A111] font-black text-3xl">Workout</Text>
          <Text className="font-sans text-xl text-[#fdf0d5]">Today is - 
            <Text className="text-[#BBDC12] font-black text-xl underline underline-offset-2"> 
              Leg Day
            </Text>
          </Text>
          <Text className="text-[#fdf0d5] py-3 text-2xl font-bold">Split</Text>
          <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />

        </View>
        <View className=" w-36 rounded-xl p-5 bg-[#0D0D0D] border-[#1A1A1A] border-[1px]">
          <Text className="text-[#48A111] font-black text-3xl">Diet</Text>
          <Text className="text-[#fdf0d5]">Track your daily nutrition</Text>
        </View>
      </View>
      
        

      
    </SafeAreaView>
  );
}
