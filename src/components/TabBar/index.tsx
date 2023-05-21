import { getIconComponent } from "@assets/icon";
import { getSize } from "@base/common/responsive";
import { Block, Text } from "@components";
import Font from "@theme/Font";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

const Icon = getIconComponent("demo");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: getSize.m(22),
    marginBottom: getSize.v(20),
  },

  money: {
    backgroundColor: "#FFFFFF",
    height: getSize.m(32),
    borderRadius: getSize.m(16),
    paddingHorizontal: getSize.m(10),
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    opacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },

  textMoney: {
    color: "#A3CD48",
    fontSize: getSize.m(16, 0.3),
    fontFamily: Font.font_bold_700,
    marginLeft: getSize.m(4),
  },

  textTitle: {
    color: "#3C3C3C",
    fontSize: getSize.m(25, 0.3),
    fontFamily: Font.font_semi_bold_600,
  },
});

const TabBar = ({ title, left }) => {
  return (
    <Block style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      {left && (
        <Block style={styles.money}>
          <Icon name={"Vector"} color={"#A3CD48"} size={getSize.m(20)} />
          <Text style={styles.textMoney}>10,312</Text>
        </Block>
      )}
    </Block>
  );
};

export default memo(TabBar);
