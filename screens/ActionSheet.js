import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import ActionSheetListCell from "./ActionSheetListCell";
import ActionSheetcomposer from "./ActionSheetcomposer";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ActionSheet = () => {
  return (
    <View style={styles.actionSheet}>
      <Text style={styles.actionSheet1}>Action Sheet</Text>
      <View style={styles.actionSheetlistCellParent}>
        <ActionSheetListCell rightIcon={false} icon />
        <View style={[styles.actionSheetcomment, styles.actionSpaceBlock3]}>
          <View style={[styles.actionSheetreactions, styles.actionFlexBox]}>
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji1.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji2.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji3.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji4.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji5.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji6.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji7.png")}
            />
          </View>
          <View style={[styles.actionSheetlistCell, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/arrow-reply.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Trả lời</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell1, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/message.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Nhắn tin</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell2, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/6-copy.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Sao chép</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell3, styles.actionSpaceBlock]}>
            <Image
              style={styles.iconLayout2}
              resizeMode="cover"
              source={require("../assets/eye-off.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Ẩn</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View
            style={[styles.actionSheetlistCell4, styles.homeindicator1Position]}
          >
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/delete.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Xóa</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.actionSheetmessage, styles.actionSpaceBlock3]}>
          <View style={[styles.actionSheetreactions, styles.actionFlexBox]}>
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji1.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji2.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji3.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji4.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji5.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji6.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji7.png")}
            />
          </View>
          <View style={[styles.actionSheetlistCell, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/arrow-reply.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Trả lời</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell1, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/6-copy.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Sao chép</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell2, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/arrow-forward.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Chuyển tiếp</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell3, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/delete.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Xóa, Thu hồi</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.homeindicator1, styles.homeindicatorPosition1]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.actionSheetroom, styles.actionSpaceBlock3]}>
          <View style={[styles.actionSheetlistCell9, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/1-search.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Tìm kiếm</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/add-user.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Chỉ định chat
              </Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell1, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/21-discount.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Gắn nhãn hội thoại
              </Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell2, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/25-share.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Yêu cầu chia sẻ thông tin
              </Text>
              <Image
                style={[styles.questionCircleIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/question-circle4.png")}
              />
            </View>
          </View>
          <View style={[styles.actionSheetlistCell3, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/alarmoutline.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Nhắc nhở</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View
            style={[styles.actionSheetlistCell4, styles.homeindicator1Position]}
          >
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/hon-tt.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Hoàn tất hội thoại
              </Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View
            style={[styles.actionSheetlistCell15, styles.homeindicatorPosition]}
          >
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/block-user.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Chặn khách hàng
              </Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.homeindicator2, styles.homeindicatorPosition1]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.actionSheetst, styles.actionSpaceBlock3]}>
          <View style={[styles.actionSheetlistCell9, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/call-connecting.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Gọi điện</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/envelope.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Mở hộp thư</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell1, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/6-copy.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>Sao chép số</Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.actionSheetlistCell2, styles.actionSpaceBlock]}>
            <Image
              style={[styles.arrowReplyIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/10-notebook.png")}
            />
            <View style={[styles.labelParent, styles.button2SpaceBlock]}>
              <Text style={[styles.label, styles.labelTypo]}>
                Lưu vào thông tin khách hàng
              </Text>
              <View style={[styles.icon20x20, styles.iconLayout2]}>
                <View style={styles.illustration} />
              </View>
            </View>
          </View>
          <View style={[styles.homeindicator3, styles.homeindicatorPosition1]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.actionSheetreactions2, styles.actionFlexBox]}>
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji1.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji2.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji3.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji4.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji5.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji6.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji7.png")}
          />
        </View>
        <ActionSheetcomposer />
        <View style={[styles.actionSheetpage, styles.actionSpaceBlock3]}>
          <View style={[styles.dropdownitem, styles.dropdownitemSpaceBlock]}>
            <View style={styles.avtPage}>
              <View style={styles.rectangleParent}>
                <Image
                  style={[styles.groupChild, styles.groupLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-18792.png")}
                />
                <Image
                  style={[styles.groupItem, styles.groupLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1878.png")}
                />
                <View style={styles.groupInner} />
                <Text style={[styles.text, styles.kTypo]}>+2</Text>
              </View>
            </View>
            <View style={styles.labels}>
              <Text style={[styles.label20, styles.labelTypo]}>
                Tất cả fanpage
              </Text>
              <View style={[styles.badge, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.kTypo]}>16</Text>
              </View>
            </View>
            <Image
              style={[styles.checkIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/check.png")}
            />
          </View>
          <View style={[styles.dropdownitem1, styles.dropdownitemSpaceBlock]}>
            <Image
              style={styles.avtPage}
              resizeMode="cover"
              source={require("../assets/avt-page.png")}
            />
            <View style={styles.labels}>
              <Text style={[styles.label20, styles.labelTypo]}>
                FPT Camera tại Hà Nội
              </Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={[styles.number, styles.kTypo]}>16</Text>
              </View>
            </View>
            <Image
              style={[styles.checkIcon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/check.png")}
            />
          </View>
          <View style={[styles.dropdownitem2, styles.dropdownitemSpaceBlock]}>
            <Image
              style={styles.avtPage}
              resizeMode="cover"
              source={require("../assets/avt-page1.png")}
            />
            <View style={styles.labels}>
              <Text style={[styles.label20, styles.labelTypo]}>FPT Camera</Text>
              <View style={[styles.badge2, styles.badgeSpaceBlock]}>
                <Text style={[styles.number, styles.kTypo]}>8</Text>
              </View>
            </View>
            <Image
              style={[styles.checkIcon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/check.png")}
            />
          </View>
          <View style={[styles.dropdownitem3, styles.dropdownitemSpaceBlock]}>
            <Image
              style={styles.avtPage}
              resizeMode="cover"
              source={require("../assets/avt-page2.png")}
            />
            <View style={styles.labels}>
              <Text style={[styles.label20, styles.labelTypo]}>
                Lắp đặt Camera FPT
              </Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={[styles.number, styles.kTypo]}>25</Text>
              </View>
            </View>
            <Image
              style={[styles.checkIcon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/check.png")}
            />
          </View>
          <View style={[styles.dropdownitem4, styles.dropdownitemSpaceBlock]}>
            <Image
              style={styles.avtPage}
              resizeMode="cover"
              source={require("../assets/avt-page3.png")}
            />
            <View style={styles.labels}>
              <Text style={[styles.label20, styles.labelTypo]}>
                Internet siêu tốc FPT
              </Text>
              <View style={styles.badgeSpaceBlock}>
                <Text style={[styles.number, styles.kTypo]}>11</Text>
              </View>
            </View>
            <Image
              style={[styles.checkIcon1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/check.png")}
            />
          </View>
          <View style={[styles.homeindicator1, styles.homeindicatorPosition1]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
      </View>
      <View style={styles.actionSheetchNhChatParent}>
        <View style={[styles.actionSheetchNhChat, styles.actionPosition2]}>
          <View style={[styles.actionSheetheader, styles.actionPosition1]}>
            <Image
              style={[styles.leftIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/27-left1.png")}
            />
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Chỉ định chat</Text>
            </View>
            <View style={[styles.button, styles.buttonPosition]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text1, styles.textClr]}>Xác nhận</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconsetplaceholder1.png")}
              />
            </View>
            <Image
              style={[styles.closeIcon, styles.buttonPosition]}
              resizeMode="cover"
              source={require("../assets/23-close3.png")}
            />
          </View>
          <View style={styles.listAgent}>
            <View style={styles.dropdownitemSpaceBlock}>
              <View style={[styles.fieldinput, styles.actionFlexBox]}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/1-search2.png")}
                />
                <Text style={[styles.text2, styles.textLayout]}>Tìm kiếm</Text>
                <Image
                  style={[styles.informationIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/3-information.png")}
                />
              </View>
              <View style={styles.selectedWrapper}>
                <View style={styles.selected}>
                  <Image
                    style={styles.avtPage}
                    resizeMode="cover"
                    source={require("../assets/frame-427318771.png")}
                  />
                  <Text style={[styles.name, styles.nameTypo]}>
                    Tôi (HaDT53)
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.listAgent1}>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <Image
                  style={styles.avtLayout}
                  resizeMode="cover"
                  source={require("../assets/avt2.png")}
                />
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>
                    Tôi (HaDT53)
                  </Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <Image
                  style={styles.avtLayout}
                  resizeMode="cover"
                  source={require("../assets/avt3.png")}
                />
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>HaLT82</Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.textClr]}>H</Text>
                </View>
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>
                    HiepNH21
                  </Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <Image
                  style={styles.avtLayout}
                  resizeMode="cover"
                  source={require("../assets/avt4.png")}
                />
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>
                    HuongNT256
                  </Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.textClr]}>M</Text>
                </View>
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>
                    MinhPD11
                  </Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <Image
                  style={styles.avtLayout}
                  resizeMode="cover"
                  source={require("../assets/avt5.png")}
                />
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>
                    NguyetNB2
                  </Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.textClr]}>N</Text>
                </View>
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>
                    NhungVTH15
                  </Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <Image
                  style={styles.avtLayout}
                  resizeMode="cover"
                  source={require("../assets/avt6.png")}
                />
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>
                    QuanDV17
                  </Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.textClr]}>Q</Text>
                </View>
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>
                    QuangDD16
                  </Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <Image
                  style={styles.avtLayout}
                  resizeMode="cover"
                  source={require("../assets/avt7.png")}
                />
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>SangTT9</Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.textClr]}>T</Text>
                </View>
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>ThucPT3</Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.textClr]}>T</Text>
                </View>
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>TriLM22</Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
              <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
                <View style={[styles.avt, styles.avtLayout]}>
                  <Text style={[styles.k, styles.textClr]}>V</Text>
                </View>
                <View style={styles.nameSecondLine}>
                  <Text style={[styles.name1, styles.textLayout]}>VanNT99</Text>
                  <Text style={[styles.text3, styles.nameTypo]}>
                    Second line
                  </Text>
                </View>
                <View style={styles.radio} />
              </View>
            </View>
          </View>
          <View style={styles.actionSheetfooter}>
            <View style={[styles.buttonParent, styles.buttonFlexBox]}>
              <View style={[styles.button1, styles.buttonBorder]}>
                <Image
                  style={[styles.iconsetplaceholder, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/iconsetplaceholder2.png")}
                />
                <Text style={[styles.text16, styles.textTypo]}>Secondary</Text>
                <Image
                  style={[styles.iconsetplaceholder3, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/iconsetplaceholder2.png")}
                />
              </View>
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <Image
                  style={[styles.iconsetplaceholder, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/iconsetplaceholder3.png")}
                />
                <Text style={[styles.text17, styles.textTypo]}>Xác nhận</Text>
                <Image
                  style={[styles.iconsetplaceholder3, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/iconsetplaceholder3.png")}
                />
              </View>
            </View>
            <View style={styles.alphabetickeyboardLayout}>
              <View style={[styles.keys, styles.keysPosition]}>
                <View style={styles.topRow}>
                  <View style={styles.key}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      Q
                    </Text>
                  </View>
                  <View style={styles.key1}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      W
                    </Text>
                  </View>
                  <View style={[styles.key2, styles.keyPosition5]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      E
                    </Text>
                  </View>
                  <View style={[styles.key3, styles.keyPosition4]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      R
                    </Text>
                  </View>
                  <View style={[styles.key4, styles.keyPosition3]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      T
                    </Text>
                  </View>
                  <View style={[styles.key5, styles.keyPosition2]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      Y
                    </Text>
                  </View>
                  <View style={styles.key6}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      U
                    </Text>
                  </View>
                  <View style={[styles.key7, styles.keyPosition1]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      I
                    </Text>
                  </View>
                  <View style={[styles.key8, styles.keyPosition]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      O
                    </Text>
                  </View>
                  <View style={styles.key9}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      P
                    </Text>
                  </View>
                </View>
                <View style={styles.middleRow}>
                  <View style={styles.key10}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      A
                    </Text>
                  </View>
                  <View style={[styles.key11, styles.keyPosition5]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      S
                    </Text>
                  </View>
                  <View style={[styles.key12, styles.keyPosition4]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      D
                    </Text>
                  </View>
                  <View style={[styles.key13, styles.keyPosition3]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      F
                    </Text>
                  </View>
                  <View style={[styles.key14, styles.keyPosition2]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      G
                    </Text>
                  </View>
                  <View style={styles.key15}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      H
                    </Text>
                  </View>
                  <View style={[styles.key16, styles.keyPosition1]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      J
                    </Text>
                  </View>
                  <View style={[styles.key17, styles.keyPosition]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      K
                    </Text>
                  </View>
                  <View style={styles.key18}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      L
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomRow}>
                  <View style={styles.keys1}>
                    <View style={styles.key19}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        Z
                      </Text>
                    </View>
                    <View style={styles.key20}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        X
                      </Text>
                    </View>
                    <View style={styles.key21}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        C
                      </Text>
                    </View>
                    <View style={styles.key22}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter22, styles.letterPosition1]}>
                        V
                      </Text>
                    </View>
                    <View style={styles.key23}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        B
                      </Text>
                    </View>
                    <View style={styles.key24}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        N
                      </Text>
                    </View>
                    <View style={styles.key25}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        M
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.keyIcon, styles.keyIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/-key.png")}
                  />
                  <Image
                    style={[styles.keyIcon1, styles.keyIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/-key1.png")}
                  />
                </View>
              </View>
              <View style={[styles.bottomRow1, styles.keysPosition]}>
                <View style={styles.key26}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterPosition]}>
                    123
                  </Text>
                </View>
                <View style={[styles.key27, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter27, styles.letterPosition]}>
                    Dấu cách
                  </Text>
                </View>
                <View style={[styles.key28, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterPosition]}>
                    Nhập
                  </Text>
                </View>
              </View>
              <View style={styles.emojiDictation}>
                <Image
                  style={styles.iconEmoji}
                  resizeMode="cover"
                  source={require("../assets/icon--emoji.png")}
                />
                <Image
                  style={styles.iconDictation}
                  resizeMode="cover"
                  source={require("../assets/icon--dictation.png")}
                />
              </View>
              <View
                style={[styles.homeindicator5, styles.homeindicatorPosition1]}
              >
                <View style={[styles.homeIndicator5, styles.homeLayout]} />
              </View>
            </View>
            <View
              style={[styles.homeindicator6, styles.homeindicatorPosition1]}
            >
              <View style={[styles.homeIndicator, styles.homeLayout]} />
            </View>
          </View>
        </View>
        <View style={styles.listAgent2}>
          <View style={styles.dropdownitemSpaceBlock}>
            <View style={[styles.fieldinput, styles.actionFlexBox]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/1-search2.png")}
              />
              <Text style={[styles.text2, styles.textLayout]}>Tìm kiếm</Text>
              <Image
                style={[styles.informationIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/3-information.png")}
              />
            </View>
            <View style={styles.selectedWrapper}>
              <View style={styles.selected}>
                <Image
                  style={styles.avtPage}
                  resizeMode="cover"
                  source={require("../assets/frame-427318771.png")}
                />
                <Text style={[styles.name, styles.nameTypo]}>Tôi (HaDT53)</Text>
              </View>
            </View>
          </View>
          <View style={styles.listAgent1}>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../assets/avt2.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>
                  Tôi (HaDT53)
                </Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../assets/avt3.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>HaLT82</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.textClr]}>H</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>HiepNH21</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../assets/avt4.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>
                  HuongNT256
                </Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.textClr]}>M</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>MinhPD11</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../assets/avt5.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>NguyetNB2</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.textClr]}>N</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>
                  NhungVTH15
                </Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../assets/avt6.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>QuanDV17</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.textClr]}>Q</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>QuangDD16</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <Image
                style={styles.avtLayout}
                resizeMode="cover"
                source={require("../assets/avt7.png")}
              />
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>SangTT9</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.textClr]}>T</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>ThucPT3</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.textClr]}>T</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>TriLM22</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
            <View style={[styles.dropdownitem5, styles.button2SpaceBlock1]}>
              <View style={[styles.avt, styles.avtLayout]}>
                <Text style={[styles.k, styles.textClr]}>V</Text>
              </View>
              <View style={styles.nameSecondLine}>
                <Text style={[styles.name1, styles.textLayout]}>VanNT99</Text>
                <Text style={[styles.text3, styles.nameTypo]}>Second line</Text>
              </View>
              <View style={styles.radio} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button3, styles.buttonFlexBox]}>
        <Image
          style={[styles.iconsetplaceholder, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconsetplaceholder1.png")}
        />
        <Text style={[styles.text32, styles.textClr]}>Lưu</Text>
        <Image
          style={[styles.iconsetplaceholder1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/iconsetplaceholder1.png")}
        />
      </View>
      <View style={styles.actionSheetbodyParent}>
        <View style={[styles.actionSheetbody, styles.actionPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
        <View style={[styles.actionSheetheader1, styles.actionPosition]}>
          <Image
            style={[styles.leftIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/27-left1.png")}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Title</Text>
          </View>
          <View style={[styles.button, styles.buttonPosition]}>
            <Image
              style={[styles.iconsetplaceholder, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/iconsetplaceholder1.png")}
            />
            <Text style={[styles.text1, styles.textClr]}>Lưu</Text>
            <Image
              style={[styles.iconsetplaceholder1, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/iconsetplaceholder1.png")}
            />
          </View>
          <Image
            style={[styles.closeIcon, styles.buttonPosition]}
            resizeMode="cover"
            source={require("../assets/23-close3.png")}
          />
        </View>
        <View style={[styles.actionSheetfooter1, styles.actionSpaceBlock3]}>
          <View style={[styles.buttonParent, styles.buttonFlexBox]}>
            <View style={styles.buttonBorder}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconsetplaceholder2.png")}
              />
              <Text style={[styles.text16, styles.textTypo]}>Secondary</Text>
              <Image
                style={[styles.iconsetplaceholder3, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconsetplaceholder2.png")}
              />
            </View>
            <View style={[styles.button2, styles.buttonFlexBox]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconsetplaceholder4.png")}
              />
              <Text style={[styles.text17, styles.textTypo]}>Primary</Text>
              <Image
                style={[styles.iconsetplaceholder3, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconsetplaceholder4.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.alphabetickeyboard1,
              styles.alphabetickeyboardLayout,
            ]}
          >
            <View style={[styles.keys, styles.keysPosition]}>
              <View style={styles.topRow}>
                <View style={styles.key}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>Q</Text>
                </View>
                <View style={styles.key1}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    W
                  </Text>
                </View>
                <View style={[styles.key2, styles.keyPosition5]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>E</Text>
                </View>
                <View style={[styles.key3, styles.keyPosition4]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    R
                  </Text>
                </View>
                <View style={[styles.key4, styles.keyPosition3]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>T</Text>
                </View>
                <View style={[styles.key5, styles.keyPosition2]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    Y
                  </Text>
                </View>
                <View style={styles.key6}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    U
                  </Text>
                </View>
                <View style={[styles.key7, styles.keyPosition1]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>I</Text>
                </View>
                <View style={[styles.key8, styles.keyPosition]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    O
                  </Text>
                </View>
                <View style={styles.key9}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>P</Text>
                </View>
              </View>
              <View style={styles.middleRow}>
                <View style={styles.key10}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>A</Text>
                </View>
                <View style={[styles.key11, styles.keyPosition5]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    S
                  </Text>
                </View>
                <View style={[styles.key12, styles.keyPosition4]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    D
                  </Text>
                </View>
                <View style={[styles.key13, styles.keyPosition3]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>F</Text>
                </View>
                <View style={[styles.key14, styles.keyPosition2]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    G
                  </Text>
                </View>
                <View style={styles.key15}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>H</Text>
                </View>
                <View style={[styles.key16, styles.keyPosition1]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    J
                  </Text>
                </View>
                <View style={[styles.key17, styles.keyPosition]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    K
                  </Text>
                </View>
                <View style={styles.key18}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter, styles.letterPosition1]}>L</Text>
                </View>
              </View>
              <View style={styles.bottomRow}>
                <View style={styles.keys1}>
                  <View style={styles.key19}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      Z
                    </Text>
                  </View>
                  <View style={styles.key20}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter20, styles.letterPosition1]}>
                      X
                    </Text>
                  </View>
                  <View style={styles.key21}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      C
                    </Text>
                  </View>
                  <View style={styles.key22}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter22, styles.letterPosition1]}>
                      V
                    </Text>
                  </View>
                  <View style={styles.key23}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter20, styles.letterPosition1]}>
                      B
                    </Text>
                  </View>
                  <View style={styles.key24}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      N
                    </Text>
                  </View>
                  <View style={styles.key25}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      M
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.keyIcon, styles.keyIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-key.png")}
                />
                <Image
                  style={[styles.keyIcon1, styles.keyIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/-key1.png")}
                />
              </View>
            </View>
            <View style={[styles.bottomRow1, styles.keysPosition]}>
              <View style={styles.key26}>
                <View style={styles.keycontainerShadowBox} />
                <Text style={[styles.letter26, styles.letterPosition]}>
                  123
                </Text>
              </View>
              <View style={[styles.key27, styles.keySpaceBlock]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter27, styles.letterPosition]}>
                  Dấu cách
                </Text>
              </View>
              <View style={[styles.key28, styles.keySpaceBlock]}>
                <View style={styles.keycontainerShadowBox} />
                <Text style={[styles.letter26, styles.letterPosition]}>
                  Nhập
                </Text>
              </View>
            </View>
            <View style={styles.emojiDictation}>
              <Image
                style={styles.iconEmoji}
                resizeMode="cover"
                source={require("../assets/icon--emoji.png")}
              />
              <Image
                style={styles.iconDictation}
                resizeMode="cover"
                source={require("../assets/icon--dictation.png")}
              />
            </View>
            <View
              style={[styles.homeindicator5, styles.homeindicatorPosition1]}
            >
              <View style={[styles.homeIndicator5, styles.homeLayout]} />
            </View>
          </View>
          <View style={[styles.homeindicator6, styles.homeindicatorPosition1]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.actionSheet2, styles.actionPosition2]}>
          <View style={[styles.actionSheetheader, styles.actionPosition1]}>
            <Image
              style={[styles.leftIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/27-left1.png")}
            />
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Title</Text>
            </View>
            <View style={[styles.button, styles.buttonPosition]}>
              <Image
                style={[styles.iconsetplaceholder, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconsetplaceholder1.png")}
              />
              <Text style={[styles.text1, styles.textClr]}>Lưu</Text>
              <Image
                style={[styles.iconsetplaceholder1, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/iconsetplaceholder1.png")}
              />
            </View>
            <Image
              style={[styles.closeIcon, styles.buttonPosition]}
              resizeMode="cover"
              source={require("../assets/23-close3.png")}
            />
          </View>
          <View style={styles.actionSheetbody1}>
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
          </View>
          <View style={styles.actionSpaceBlock3}>
            <View style={[styles.buttonParent, styles.buttonFlexBox]}>
              <View style={styles.buttonBorder}>
                <Image
                  style={[styles.iconsetplaceholder, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/iconsetplaceholder2.png")}
                />
                <Text style={[styles.text16, styles.textTypo]}>Secondary</Text>
                <Image
                  style={[styles.iconsetplaceholder3, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/iconsetplaceholder2.png")}
                />
              </View>
              <View style={[styles.button2, styles.buttonFlexBox]}>
                <Image
                  style={[styles.iconsetplaceholder, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/iconsetplaceholder4.png")}
                />
                <Text style={[styles.text17, styles.textTypo]}>Primary</Text>
                <Image
                  style={[styles.iconsetplaceholder3, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/iconsetplaceholder4.png")}
                />
              </View>
            </View>
            <View
              style={[
                styles.alphabetickeyboard1,
                styles.alphabetickeyboardLayout,
              ]}
            >
              <View style={[styles.keys, styles.keysPosition]}>
                <View style={styles.topRow}>
                  <View style={styles.key}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      Q
                    </Text>
                  </View>
                  <View style={styles.key1}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      W
                    </Text>
                  </View>
                  <View style={[styles.key2, styles.keyPosition5]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      E
                    </Text>
                  </View>
                  <View style={[styles.key3, styles.keyPosition4]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      R
                    </Text>
                  </View>
                  <View style={[styles.key4, styles.keyPosition3]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      T
                    </Text>
                  </View>
                  <View style={[styles.key5, styles.keyPosition2]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      Y
                    </Text>
                  </View>
                  <View style={styles.key6}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      U
                    </Text>
                  </View>
                  <View style={[styles.key7, styles.keyPosition1]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      I
                    </Text>
                  </View>
                  <View style={[styles.key8, styles.keyPosition]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      O
                    </Text>
                  </View>
                  <View style={styles.key9}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      P
                    </Text>
                  </View>
                </View>
                <View style={styles.middleRow}>
                  <View style={styles.key10}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      A
                    </Text>
                  </View>
                  <View style={[styles.key11, styles.keyPosition5]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      S
                    </Text>
                  </View>
                  <View style={[styles.key12, styles.keyPosition4]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      D
                    </Text>
                  </View>
                  <View style={[styles.key13, styles.keyPosition3]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      F
                    </Text>
                  </View>
                  <View style={[styles.key14, styles.keyPosition2]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      G
                    </Text>
                  </View>
                  <View style={styles.key15}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      H
                    </Text>
                  </View>
                  <View style={[styles.key16, styles.keyPosition1]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      J
                    </Text>
                  </View>
                  <View style={[styles.key17, styles.keyPosition]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter1, styles.letterPosition1]}>
                      K
                    </Text>
                  </View>
                  <View style={styles.key18}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      L
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomRow}>
                  <View style={styles.keys1}>
                    <View style={styles.key19}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        Z
                      </Text>
                    </View>
                    <View style={styles.key20}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        X
                      </Text>
                    </View>
                    <View style={styles.key21}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        C
                      </Text>
                    </View>
                    <View style={styles.key22}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter22, styles.letterPosition1]}>
                        V
                      </Text>
                    </View>
                    <View style={styles.key23}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        B
                      </Text>
                    </View>
                    <View style={styles.key24}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        N
                      </Text>
                    </View>
                    <View style={styles.key25}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        M
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.keyIcon, styles.keyIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/-key.png")}
                  />
                  <Image
                    style={[styles.keyIcon1, styles.keyIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/-key1.png")}
                  />
                </View>
              </View>
              <View style={[styles.bottomRow1, styles.keysPosition]}>
                <View style={styles.key26}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterPosition]}>
                    123
                  </Text>
                </View>
                <View style={[styles.key27, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter27, styles.letterPosition]}>
                    Dấu cách
                  </Text>
                </View>
                <View style={[styles.key28, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterPosition]}>
                    Nhập
                  </Text>
                </View>
              </View>
              <View style={styles.emojiDictation}>
                <Image
                  style={styles.iconEmoji}
                  resizeMode="cover"
                  source={require("../assets/icon--emoji.png")}
                />
                <Image
                  style={styles.iconDictation}
                  resizeMode="cover"
                  source={require("../assets/icon--dictation.png")}
                />
              </View>
              <View
                style={[styles.homeindicator5, styles.homeindicatorPosition1]}
              >
                <View style={[styles.homeIndicator5, styles.homeLayout]} />
              </View>
            </View>
            <View
              style={[styles.homeindicator6, styles.homeindicatorPosition1]}
            >
              <View style={[styles.homeIndicator, styles.homeLayout]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionSpaceBlock3: {
    paddingBottom: Padding.p_15xl,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  actionFlexBox: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  actionSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    height: 52,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  iconLayout2: {
    height: 20,
    width: 20,
  },
  button2SpaceBlock: {
    marginLeft: 16,
    flexDirection: "row",
  },
  labelTypo: {
    fontFamily: FontFamily.title3Regular,
    textAlign: "left",
  },
  homeindicator1Position: {
    zIndex: 5,
    width: 375,
  },
  homeindicatorPosition: {
    zIndex: 6,
    width: 375,
  },
  homeLayout: {
    height: 5,
    width: 134,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
    bottom: 8,
    left: "50%",
    position: "absolute",
  },
  homeindicatorPosition1: {
    height: 34,
    bottom: 0,
    position: "absolute",
  },
  dropdownitemSpaceBlock: {
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  groupLayout: {
    width: 34,
    height: 34,
    position: "absolute",
  },
  kTypo: {
    textAlign: "center",
    fontFamily: FontFamily.title3Regular,
  },
  badgeSpaceBlock: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_7xs,
    backgroundColor: Color.otherRed,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    marginLeft: 8,
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  actionPosition2: {
    height: 752,
    left: "50%",
    position: "absolute",
  },
  actionPosition1: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_xl,
    paddingLeft: Padding.p_base,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Color.divider,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
  },
  buttonPosition: {
    right: 16,
    top: 20,
    display: "none",
    position: "absolute",
  },
  textClr: {
    color: Color.brandPrimary,
    lineHeight: 20,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.text14SemiBold_size,
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  nameTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption1SemiBold_size,
    fontFamily: FontFamily.title3Regular,
    textAlign: "left",
  },
  button2SpaceBlock1: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
  avtLayout: {
    borderRadius: Border.br_11xl,
    height: 32,
    width: 32,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBorder: {
    height: 41,
    borderColor: Color.gray4D9D9D9,
    borderWidth: 1,
    justifyContent: "center",
    borderStyle: "solid",
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.text16Medium_size,
    marginLeft: 8,
    fontFamily: FontFamily.title3Regular,
    letterSpacing: 0,
    textAlign: "left",
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  letterPosition1: {
    fontFamily: FontFamily.defaultRegularTitle3,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
    color: Color.labelColorLightPrimary,
  },
  keyPosition5: {
    right: 262,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition4: {
    right: 225,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition3: {
    right: 187,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition2: {
    right: 150,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition1: {
    right: 75,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition: {
    right: 38,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIconLayout: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  letterPosition: {
    fontFamily: FontFamily.defaultRegularCallout,
    marginTop: -10,
    top: "50%",
    lineHeight: 21,
    fontSize: FontSize.text16Medium_size,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
    color: Color.labelColorLightPrimary,
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  actionPosition: {
    left: 2,
    width: 375,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.colorOrchid,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  alphabetickeyboardLayout: {
    height: 278,
    backgroundColor: Color.colorLightgray,
    zIndex: 1,
    width: 375,
    overflow: "hidden",
  },
  actionSheet1: {
    fontSize: FontSize.size_61xl,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  emojiIcon: {
    height: 32,
    width: 32,
    borderRadius: Border.br_7xs,
  },
  actionSheetreactions: {
    zIndex: 0,
    paddingHorizontal: Padding.p_5xl,
    height: 52,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    width: 375,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  arrowReplyIcon: {
    overflow: "hidden",
  },
  label: {
    color: Color.textBlack,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    fontFamily: FontFamily.title3Regular,
    letterSpacing: 0,
  },
  illustration: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.neutral4,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon20x20: {
    marginLeft: 8,
    display: "none",
  },
  labelParent: {
    alignItems: "center",
  },
  actionSheetlistCell: {
    zIndex: 1,
    width: 375,
  },
  actionSheetlistCell1: {
    zIndex: 2,
    width: 375,
  },
  actionSheetlistCell2: {
    zIndex: 3,
    width: 375,
  },
  actionSheetlistCell3: {
    zIndex: 4,
    width: 375,
  },
  actionSheetlistCell4: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    height: 52,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  homeIndicator: {
    marginLeft: -66.5,
  },
  homeindicator: {
    height: 34,
    bottom: 0,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
  },
  actionSheetcomment: {
    bottom: 810,
    minHeight: 240,
    paddingTop: Padding.p_3xl,
    left: "50%",
    paddingBottom: Padding.p_15xl,
    overflow: "hidden",
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    position: "absolute",
    marginLeft: -429.5,
  },
  homeindicator1: {
    marginLeft: -187.5,
    height: 34,
    bottom: 0,
    left: "50%",
    zIndex: 5,
    width: 375,
  },
  actionSheetmessage: {
    bottom: 472,
    minHeight: 240,
    paddingTop: Padding.p_3xl,
    left: "50%",
    paddingBottom: Padding.p_15xl,
    overflow: "hidden",
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    position: "absolute",
    marginLeft: -429.5,
  },
  actionSheetlistCell9: {
    zIndex: 0,
    width: 375,
  },
  questionCircleIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  actionSheetlistCell15: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    height: 52,
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  homeindicator2: {
    zIndex: 7,
    marginLeft: -187.5,
    height: 34,
    bottom: 0,
    left: "50%",
    width: 375,
  },
  actionSheetroom: {
    marginLeft: -19.5,
    bottom: 485,
    width: 375,
    minHeight: 240,
    paddingTop: Padding.p_3xl,
    left: "50%",
    paddingBottom: Padding.p_15xl,
    overflow: "hidden",
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    position: "absolute",
  },
  homeindicator3: {
    marginLeft: -187.5,
    height: 34,
    bottom: 0,
    left: "50%",
    zIndex: 4,
    width: 375,
  },
  actionSheetst: {
    marginLeft: -35.5,
    bottom: 1056,
    width: 375,
    minHeight: 240,
    paddingTop: Padding.p_3xl,
    left: "50%",
    paddingBottom: Padding.p_15xl,
    overflow: "hidden",
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    position: "absolute",
  },
  actionSheetreactions2: {
    top: 69,
    left: 0,
    paddingHorizontal: Padding.p_5xl,
    height: 52,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
    width: 375,
    backgroundColor: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    top: 0,
    left: 0,
  },
  groupItem: {
    top: 5,
    left: 5,
    borderRadius: Border.br_5xs,
  },
  groupInner: {
    top: 4,
    left: 4,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.systemBackgroundLightPrimary,
    borderWidth: 2,
    width: 36,
    height: 36,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    position: "absolute",
  },
  text: {
    top: 13,
    left: 14,
    width: 19,
    color: Color.systemBackgroundLightPrimary,
    lineHeight: 20,
    fontSize: FontSize.text14SemiBold_size,
    position: "absolute",
  },
  rectangleParent: {
    width: 39,
    height: 39,
    top: 0,
    left: 0,
    position: "absolute",
  },
  avtPage: {
    width: 40,
    height: 40,
  },
  label20: {
    color: Color.textPrimary,
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    fontFamily: FontFamily.title3Regular,
    letterSpacing: 0,
  },
  number: {
    fontSize: FontSize.defaultBoldFootnote_size,
    lineHeight: 18,
    color: Color.systemBackgroundLightPrimary,
    letterSpacing: 0,
    textAlign: "center",
  },
  badge: {
    display: "none",
  },
  labels: {
    marginLeft: 12,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  checkIcon: {
    marginLeft: 12,
    overflow: "hidden",
  },
  dropdownitem: {
    borderBottomWidth: 1,
    borderColor: Color.divider,
    paddingVertical: Padding.p_xs,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 0,
  },
  checkIcon1: {
    marginLeft: 12,
    display: "none",
    overflow: "hidden",
  },
  dropdownitem1: {
    borderBottomWidth: 1,
    borderColor: Color.divider,
    paddingVertical: Padding.p_xs,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 1,
  },
  badge2: {
    width: 27,
  },
  dropdownitem2: {
    borderBottomWidth: 1,
    borderColor: Color.divider,
    paddingVertical: Padding.p_xs,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 2,
  },
  dropdownitem3: {
    zIndex: 3,
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownitem4: {
    zIndex: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  actionSheetpage: {
    marginLeft: -419.5,
    bottom: 52,
    width: 375,
    minHeight: 240,
    paddingTop: Padding.p_3xl,
    left: "50%",
    paddingBottom: Padding.p_15xl,
    overflow: "hidden",
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    position: "absolute",
  },
  actionSheetlistCellParent: {
    width: 859,
    height: 1320,
    marginTop: 80,
  },
  leftIcon: {
    zIndex: 0,
    overflow: "hidden",
  },
  title: {
    display: "flex",
    fontFamily: FontFamily.title3SemiBold,
    fontSize: FontSize.subheadlineSemiBold_size,
    height: 24,
    justifyContent: "center",
    color: Color.textPrimary,
    textAlign: "center",
    lineHeight: 20,
    alignSelf: "stretch",
    letterSpacing: 0,
    alignItems: "center",
    fontWeight: "600",
  },
  titleWrapper: {
    zIndex: 1,
    alignItems: "center",
    flex: 1,
  },
  iconsetplaceholder: {
    display: "none",
  },
  text1: {
    marginLeft: 4,
    fontFamily: FontFamily.title3SemiBold,
    color: Color.brandPrimary,
    fontSize: FontSize.subheadlineSemiBold_size,
    letterSpacing: 0,
    textAlign: "left",
    fontWeight: "600",
  },
  iconsetplaceholder1: {
    marginLeft: 4,
    display: "none",
  },
  button: {
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    borderRadius: Border.br_9xs,
    zIndex: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  closeIcon: {
    height: 24,
    width: 24,
    zIndex: 3,
    overflow: "hidden",
  },
  actionSheetheader: {
    width: 375,
  },
  text2: {
    color: Color.textPlaceHolder,
    marginLeft: 8,
    fontFamily: FontFamily.title3Regular,
    textAlign: "left",
    flex: 1,
  },
  informationIcon: {
    marginLeft: 8,
    display: "none",
  },
  fieldinput: {
    backgroundColor: Color.neutral3F5F5F5,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_9xs,
    height: 40,
    alignSelf: "stretch",
  },
  name: {
    marginTop: 4,
    color: Color.textPrimary,
  },
  selected: {
    alignItems: "center",
  },
  selectedWrapper: {
    marginTop: 8,
    alignSelf: "stretch",
    display: "none",
  },
  name1: {
    color: Color.textPrimary,
    alignSelf: "stretch",
    fontFamily: FontFamily.title3Regular,
    textAlign: "left",
  },
  text3: {
    color: Color.textSecondary,
    alignSelf: "stretch",
    display: "none",
  },
  nameSecondLine: {
    marginLeft: 12,
    flex: 1,
  },
  radio: {
    borderRadius: Border.br_base,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    marginLeft: 12,
    borderStyle: "solid",
    height: 20,
    width: 20,
  },
  dropdownitem5: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  k: {
    textAlign: "center",
    fontFamily: FontFamily.title3Regular,
    color: Color.brandPrimary,
    fontSize: FontSize.text14SemiBold_size,
  },
  avt: {
    backgroundColor: Color.brandSecondary,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
  },
  listAgent1: {
    alignSelf: "stretch",
    flex: 1,
  },
  listAgent: {
    alignSelf: "stretch",
    backgroundColor: Color.systemBackgroundLightPrimary,
    flex: 1,
  },
  text16: {
    color: Color.textPrimary,
  },
  iconsetplaceholder3: {
    marginLeft: 8,
    display: "none",
  },
  button1: {
    display: "none",
  },
  text17: {
    color: Color.systemBackgroundLightPrimary,
  },
  button2: {
    backgroundColor: Color.brandPrimary,
    height: 40,
    marginLeft: 16,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flex: 1,
  },
  buttonParent: {
    padding: Padding.p_base,
    zIndex: 0,
    flexDirection: "row",
    width: 375,
  },
  keycontainerShadowBox1: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.systemBackgroundLightPrimary,
    position: "absolute",
    width: "100%",
  },
  letter: {
    width: 32,
    fontFamily: FontFamily.defaultRegularTitle3,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
  },
  key: {
    right: 337,
    height: 42,
    top: 0,
    left: 0,
    position: "absolute",
  },
  letter1: {
    width: 31,
  },
  key1: {
    right: 300,
    left: 38,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key2: {
    left: 75,
  },
  key3: {
    left: 113,
  },
  key4: {
    left: 150,
  },
  key5: {
    left: 188,
  },
  key6: {
    right: 113,
    left: 225,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key7: {
    left: 262,
  },
  key8: {
    left: 300,
  },
  key9: {
    left: 337,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  topRow: {
    height: 42,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  key10: {
    right: 299,
    height: 42,
    top: 0,
    left: 0,
    position: "absolute",
  },
  key11: {
    left: 38,
  },
  key12: {
    left: 75,
  },
  key13: {
    left: 112,
  },
  key14: {
    left: 150,
  },
  key15: {
    right: 112,
    left: 187,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key16: {
    left: 225,
  },
  key17: {
    left: 262,
  },
  key18: {
    left: 299,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  middleRow: {
    top: 54,
    right: 19,
    left: 19,
    height: 42,
    position: "absolute",
  },
  key19: {
    right: 222,
    height: 42,
    top: 0,
    left: 0,
    position: "absolute",
  },
  letter20: {
    width: 30,
  },
  key20: {
    right: 186,
    left: 37,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key21: {
    right: 149,
    left: 73,
    height: 42,
    top: 0,
    position: "absolute",
  },
  letter22: {
    width: 33,
  },
  key22: {
    right: 110,
    left: 110,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key23: {
    right: 74,
    left: 149,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key24: {
    right: 37,
    left: 185,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key25: {
    left: 222,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  keys1: {
    right: 58,
    left: 58,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIcon: {
    left: 0,
  },
  keyIcon1: {
    right: 0,
  },
  bottomRow: {
    top: 108,
    height: 42,
    right: 0,
    left: 0,
    position: "absolute",
  },
  keys: {
    top: 8,
    height: 150,
  },
  keycontainerShadowBox: {
    backgroundColor: Color.colorDarkgray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  letter26: {
    width: 91,
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    width: 175,
  },
  key27: {
    flex: 1,
  },
  key28: {
    width: 91,
  },
  bottomRow1: {
    top: 170,
    flexDirection: "row",
  },
  iconEmoji: {
    height: 27,
    width: 27,
  },
  iconDictation: {
    height: 28,
    width: 19,
  },
  emojiDictation: {
    top: 235,
    right: 31,
    left: 31,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator5: {
    marginLeft: -67,
  },
  homeindicator5: {
    left: 1,
    right: 0,
    display: "none",
  },
  homeindicator6: {
    marginLeft: -187.5,
    height: 34,
    bottom: 0,
    left: "50%",
    zIndex: 2,
    width: 375,
  },
  actionSheetfooter: {
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  actionSheetchNhChat: {
    marginLeft: 10,
    bottom: 34,
    backgroundColor: Color.systemBackgroundLightPrimary,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    height: 752,
  },
  listAgent2: {
    top: 57,
    height: 716,
    left: 0,
    width: 375,
    backgroundColor: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  actionSheetchNhChatParent: {
    width: 770,
    height: 768,
    marginTop: 80,
  },
  text32: {
    marginLeft: 4,
    fontSize: FontSize.subheadlineSemiBold_size,
    color: Color.brandPrimary,
    fontFamily: FontFamily.title3Regular,
    letterSpacing: 0,
    textAlign: "left",
  },
  button3: {
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    marginTop: 80,
  },
  rectangle: {
    height: "130.18%",
    bottom: "-30.18%",
  },
  actionSheetbody: {
    top: 115,
    height: 603,
  },
  actionSheetheader1: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_xl,
    paddingLeft: Padding.p_base,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Color.divider,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    top: 0,
  },
  alphabetickeyboard1: {
    display: "none",
  },
  actionSheetfooter1: {
    top: 744,
    left: 0,
    position: "absolute",
  },
  rectangle1: {
    height: "130.19%",
    bottom: "-30.19%",
  },
  actionSheetbody1: {
    alignSelf: "stretch",
    flex: 1,
  },
  actionSheet2: {
    marginLeft: 39,
    bottom: 159,
    maxHeight: 752,
    minHeight: 240,
  },
  actionSheetbodyParent: {
    width: 828,
    height: 911,
    marginTop: 80,
  },
  actionSheet: {
    backgroundColor: Color.colorGainsboro_100,
    height: 3780,
    padding: Padding.p_61xl,
    width: "100%",
    flex: 1,
  },
});

export default ActionSheet;
