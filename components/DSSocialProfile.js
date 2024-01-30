import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const DSSocialProfile = () => {
  return (
    <View style={styles.dsSocialProfile}>
      <View style={[styles.profileInfo, styles.profileBorder]}>
        <View style={styles.avatarParent}>
          <Image
            style={styles.avatarIcon}
            resizeMode="cover"
            source={require("../assets/avatar.png")}
          />
          <Text style={styles.lMinhTr}>Lê Minh Trí</Text>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.psidParent}>
            <Text style={[styles.psid, styles.kLayout]}>PSID:</Text>
            <Text style={[styles.text, styles.textTypo]}>
              58439534098503948590
            </Text>
          </View>
          <View style={styles.parentFlexBox}>
            <Text style={[styles.psid, styles.kLayout]}>Trang tiếp cận:</Text>
            <View style={[styles.fptTelecomParent, styles.parentFlexBox1]}>
              <Text style={[styles.fptTelecom, styles.textTypo]}>
                FPT Telecom
              </Text>
              <Text
                style={[styles.facebookcomfptTelecom1234, styles.xemThmTypo]}
                numberOfLines={1}
              >
                facebook.com/fpt-telecom1234...
              </Text>
            </View>
          </View>
          <View style={styles.parentFlexBox}>
            <Text style={[styles.psid, styles.kLayout]}>Ngày tiếp cận:</Text>
            <Text style={[styles.text, styles.textTypo]}>12/12/2021 12:04</Text>
          </View>
        </View>
      </View>
      <View style={[styles.profileInfo1, styles.profileBorder]}>
        <View style={styles.avatarParent}>
          <Image
            style={styles.avatarIcon}
            resizeMode="cover"
            source={require("../assets/avatar1.png")}
          />
          <Text style={styles.lMinhTr}>Tri Le</Text>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.psidParent}>
            <Text style={[styles.psid, styles.kLayout]}>ID:</Text>
            <Text style={[styles.text, styles.textTypo]}>
              58439534098503948590
            </Text>
          </View>
          <View style={styles.parentFlexBox}>
            <Text style={[styles.psid, styles.kLayout]}>Trang tiếp cận:</Text>
            <View style={[styles.fptTelecomParent, styles.parentFlexBox1]}>
              <Text style={[styles.fptTelecom, styles.textTypo]}>
                FPT Telecom OA
              </Text>
            </View>
          </View>
          <View style={styles.parentFlexBox}>
            <Text style={[styles.psid, styles.kLayout]}>SĐT:</Text>
            <Text style={[styles.text, styles.textTypo]}>-</Text>
          </View>
          <View style={styles.ngyTipCnGroupLayout}>
            <Text style={[styles.psid, styles.kLayout]}>Ngày tiếp cận:</Text>
            <Text style={[styles.text, styles.textTypo]}>03/11/2021 11:30</Text>
          </View>
        </View>
      </View>
      <View style={[styles.profileInfo1, styles.profileBorder]}>
        <View style={styles.avatarParent}>
          <View style={styles.avatarIcon}>
            <View style={[styles.avt, styles.avtPosition]}>
              <Text style={[styles.k, styles.kLayout]}>K</Text>
            </View>
            <Image
              style={[styles.socialIcon, styles.avtPosition]}
              resizeMode="cover"
              source={require("../assets/social.png")}
            />
          </View>
          <Text style={styles.lMinhTr}>Le Minh Tri</Text>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.trangTipCnContainer}>
            <Text style={[styles.psid, styles.kLayout]}>Trang tiếp cận:</Text>
            <View style={[styles.fptTelecomParent, styles.parentFlexBox1]}>
              <Text style={[styles.fptTelecom, styles.textTypo]}>
                fpt.com.vn
              </Text>
            </View>
          </View>
          <View style={[styles.nhMngParent, styles.parentFlexBox]}>
            <Text style={[styles.psid, styles.kLayout]}>Nhà mạng:</Text>
            <View style={[styles.fptTelecomParent, styles.parentFlexBox1]}>
              <Text style={[styles.fptTelecom, styles.textTypo]}>
                FPT Telecom
              </Text>
            </View>
          </View>
          <View style={[styles.nhMngParent, styles.parentFlexBox]}>
            <Text style={[styles.psid, styles.kLayout]}>IP khách:</Text>
            <Text style={[styles.text, styles.textTypo]}>
              172.227.165.4.100
            </Text>
          </View>
          <View style={[styles.nhMngParent, styles.parentFlexBox]}>
            <Text style={[styles.psid, styles.kLayout]}>Vị Trí:</Text>
            <View style={[styles.hoChiMinhCityParent, styles.parentFlexBox1]}>
              <Text style={[styles.hoChiMinh, styles.textTypo]}>
                Ho Chi Minh city
              </Text>
              <Text style={[styles.xemThm, styles.xemThmTypo]}>Xem thêm</Text>
            </View>
          </View>
          <View style={[styles.nhVTheoParent, styles.ngyTipCnGroupLayout]}>
            <Text style={[styles.psid, styles.kLayout]}>Định vị theo</Text>
            <Text style={[styles.location, styles.textTypo]}>Location</Text>
            <Image
              style={styles.uinfoCircleIcon}
              resizeMode="cover"
              source={require("../assets/uinfocircle.png")}
            />
          </View>
          <View style={[styles.nhVTheoParent, styles.ngyTipCnGroupLayout]}>
            <Text style={[styles.psid, styles.kLayout]}>Thiết bị:</Text>
            <Text style={[styles.text, styles.textTypo]}>Mobile - SM998</Text>
          </View>
          <View style={[styles.nhVTheoParent, styles.ngyTipCnGroupLayout]}>
            <Text style={[styles.psid, styles.kLayout]}>Trình duyệt:</Text>
            <Text style={[styles.text, styles.textTypo]}>Chrome</Text>
          </View>
          <View style={[styles.nhVTheoParent, styles.ngyTipCnGroupLayout]}>
            <Text style={[styles.psid, styles.kLayout]}>Ngày tiếp cận:</Text>
            <Text style={[styles.text, styles.textTypo]}>02/11/2021 10:07</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileBorder: {
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.textWhite,
  },
  kLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    color: Color.textPrimary,
  },
  textTypo: {
    fontFamily: FontFamily.text14SemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  parentFlexBox1: {
    flex: 1,
    marginLeft: 12,
  },
  xemThmTypo: {
    textDecoration: "underline",
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
  },
  avtPosition: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  parentFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  ngyTipCnGroupLayout: {
    width: 232,
    marginTop: 8,
    flexDirection: "row",
  },
  avatarIcon: {
    width: 32,
    height: 32,
  },
  lMinhTr: {
    fontSize: FontSize.text16Medium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.text16Medium,
    marginLeft: 8,
    textAlign: "left",
    color: Color.textPrimary,
    letterSpacing: 0,
  },
  avatarParent: {
    backgroundColor: Color.backgroundGrayF8F8F8,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  psid: {
    display: "flex",
    width: 100,
    fontFamily: FontFamily.text14Regular,
    textAlign: "left",
    alignItems: "center",
  },
  text: {
    marginLeft: 12,
    flex: 1,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    color: Color.textPrimary,
    textAlign: "left",
  },
  psidParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  fptTelecom: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    color: Color.textPrimary,
    textAlign: "left",
    alignSelf: "stretch",
  },
  facebookcomfptTelecom1234: {
    color: Color.brandPrimary,
    fontFamily: FontFamily.text14Regular,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  fptTelecomParent: {
    marginLeft: 12,
  },
  frameParent: {
    padding: Padding.p_xs,
    alignSelf: "stretch",
  },
  profileInfo: {
    overflow: "hidden",
  },
  profileInfo1: {
    marginTop: 16,
    overflow: "hidden",
  },
  k: {
    textAlign: "center",
    fontFamily: FontFamily.text14Regular,
  },
  avt: {
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.tagGray100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    alignItems: "center",
  },
  socialIcon: {
    height: "50%",
    width: "50%",
    top: "50%",
    left: "50%",
    borderRadius: Border.br_xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  trangTipCnContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  nhMngParent: {
    alignItems: "center",
  },
  hoChiMinh: {
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    color: Color.textPrimary,
    textAlign: "left",
  },
  xemThm: {
    color: Color.colorRoyalblue_100,
    marginLeft: 4,
    fontFamily: FontFamily.text14SemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  hoChiMinhCityParent: {
    marginLeft: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    marginLeft: 12,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    color: Color.textPrimary,
    textAlign: "left",
  },
  uinfoCircleIcon: {
    width: 16,
    height: 16,
    marginLeft: 12,
    overflow: "hidden",
  },
  nhVTheoParent: {
    alignItems: "center",
  },
  dsSocialProfile: {
    width: 375,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    backgroundColor: Color.textWhite,
  },
});

export default DSSocialProfile;
