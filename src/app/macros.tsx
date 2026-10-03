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
      <View className="flex flex-row py-10">
        <View className=" flex-none rounded-xl" p-5>
          <View className="flex flex-column gap-2">
            <View className=" basis-auto rounded-xl bg-white/10">
              <Text className="text-white px-5 pt-5 text-5xl font-bold">1700</Text>
              <Text className="text-white pb-5 px-5">Calories Consumed</Text>
              
            </View>
            <View className=" basis-auto rounded-xl bg-white/10">
              <Text className="text-white px-5 pt-5 text-5xl font-bold">120</Text>
              <Text className="text-white px-5 pb-5">Protein Consumed</Text>
            </View>
          </View>
        </View>
        <View className=" basis-auto grow rounded-xl p-5 mx-3 bg-white/10"><Text className="text-[#fdf0d5]">Graph</Text></View>
      </View>
      
        

      
    </SafeAreaView>
  );
}
