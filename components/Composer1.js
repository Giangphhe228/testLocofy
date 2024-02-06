import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Composer1 = ({ messageContent, propColor }) => {
  const niDungTinStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.composer, styles.composerFlexBox]}>
      <View style={[styles.niDungTinNhn1DngWrapper, styles.composerFlexBox]}>
        <Text style={[styles.niDungTin, niDungTinStyle]}>{messageContent}</Text>
      </View>
      <Image
        style={styles.emojiIcon}
        resizeMode="cover"
        source={require("../assets/emoji.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  composerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  niDungTin: {
    fontSize: FontSize.text16Medium_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.bodyRegular14,
    color: Color.textPrimary,
    textAlign: "left",
  },
  niDungTinNhn1DngWrapper: {
    maxHeight: 72,
    zIndex: 0,
  },
  emojiIcon: {
    position: "absolute",
    right: 8,
    bottom: 8,
    width: 24,
    height: 24,
    overflow: "hidden",
    zIndex: 1,
  },
  composer: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.systemBackgroundLightPrimary,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_4xs,
    paddingRight: Padding.p_21xl,
    paddingBottom: Padding.p_4xs,
    marginLeft: 12,
  },
});

export default Composer1;
