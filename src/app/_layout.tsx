import "../../global.css";

import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [showSplash, setShowSplash] = useState(true);

  const [fontsLoaded, fontError] = useFonts({
    SFPro: require("../../assets/fonts/SFPRODISPLAYREGULAR.otf"),
    SFProMedium: require("../../assets/fonts/SFPRODISPLAYMEDIUM.otf"),
    SFProBold: require("../../assets/fonts/SFPRODISPLAYBOLD.otf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppTabs />

      {showSplash && (
        <AnimatedSplashOverlay onFinish={() => setShowSplash(false)} />
      )}
    </ThemeProvider>
  );
}
