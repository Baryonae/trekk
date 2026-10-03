import * as Device from "expo-device";
// eslint-disable-next-line import/no-unresolved
import "../../global.css";
import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";
import { HintRow } from "@/components/hint-row";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { WebBadge } from "@/components/web-badge";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedText className="py-20 size-30 justify-center text-center">
        Oh
      </ThemedText>
    </SafeAreaView>
  );
}
