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
      <View style={styles.View_1_13523}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac1362b8-8a38-43fa-9a21-211ce21fa6e1"
          }}
          style={styles.ImageBackground_1_13524}
        />
        <View style={styles.View_1_13525}>
          <View style={styles.View_1_13526}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b100c05b-2785-4cef-9d0d-5e2d3b58e16f"
              }}
              style={styles.ImageBackground_1_13527}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3eb9f090-1d20-4cc3-9a9d-d472d60ee9cf"
              }}
              style={styles.ImageBackground_1_13530}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32e3c407-5843-4bcc-84aa-2d905f357916"
              }}
              style={styles.ImageBackground_1_13531}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93539f71-7b54-4e02-ba93-2409d9ba621f"
              }}
              style={styles.ImageBackground_1_13532}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e49413a-1e66-4f0e-9eab-b7a86689ad6e"
            }}
            style={styles.ImageBackground_1_13533}
          />
          <View style={styles.View_1_13534}>
            <View style={styles.View_1_13535}>
              <Text style={styles.Text_1_13535}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_13536}>
        <View style={styles.View_I1_13536_1_51} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dbb29ef-f510-4d85-86a5-3055b469092a"
          }}
          style={styles.ImageBackground_I1_13536_1_52}
        />
      </View>
      <View style={styles.View_1_14170}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01fc8d47-a4cf-4cbc-a001-0e2a027937f3"
          }}
          style={styles.ImageBackground_1_14171}
        />
      </View>
      <View style={styles.View_1_14178}>
        <Text style={styles.Text_1_14178}>Email</Text>
      </View>
      <View style={styles.View_1_14195}>
        <Text style={styles.Text_1_14195}>Password</Text>
      </View>
      <View style={styles.View_1_14179}>
        <Text style={styles.Text_1_14179}>Test@</Text>
      </View>
      <View style={styles.View_1_14184} />
      <View style={styles.View_1_14194} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cf2b94e-39e4-4a32-82b3-f7172f1fe843"
        }}
        style={styles.ImageBackground_1_14185}
      />
      <View style={styles.View_1_14187}>
        <Text style={styles.Text_1_14187}>Login to your account</Text>
      </View>
      <View style={styles.View_1_14188}>
        <View style={styles.View_1_14189}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0cc8024-e19b-428d-b188-555408bf9f34"
            }}
            style={styles.ImageBackground_1_14190}
          />
        </View>
      </View>
      <View style={styles.View_1_14196}>
        <View style={styles.View_1_14197}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf6eba2c-0c5e-4dbe-8877-1000bba0ce1c"
            }}
            style={styles.ImageBackground_1_14198}
          />
        </View>
      </View>
      <View style={styles.View_1_14202}>
        <Text style={styles.Text_1_14202}>Forgot Password?</Text>
      </View>
      <View style={styles.View_1_14233}>
        <View style={styles.View_1_14142}>
          <View style={styles.View_I1_14142_1_12862} />
          <View style={styles.View_I1_14142_1_12863}>
            <Text style={styles.Text_I1_14142_1_12863}>Login</Text>
          </View>
        </View>
        <View style={styles.View_1_14203}>
          <Text style={styles.Text_1_14203}>Not a member? Signup Now</Text>
        </View>
        <View style={styles.View_1_14232}>
          <View style={styles.View_1_14204}>
            <Text style={styles.Text_1_14204}>Or Login Using </Text>
          </View>
          <View style={styles.View_1_14228}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f618da1-c153-44e0-a258-f957d5d9adf9"
              }}
              style={styles.ImageBackground_1_14213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6a60da5-2d88-4a9b-8241-43b2f209c3f1"
              }}
              style={styles.ImageBackground_1_14205}
            />
          </View>
          <View style={styles.View_1_14229}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ea8adfb-c8bf-4e5a-9bd2-b1264257477e"
              }}
              style={styles.ImageBackground_1_14212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f16fabc-5ee0-4479-90e4-0771fa3cb20f"
              }}
              style={styles.ImageBackground_1_14210}
            />
          </View>
          <View style={styles.View_1_14227}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/957faf01-7879-4ad5-8c1d-e83c9f62a93f"
              }}
              style={styles.ImageBackground_1_14214}
            />
            <View style={styles.View_1_14221}>
              <View style={styles.View_I1_14221_3174_13230}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b86cd650-f7c2-4469-811a-cc7f7dd82e82"
                  }}
                  style={styles.ImageBackground_I1_14221_3174_12991}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_1_13523: {
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
  ImageBackground_1_13524: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_13525: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_13526: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_1_13527: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_13530: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_13531: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_13532: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_13533: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_1_13534: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_13535: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_13535: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_13536: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_13536_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_13536_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  View_1_14170: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_14171: {
    width: wp("15%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14178: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_1_14178: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14195: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_1_14195: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14179: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_1_14179: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14184: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("40%"),
    borderColor: "rgba(238, 31, 41, 1)",
    borderWidth: 1
  },
  View_1_14194: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("49%"),
    borderColor: "rgba(33, 29, 31, 1)",
    borderWidth: 1
  },
  ImageBackground_1_14185: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("43%")
  },
  View_1_14187: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_1_14187: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14188: {
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
  View_1_14189: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_14190: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14196: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_14197: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_14198: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14202: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_1_14202: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14233: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("85%")
  },
  View_1_14142: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_14142_1_12862: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_14142_1_12863: {
    flexGrow: 1,
    width: wp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1_14142_1_12863: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14203: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_14203: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14232: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("19%")
  },
  View_1_14204: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14204: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14228: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("6%")
  },
  ImageBackground_1_14213: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_14205: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_14229: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  ImageBackground_1_14212: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_14210: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_1_14227: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("6%")
  },
  ImageBackground_1_14214: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_14221: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_14221_3174_13230: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14221_3174_12991: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
