import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <View style={styles.monthPicker}>
        <View style={styles.monthYear}>
          <Text style={[styles.month, styles.monthTypo]}>June 2021</Text>
          <Image
            style={[styles.arrowRightIcon, styles.arrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-right1.png")}
          />
        </View>
        <View style={[styles.arrows, styles.arrowsFlexBox]}>
          <Image
            style={styles.arrowIconLayout}
            resizeMode="cover"
            source={require("../assets/arrow-left.png")}
          />
          <Image
            style={styles.arrowIconLayout}
            resizeMode="cover"
            source={require("../assets/arrow-right1.png")}
          />
        </View>
      </View>
      <View style={styles.calendarDayrowParent}>
        <View style={[styles.calendarDayrow, styles.arrowsFlexBox]}>
          <View style={styles.day}>
            <Text style={[styles.day1, styles.dayTypo]}>SUN</Text>
          </View>
          <View style={styles.day}>
            <Text style={[styles.day3, styles.dayPosition]}>MON</Text>
          </View>
          <View style={styles.day}>
            <Text style={[styles.day5, styles.dayTypo]}>TUE</Text>
          </View>
          <View style={styles.day}>
            <Text style={[styles.day7, styles.dayPosition]}>WED</Text>
          </View>
          <View style={styles.day}>
            <Text style={[styles.day1, styles.dayTypo]}>THU</Text>
          </View>
          <View style={styles.day}>
            <Text style={[styles.day11, styles.dayTypo]}>FRI</Text>
          </View>
          <View style={styles.day}>
            <Text style={[styles.day13, styles.dayTypo]}>SAT</Text>
          </View>
        </View>
        <View style={styles.calendarDayrowGroup}>
          <View style={styles.calendarSpaceBlock}>
            <View style={styles.digitLayout}>
              <Text style={[styles.date, styles.datePosition1]}>7</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date, styles.datePosition1]}>1</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>1</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>2</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>3</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date5, styles.datePosition]}>4</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>5</Text>
            </View>
          </View>
          <View style={[styles.calendarDayrow2, styles.calendarSpaceBlock]}>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>6</Text>
            </View>
            <View style={[styles.digit8, styles.digitLayout]}>
              <Text style={[styles.date8, styles.datePosition1]}>7</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>8</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>9</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>10</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date5, styles.datePosition]}>11</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>12</Text>
            </View>
          </View>
          <View style={[styles.calendarDayrow2, styles.calendarSpaceBlock]}>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>13</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>14</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>15</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>16</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>17</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date5, styles.datePosition]}>18</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>19</Text>
            </View>
          </View>
          <View style={[styles.calendarDayrow2, styles.calendarSpaceBlock]}>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>20</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>21</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>22</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>23</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>24</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date5, styles.datePosition]}>25</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>26</Text>
            </View>
          </View>
          <View style={[styles.calendarDayrow2, styles.calendarSpaceBlock]}>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>27</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>28</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>29</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date2, styles.dateClr]}>30</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date, styles.datePosition1]}>11</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date33, styles.datePosition]}>12</Text>
            </View>
            <View style={styles.digitLayout}>
              <Text style={[styles.date, styles.datePosition1]}>13</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monthTypo: {
    fontFamily: FontFamily.text14SemiBold,
    fontWeight: "600",
  },
  arrowIconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  arrowsFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  dayTypo: {
    color: Color.textSecondary,
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    left: "50%",
    top: "50%",
    marginTop: -9,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.text14SemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  dayPosition: {
    marginLeft: -15.5,
    color: Color.textSecondary,
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    left: "50%",
    top: "50%",
    marginTop: -9,
    position: "absolute",
    fontFamily: FontFamily.text14SemiBold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  datePosition1: {
    justifyContent: "center",
    left: 0,
    marginTop: -12,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    width: 32,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.title3SemiBold_size,
    alignItems: "center",
  },
  dateClr: {
    color: Color.textPrimary,
    fontFamily: FontFamily.calloutRegular,
    display: "flex",
  },
  datePosition: {
    marginTop: -16,
    justifyContent: "center",
    left: 0,
    height: 32,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    width: 32,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.title3SemiBold_size,
    alignItems: "center",
  },
  calendarSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 311,
  },
  digitLayout: {
    height: 32,
    width: 32,
  },
  month: {
    color: Color.brandPrimary,
    textAlign: "left",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.title3SemiBold_size,
    fontFamily: FontFamily.text14SemiBold,
    fontWeight: "600",
  },
  arrowRightIcon: {
    marginLeft: 8,
  },
  monthYear: {
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  arrows: {
    width: 51,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  monthPicker: {
    height: 44,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 311,
  },
  day1: {
    marginLeft: -14,
    textAlign: "center",
  },
  day: {
    height: 18,
    width: 32,
  },
  day3: {
    textAlign: "left",
  },
  day5: {
    marginLeft: -13,
    textAlign: "center",
  },
  day7: {
    textAlign: "center",
  },
  day11: {
    marginLeft: -10.5,
    textAlign: "center",
  },
  day13: {
    marginLeft: -12,
    textAlign: "center",
  },
  calendarDayrow: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 311,
  },
  date: {
    display: "none",
    color: Color.defaultSystemRedLight,
    fontFamily: FontFamily.defaultRegularTitle2,
  },
  date2: {
    display: "flex",
    justifyContent: "center",
    left: 0,
    marginTop: -12,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    width: 32,
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.title3SemiBold_size,
    alignItems: "center",
  },
  date5: {
    display: "flex",
    color: Color.textPrimary,
    fontFamily: FontFamily.calloutRegular,
  },
  date8: {
    color: Color.textWhite,
    display: "flex",
    fontFamily: FontFamily.text14SemiBold,
    fontWeight: "600",
  },
  digit8: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.brandPrimary,
  },
  calendarDayrow2: {
    marginTop: -4,
  },
  date33: {
    display: "none",
    color: Color.defaultSystemRedLight,
    fontFamily: FontFamily.defaultRegularTitle2,
  },
  calendarDayrowGroup: {
    marginTop: 10,
  },
  calendarDayrowParent: {
    marginTop: 4,
  },
  calendar: {
    borderRadius: 13,
    backgroundColor: Color.textWhite,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default Calendar;
