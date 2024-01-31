import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const COMPOSER = () => {
  return (
    <View style={styles.composer}>
      <Text style={styles.composer1}>COMPOSER</Text>
      <View style={styles.composerParent}>
        <View style={[styles.composer2, styles.record2Border]}>
          <View style={[styles.property1default, styles.dngSpaceBlock]}>
            <View style={styles.nhpTinNhnWrapper}>
              <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                Nhập tin nhắn
              </Text>
            </View>
            <Image
              style={[styles.emojiIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/emoji.png")}
            />
          </View>
          <View style={[styles.property1fill1Dng, styles.dngSpaceBlock]}>
            <View style={styles.nhpTinNhnWrapper}>
              <Text
                style={[styles.niDungTinContainer, styles.tinContainerLayout]}
              >
                <Text style={styles.niDungTin}>Nội dung tin nhắn 1 dòng</Text>
                <Text style={styles.text}>|</Text>
              </Text>
            </View>
            <Image
              style={[styles.emojiIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/emoji.png")}
            />
          </View>
          <View style={[styles.property1fill3Dng, styles.dngSpaceBlock]}>
            <View style={styles.nhpTinNhnWrapper}>
              <Text
                style={[styles.niDungTinContainer1, styles.tinContainerLayout]}
              >
                <Text style={styles.niDungTin}>
                  Nội dung tin nhắn tối đa 3 dòng nếu dài hơn thì auto đẩy lên
                  trên
                </Text>
                <Text style={styles.text}>|</Text>
              </Text>
            </View>
            <Image
              style={[styles.emojiIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/emoji.png")}
            />
          </View>
          <View style={[styles.property1fillLnHn3Dng, styles.dngSpaceBlock]}>
            <View style={styles.equePorroQuisquamEstQuiDoWrapper}>
              <Text
                style={[styles.niDungTinContainer1, styles.tinContainerLayout]}
              >
                <Text style={styles.niDungTin}>
                  eque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                  consectetu, adipisci velit
                </Text>
                <Text style={styles.text}>|</Text>
              </Text>
            </View>
            <Image
              style={[styles.emojiIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/emoji.png")}
            />
          </View>
          <View style={[styles.property1focus, styles.dngSpaceBlock]}>
            <View style={styles.nhpTinNhnWrapper}>
              <Text
                style={[styles.niDungTinContainer, styles.tinContainerLayout]}
              >
                <Text style={styles.text}>|</Text>
                <Text style={styles.nhpTinNhn1}>Nhập tin nhắn</Text>
              </Text>
            </View>
            <Image
              style={[styles.emojiIcon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/emoji.png")}
            />
          </View>
        </View>
        <View style={[styles.composeBar, styles.keyPosition6]}>
          <View style={[styles.property1defaultMoreno, styles.composeFlexBox]}>
            <View style={[styles.helperText, styles.helperSpaceBlock]}>
              <Text style={[styles.description, styles.descriptionTypo]}>
                Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
              </Text>
            </View>
            <View style={[styles.composeBar1, styles.composeSpaceBlock]}>
              <View style={[styles.icon, styles.iconFlexBox]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/plus.png")}
                />
              </View>
              <View style={[styles.composer3, styles.dngSpaceBlock]}>
                <View style={styles.nhpTinNhnWrapper}>
                  <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                    Nhập tin nhắn
                  </Text>
                </View>
                <Image
                  style={[styles.emojiIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/emoji.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/camera1.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/mic.png")}
                />
              </View>
            </View>
            <View style={styles.homeindicator}>
              <View style={[styles.homeIndicator, styles.homeLayout]} />
            </View>
          </View>
          <View style={[styles.property1filledMoreyes, styles.composeFlexBox]}>
            <View style={[styles.helperText, styles.helperSpaceBlock]}>
              <Text style={[styles.description, styles.descriptionTypo]}>
                Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
              </Text>
            </View>
            <View style={[styles.composeBar2, styles.composeSpaceBlock]}>
              <Image
                style={[styles.imageIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/image.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera2.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/file.png")}
              />
              <View style={[styles.icon3, styles.iconFlexBox]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/close.png")}
                />
              </View>
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic1.png")}
              />
              <View style={styles.sendShadowBox}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/iconsendplanefill.png")}
                />
              </View>
              <View style={[styles.composer3, styles.dngSpaceBlock]}>
                <View style={styles.nhpTinNhnWrapper}>
                  <Text style={[styles.niDungTin2, styles.tinContainerLayout]}>
                    Nội dung tin nhắn 1 dòng
                  </Text>
                </View>
                <Image
                  style={[styles.emojiIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/emoji.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/send.png")}
                />
              </View>
            </View>
            <View style={styles.actionSheetcomposer}>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/4-picture.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Thư viện ảnh
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/camera.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Camera
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/clip.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Tệp đính kèm
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/sticker1.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Nhãn dán
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/gif1.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    GIF
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/cu-tr-li-mu.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Trả lời mẫu
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.homeindicator}>
                <View style={[styles.homeIndicator, styles.homeLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.property1defaultMoreyes, styles.composeFlexBox]}>
            <View style={[styles.helperText, styles.helperSpaceBlock]}>
              <Text style={[styles.description, styles.descriptionTypo]}>
                Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
              </Text>
            </View>
            <View style={[styles.composeBar2, styles.composeSpaceBlock]}>
              <Image
                style={[styles.imageIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/image.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera2.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/file.png")}
              />
              <View style={[styles.icon3, styles.iconFlexBox]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/close.png")}
                />
              </View>
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic1.png")}
              />
              <View style={styles.sendShadowBox}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/iconsendplanefill.png")}
                />
              </View>
              <View style={[styles.composer3, styles.dngSpaceBlock]}>
                <View style={styles.nhpTinNhnWrapper}>
                  <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                    Nhập tin nhắn
                  </Text>
                </View>
                <Image
                  style={[styles.emojiIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/emoji.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/camera1.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/mic.png")}
                />
              </View>
            </View>
            <View style={styles.actionSheetcomposer}>
              <View
                style={[styles.actionSheetlistCell6, styles.actionSpaceBlock]}
              >
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/4-picture.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Thư viện ảnh
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View
                style={[styles.actionSheetlistCell6, styles.actionSpaceBlock]}
              >
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/camera.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Camera
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/clip.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Tệp đính kèm
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/sticker1.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Nhãn dán
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/gif1.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    GIF
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.actionSpaceBlock}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/cu-tr-li-mu.png")}
                />
                <View style={styles.labelParent}>
                  <Text style={[styles.label, styles.tinContainerLayout]}>
                    Trả lời mẫu
                  </Text>
                  <View style={[styles.icon20x20, styles.icon20x20Layout]}>
                    <View style={styles.illustration} />
                  </View>
                </View>
              </View>
              <View style={styles.homeindicator}>
                <View style={[styles.homeIndicator, styles.homeLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.property1focusMoreno, styles.morenoPosition]}>
            <View style={[styles.helperText, styles.helperSpaceBlock]}>
              <Text style={[styles.description, styles.descriptionTypo]}>
                Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
              </Text>
            </View>
            <View style={[styles.composeBar2, styles.composeSpaceBlock]}>
              <Image
                style={[styles.imageIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/image.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera2.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/file.png")}
              />
              <View style={[styles.icon3, styles.iconFlexBox]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/plus.png")}
                />
              </View>
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic1.png")}
              />
              <View style={styles.sendShadowBox}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/iconsendplanefill.png")}
                />
              </View>
              <View style={[styles.composer3, styles.dngSpaceBlock]}>
                <View style={styles.nhpTinNhnWrapper}>
                  <Text
                    style={[
                      styles.niDungTinContainer,
                      styles.tinContainerLayout,
                    ]}
                  >
                    <Text style={styles.text}>|</Text>
                    <Text style={styles.nhpTinNhn1}>Nhập tin nhắn</Text>
                  </Text>
                </View>
                <Image
                  style={[styles.emojiIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/emoji.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/camera1.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/mic.png")}
                />
              </View>
            </View>
            <View style={[styles.alphabetickeyboard, styles.chooseImageLayout]}>
              <View style={[styles.keys, styles.keysPosition]}>
                <View style={[styles.topRow, styles.keyPosition6]}>
                  <View style={[styles.key, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      Q
                    </Text>
                  </View>
                  <View style={[styles.key1, styles.keyPosition6]}>
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
                  <View style={[styles.key6, styles.keyPosition6]}>
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
                  <View style={[styles.key9, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      P
                    </Text>
                  </View>
                </View>
                <View style={styles.middleRow}>
                  <View style={[styles.key10, styles.keyPosition6]}>
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
                  <View style={[styles.key15, styles.keyPosition6]}>
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
                  <View style={[styles.key18, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      L
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomRow}>
                  <View style={[styles.keys1, styles.keyPosition6]}>
                    <View style={[styles.key19, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        Z
                      </Text>
                    </View>
                    <View style={[styles.key20, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        X
                      </Text>
                    </View>
                    <View style={[styles.key21, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        C
                      </Text>
                    </View>
                    <View style={[styles.key22, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter22, styles.letterPosition1]}>
                        V
                      </Text>
                    </View>
                    <View style={[styles.key23, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        B
                      </Text>
                    </View>
                    <View style={[styles.key24, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        N
                      </Text>
                    </View>
                    <View style={[styles.key25, styles.keyPosition6]}>
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
                  <Text style={[styles.letter26, styles.letterLayout]}>
                    123
                  </Text>
                </View>
                <View style={[styles.key27, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter27, styles.letterLayout]}>
                    Dấu cách
                  </Text>
                </View>
                <View style={[styles.key28, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterLayout]}>
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
                style={[styles.homeindicator3, styles.homeindicatorPosition]}
              >
                <View style={[styles.homeIndicator3, styles.homeLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.property1filledMoreno, styles.morenoPosition]}>
            <View style={[styles.helperText, styles.helperSpaceBlock]}>
              <Text style={[styles.description, styles.descriptionTypo]}>
                Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
              </Text>
            </View>
            <View style={[styles.composeBar2, styles.composeSpaceBlock]}>
              <Image
                style={[styles.imageIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/image.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera2.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/file.png")}
              />
              <View style={[styles.icon3, styles.iconFlexBox]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/plus.png")}
                />
              </View>
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic1.png")}
              />
              <View style={styles.sendShadowBox}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/iconsendplanefill.png")}
                />
              </View>
              <View style={[styles.composer3, styles.dngSpaceBlock]}>
                <View style={styles.nhpTinNhnWrapper}>
                  <Text
                    style={[
                      styles.niDungTinContainer,
                      styles.tinContainerLayout,
                    ]}
                  >
                    <Text style={styles.niDungTin}>
                      Nội dung tin nhắn 1 dòng
                    </Text>
                    <Text style={styles.text}>|</Text>
                  </Text>
                </View>
                <Image
                  style={[styles.emojiIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/emoji.png")}
                />
              </View>
              <View style={[styles.icon12, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/camera1.png")}
                />
              </View>
              <View style={[styles.icon12, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/mic.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/send.png")}
                />
              </View>
            </View>
            <View style={[styles.alphabetickeyboard, styles.chooseImageLayout]}>
              <View style={[styles.keys, styles.keysPosition]}>
                <View style={[styles.topRow, styles.keyPosition6]}>
                  <View style={[styles.key, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      Q
                    </Text>
                  </View>
                  <View style={[styles.key1, styles.keyPosition6]}>
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
                  <View style={[styles.key6, styles.keyPosition6]}>
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
                  <View style={[styles.key9, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      P
                    </Text>
                  </View>
                </View>
                <View style={styles.middleRow}>
                  <View style={[styles.key10, styles.keyPosition6]}>
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
                  <View style={[styles.key15, styles.keyPosition6]}>
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
                  <View style={[styles.key18, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      L
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomRow}>
                  <View style={[styles.keys1, styles.keyPosition6]}>
                    <View style={[styles.key19, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        Z
                      </Text>
                    </View>
                    <View style={[styles.key20, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        X
                      </Text>
                    </View>
                    <View style={[styles.key21, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        C
                      </Text>
                    </View>
                    <View style={[styles.key22, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter22, styles.letterPosition1]}>
                        V
                      </Text>
                    </View>
                    <View style={[styles.key23, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        B
                      </Text>
                    </View>
                    <View style={[styles.key24, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        N
                      </Text>
                    </View>
                    <View style={[styles.key25, styles.keyPosition6]}>
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
                  <Text style={[styles.letter26, styles.letterLayout]}>
                    123
                  </Text>
                </View>
                <View style={[styles.key27, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter27, styles.letterLayout]}>
                    Dấu cách
                  </Text>
                </View>
                <View style={[styles.key28, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterLayout]}>
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
                style={[styles.homeindicator3, styles.homeindicatorPosition]}
              >
                <View style={[styles.homeIndicator3, styles.homeLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.property1recordMoreno, styles.composeFlexBox]}>
            <View style={[styles.helperText, styles.helperSpaceBlock]}>
              <Text style={[styles.description, styles.descriptionTypo]}>
                Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
              </Text>
            </View>
            <View style={[styles.composeBar2, styles.composeSpaceBlock]}>
              <Image
                style={[styles.imageIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/image.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera2.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/file.png")}
              />
              <Image
                style={[styles.cameraIcon1, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic1.png")}
              />
              <View style={styles.sendShadowBox}>
                <Image
                  style={[styles.iconsendPlaneFill, styles.icon20x20Layout]}
                  resizeMode="cover"
                  source={require("../assets/iconsendplanefill.png")}
                />
              </View>
              <View style={styles.record}>
                <View style={styles.record1}>
                  <Image
                    style={styles.btnIcon}
                    resizeMode="cover"
                    source={require("../assets/btn.png")}
                  />
                  <View style={styles.rectangleParent}>
                    <View style={styles.frameLayout} />
                    <View style={[styles.frameItem, styles.frameLayout]} />
                    <View style={[styles.frameItem, styles.frameLayout]} />
                    <View style={[styles.frameItem, styles.frameLayout]} />
                    <View style={[styles.frameItem, styles.frameLayout]} />
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild4, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild5, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild2, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild7, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild8, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild4, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild11, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild13, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild14, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild15, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild13, styles.frameChildLayout3]}
                    />
                    <View
                      style={[styles.frameChild3, styles.frameChildLayout3]}
                    />
                  </View>
                  <Text style={[styles.text6, styles.tinContainerLayout]}>
                    00:05
                  </Text>
                </View>
                <Image
                  style={[styles.closeIcon2, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/23-close.png")}
                />
              </View>
              <View style={[styles.icon1, styles.iconLayout1]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/send.png")}
                />
              </View>
            </View>
            <View style={[styles.alphabetickeyboard, styles.chooseImageLayout]}>
              <View style={[styles.keys, styles.keysPosition]}>
                <View style={[styles.topRow, styles.keyPosition6]}>
                  <View style={[styles.key, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      Q
                    </Text>
                  </View>
                  <View style={[styles.key1, styles.keyPosition6]}>
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
                  <View style={[styles.key6, styles.keyPosition6]}>
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
                  <View style={[styles.key9, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      P
                    </Text>
                  </View>
                </View>
                <View style={styles.middleRow}>
                  <View style={[styles.key10, styles.keyPosition6]}>
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
                  <View style={[styles.key15, styles.keyPosition6]}>
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
                  <View style={[styles.key18, styles.keyPosition6]}>
                    <View style={styles.keycontainerShadowBox1} />
                    <Text style={[styles.letter, styles.letterPosition1]}>
                      L
                    </Text>
                  </View>
                </View>
                <View style={styles.bottomRow}>
                  <View style={[styles.keys1, styles.keyPosition6]}>
                    <View style={[styles.key19, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        Z
                      </Text>
                    </View>
                    <View style={[styles.key20, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        X
                      </Text>
                    </View>
                    <View style={[styles.key21, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        C
                      </Text>
                    </View>
                    <View style={[styles.key22, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter22, styles.letterPosition1]}>
                        V
                      </Text>
                    </View>
                    <View style={[styles.key23, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter20, styles.letterPosition1]}>
                        B
                      </Text>
                    </View>
                    <View style={[styles.key24, styles.keyPosition6]}>
                      <View style={styles.keycontainerShadowBox1} />
                      <Text style={[styles.letter1, styles.letterPosition1]}>
                        N
                      </Text>
                    </View>
                    <View style={[styles.key25, styles.keyPosition6]}>
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
                  <Text style={[styles.letter26, styles.letterLayout]}>
                    123
                  </Text>
                </View>
                <View style={[styles.key27, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter27, styles.letterLayout]}>
                    Dấu cách
                  </Text>
                </View>
                <View style={[styles.key28, styles.keySpaceBlock]}>
                  <View style={styles.keycontainerShadowBox} />
                  <Text style={[styles.letter26, styles.letterLayout]}>
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
                style={[styles.homeindicator3, styles.homeindicatorPosition]}
              >
                <View style={[styles.homeIndicator3, styles.homeLayout]} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.record2, styles.record2Border]}>
          <View
            style={[styles.property1recording, styles.property1pausingLayout]}
          >
            <View style={styles.record1}>
              <Image
                style={styles.btnIcon}
                resizeMode="cover"
                source={require("../assets/btn.png")}
              />
              <View style={styles.rectangleParent}>
                <View style={styles.frameLayout} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameChild2, styles.frameChildLayout3]} />
                <View style={[styles.frameChild3, styles.frameChildLayout3]} />
                <View style={[styles.frameChild4, styles.frameChildLayout3]} />
                <View style={[styles.frameChild5, styles.frameChildLayout3]} />
                <View style={[styles.frameChild2, styles.frameChildLayout3]} />
                <View style={[styles.frameChild7, styles.frameChildLayout3]} />
                <View style={[styles.frameChild8, styles.frameChildLayout3]} />
                <View style={[styles.frameChild3, styles.frameChildLayout3]} />
                <View style={[styles.frameChild4, styles.frameChildLayout3]} />
                <View style={[styles.frameChild11, styles.frameChildLayout3]} />
                <View style={[styles.frameChild3, styles.frameChildLayout3]} />
                <View style={[styles.frameChild13, styles.frameChildLayout3]} />
                <View style={[styles.frameChild14, styles.frameChildLayout3]} />
                <View style={[styles.frameChild15, styles.frameChildLayout3]} />
                <View style={[styles.frameChild13, styles.frameChildLayout3]} />
                <View style={[styles.frameChild3, styles.frameChildLayout3]} />
              </View>
              <Text style={[styles.text6, styles.tinContainerLayout]}>
                00:05
              </Text>
            </View>
            <Image
              style={[styles.closeIcon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/23-close.png")}
            />
          </View>
          <View
            style={[styles.property1pausing, styles.property1pausingLayout]}
          >
            <View style={styles.record1}>
              <Image
                style={styles.btnIcon}
                resizeMode="cover"
                source={require("../assets/btn1.png")}
              />
              <View style={styles.rectangleContainer}>
                <View style={styles.frameChild39} />
                <Image
                  style={styles.ellipseIcon}
                  resizeMode="cover"
                  source={require("../assets/ellipse-667.png")}
                />
                <View style={styles.frameChild40} />
              </View>
              <Text style={[styles.text6, styles.tinContainerLayout]}>
                00:05
              </Text>
            </View>
            <Image
              style={[styles.closeIcon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/23-close.png")}
            />
          </View>
        </View>
        <View style={[styles.helperText6, styles.record2Border]}>
          <View style={[styles.property1ChNhChat, styles.helperSpaceBlock]}>
            <Text style={[styles.description6, styles.descriptionTypo]}>
              <Text style={styles.bnCh}>{`Bạn đã chỉ định chat cho `}</Text>
              <Text style={[styles.huongnt256, styles.chnhBnTypo]}>
                HuongNT256
              </Text>
              <Text style={styles.bnCh}>. Bạn không thể tiếp tục chat</Text>
            </Text>
          </View>
          <View
            style={[styles.property1zaloOaAccount, styles.helperSpaceBlock]}
          >
            <Text style={[styles.description6, styles.descriptionTypo]}>
              <Text
                style={styles.bnKhngTh1}
              >{`Bạn không thể gửi thêm tin tư vấn cho khách hàng do ứng dụng của bạn cần kết nối với Zalo Cloud Account để sử dụng tính năng trả phí. 
Liên kết `}</Text>
              <Text style={styles.tiY}>Tại đây</Text>
            </Text>
          </View>
          <View
            style={[styles.property1thiHnNhnTin, styles.helperText12FlexBox]}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/2-hourglass.png")}
            />
            <Text style={[styles.cnLi4, styles.descriptionTypo]}>
              Còn lại 4 ngày để nhắn tin
            </Text>
            <Image
              style={[styles.questionCircleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/question-circle.png")}
            />
          </View>
          <View
            style={[styles.property1htHnNhnTin, styles.helperText13FlexBox]}
          >
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/validate.png")}
            />
            <Text style={[styles.cnLi4, styles.descriptionTypo]}>
              Đã hết thời hạn gửi tin nhắn
            </Text>
            <Image
              style={[styles.questionCircleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/question-circle1.png")}
            />
          </View>
          <View
            style={[styles.property1pageXaKtNi, styles.helperText13FlexBox]}
          >
            <Text
              style={[styles.trangFptCameraContainer, styles.descriptionTypo]}
            >
              <Text style={styles.trang}>{`Trang `}</Text>
              <Text style={styles.chnhBnTypo}>FPT Camera tại Hà Nội</Text>
              <Text style={styles.trang}> đã bị xóa kết nối.</Text>
            </Text>
          </View>
          <View style={[styles.property1website, styles.helperSpaceBlock]}>
            <Text style={[styles.description, styles.descriptionTypo]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.property1tinTVn, styles.helperSpaceBlock]}>
            <Text style={[styles.description, styles.descriptionTypo]}>
              Tin tiếp theo sẽ là tin tư vấn trong tháng
            </Text>
          </View>
          <View style={[styles.property1reply, styles.helperSpaceBlock]}>
            <View style={styles.frameParent}>
              <View style={styles.angTrLiParent}>
                <Text style={[styles.angTrLi, styles.descriptionTypo]}>
                  Đang trả lời
                </Text>
                <Text style={[styles.chnhBn, styles.chnhBnTypo]}>
                  Chính bạn
                </Text>
              </View>
              <Text
                style={[styles.tiMunTm, styles.chpNhTypo]}
                numberOfLines={1}
              >
                Tôi muốn tìm hiểu về sản phẩm điện thoại bên bạn, vui lòng tư
                vấn giúp tôi
              </Text>
            </View>
            <Image
              style={[styles.validateIcon1, styles.icon20x20Layout]}
              resizeMode="cover"
              source={require("../assets/validate1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.alphabetickeyboardParent}>
        <View style={[styles.alphabetickeyboard, styles.chooseImageLayout]}>
          <View style={[styles.keys, styles.keysPosition]}>
            <View style={[styles.topRow, styles.keyPosition6]}>
              <View style={[styles.key, styles.keyPosition6]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>Q</Text>
              </View>
              <View style={[styles.key1, styles.keyPosition6]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>W</Text>
              </View>
              <View style={[styles.key2, styles.keyPosition5]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>E</Text>
              </View>
              <View style={[styles.key3, styles.keyPosition4]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>R</Text>
              </View>
              <View style={[styles.key4, styles.keyPosition3]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>T</Text>
              </View>
              <View style={[styles.key5, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>Y</Text>
              </View>
              <View style={[styles.key6, styles.keyPosition6]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>U</Text>
              </View>
              <View style={[styles.key7, styles.keyPosition1]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>I</Text>
              </View>
              <View style={[styles.key8, styles.keyPosition]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>O</Text>
              </View>
              <View style={[styles.key9, styles.keyPosition6]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>P</Text>
              </View>
            </View>
            <View style={styles.middleRow}>
              <View style={[styles.key10, styles.keyPosition6]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>A</Text>
              </View>
              <View style={[styles.key11, styles.keyPosition5]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>S</Text>
              </View>
              <View style={[styles.key12, styles.keyPosition4]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>D</Text>
              </View>
              <View style={[styles.key13, styles.keyPosition3]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>F</Text>
              </View>
              <View style={[styles.key14, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>G</Text>
              </View>
              <View style={[styles.key15, styles.keyPosition6]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>H</Text>
              </View>
              <View style={[styles.key16, styles.keyPosition1]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>J</Text>
              </View>
              <View style={[styles.key17, styles.keyPosition]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter1, styles.letterPosition1]}>K</Text>
              </View>
              <View style={[styles.key18, styles.keyPosition6]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition1]}>L</Text>
              </View>
            </View>
            <View style={styles.bottomRow}>
              <View style={[styles.keys1, styles.keyPosition6]}>
                <View style={[styles.key19, styles.keyPosition6]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    Z
                  </Text>
                </View>
                <View style={[styles.key20, styles.keyPosition6]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter20, styles.letterPosition1]}>
                    X
                  </Text>
                </View>
                <View style={[styles.key21, styles.keyPosition6]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    C
                  </Text>
                </View>
                <View style={[styles.key22, styles.keyPosition6]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter22, styles.letterPosition1]}>
                    V
                  </Text>
                </View>
                <View style={[styles.key23, styles.keyPosition6]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter20, styles.letterPosition1]}>
                    B
                  </Text>
                </View>
                <View style={[styles.key24, styles.keyPosition6]}>
                  <View style={styles.keycontainerShadowBox1} />
                  <Text style={[styles.letter1, styles.letterPosition1]}>
                    N
                  </Text>
                </View>
                <View style={[styles.key25, styles.keyPosition6]}>
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
              <Text style={[styles.letter26, styles.letterLayout]}>123</Text>
            </View>
            <View style={[styles.key27, styles.keySpaceBlock]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter27, styles.letterLayout]}>
                Dấu cách
              </Text>
            </View>
            <View style={[styles.key28, styles.keySpaceBlock]}>
              <View style={styles.keycontainerShadowBox} />
              <Text style={[styles.letter26, styles.letterLayout]}>Nhập</Text>
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
          <View style={[styles.homeindicator3, styles.homeindicatorPosition]}>
            <View style={[styles.homeIndicator3, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.chooseImage, styles.chooseImageLayout]}>
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View style={[styles.cameraParent, styles.iconFlexBox]}>
                <Image
                  style={[styles.plusIcon, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/camera3.png")}
                />
                <Text style={[styles.chpNh, styles.chpNhTypo]}>Chụp ảnh</Text>
              </View>
              <View style={[styles.rectangleParent1, styles.frameChildLayout2]}>
                <Image
                  style={[styles.rectangleIcon, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1881.png")}
                />
                <View
                  style={[styles.frameChild41, styles.frameChild41Position]}
                />
                <View style={[styles.badge, styles.iconFlexBox]}>
                  <Text style={[styles.number, styles.text9Clr]}>1</Text>
                </View>
              </View>
              <View style={[styles.rectangleParent1, styles.frameChildLayout2]}>
                <Image
                  style={[styles.rectangleIcon, styles.frameChildLayout1]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1880.png")}
                />
                <View
                  style={[styles.frameChild41, styles.frameChild41Position]}
                />
                <View style={[styles.badge, styles.iconFlexBox]}>
                  <Text style={[styles.number, styles.text9Clr]}>2</Text>
                </View>
              </View>
            </View>
            <View style={styles.rectangleParent3}>
              <Image
                style={[styles.frameChild44, styles.frameChildLayout1]}
                resizeMode="cover"
                source={require("../assets/rectangle-1879.png")}
              />
              <Image
                style={[styles.frameChild45, styles.frameChildLayout1]}
                resizeMode="cover"
                source={require("../assets/rectangle-18811.png")}
              />
              <Image
                style={[styles.frameChild45, styles.frameChildLayout1]}
                resizeMode="cover"
                source={require("../assets/rectangle-18801.png")}
              />
            </View>
            <View style={styles.rectangleParent3}>
              <Image
                style={styles.frameChildLayout}
                resizeMode="cover"
                source={require("../assets/rectangle-18802.png")}
              />
              <Image
                style={[styles.frameChild48, styles.frameChildLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-18791.png")}
              />
              <Image
                style={[styles.frameChild45, styles.frameChildLayout1]}
                resizeMode="cover"
                source={require("../assets/rectangle-18812.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator7}>
            <View style={styles.homeIndicator7} />
          </View>
          <View style={[styles.homeindicator8, styles.homeindicatorPosition]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
          <View style={[styles.button, styles.iconFlexBox]}>
            <Image
              style={[styles.iconsetplaceholder, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/iconsetplaceholder1.png")}
            />
            <Text style={[styles.text9, styles.text9Clr]}>Gửi 2</Text>
            <Image
              style={[styles.iconsetplaceholder1, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/iconsetplaceholder1.png")}
            />
          </View>
        </View>
        <View style={styles.chooseSticker}>
          <Image
            style={styles.image15Icon}
            resizeMode="cover"
            source={require("../assets/image-15.png")}
          />
          <View style={[styles.homeindicator9, styles.homeindicatorPosition]}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
      </View>
      <View style={styles.composeBarParent}>
        <View style={[styles.composeBar7, styles.composeFlexBox]}>
          <View style={[styles.helperText, styles.helperSpaceBlock]}>
            <Text style={[styles.description, styles.descriptionTypo]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.composeSpaceBlock]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer3, styles.dngSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera4.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.composeBar9, styles.composeFlexBox]}>
          <View style={styles.helperSpaceBlock}>
            <View style={styles.frameParent}>
              <View style={styles.angTrLiParent}>
                <Text style={[styles.angTrLi, styles.descriptionTypo]}>
                  Đang trả lời
                </Text>
                <Text style={[styles.chnhBn, styles.chnhBnTypo]}>
                  Chính bạn
                </Text>
              </View>
              <Text
                style={[styles.tiMunTm, styles.chpNhTypo]}
                numberOfLines={1}
              >
                Tôi muốn tìm hiểu về sản phẩm điện thoại bên bạn, vui lòng tư
                vấn giúp tôi
              </Text>
            </View>
            <Image
              style={[styles.validateIcon1, styles.icon20x20Layout]}
              resizeMode="cover"
              source={require("../assets/validate1.png")}
            />
          </View>
          <View style={[styles.composeBar1, styles.composeSpaceBlock]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer3, styles.dngSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera4.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.composeBar9, styles.composeFlexBox]}>
          <View style={styles.helperSpaceBlock}>
            <Text style={[styles.description, styles.descriptionTypo]}>
              Khi khách hàng nhắn tin, hội thoại sẽ chuyển sang Tab Fchat
            </Text>
          </View>
          <View style={[styles.composeBar1, styles.composeSpaceBlock]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer3, styles.dngSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera4.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.composeBar9, styles.composeFlexBox]}>
          <View style={styles.helperSpaceBlock}>
            <Text style={[styles.description6, styles.descriptionTypo]}>
              <Text style={styles.bnCh}>{`Bạn đã chỉ định chat cho `}</Text>
              <Text style={[styles.huongnt256, styles.chnhBnTypo]}>
                HuongNT256
              </Text>
              <Text style={styles.bnCh}>. Bạn không thể tiếp tục chat</Text>
            </Text>
          </View>
          <View style={[styles.composeBar14, styles.composeSpaceBlock]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer3, styles.dngSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera4.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.composeBar9, styles.composeFlexBox]}>
          <View style={styles.helperSpaceBlock}>
            <Text style={[styles.description6, styles.descriptionTypo]}>
              <Text
                style={styles.bnKhngTh1}
              >{`Bạn không thể gửi thêm tin tư vấn cho khách hàng do ứng dụng của bạn cần kết nối với Zalo Cloud Account để sử dụng tính năng trả phí. 
Liên kết `}</Text>
              <Text style={styles.tiY}>Tại đây</Text>
            </Text>
          </View>
          <View style={[styles.composeBar14, styles.composeSpaceBlock]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer3, styles.dngSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera4.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.composeBar9, styles.composeFlexBox]}>
          <View style={styles.helperText12FlexBox}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/2-hourglass.png")}
            />
            <Text style={[styles.cnLi4, styles.descriptionTypo]}>
              Còn lại 4 ngày để nhắn tin
            </Text>
            <Image
              style={[styles.questionCircleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/question-circle2.png")}
            />
          </View>
          <View style={[styles.composeBar1, styles.composeSpaceBlock]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer3, styles.dngSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera4.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.composeBar9, styles.composeFlexBox]}>
          <View style={styles.helperText13FlexBox}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/validate.png")}
            />
            <Text style={[styles.cnLi4, styles.descriptionTypo]}>
              Đã hết thời hạn gửi tin nhắn
            </Text>
            <Image
              style={[styles.questionCircleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/question-circle3.png")}
            />
          </View>
          <View style={[styles.composeBar14, styles.composeSpaceBlock]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer3, styles.dngSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera4.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
        <View style={[styles.composeBar9, styles.composeFlexBox]}>
          <View style={styles.helperText13FlexBox}>
            <Text
              style={[styles.trangFptCameraContainer, styles.descriptionTypo]}
            >
              <Text style={styles.trang}>{`Trang `}</Text>
              <Text style={styles.chnhBnTypo}>FPT Camera tại Hà Nội</Text>
              <Text style={styles.trang}> đã bị xóa kết nối.</Text>
            </Text>
          </View>
          <View style={[styles.composeBar14, styles.composeSpaceBlock]}>
            <View style={[styles.icon, styles.iconFlexBox]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/plus.png")}
              />
            </View>
            <View style={[styles.composer3, styles.dngSpaceBlock]}>
              <View style={styles.nhpTinNhnWrapper}>
                <Text style={[styles.nhpTinNhn, styles.tinContainerLayout]}>
                  Nhập tin nhắn
                </Text>
              </View>
              <Image
                style={[styles.emojiIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/emoji.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/camera4.png")}
              />
            </View>
            <View style={[styles.icon1, styles.iconLayout1]}>
              <Image
                style={[styles.plusIcon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/mic.png")}
              />
            </View>
          </View>
          <View style={styles.homeindicator}>
            <View style={[styles.homeIndicator, styles.homeLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  record2Border: {
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  dngSpaceBlock: {
    paddingBottom: Padding.p_4xs,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_5xs,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.textWhite,
    borderWidth: 1,
  },
  tinContainerLayout: {
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
  },
  iconLayout2: {
    height: 24,
    width: 24,
  },
  keyPosition6: {
    top: 0,
    position: "absolute",
  },
  composeFlexBox: {
    justifyContent: "flex-end",
    backgroundColor: Color.neutral3F5F5F5,
  },
  helperSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 375,
    backgroundColor: Color.neutral3F5F5F5,
    flexDirection: "row",
  },
  descriptionTypo: {
    fontSize: FontSize.text14Regular_size,
    lineHeight: 20,
  },
  composeSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.neutral3F5F5F5,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  iconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: 40,
    flexDirection: "row",
  },
  homeLayout: {
    width: 134,
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_81xl,
    left: "50%",
    height: 5,
    bottom: 8,
    position: "absolute",
  },
  icon20x20Layout: {
    height: 20,
    width: 20,
  },
  actionSpaceBlock: {
    paddingBottom: Padding.p_xs,
    paddingTop: Padding.p_base,
    height: 52,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.textWhite,
    overflow: "hidden",
  },
  morenoPosition: {
    top: 451,
    justifyContent: "flex-end",
    backgroundColor: Color.neutral3F5F5F5,
    position: "absolute",
  },
  chooseImageLayout: {
    height: 278,
    width: 375,
    overflow: "hidden",
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  letterPosition1: {
    display: "flex",
    fontFamily: FontFamily.defaultRegularTitle2,
    lineHeight: 28,
    fontSize: FontSize.defaultRegularTitle2_size,
    top: "50%",
    marginTop: -14,
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
  letterLayout: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  homeindicatorPosition: {
    bottom: 0,
    height: 34,
    position: "absolute",
  },
  frameLayout: {
    height: 4,
    width: 2,
    backgroundColor: Color.brandLight7,
    borderRadius: Border.br_11xs,
  },
  frameChildLayout3: {
    width: 2,
    backgroundColor: Color.brandLight7,
    marginLeft: 1,
    borderRadius: Border.br_11xs,
  },
  iconLayout: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  property1pausingLayout: {
    width: 279,
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_5xs,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 20,
    borderWidth: 1,
    position: "absolute",
  },
  chnhBnTypo: {
    fontFamily: FontFamily.text14SemiBold,
    letterSpacing: 0,
    fontWeight: "600",
  },
  helperText12FlexBox: {
    backgroundColor: Color.alertWarning,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 375,
    alignItems: "center",
    flexDirection: "row",
  },
  helperText13FlexBox: {
    backgroundColor: Color.alertError,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    width: 375,
    alignItems: "center",
    flexDirection: "row",
  },
  chpNhTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption1Regular_size,
    color: Color.textSecondary,
    fontFamily: FontFamily.calloutRegular,
  },
  frameChildLayout2: {
    height: 124,
    flex: 1,
  },
  frameChildLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameChild41Position: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text9Clr: {
    color: Color.textWhite,
    fontFamily: FontFamily.calloutRegular,
    letterSpacing: 0,
  },
  frameChildLayout: {
    height: 130,
    maxWidth: "100%",
    flex: 1,
    overflow: "hidden",
  },
  composer1: {
    fontSize: 80,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
  },
  nhpTinNhn: {
    color: Color.textSecondary,
    fontFamily: FontFamily.calloutRegular,
    fontSize: FontSize.calloutRegular_size,
    letterSpacing: 0,
  },
  nhpTinNhnWrapper: {
    zIndex: 0,
    maxHeight: 72,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  emojiIcon: {
    right: 8,
    zIndex: 1,
    bottom: 8,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  property1default: {
    width: 243,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_5xs,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
    top: 20,
  },
  niDungTin: {
    color: Color.textPrimary,
  },
  text: {
    color: Color.brandPrimary,
  },
  niDungTinContainer: {
    fontFamily: FontFamily.calloutRegular,
    fontSize: FontSize.calloutRegular_size,
    letterSpacing: 0,
  },
  property1fill1Dng: {
    top: 139,
    width: 243,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_5xs,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
  },
  niDungTinContainer1: {
    fontFamily: FontFamily.calloutRegular,
    fontSize: FontSize.calloutRegular_size,
    letterSpacing: 0,
    flex: 1,
  },
  property1fill3Dng: {
    top: 195,
    width: 243,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_5xs,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
  },
  equePorroQuisquamEstQuiDoWrapper: {
    alignItems: "flex-end",
    zIndex: 0,
    maxHeight: 72,
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  property1fillLnHn3Dng: {
    top: 314,
    width: 243,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_5xs,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
  },
  nhpTinNhn1: {
    color: Color.textSecondary,
  },
  property1focus: {
    top: 76,
    width: 243,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_5xs,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
  },
  composer2: {
    top: 563,
    width: 283,
    height: 424,
    overflow: "hidden",
    left: 851,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  description: {
    textAlign: "center",
    lineHeight: 20,
    color: Color.textPrimary,
    fontFamily: FontFamily.calloutRegular,
    flex: 1,
  },
  helperText: {
    display: "none",
  },
  plusIcon: {
    overflow: "hidden",
  },
  icon: {
    height: 40,
    flexDirection: "row",
  },
  composer3: {
    marginLeft: 12,
    flex: 1,
    paddingRight: Padding.p_21xl,
    paddingTop: Padding.p_4xs,
    paddingLeft: Padding.p_5xs,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  icon1: {
    marginLeft: 12,
    alignItems: "center",
  },
  composeBar1: {
    alignSelf: "stretch",
  },
  homeIndicator: {
    marginLeft: -66.5,
    height: 5,
  },
  homeindicator: {
    height: 34,
    alignSelf: "stretch",
  },
  property1defaultMoreno: {
    bottom: 1081,
    width: 375,
    left: 20,
    position: "absolute",
  },
  imageIcon: {
    display: "none",
    overflow: "hidden",
  },
  cameraIcon1: {
    marginLeft: 12,
    display: "none",
    overflow: "hidden",
  },
  icon3: {
    marginLeft: 12,
    height: 40,
    flexDirection: "row",
  },
  iconsendPlaneFill: {
    overflow: "hidden",
  },
  sendShadowBox: {
    padding: Padding.p_2xs,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: Border.br_5xl,
    width: 40,
    backgroundColor: Color.brandPrimary,
    marginLeft: 12,
    justifyContent: "center",
    height: 40,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  niDungTin2: {
    color: Color.textPrimary,
    fontFamily: FontFamily.calloutRegular,
    fontSize: FontSize.calloutRegular_size,
    letterSpacing: 0,
  },
  composeBar2: {
    width: 375,
  },
  label: {
    fontSize: FontSize.headlineRegular_size,
    color: Color.textBlack,
    fontFamily: FontFamily.calloutRegular,
  },
  illustration: {
    backgroundColor: Color.neutral4,
    borderRadius: Border.br_11xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  icon20x20: {
    marginLeft: 8,
    display: "none",
  },
  labelParent: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  actionSheetcomposer: {
    width: 375,
    backgroundColor: Color.textWhite,
    overflow: "hidden",
  },
  property1filledMoreyes: {
    top: 14,
    left: 425,
    position: "absolute",
  },
  actionSheetlistCell6: {
    display: "none",
  },
  property1defaultMoreyes: {
    top: 119,
    left: 20,
    position: "absolute",
  },
  keycontainerShadowBox1: {
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.textWhite,
    position: "absolute",
  },
  letter: {
    width: 32,
  },
  key: {
    right: 337,
    height: 42,
    left: 0,
  },
  letter1: {
    width: 31,
  },
  key1: {
    right: 300,
    left: 38,
    height: 42,
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
  },
  topRow: {
    height: 42,
    right: 0,
    left: 0,
  },
  key10: {
    right: 299,
    height: 42,
    left: 0,
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
    left: 0,
  },
  letter20: {
    width: 30,
  },
  key20: {
    right: 186,
    left: 37,
    height: 42,
  },
  key21: {
    right: 149,
    left: 73,
    height: 42,
  },
  letter22: {
    width: 33,
  },
  key22: {
    right: 110,
    left: 110,
    height: 42,
  },
  key23: {
    right: 74,
    left: 149,
    height: 42,
  },
  key24: {
    right: 37,
    left: 185,
    height: 42,
  },
  key25: {
    left: 222,
    height: 42,
    right: 0,
  },
  keys1: {
    right: 58,
    left: 58,
    height: 42,
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
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_8xs_6,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
  },
  letter26: {
    fontFamily: FontFamily.defaultRegularCallout,
    marginTop: -10,
    lineHeight: 21,
    display: "flex",
    top: "50%",
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
    color: Color.labelColorLightPrimary,
    width: 91,
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    width: 175,
    fontFamily: FontFamily.defaultRegularCallout,
    marginTop: -10,
    lineHeight: 21,
    display: "flex",
    top: "50%",
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    letterSpacing: 0,
    alignItems: "center",
    position: "absolute",
    color: Color.labelColorLightPrimary,
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
    width: 27,
    height: 27,
  },
  iconDictation: {
    width: 19,
    height: 28,
  },
  emojiDictation: {
    top: 235,
    right: 31,
    left: 31,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator3: {
    marginLeft: -67,
    height: 5,
  },
  homeindicator3: {
    left: 1,
    right: 0,
  },
  alphabetickeyboard: {
    backgroundColor: Color.colorLightgray,
  },
  property1focusMoreno: {
    left: 20,
  },
  icon12: {
    marginLeft: 12,
    display: "none",
    alignItems: "center",
  },
  property1filledMoreno: {
    left: 425,
  },
  btnIcon: {
    borderRadius: Border.br_xl,
    width: 28,
    height: 28,
  },
  frameItem: {
    marginLeft: 1,
  },
  frameChild2: {
    height: 11,
    marginLeft: 1,
  },
  frameChild3: {
    height: 8,
    marginLeft: 1,
  },
  frameChild4: {
    marginLeft: 1,
    height: 5,
  },
  frameChild5: {
    height: 17,
    marginLeft: 1,
  },
  frameChild7: {
    height: 7,
    marginLeft: 1,
  },
  frameChild8: {
    height: 14,
    marginLeft: 1,
  },
  frameChild11: {
    height: 3,
    marginLeft: 1,
  },
  frameChild13: {
    height: 12,
    marginLeft: 1,
  },
  frameChild14: {
    height: 16,
    marginLeft: 1,
  },
  frameChild15: {
    height: 23,
    marginLeft: 1,
  },
  rectangleParent: {
    marginLeft: 8,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  text6: {
    fontWeight: "500",
    fontFamily: FontFamily.text16Medium,
    marginLeft: 8,
    color: Color.textBlack,
    fontSize: FontSize.calloutRegular_size,
    letterSpacing: 0,
  },
  record1: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  closeIcon2: {
    marginLeft: 16,
  },
  record: {
    paddingVertical: Padding.p_4xs,
    paddingHorizontal: Padding.p_5xs,
    backgroundColor: Color.tagPurple100,
    height: 42,
    marginLeft: 12,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    borderWidth: 1,
  },
  property1recordMoreno: {
    top: 819,
    left: 20,
    position: "absolute",
  },
  composeBar: {
    width: 821,
    height: 1186,
    left: 0,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
  },
  property1recording: {
    backgroundColor: Color.tagPurple100,
    width: 279,
    top: 20,
  },
  frameChild39: {
    width: 49,
    height: 2,
    backgroundColor: Color.brandPrimary,
    display: "none",
  },
  ellipseIcon: {
    width: 10,
    height: 10,
  },
  frameChild40: {
    backgroundColor: Color.tagGray400,
    height: 1,
    flex: 1,
  },
  rectangleContainer: {
    marginLeft: 8,
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  property1pausing: {
    top: 95,
    backgroundColor: Color.textWhite,
  },
  record2: {
    top: 564,
    left: 1164,
    width: 319,
    height: 157,
    overflow: "hidden",
    position: "absolute",
  },
  bnCh: {
    color: Color.textPrimary,
    fontFamily: FontFamily.calloutRegular,
  },
  huongnt256: {
    color: Color.textBlack,
  },
  description6: {
    lineHeight: 20,
    flex: 1,
    textAlign: "left",
  },
  property1ChNhChat: {
    top: 19,
    left: 20,
    position: "absolute",
  },
  bnKhngTh1: {
    color: Color.textBlack,
    fontFamily: FontFamily.calloutRegular,
  },
  tiY: {
    textDecoration: "underline",
    color: Color.colorRoyalblue_100,
    fontFamily: FontFamily.defaultRegularCallout,
  },
  property1zaloOaAccount: {
    top: 273,
    left: 20,
    position: "absolute",
  },
  cnLi4: {
    color: Color.textBlack,
    marginLeft: 12,
    lineHeight: 20,
    fontFamily: FontFamily.calloutRegular,
    textAlign: "left",
  },
  questionCircleIcon: {
    marginLeft: 12,
  },
  property1thiHnNhnTin: {
    top: 391,
    left: 20,
    position: "absolute",
  },
  property1htHnNhnTin: {
    top: 462,
    left: 20,
    position: "absolute",
  },
  trang: {
    fontFamily: FontFamily.calloutRegular,
  },
  trangFptCameraContainer: {
    color: Color.textBlack,
    lineHeight: 20,
    textAlign: "left",
  },
  property1pageXaKtNi: {
    top: 531,
    left: 20,
    position: "absolute",
  },
  property1website: {
    top: 83,
    left: 20,
    position: "absolute",
  },
  property1tinTVn: {
    top: 147,
    left: 20,
    position: "absolute",
  },
  angTrLi: {
    lineHeight: 20,
    color: Color.textPrimary,
    fontFamily: FontFamily.calloutRegular,
    textAlign: "left",
  },
  chnhBn: {
    marginLeft: 2,
    color: Color.textBlack,
    lineHeight: 20,
    fontSize: FontSize.text14Regular_size,
    textAlign: "left",
  },
  angTrLiParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  tiMunTm: {
    marginTop: 2,
    alignSelf: "stretch",
    overflow: "hidden",
    textAlign: "left",
  },
  frameParent: {
    flex: 1,
  },
  validateIcon1: {
    marginLeft: 16,
    overflow: "hidden",
  },
  property1reply: {
    top: 194,
    left: 20,
    position: "absolute",
  },
  helperText6: {
    top: -45,
    width: 415,
    height: 587,
    overflow: "hidden",
    left: 851,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  composerParent: {
    width: 1519,
    height: 1217,
    marginTop: 80,
  },
  chpNh: {
    textAlign: "center",
  },
  cameraParent: {
    backgroundColor: Color.backgroundGrayF8F8F8,
    paddingHorizontal: 34,
    paddingVertical: Padding.p_21xl,
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
  },
  rectangleIcon: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  frameChild41: {
    backgroundColor: Color.colorGray_200,
  },
  number: {
    fontSize: FontSize.subheadlineRegular_size,
    textAlign: "center",
    lineHeight: 20,
  },
  badge: {
    top: 53,
    left: 53,
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_11xs,
    backgroundColor: Color.brandPrimary,
    width: 24,
    justifyContent: "center",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent1: {
    marginLeft: 1,
  },
  frameContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChild44: {
    height: 124,
    flex: 1,
  },
  frameChild45: {
    height: 124,
    flex: 1,
    marginLeft: 1,
  },
  rectangleParent3: {
    marginTop: 1,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChild48: {
    marginLeft: 1,
  },
  frameGroup: {
    top: 16,
    height: 290,
    width: 375,
    left: 0,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  homeIndicator7: {
    marginLeft: -21,
    bottom: 5,
    backgroundColor: Color.gray4D9D9D9,
    width: 40,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  homeindicator7: {
    right: 1,
    bottom: 262,
    height: 16,
    left: 0,
    backgroundColor: Color.textWhite,
    position: "absolute",
  },
  homeindicator8: {
    width: 375,
    left: 0,
  },
  iconsetplaceholder: {
    display: "none",
  },
  text9: {
    lineHeight: 21,
    fontSize: FontSize.calloutRegular_size,
    marginLeft: 8,
    textAlign: "left",
  },
  iconsetplaceholder1: {
    marginLeft: 8,
    display: "none",
  },
  button: {
    top: 200,
    left: 16,
    width: 343,
    height: 44,
    paddingVertical: Padding.p_xs,
    backgroundColor: Color.brandPrimary,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  chooseImage: {
    marginLeft: 80,
  },
  image15Icon: {
    height: 316,
    width: 375,
    zIndex: 0,
  },
  homeindicator9: {
    width: 375,
    left: 0,
    zIndex: 1,
  },
  chooseSticker: {
    marginLeft: 80,
  },
  alphabetickeyboardParent: {
    flexDirection: "row",
    marginTop: 80,
  },
  composeBar7: {
    width: 375,
  },
  composeBar9: {
    marginLeft: 80,
    width: 375,
  },
  composeBar14: {
    alignSelf: "stretch",
    display: "none",
  },
  composeBarParent: {
    flexWrap: "wrap",
    alignSelf: "stretch",
    flexDirection: "row",
    marginTop: 80,
  },
  composer: {
    backgroundColor: "#e2e7ec",
    width: 1900,
    height: 2536,
    padding: 80,
  },
});

export default COMPOSER;
