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
      <View style={styles.View_5_2111} />
      <View style={styles.View_5_2112}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7380a5db-f799-46f5-9da1-4f0d02812360"
          }}
          style={styles.ImageBackground_5_2113}
        />
        <View style={styles.View_5_2114}>
          <View style={styles.View_5_2115}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa3289de-b907-43c1-a0c6-bcef26ae7fba"
              }}
              style={styles.ImageBackground_5_2116}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed6085c5-c924-48f1-bf81-8e96ca7e1bff"
              }}
              style={styles.ImageBackground_5_2119}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b9460ca-fce0-41c8-91de-a36ea81cee23"
              }}
              style={styles.ImageBackground_5_2120}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abfe6f7a-46df-4187-8045-7bdaeca9f253"
              }}
              style={styles.ImageBackground_5_2121}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53148d19-c1ac-45ad-8caa-382e5554eb08"
            }}
            style={styles.ImageBackground_5_2122}
          />
          <View style={styles.View_5_2123}>
            <View style={styles.View_5_2124}>
              <Text style={styles.Text_5_2124}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_2125}>
        <View style={styles.View_I5_2125_1_14189}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60d75c35-e82c-49e3-b9b7-0f5eb13fb545"
            }}
            style={styles.ImageBackground_I5_2125_1_14190}
          />
        </View>
      </View>
      <View style={styles.View_5_2126}>
        <Text style={styles.Text_5_2126}>Add Post</Text>
      </View>
      <View style={styles.View_5_2127}>
        <Text style={styles.Text_5_2127}>Video</Text>
      </View>
      <View style={styles.View_5_2128}>
        <Text style={styles.Text_5_2128}>Check-in</Text>
      </View>
      <View style={styles.View_5_2129}>
        <View style={styles.View_5_2130}>
          <Text style={styles.Text_5_2130}>Image</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e77c93c-6ef2-40a7-b7cd-9a970784965e"
          }}
          style={styles.ImageBackground_5_2131}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6ec4f09-3444-4a90-bfa4-e90df4118f86"
        }}
        style={styles.ImageBackground_5_2132}
      />
      <View style={styles.View_5_2133}>
        <Text style={styles.Text_5_2133}>Ahmed</Text>
      </View>
      <View style={styles.View_5_2134}>
        <Text style={styles.Text_5_2134}>
          Say something about this photo...
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c872221d-b43b-405f-9e99-3a6a33ba3beb"
        }}
        style={styles.ImageBackground_5_2135}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/933123e0-ef87-4007-a927-0e4f6a5d172a"
        }}
        style={styles.ImageBackground_5_2136}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc129952-48f9-483a-b1d4-83fb1ed02437"
        }}
        style={styles.ImageBackground_5_2137}
      />
      <View style={styles.View_5_2138}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21631ade-537a-48aa-8e1e-645821f89248"
          }}
          style={styles.ImageBackground_5_2139}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fa11cd5-3421-4569-8900-4c173be1350c"
        }}
        style={styles.ImageBackground_5_2144}
      />
      <View style={styles.View_5_2145}>
        <Text style={styles.Text_5_2145}>Post</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58bf97ff-e2fd-4b66-b49a-2612f6a9dc70"
        }}
        style={styles.ImageBackground_5_2152}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8b49daa-52cc-40e1-b06b-87a28008faf7"
        }}
        style={styles.ImageBackground_5_2153}
      />
      <View style={styles.View_5_2154} />
      <View style={styles.View_5_2167} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68ab03a9-9e82-4d44-8f2e-47ce27f231eb"
        }}
        style={styles.ImageBackground_5_2166}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19dd1ea4-8d03-4c92-a5eb-fd1814150e80"
        }}
        style={styles.ImageBackground_5_2168}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_5_2111: {
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
  View_5_2112: {
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
  ImageBackground_5_2113: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2114: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_5_2115: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_5_2116: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_2119: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_2120: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_2121: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_2122: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_5_2123: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2124: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_2124: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2125: {
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
  View_I5_2125_1_14189: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_2125_1_14190: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2126: {
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
  Text_5_2126: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2127: {
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
  Text_5_2127: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2128: {
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
  Text_5_2128: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2129: {
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
  View_5_2130: {
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
  Text_5_2130: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_2131: {
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
  ImageBackground_5_2132: {
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
  View_5_2133: {
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
  Text_5_2133: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2134: {
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
  Text_5_2134: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_2135: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_2136: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_5_2137: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_5_2138: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_5_2139: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_2144: {
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
  View_5_2145: {
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
  Text_5_2145: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_2152: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("56%"),
    resizeMode: "cover"
  },
  ImageBackground_5_2153: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("56%"),
    resizeMode: "cover"
  },
  View_5_2154: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("55%"),
    backgroundColor: "rgba(33, 29, 31, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3
  },
  View_5_2167: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("55%"),
    backgroundColor: "rgba(33, 29, 31, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3
  },
  ImageBackground_5_2166: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_5_2168: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
