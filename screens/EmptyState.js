import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily } from "../GlobalStyles";

const EmptyState = () => {
  return (
    <View style={styles.emptyState}>
      <Image
        style={[styles.stateKhngCThngBoNo, styles.statekhngLayout]}
        resizeMode="cover"
        source={require("../assets/state-khng-c-thng-bo-no.png")}
      />
      <Image
        style={[styles.statekhngCTinNhnNo, styles.statekhngLayout]}
        resizeMode="cover"
        source={require("../assets/statekhng-c-tin-nhn-no.png")}
      />
      <View style={[styles.statechaKtNiFanpage, styles.statekhngLayout]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout6]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.statechaKtNiFanpageChild, styles.statechaLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-61.png")}
        />
        <Image
          style={[styles.statechaKtNiFanpageItem, styles.statechaLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-62.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout6]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout6]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.statechaKtNiFanpageInner, styles.statechaChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-59.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.statechaChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-65.png")}
        />
        <Image
          style={[styles.polygonIcon, styles.polygonIconLayout]}
          resizeMode="cover"
          source={require("../assets/polygon-2.png")}
        />
        <Image
          style={[styles.statechaKtNiFanpageChild1, styles.polygonIconLayout]}
          resizeMode="cover"
          source={require("../assets/polygon-3.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout6]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={styles.text}>!</Text>
        <Image
          style={[styles.vectorStrokeIcon, styles.vectorIconLayout5]}
          resizeMode="cover"
          source={require("../assets/vector-stroke.png")}
        />
        <Image
          style={[styles.vectorStrokeIcon1, styles.vectorIconLayout5]}
          resizeMode="cover"
          source={require("../assets/vector-stroke1.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout4]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconPosition4]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition4]}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconPosition1]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
        <Image
          style={[styles.vectorIcon9, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector9.png")}
        />
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout2]}
          resizeMode="cover"
          source={require("../assets/vector10.png")}
        />
        <Image
          style={[styles.vectorIcon11, styles.vectorIconLayout4]}
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
        <Image
          style={[styles.vectorIcon12, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.vectorIcon13, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector13.png")}
        />
        <Image
          style={[styles.vectorIcon14, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector14.png")}
        />
        <Image
          style={[styles.vectorIcon15, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector15.png")}
        />
        <Image
          style={[styles.vectorIcon16, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector16.png")}
        />
        <Image
          style={[styles.vectorIcon17, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector17.png")}
        />
        <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
        <View
          style={[
            styles.statechaKtNiFanpageChild2,
            styles.rectangleViewShadowBox,
          ]}
        />
        <Image
          style={[styles.statechaKtNiFanpageChild3, styles.statechaChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-591.png")}
        />
        <Image
          style={[styles.statechaKtNiFanpageChild4, styles.statechaChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-60.png")}
        />
      </View>
      <Image
        style={[styles.statekhngTmThyKtQuP, styles.statekhngLayout]}
        resizeMode="cover"
        source={require("../assets/statekhng-tm-thy-kt-qu-ph-hp.png")}
      />
      <Image
        style={[styles.stateKhngCNHngNo, styles.stateKhngCNHngNoPosition]}
        resizeMode="cover"
        source={require("../assets/state-khng-c-n-hng-no.png")}
      />
      <Image
        style={[styles.statekhngCHnhNhNo, styles.stateKhngCNHngNoPosition]}
        resizeMode="cover"
        source={require("../assets/statekhng-c-hnh-nh-no.png")}
      />
      <Image
        style={[styles.statekhngCFileNo, styles.staterngIconPosition]}
        resizeMode="cover"
        source={require("../assets/statekhng-c-file-no.png")}
      />
      <Image
        style={[styles.staterngIcon, styles.staterngIconPosition]}
        resizeMode="cover"
        source={require("../assets/staterng.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statekhngLayout: {
    height: 120,
    width: 134,
    position: "absolute",
  },
  vectorIconLayout6: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statechaLayout: {
    width: "49.7%",
    height: "9.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statechaChildLayout: {
    width: "4.4%",
    height: "4.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  polygonIconLayout: {
    borderRadius: 2,
    width: "8.88%",
    height: "10%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout5: {
    width: "23.96%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout4: {
    height: "34.58%",
    width: "29.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition4: {
    left: "35.07%",
    bottom: "6.08%",
    top: "55.42%",
    height: "38.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout3: {
    left: "41.87%",
    right: "50.45%",
    width: "7.69%",
    height: "9.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    bottom: "4.25%",
    top: "86.17%",
  },
  vectorIconLayout2: {
    right: "51.27%",
    width: "6.87%",
    left: "41.87%",
    height: "9.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "48.42%",
    right: "34.18%",
    top: "13.08%",
    height: "38.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    left: "50.45%",
    right: "42.69%",
    width: "6.87%",
    height: "9.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "51.27%",
    right: "43.58%",
    width: "5.15%",
    height: "7.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewShadowBox: {
    shadowOpacity: 1,
    elevation: 22,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowColor: "rgba(101, 122, 147, 0.27)",
    backgroundColor: Color.colorLightgray_100,
    borderRadius: Border.br_75xl,
    left: "30.75%",
    right: "52.16%",
    width: "17.09%",
    position: "absolute",
  },
  stateKhngCNHngNoPosition: {
    top: 218,
    height: 120,
    width: 134,
    position: "absolute",
  },
  staterngIconPosition: {
    top: 436,
    height: 120,
    width: 134,
    position: "absolute",
  },
  stateKhngCThngBoNo: {
    top: 210,
    left: 31,
  },
  statekhngCTinNhnNo: {
    top: 30,
    left: 41,
  },
  vectorIcon: {
    height: "92.5%",
    width: "82.84%",
    top: "7.33%",
    right: "6.04%",
    bottom: "0.17%",
    left: "11.12%",
  },
  statechaKtNiFanpageChild: {
    top: "42.25%",
    right: "32.31%",
    bottom: "48.17%",
    left: "17.99%",
  },
  statechaKtNiFanpageItem: {
    top: "90%",
    right: "17.24%",
    bottom: "0.42%",
    left: "33.06%",
  },
  vectorIcon1: {
    height: "91.42%",
    width: "81.19%",
    top: "2.92%",
    right: "4.48%",
    bottom: "5.67%",
    left: "14.33%",
  },
  vectorIcon2: {
    height: "8.5%",
    width: "5.45%",
    top: "17.42%",
    right: "42.16%",
    bottom: "74.08%",
    left: "52.39%",
  },
  statechaKtNiFanpageInner: {
    top: "39.75%",
    right: "82.69%",
    bottom: "55.33%",
    left: "12.91%",
  },
  ellipseIcon: {
    top: "85%",
    right: "11.12%",
    bottom: "10.08%",
    left: "84.48%",
  },
  polygonIcon: {
    top: "51.75%",
    right: "8.58%",
    bottom: "38.25%",
    left: "82.54%",
  },
  statechaKtNiFanpageChild1: {
    top: "86.83%",
    right: "68.43%",
    bottom: "3.17%",
    left: "22.69%",
  },
  vectorIcon3: {
    height: "30.5%",
    width: "27.39%",
    top: "19.42%",
    right: "0.82%",
    bottom: "50.08%",
    left: "71.79%",
  },
  text: {
    height: "28.83%",
    top: "16.67%",
    left: "82.46%",
    fontSize: 30,
    letterSpacing: -1,
    lineHeight: 36,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.systemBackgroundLightPrimary,
    textAlign: "center",
    width: "7.69%",
    position: "absolute",
  },
  vectorStrokeIcon: {
    top: "28.5%",
    right: "76.04%",
    bottom: "61.92%",
    left: "0%",
    height: "9.58%",
    width: "23.96%",
  },
  vectorStrokeIcon1: {
    height: "8.67%",
    top: "66.92%",
    right: "0%",
    bottom: "24.42%",
    left: "76.04%",
  },
  vectorIcon4: {
    top: "57.33%",
    right: "21.34%",
    bottom: "8.08%",
    left: "48.73%",
    width: "29.93%",
  },
  vectorIcon5: {
    right: "35%",
    width: "29.93%",
  },
  vectorIcon6: {
    right: "39.25%",
    width: "25.67%",
  },
  vectorIcon7: {
    bottom: "16.75%",
    top: "73.67%",
  },
  vectorIcon8: {
    left: "41.87%",
    right: "50.45%",
    width: "7.69%",
    height: "9.58%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon9: {
    bottom: "16.75%",
    top: "73.67%",
  },
  vectorIcon10: {
    bottom: "4.25%",
    top: "86.17%",
  },
  vectorIcon11: {
    top: "15%",
    right: "48.73%",
    bottom: "50.42%",
    left: "21.34%",
    width: "29.93%",
  },
  vectorIcon12: {
    left: "35.9%",
    width: "29.93%",
  },
  vectorIcon13: {
    left: "40.15%",
    width: "25.67%",
  },
  vectorIcon14: {
    top: "20.75%",
    bottom: "69.67%",
  },
  vectorIcon15: {
    top: "35.17%",
    bottom: "55.25%",
  },
  vectorIcon16: {
    top: "21.75%",
    bottom: "70.58%",
  },
  vectorIcon17: {
    top: "36.17%",
    bottom: "56.17%",
  },
  rectangleView: {
    height: "6.75%",
    bottom: "28.25%",
    top: "65%",
  },
  statechaKtNiFanpageChild2: {
    height: "5.75%",
    top: "78.5%",
    bottom: "15.75%",
  },
  statechaKtNiFanpageChild3: {
    right: "92.16%",
    bottom: "30.08%",
    left: "3.43%",
    top: "65%",
  },
  statechaKtNiFanpageChild4: {
    top: "0%",
    right: "50.07%",
    bottom: "95.08%",
    left: "45.52%",
  },
  statechaKtNiFanpage: {
    top: 31,
    left: 234,
  },
  statekhngTmThyKtQuP: {
    top: 27,
    left: 454,
  },
  stateKhngCNHngNo: {
    left: 248,
  },
  statekhngCHnhNhNo: {
    left: 456,
  },
  statekhngCFileNo: {
    left: 31,
  },
  staterngIcon: {
    left: 253,
  },
  emptyState: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.systemBackgroundLightPrimary,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 675,
    overflow: "hidden",
  },
});

export default EmptyState;
