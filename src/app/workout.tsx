import "../../global.css";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WorkoutScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 items-center justify-center">
        <Text className="font-sf-bold text-3xl text-white">
          What do I need to do?
        </Text>
      </View>
    </SafeAreaView>
  );
}
