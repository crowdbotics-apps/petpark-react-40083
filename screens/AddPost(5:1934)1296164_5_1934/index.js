import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_5_1938} />
      <View style={styles.View_5_1939}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b2b95ac-7258-4a86-addd-80abd1204825"
          }}
          style={styles.ImageBackground_5_1940}
        />
        <View style={styles.View_5_1941}>
          <View style={styles.View_5_1942}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f24679e5-991d-4023-b17d-124cf7772205"
              }}
              style={styles.ImageBackground_5_1943}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/490da9a5-733a-4bd4-b926-1e900a39e563"
              }}
              style={styles.ImageBackground_5_1946}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c15702e-c719-4467-9712-3743d88ee37e"
              }}
              style={styles.ImageBackground_5_1947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3138346b-c719-4bdd-9671-60b889e79431"
              }}
              style={styles.ImageBackground_5_1948}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03d47ecc-3926-4357-aee9-d2003b27d76e"
            }}
            style={styles.ImageBackground_5_1949}
          />
          <View style={styles.View_5_1950}>
            <View style={styles.View_5_1951}>
              <Text style={styles.Text_5_1951}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_2076}>
        <View style={styles.View_I5_2076_1_14189}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1980ff91-cfac-41cc-a4cc-1ffa940d4ae0"
            }}
            style={styles.ImageBackground_I5_2076_1_14190}
          />
        </View>
      </View>
      <View style={styles.View_5_2081}>
        <Text style={styles.Text_5_2081}>Add Post</Text>
      </View>
      <View style={styles.View_5_2083}>
        <Text style={styles.Text_5_2083}>Video</Text>
      </View>
      <View style={styles.View_5_2084}>
        <Text style={styles.Text_5_2084}>Check-in</Text>
      </View>
      <View style={styles.View_5_2086}>
        <View style={styles.View_5_2082}>
          <Text style={styles.Text_5_2082}>Image</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21624e80-7b79-4131-bc3c-80550f133cb0"
          }}
          style={styles.ImageBackground_5_2085}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c25879-7263-406d-b548-1ee748c05408"
        }}
        style={styles.ImageBackground_5_2087}
      />
      <View style={styles.View_5_2088}>
        <Text style={styles.Text_5_2088}>Ahmed</Text>
      </View>
      <View style={styles.View_5_2089}>
        <Text style={styles.Text_5_2089}>
          Say something about this photo...
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2def9984-dbf7-44f5-9ab0-120b3bff86e5"
        }}
        style={styles.ImageBackground_5_2093}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75be4cbd-732c-4b00-9c2e-fde9dbc676db"
        }}
        style={styles.ImageBackground_5_2094}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e40fce79-0777-4007-9777-bdafa1410043"
        }}
        style={styles.ImageBackground_5_2095}
      />
      <View style={styles.View_5_2096}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ce08cbb-7767-4895-827d-bd2a91dd9551"
          }}
          style={styles.ImageBackground_5_2097}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c845b322-da09-446e-9610-2d9cdd1dcd2f"
        }}
        style={styles.ImageBackground_5_2105}
      />
      <View style={styles.View_5_2106}>
        <Text style={styles.Text_5_2106}>Post</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_5_1938: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1
  },
  View_5_1939: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_1940: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1941: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_5_1942: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_5_1943: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_1946: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1947: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_1948: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_1949: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_5_1950: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1951: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1951: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2076: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_2076_1_14189: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_2076_1_14190: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2081: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_5_2081: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2083: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_5_2083: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2084: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_5_2084: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2086: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("8%")
  },
  View_5_2082: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_2082: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_2085: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_5_2087: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%")
  },
  View_5_2088: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_5_2088: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2089: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_5_2089: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_2093: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_2094: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_5_2095: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_5_2096: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_5_2097: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_2105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80%")
  },
  View_5_2106: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("73%"),
    justifyContent: "center"
  },
  Text_5_2106: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
