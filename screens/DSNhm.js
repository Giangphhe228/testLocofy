import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const DSNhm = () => {
  return (
    <View style={styles.dsNhm}>
      <View style={styles.listNhnroomgridNhn}>
        <View style={[styles.tag3, styles.tagSpaceBlock]}>
          <Text style={[styles.label, styles.labelTypo]}>Khách hàng mới</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close4.png")}
          />
        </View>
        <View style={[styles.tag31, styles.tagSpaceBlock]}>
          <Text style={[styles.label1, styles.labelTypo]}>Khách hàng VIP</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close5.png")}
          />
        </View>
        <View style={[styles.tag32, styles.tagSpaceBlock]}>
          <Text style={[styles.label2, styles.labelTypo]}>Khách của Hạnh</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close6.png")}
          />
        </View>
        <View style={[styles.tag33, styles.tagSpaceBlock]}>
          <Text style={[styles.label3, styles.labelTypo]}>Có sđt</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close7.png")}
          />
        </View>
        <View style={[styles.tag34, styles.tagSpaceBlock]}>
          <Text style={[styles.label4, styles.labelTypo]}>Khách mới</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close8.png")}
          />
        </View>
        <View style={[styles.tag35, styles.tagSpaceBlock]}>
          <Text style={[styles.label5, styles.labelTypo]}>Re-care</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close7.png")}
          />
        </View>
        <View style={[styles.tag36, styles.tagSpaceBlock]}>
          <Text style={[styles.label6, styles.labelTypo]}>Chưa thanh toán</Text>
          <Image
            style={styles.closeIcon}
            resizeMode="cover"
            source={require("../assets/23-close9.png")}
          />
        </View>
      </View>
      <View style={[styles.fieldinput, styles.fieldinputSpaceBlock]}>
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/1-search2.png")}
        />
        <View style={styles.textWapper}>
          <Text style={styles.labelTypo}>
            <Text style={styles.text1}>|</Text>
            <Text style={styles.tmKimNhm}>Tìm kiếm nhóm</Text>
          </Text>
          <View style={styles.line} />
        </View>
        <Image
          style={[styles.validateIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/validate3.png")}
        />
      </View>
      <View style={[styles.dropdownlist, styles.fieldinputSpaceBlock]}>
        <View style={[styles.dropdownitem, styles.dropdownitemSpaceBlock]}>
          <Image
            style={[styles.starIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/star.png")}
          />
          <View style={[styles.icon20x20, styles.iconLayout]}>
            <View style={[styles.illustration, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>
            Khách hàng mới
          </Text>
          <Image
            style={[styles.checkboxIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox1.png")}
          />
        </View>
        <View style={styles.dropdownitemSpaceBlock}>
          <Image
            style={[styles.starIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/star.png")}
          />
          <View style={[styles.icon20x20, styles.iconLayout]}>
            <View style={[styles.illustration1, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>Re-care</Text>
          <Image
            style={[styles.checkboxIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox1.png")}
          />
        </View>
        <View style={styles.dropdownitemSpaceBlock}>
          <Image
            style={[styles.starIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/star.png")}
          />
          <View style={[styles.icon20x20, styles.iconLayout]}>
            <View style={[styles.illustration2, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>
            Khách của Hạnh
          </Text>
          <Image
            style={[styles.checkboxIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox1.png")}
          />
        </View>
        <View style={styles.dropdownitem3}>
          <View style={styles.iconLayout}>
            <View style={[styles.illustration3, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>Nhóm 4</Text>
          <View style={[styles.checkbox, styles.iconLayout]} />
        </View>
        <View style={styles.dropdownitem3}>
          <View style={styles.iconLayout}>
            <View style={[styles.illustration4, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>
            Chưa thanh toán
          </Text>
          <Image
            style={[styles.checkboxIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox1.png")}
          />
        </View>
        <View style={styles.dropdownitem3}>
          <View style={styles.iconLayout}>
            <View style={[styles.illustration5, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>Có sđt</Text>
          <Image
            style={[styles.checkboxIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox1.png")}
          />
        </View>
        <View style={styles.dropdownitem3}>
          <View style={styles.iconLayout}>
            <View style={[styles.illustration6, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>Nhóm 7</Text>
          <View style={[styles.checkbox, styles.iconLayout]} />
        </View>
        <View style={styles.dropdownitem3}>
          <View style={styles.iconLayout}>
            <View style={[styles.illustration7, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>KH phân vân</Text>
          <View style={[styles.checkbox, styles.iconLayout]} />
        </View>
        <View style={styles.dropdownitem3}>
          <View style={styles.iconLayout}>
            <View style={[styles.illustration8, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>
            Khách hàng VIP
          </Text>
          <Image
            style={[styles.checkboxIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/checkbox1.png")}
          />
        </View>
        <View style={styles.dropdownitem3}>
          <View style={styles.iconLayout}>
            <View style={[styles.illustration9, styles.illustrationPosition]} />
          </View>
          <Text style={[styles.teamName, styles.labelTypo]}>Nhóm 10</Text>
          <View style={[styles.checkbox, styles.iconLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tagSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    height: 32,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.title3Regular,
    lineHeight: 20,
    fontSize: FontSize.text14SemiBold_size,
  },
  fieldinputSpaceBlock: {
    marginTop: 16,
    borderRadius: Border.br_9xs,
  },
  iconLayout1: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  dropdownitemSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: 0,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  illustrationPosition: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  label: {
    color: Color.tagBlue700,
  },
  closeIcon: {
    width: 12,
    height: 12,
    marginLeft: 8,
    overflow: "hidden",
  },
  tag3: {
    backgroundColor: Color.tagBlue100,
  },
  label1: {
    color: Color.tagRed600,
  },
  tag31: {
    backgroundColor: Color.alertError,
    marginLeft: 8,
  },
  label2: {
    color: Color.tagOrange600,
  },
  tag32: {
    backgroundColor: Color.tagOrange100,
    marginLeft: 8,
  },
  label3: {
    color: Color.tagGreen700,
  },
  tag33: {
    backgroundColor: Color.tagGreen100,
    marginLeft: 8,
  },
  label4: {
    color: Color.tagPurple600,
  },
  tag34: {
    backgroundColor: Color.tagPurple100,
    display: "none",
    marginLeft: 8,
  },
  label5: {
    color: Color.tagCyan700,
  },
  tag35: {
    backgroundColor: Color.tagCyan100,
    marginLeft: 8,
  },
  label6: {
    color: Color.tagPink600,
  },
  tag36: {
    backgroundColor: Color.tagPink100,
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
  tmKimNhm: {
    color: Color.textPlaceHolder,
  },
  line: {
    backgroundColor: Color.brandPrimary,
    width: 1,
    height: 18,
    display: "none",
  },
  textWapper: {
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
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
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  starIcon: {
    overflow: "hidden",
  },
  illustration: {
    backgroundColor: Color.tagBlue500,
  },
  icon20x20: {
    marginLeft: 12,
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
    alignItems: "center",
  },
  illustration1: {
    backgroundColor: Color.tagCyan500,
  },
  illustration2: {
    backgroundColor: Color.tagYellow500,
  },
  illustration3: {
    backgroundColor: Color.tagPurple500,
  },
  checkbox: {
    borderColor: Color.colorGray_100,
    marginLeft: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    width: 20,
  },
  dropdownitem3: {
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
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
  dsNhm: {
    padding: Padding.p_base,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default DSNhm;
