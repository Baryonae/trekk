import "../../global.css";

import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { cssInterop } from "nativewind";
import { router } from "expo-router";
cssInterop(Ionicons, {
  className: {
    target: "style",
    nativeStyleToProp: {
      color: true,
    },
  },
});

const ProgressBar = ({ progress = 50 }) => {
  return (
    <View className="my-2 h-2 min-w-24 overflow-hidden rounded-full bg-gray-200">
      <View
        style={{ width: `${progress}%` }}
        className="h-full rounded-full bg-green-500"
      />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="px-10 py-10">
        <View className="mb-2 flex-row items-center justify-between">
          <View>
            <View className="mb-1 flex-row items-center">
              <Text className="font-sf-medium text-[13px] uppercase tracking-widest text-white/40">
                Welcome back
              </Text>

              <Text className="ml-2 text-[13px]">👋</Text>
            </View>

            <Text className="font-sf-bold text-[34px] leading-[38px] text-white">
              Suvodip
            </Text>
          </View>

          {/* Profile button */}
          <Pressable
            className="h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111111]"
            onPress={() => {}}
          >
            <View className="h-8 w-8 items-center justify-center rounded-full bg-[#242424]">
              <Text className="font-sf-bold text-sm text-white">S</Text>
            </View>
          </Pressable>
        </View>
        <View className="my-5 rounded-3xl border border-[#1A1A1A] bg-[#0D0D0D] p-5">
          <View className="flex-row items-center justify-center gap-5">
            <Ionicons name="flame" size={35} className="color-orange-500" />

            <View>
              <Text className="font-sf text-gray-400">STREAK</Text>

              <Text className="font-sf-medium text-2xl text-yellow-400">
                16 DAYS
              </Text>
            </View>

            <View className="ml-5">
              <View className="flex-row items-center gap-5">
                <View>
                  <Text className="font-sf text-gray-400">DAYS</Text>

                  <Text className="font-sf text-xs text-white">16/30</Text>
                </View>

                <Ionicons
                  name="trophy"
                  size={20}
                  className="color-yellow-500"
                />
              </View>

              <ProgressBar progress={53} />
            </View>
          </View>
        </View>

        <View className="flex-row">
          <View className="basis-1/2 overflow-hidden rounded-2xl border-[#1A1A1A] border-[1px]">
            <LinearGradient
              colors={["#AE00FF", "#07100b"]}
              start={{ x: -1, y: -1 }}
              end={{ x: 0.4, y: 0.5 }}
              className="rounded-2xl"
            >
              <View className="p-6">
                <Text className="font-sf-medium text-xs tracking-wider text-white/50">
                  MUSCLE GROUP
                </Text>

                <Text className="mt-2 font-sf-bold text-3xl text-white">
                  Leg
                </Text>

                <Pressable
                  className="mt-7 flex-row items-center justify-between rounded-full border border-white/20 bg-white/15 py-2 pl-5 pr-2"
                  onPress={() => {
                    router.push("/workout");
                  }}
                >
                  <Text className="font-sf-medium text-sm text-white">
                    Start workout
                  </Text>
                </Pressable>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
