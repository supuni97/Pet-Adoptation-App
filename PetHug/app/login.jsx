import { useState } from "react";
import { View, Text, ImageBackground, Pressable, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const [scale] = useState(new Animated.Value(1));
  const [buttonColor, setButtonColor] = useState(["#ff3d3d", "#ffbe3d"]);

  const handlePressIn = () => {
    // Change color and scale when pressed
    setButtonColor(["#ff6a6a", "#ffcc6a"]);
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    // Reset color and scale when press ends
    setButtonColor(["#ff3d3d", "#ffbe3d"]);
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={require("./../assets/images/login image.png")}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 90,
      }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={buttonColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 25,
          width: 200,
          paddingVertical: 10,
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            width: "100%",
            alignItems: "center",
          }}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View
            style={{
              transform: [{ scale }],
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 20,
                color: "white",
              }}
            >
              Get Started
            </Text>
          </Animated.View>
        </Pressable>
      </LinearGradient>
    </ImageBackground>
  );
}
