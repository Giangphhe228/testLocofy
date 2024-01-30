import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const DSNhn = () => {
  return (
    <View style={[styles.dsNhn, styles.dsNhnBg]}>
      <View style={styles.listNhnroomgridNhn}>
        <View style={[styles.tag3, styles.tagSpaceBlock]}>
          <Text style={[styles.label, styles.textTypo]}>Tư vấn</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close.png")}
          />
        </View>
        <View style={[styles.tag31, styles.tagSpaceBlock]}>
          <Text style={[styles.label, styles.textTypo]}>KH VIP</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close.png")}
          />
        </View>
        <View style={[styles.tag32, styles.tagSpaceBlock]}>
          <Text style={[styles.label, styles.textTypo]}>KH phân vân</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close.png")}
          />
        </View>
        <View style={[styles.tag33, styles.tagSpaceBlock]}>
          <Text style={[styles.label, styles.textTypo]}>Có sđt</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close.png")}
          />
        </View>
        <View style={[styles.tag34, styles.tagSpaceBlock]}>
          <Text style={[styles.label, styles.textTypo]}>Khách mới</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close.png")}
          />
        </View>
        <View style={[styles.tag35, styles.tagSpaceBlock]}>
          <Text style={[styles.label, styles.textTypo]}>Re-care</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close.png")}
          />
        </View>
        <View style={[styles.tag36, styles.tagSpaceBlock]}>
          <Text style={[styles.label, styles.textTypo]}>Chưa thanh toán</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close.png")}
          />
        </View>
      </View>
      <View style={[styles.fieldinput, styles.fieldinputSpaceBlock]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/1-search.png")}
        />
        <View style={styles.textWapper}>
          <Text style={styles.textTypo}>
            <Text style={styles.text1}>|</Text>
            <Text style={styles.tmKimNhn}>Tìm kiếm nhãn</Text>
          </Text>
          <View style={styles.line} />
        </View>
        <Image
          style={[styles.validateIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/validate.png")}
        />
      </View>
      <View style={[styles.dropdownlist, styles.fieldinputSpaceBlock]}>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>Tư vấn</Text>
          <Image
            style={[styles.checkboxIcon, styles.checkboxLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox.png")}
          />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration1, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>Re-care</Text>
          <Image
            style={[styles.checkboxIcon, styles.checkboxLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox.png")}
          />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration2, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>Nhãn 3</Text>
          <View style={[styles.checkbox, styles.checkboxLayout]} />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration3, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>Khách mới</Text>
          <Image
            style={[styles.checkboxIcon, styles.checkboxLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox.png")}
          />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration4, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>
            Chưa thanh toán
          </Text>
          <Image
            style={[styles.checkboxIcon, styles.checkboxLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox.png")}
          />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration5, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>Có sđt</Text>
          <Image
            style={[styles.checkboxIcon, styles.checkboxLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox.png")}
          />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration6, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>Nhãn 7</Text>
          <View style={[styles.checkbox, styles.checkboxLayout]} />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration7, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>KH phân vân</Text>
          <Image
            style={[styles.checkboxIcon, styles.checkboxLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox.png")}
          />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration8, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>KH VIP</Text>
          <Image
            style={[styles.checkboxIcon, styles.checkboxLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox.png")}
          />
        </View>
        <View style={[styles.dropdownitem, styles.dsNhnBg]}>
          <View style={styles.checkboxLayout}>
            <View style={[styles.illustration9, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.textTypo]}>Nhãn 10</Text>
          <View style={[styles.checkbox, styles.checkboxLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dsNhnBg: {
    backgroundColor: Color.textWhite,
    alignItems: "center",
  },
  tagSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    height: 32,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.text14Regular,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
  },
  fieldinputSpaceBlock: {
    marginTop: 16,
    borderRadius: Border.br_9xs,
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  illustrationPosition: {
    borderRadius: Border.br_11xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  checkboxLayout: {
    height: 20,
    width: 20,
  },
  label: {
    color: Color.textWhite,
  },
  closeIcon: {
    width: 12,
    height: 12,
    marginLeft: 8,
    overflow: "hidden",
  },
  tag3: {
    backgroundColor: Color.tagBlue500,
  },
  tag31: {
    backgroundColor: Color.tagRed500,
    marginLeft: 8,
  },
  tag32: {
    backgroundColor: Color.tagYellow500,
    marginLeft: 8,
  },
  tag33: {
    backgroundColor: Color.tagGreen500,
    marginLeft: 8,
  },
  tag34: {
    backgroundColor: Color.tagPurple500,
    marginLeft: 8,
  },
  tag35: {
    backgroundColor: Color.tagCyan500,
    marginLeft: 8,
  },
  tag36: {
    backgroundColor: Color.tagPink500,
    marginLeft: 8,
  },
  listNhnroomgridNhn: {
    flexWrap: "wrap",
    alignItems: "flex-end",
    flexDirection: "row",
    width: 343,
  },
  text1: {
    color: Color.brandPrimary,
  },
  tmKimNhn: {
    color: Color.textPlaceHolder,
  },
  line: {
    backgroundColor: Color.brandPrimary,
    width: 1,
    height: 18,
    display: "none",
  },
  textWapper: {
    flex: 1,
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  validateIcon: {
    display: "none",
    marginLeft: 8,
  },
  fieldinput: {
    borderColor: Color.brandPrimary,
    height: 40,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_xs,
    marginTop: 16,
    flexDirection: "row",
    width: 343,
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
  illustration: {
    backgroundColor: Color.tagBlue500,
  },
  teamName: {
    color: Color.textPrimary,
    marginLeft: 12,
    flex: 1,
  },
  checkboxIcon: {
    marginLeft: 12,
    borderRadius: Border.br_9xs,
    width: 20,
  },
  dropdownitem: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  illustration1: {
    backgroundColor: Color.tagCyan500,
  },
  illustration2: {
    backgroundColor: Color.tagYellow500,
  },
  checkbox: {
    borderColor: Color.colorGray_100,
    marginLeft: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    width: 20,
  },
  illustration3: {
    backgroundColor: Color.tagPurple500,
  },
  illustration4: {
    backgroundColor: Color.tagPink500,
  },
  illustration5: {
    backgroundColor: Color.tagGreen500,
  },
  illustration6: {
    backgroundColor: Color.tagSky500,
  },
  illustration7: {
    backgroundColor: Color.tagYellow400,
  },
  illustration8: {
    backgroundColor: Color.tagRed500,
  },
  illustration9: {
    backgroundColor: Color.tagGray500,
  },
  dropdownlist: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dsNhn: {
    width: 375,
    padding: Padding.p_base,
    alignItems: "center",
  },
});

export default DSNhn;
