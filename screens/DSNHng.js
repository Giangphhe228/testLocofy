import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const DSNHng = () => {
  return (
    <View style={styles.dsNHng}>
      <View style={[styles.nHng, styles.hngBorder]}>
        <View style={[styles.tnKh, styles.tnKhFlexBox]}>
          <Text style={[styles.lMinhTr, styles.giDchVFlexBox]}>
            Lê Minh Trí
          </Text>
          <View style={styles.nHngstatus}>
            <View style={[styles.tag3, styles.tagSpaceBlock]}>
              <Text style={styles.label}>Đã tạo đơn hàng</Text>
              <Image
                style={styles.closeIcon}
                resizeMode="cover"
                source={require("../assets/23-close2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.tnKhFlexBox]}>
          <View style={[styles.nHngdchVParent, styles.frameGroupFlexBox]}>
            <Image
              style={styles.nHngdchV}
              resizeMode="cover"
              source={require("../assets/n-hngdch-v.png")}
            />
            <Text style={[styles.giDchV, styles.giDchVFlexBox]}>
              Gói dịch vụ FPT Play Box
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.nHngiconParent, styles.hngiconParentFlexBox]}>
              <Image
                style={[styles.nHngicon, styles.hngiconLayout]}
                resizeMode="cover"
                source={require("../assets/n-hngicon.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                SGK92938728
              </Text>
            </View>
            <Image
              style={[styles.line6Stroke, styles.line6Layout]}
              resizeMode="cover"
              source={require("../assets/line-6-stroke.png")}
            />
            <View style={[styles.nHngiconGroup, styles.hngiconParentFlexBox]}>
              <Image
                style={styles.hngiconLayout}
                resizeMode="cover"
                source={require("../assets/n-hngicon1.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                HND00828365
              </Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.nHngiconParent, styles.hngiconParentFlexBox]}>
              <Image
                style={styles.hngiconLayout}
                resizeMode="cover"
                source={require("../assets/n-hngicon2.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                0974785046
              </Text>
            </View>
            <Image
              style={[styles.line6Stroke, styles.line6Layout]}
              resizeMode="cover"
              source={require("../assets/line-6-stroke.png")}
            />
            <View style={[styles.nHngiconGroup, styles.hngiconParentFlexBox]}>
              <Image
                style={[styles.nHngicon3, styles.hngiconLayout]}
                resizeMode="cover"
                source={require("../assets/n-hngicon3.png")}
              />
              <Text style={[styles.tnH, styles.tnHTypo]}>Tồn 14.6h</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.nHng1, styles.hngBorder]}>
        <View style={[styles.tnKh, styles.tnKhFlexBox]}>
          <Text style={[styles.lMinhTr, styles.giDchVFlexBox]}>
            Lê Minh Trí
          </Text>
          <View style={styles.nHngstatus}>
            <View style={[styles.tag31, styles.tagSpaceBlock]}>
              <Text style={styles.label}>Đã tạo hợp đồng</Text>
              <Image
                style={styles.closeIcon}
                resizeMode="cover"
                source={require("../assets/23-close2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.tnKhFlexBox]}>
          <View style={[styles.nHngdchVParent, styles.frameGroupFlexBox]}>
            <Image
              style={styles.nHngdchV}
              resizeMode="cover"
              source={require("../assets/n-hngdch-v.png")}
            />
            <Text style={[styles.giDchV, styles.giDchVFlexBox]}>
              Gói dịch vụ FPT Play Box
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.nHngiconParent, styles.hngiconParentFlexBox]}>
              <Image
                style={[styles.nHngicon, styles.hngiconLayout]}
                resizeMode="cover"
                source={require("../assets/n-hngicon.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                SGK92938728
              </Text>
            </View>
            <Image
              style={[styles.line6Stroke2, styles.line6Layout]}
              resizeMode="cover"
              source={require("../assets/line-6-stroke.png")}
            />
            <View style={[styles.nHngiconParent2, styles.hngiconParentFlexBox]}>
              <Image
                style={styles.hngiconLayout}
                resizeMode="cover"
                source={require("../assets/n-hngicon1.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                HND00828365
              </Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.nHngiconParent, styles.hngiconParentFlexBox]}>
              <Image
                style={styles.hngiconLayout}
                resizeMode="cover"
                source={require("../assets/n-hngicon2.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                0974785046
              </Text>
            </View>
            <Image
              style={[styles.line6Stroke2, styles.line6Layout]}
              resizeMode="cover"
              source={require("../assets/line-6-stroke.png")}
            />
            <View style={[styles.nHngiconParent2, styles.hngiconParentFlexBox]}>
              <Image
                style={[styles.nHngicon3, styles.hngiconLayout]}
                resizeMode="cover"
                source={require("../assets/n-hngicon3.png")}
              />
              <Text style={[styles.tnH, styles.tnHTypo]}>Tồn 14.6h</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.nHng1, styles.hngBorder]}>
        <View style={[styles.tnKh, styles.tnKhFlexBox]}>
          <Text style={[styles.lMinhTr, styles.giDchVFlexBox]}>
            Lê Minh Trí
          </Text>
          <View style={styles.nHngstatus}>
            <View style={[styles.tag32, styles.tagSpaceBlock]}>
              <Text style={styles.label}>Đã hoàn tất</Text>
              <Image
                style={styles.closeIcon}
                resizeMode="cover"
                source={require("../assets/23-close2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.tnKhFlexBox]}>
          <View style={[styles.nHngdchVParent, styles.frameGroupFlexBox]}>
            <Image
              style={styles.nHngdchV}
              resizeMode="cover"
              source={require("../assets/n-hngdch-v.png")}
            />
            <Text style={[styles.giDchV, styles.giDchVFlexBox]}>
              Gói dịch vụ FPT Play Box
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.nHngiconParent, styles.hngiconParentFlexBox]}>
              <Image
                style={[styles.nHngicon, styles.hngiconLayout]}
                resizeMode="cover"
                source={require("../assets/n-hngicon.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                SGK92938728
              </Text>
            </View>
            <Image
              style={[styles.line6Stroke2, styles.line6Layout]}
              resizeMode="cover"
              source={require("../assets/line-6-stroke.png")}
            />
            <View style={[styles.nHngiconParent2, styles.hngiconParentFlexBox]}>
              <Image
                style={styles.hngiconLayout}
                resizeMode="cover"
                source={require("../assets/n-hngicon1.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                HND00828365
              </Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.nHngiconParent, styles.hngiconParentFlexBox]}>
              <Image
                style={styles.hngiconLayout}
                resizeMode="cover"
                source={require("../assets/n-hngicon2.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                0974785046
              </Text>
            </View>
            <Image
              style={[styles.line6Stroke2, styles.line6Layout]}
              resizeMode="cover"
              source={require("../assets/line-6-stroke.png")}
            />
            <View style={[styles.nHngiconParent2, styles.hngiconParentFlexBox]}>
              <Image
                style={[styles.nHngicon3, styles.hngiconLayout]}
                resizeMode="cover"
                source={require("../assets/n-hngicon3.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>Tồn _ _h</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.nHng1, styles.hngBorder]}>
        <View style={[styles.tnKh, styles.tnKhFlexBox]}>
          <Text style={[styles.lMinhTr, styles.giDchVFlexBox]}>
            Lê Minh Trí
          </Text>
          <View style={styles.nHngstatus}>
            <View style={[styles.tag33, styles.tagSpaceBlock]}>
              <Text style={styles.label}>Đã huỷ</Text>
              <Image
                style={styles.closeIcon}
                resizeMode="cover"
                source={require("../assets/23-close2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.tnKhFlexBox]}>
          <View style={[styles.nHngdchVParent, styles.frameGroupFlexBox]}>
            <Image
              style={styles.nHngdchV}
              resizeMode="cover"
              source={require("../assets/n-hngdch-v.png")}
            />
            <Text style={[styles.giDchV, styles.giDchVFlexBox]}>
              Gói dịch vụ FPT Play Box
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.nHngiconParent, styles.hngiconParentFlexBox]}>
              <Image
                style={[styles.nHngicon, styles.hngiconLayout]}
                resizeMode="cover"
                source={require("../assets/n-hngicon.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                SGK92938728
              </Text>
            </View>
            <Image
              style={[styles.line6Stroke2, styles.line6Layout]}
              resizeMode="cover"
              source={require("../assets/line-6-stroke.png")}
            />
            <View style={[styles.nHngiconParent2, styles.hngiconParentFlexBox]}>
              <Image
                style={styles.hngiconLayout}
                resizeMode="cover"
                source={require("../assets/n-hngicon1.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                HND00828365
              </Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={[styles.nHngiconParent, styles.hngiconParentFlexBox]}>
              <Image
                style={styles.hngiconLayout}
                resizeMode="cover"
                source={require("../assets/n-hngicon2.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>
                0974785046
              </Text>
            </View>
            <Image
              style={[styles.line6Stroke2, styles.line6Layout]}
              resizeMode="cover"
              source={require("../assets/line-6-stroke.png")}
            />
            <View style={[styles.nHngiconParent2, styles.hngiconParentFlexBox]}>
              <Image
                style={[styles.nHngicon3, styles.hngiconLayout]}
                resizeMode="cover"
                source={require("../assets/n-hngicon3.png")}
              />
              <Text style={[styles.sgk92938728, styles.tnHTypo]}>Tồn _ _h</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hngBorder: {
    width: 343,
    borderWidth: 1,
    borderColor: Color.gray4D9D9D9,
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: Border.br_9xs,
    alignItems: "center",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  tnKhFlexBox: {
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  giDchVFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  tagSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: Border.br_9xs,
    alignItems: "center",
  },
  frameGroupFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  hngiconParentFlexBox: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  hngiconLayout: {
    height: 20,
    width: 20,
  },
  tnHTypo: {
    fontFamily: FontFamily.bodyRegular14,
    lineHeight: 18,
    fontSize: FontSize.defaultBoldFootnote_size,
    marginLeft: 8,
    textAlign: "left",
    letterSpacing: 0,
    flex: 1,
  },
  line6Layout: {
    height: 16,
    width: 1,
    marginLeft: 16,
  },
  lMinhTr: {
    fontSize: FontSize.text16Medium_size,
    lineHeight: 21,
    fontWeight: "600",
    fontFamily: FontFamily.title3SemiBold,
    color: Color.textBlack,
    textAlign: "left",
  },
  label: {
    fontSize: FontSize.caption1SemiBold_size,
    lineHeight: 16,
    fontFamily: FontFamily.defaultRegularCallout,
    color: Color.systemBackgroundLightPrimary,
    textAlign: "left",
  },
  closeIcon: {
    width: 12,
    height: 12,
    marginLeft: 8,
    display: "none",
    overflow: "hidden",
  },
  tag3: {
    backgroundColor: Color.tagYellow500,
  },
  nHngstatus: {
    flexDirection: "row",
  },
  tnKh: {
    backgroundColor: Color.brandLight1,
    justifyContent: "space-between",
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
  },
  nHngdchV: {
    width: 24,
    height: 24,
    borderRadius: Border.br_5xs,
  },
  giDchV: {
    fontSize: FontSize.bodyRegular14_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.text16Medium,
    color: Color.brandPrimary,
    marginLeft: 8,
    textAlign: "left",
  },
  nHngdchVParent: {
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
    borderRadius: Border.br_9xs,
    alignSelf: "stretch",
    paddingHorizontal: 0,
  },
  nHngicon: {
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  sgk92938728: {
    color: Color.textPrimary,
  },
  nHngiconParent: {
    flexDirection: "row",
  },
  line6Stroke: {
    marginLeft: 16,
    display: "none",
  },
  nHngiconGroup: {
    marginLeft: 16,
    display: "none",
    flexDirection: "row",
  },
  frameGroup: {
    marginTop: 8,
    flexDirection: "row",
  },
  nHngicon3: {
    overflow: "hidden",
  },
  tnH: {
    color: Color.otherRed,
  },
  frameParent: {
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
  },
  nHng: {
    overflow: "hidden",
  },
  tag31: {
    backgroundColor: Color.tagBlue500,
  },
  line6Stroke2: {
    marginLeft: 16,
  },
  nHngiconParent2: {
    marginLeft: 16,
    flexDirection: "row",
  },
  nHng1: {
    marginTop: 16,
    overflow: "hidden",
  },
  tag32: {
    backgroundColor: Color.tagGreen500,
  },
  tag33: {
    backgroundColor: Color.tagGray500,
  },
  dsNHng: {
    width: "100%",
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    backgroundColor: Color.systemBackgroundLightPrimary,
    alignItems: "center",
    flex: 1,
  },
});

export default DSNHng;
