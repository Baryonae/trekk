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
import { cssInterop } from "nativewind";
import Ionicons from "@expo/vector-icons/Ionicons";

// Map NativeWind's className to the icon's color/style properties
cssInterop(Ionicons, {
  className: {
    target: "style",
    nativeStyleToProp: {
      color: true,
    },
  },
});
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="py-10 px-10 font-sf-medium">
        <Text className=" text-white text-[15px] font-light">
          Hello There! 👋
        </Text>
        <Text className=" text-white text-[35px] font-black">Suvodip</Text>
      </View>
    </SafeAreaView>
  );
}
