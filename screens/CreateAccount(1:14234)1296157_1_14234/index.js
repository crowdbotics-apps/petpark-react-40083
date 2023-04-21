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
      <View style={styles.View_1_14235}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e1a7123-6895-49e4-8154-37694cbc42c7"
          }}
          style={styles.ImageBackground_1_14236}
        />
        <View style={styles.View_1_14237}>
          <View style={styles.View_1_14238}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef4a0b94-f25d-4cde-bb9f-c79778b8b298"
              }}
              style={styles.ImageBackground_1_14239}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0edf7419-1d80-4eaa-a169-563fe507c496"
              }}
              style={styles.ImageBackground_1_14242}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89e7a58e-1b3d-4df5-8d06-5084283d498f"
              }}
              style={styles.ImageBackground_1_14243}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18cd1b46-6dbf-435a-90fc-1b1d5f4e4ee9"
              }}
              style={styles.ImageBackground_1_14244}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bbe0aaa-2bb9-4d05-8437-f4e897d48748"
            }}
            style={styles.ImageBackground_1_14245}
          />
          <View style={styles.View_1_14246}>
            <View style={styles.View_1_14247}>
              <Text style={styles.Text_1_14247}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_14248}>
        <View style={styles.View_I1_14248_1_51} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67d6bf76-abfe-4ca6-baf1-add6e76af3fb"
          }}
          style={styles.ImageBackground_I1_14248_1_52}
        />
      </View>
      <View style={styles.View_1_14249}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1bf8f2d-d851-44c1-9a5b-1db5a48cf8aa"
          }}
          style={styles.ImageBackground_1_14250}
        />
      </View>
      <View style={styles.View_1_14256}>
        <Text style={styles.Text_1_14256}>Email</Text>
      </View>
      <View style={styles.View_1_14257}>
        <Text style={styles.Text_1_14257}>Password</Text>
      </View>
      <View style={styles.View_1_14304}>
        <Text style={styles.Text_1_14304}>Confirm Password</Text>
      </View>
      <View style={styles.View_1_14302}>
        <Text style={styles.Text_1_14302}>Username</Text>
      </View>
      <View style={styles.View_1_14258}>
        <Text style={styles.Text_1_14258}>Test@</Text>
      </View>
      <View style={styles.View_1_14259} />
      <View style={styles.View_1_14260} />
      <View style={styles.View_1_14305} />
      <View style={styles.View_1_14303} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9557ce91-f46d-49f5-a3f8-cafbaa626b5c"
        }}
        style={styles.ImageBackground_1_14261}
      />
      <View style={styles.View_1_14262}>
        <Text style={styles.Text_1_14262}>Create a Free Account</Text>
      </View>
      <View style={styles.View_1_14263}>
        <View style={styles.View_I1_14263_1_14189}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d20e78f-2729-4dd6-80c2-1943a5acb060"
            }}
            style={styles.ImageBackground_I1_14263_1_14190}
          />
        </View>
      </View>
      <View style={styles.View_1_14264}>
        <View style={styles.View_I1_14264_1_14197}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc2a788e-6078-4266-979a-ba81b4677744"
            }}
            style={styles.ImageBackground_I1_14264_1_14198}
          />
        </View>
      </View>
      <View style={styles.View_1_14306}>
        <View style={styles.View_I1_14306_1_14197}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a77f5536-960c-4dee-bebf-5c9f22dadbaf"
            }}
            style={styles.ImageBackground_I1_14306_1_14198}
          />
        </View>
      </View>
      <View style={styles.View_1_14266}>
        <View style={styles.View_1_14267}>
          <View style={styles.View_I1_14267_1_12862} />
          <View style={styles.View_I1_14267_1_12863}>
            <Text style={styles.Text_I1_14267_1_12863}>Create Account</Text>
          </View>
        </View>
        <View style={styles.View_1_14268}>
          <Text style={styles.Text_1_14268}>Already a member? Login Now</Text>
        </View>
        <View style={styles.View_1_14269}>
          <View style={styles.View_1_14270}>
            <Text style={styles.Text_1_14270}>Or Sign In Using </Text>
          </View>
          <View style={styles.View_1_14271}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a5297d3-2203-4bf3-8f49-521da2a1998c"
              }}
              style={styles.ImageBackground_1_14272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17f2108a-31e4-420a-ada9-86f92c5b82cf"
              }}
              style={styles.ImageBackground_1_14273}
            />
          </View>
          <View style={styles.View_1_14278}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d10809b4-0e63-4df4-a1ff-00f33e9d10a0"
              }}
              style={styles.ImageBackground_1_14279}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fcc4750-a9db-47eb-95ea-bf25914fa2e4"
              }}
              style={styles.ImageBackground_1_14280}
            />
          </View>
          <View style={styles.View_1_14281}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81f9e3b9-b6f7-46a6-9af8-91da1566d652"
              }}
              style={styles.ImageBackground_1_14282}
            />
            <View style={styles.View_1_14283}>
              <View style={styles.View_I1_14283_3174_13230}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d54dd854-4523-43bb-bb2d-70d33792ca03"
                  }}
                  style={styles.ImageBackground_I1_14283_3174_12991}
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
  View_1_14235: {
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
  ImageBackground_1_14236: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14237: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_14238: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_1_14239: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_14242: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_14243: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_14244: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_14245: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_1_14246: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14247: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14247: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14248: {
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
  View_I1_14248_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14248_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  View_1_14249: {
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
  ImageBackground_1_14250: {
    width: wp("15%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14256: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_1_14256: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14257: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_1_14257: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14304: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_1_14304: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14302: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_1_14302: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14258: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("53%"),
    justifyContent: "flex-start"
  },
  Text_1_14258: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14259: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("49%"),
    borderColor: "rgba(238, 31, 41, 1)",
    borderWidth: 1
  },
  View_1_14260: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("59%"),
    borderColor: "rgba(33, 29, 31, 1)",
    borderWidth: 1
  },
  View_1_14305: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("69%"),
    borderColor: "rgba(33, 29, 31, 1)",
    borderWidth: 1
  },
  View_1_14303: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("40%"),
    borderColor: "rgba(33, 29, 31, 1)",
    borderWidth: 1
  },
  ImageBackground_1_14261: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("53%")
  },
  View_1_14262: {
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
  Text_1_14262: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14263: {
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
  View_I1_14263_1_14189: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14263_1_14190: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14264: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_14264_1_14197: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14264_1_14198: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14306: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_14306_1_14197: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14306_1_14198: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14266: {
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
  View_1_14267: {
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
  View_I1_14267_1_12862: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_14267_1_12863: {
    flexGrow: 1,
    width: wp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1_14267_1_12863: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14268: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_14268: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14269: {
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
  View_1_14270: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14270: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14271: {
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
  ImageBackground_1_14272: {
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
  ImageBackground_1_14273: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_14278: {
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
  ImageBackground_1_14279: {
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
  ImageBackground_1_14280: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_1_14281: {
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
  ImageBackground_1_14282: {
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
  View_1_14283: {
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
  View_I1_14283_3174_13230: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14283_3174_12991: {
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
