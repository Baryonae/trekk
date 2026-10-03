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

export default function HomeScreen() {
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
          <Text className="text-[#fdf0d5] font-black py-3 text-6xl">149 lbs</Text>
          <Text className="text-white italic">You have lost 5lbs as compared to last month</Text>
        </View>
      </View>
      <View className="flex flex-row gap-2">
        <View className=" w-64 rounded-xl p-5 bg-[#0D0D0D] border-[#1A1A1A] border-[1px]">
          <Text className="text-[#48A111] font-black text-3xl">Workout</Text>
        </View>
        <View className=" w-36 rounded-xl p-5 bg-[#0D0D0D] border-[#1A1A1A] border-[1px]">
          <Text className="text-[#48A111] font-black text-3xl">Diet</Text>
          <Text className="text-[#fdf0d5]">Track your daily nutrition</Text>
        </View>
      </View>
      
        

      
    </SafeAreaView>
  );
}
