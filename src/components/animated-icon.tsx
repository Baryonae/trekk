import { useEffect } from "react";
import { Modal, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

type Props = {
  onFinish?: () => void;
};

export function AnimatedSplashOverlay({ onFinish }: Props) {
  const scale = useSharedValue(0.8);
  const logoOpacity = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const containerOpacity = useSharedValue(1);

  useEffect(() => {
    logoOpacity.value = withTiming(1, {
      duration: 350,
    });

    scale.value = withTiming(1, {
      duration: 550,
      easing: Easing.out(Easing.cubic),
    });

    textOpacity.value = withDelay(
      300,
      withTiming(1, {
        duration: 350,
      }),
    );

    containerOpacity.value = withDelay(
      1000,
      withTiming(
        0,
        {
          duration: 350,
          easing: Easing.inOut(Easing.cubic),
        },
        (finished) => {
          if (finished && onFinish) {
            runOnJS(onFinish)();
          }
        },
      ),
    );
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: scale.value }],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const containerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  return (
    <Modal
      visible
      animationType="none"
      transparent={false}
      statusBarTranslucent
      onRequestClose={() => {}}
    >
      <Animated.View style={[styles.container, containerStyle]}>
        {/* Logo */}
        <Animated.View style={logoStyle}>
          <View style={styles.logo}>
            {/* Geometric T */}
            <View style={styles.tiltedT}>
              {/* Top bar */}
              <View style={styles.topBar} />

              {/* Vertical stem */}
              <View style={styles.stem} />

              {/* Cut-outs */}
              <View style={[styles.cut, styles.cutTopLeft]} />
              <View style={[styles.cut, styles.cutRight]} />
              <View style={[styles.cut, styles.cutBottom]} />
            </View>
          </View>
        </Animated.View>

        {/* App name */}
        <Animated.View style={textStyle}>
          <Animated.Text style={styles.title}>TREKK</Animated.Text>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
}

const PURPLE = "#AE00FF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 86,
    height: 86,
    borderRadius: 27,
    backgroundColor: PURPLE,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  /*
   * Entire T is tilted as one shape.
   */
  tiltedT: {
    width: 54,
    height: 54,
    transform: [{ rotate: "-12deg" }],
    position: "relative",
  },

  /*
   * ━━━━━━━━━━━━━
   *       T
   * ━━━━━━━━━━━━━
   */
  topBar: {
    position: "absolute",
    top: 5,
    left: 2,
    width: 52,
    height: 15,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },

  stem: {
    position: "absolute",
    top: 13,
    left: 20,
    width: 15,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },

  /*
   * Purple blocks hide sections of the T,
   * creating the broken/geometric appearance.
   */
  cut: {
    position: "absolute",
    backgroundColor: PURPLE,
  },

  cutTopLeft: {
    top: 5,
    left: 2,
    width: 11,
    height: 9,
  },

  cutRight: {
    top: 5,
    right: 1,
    width: 10,
    height: 7,
  },

  cutBottom: {
    bottom: 0,
    left: 20,
    width: 15,
    height: 8,
  },

  title: {
    marginTop: 18,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 6,
  },
});
