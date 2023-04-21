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
      <View style={styles.View_1_15}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/019b72aa-82bd-4898-b3a4-439b57d7a3af"
          }}
          style={styles.ImageBackground_1_16}
        />
        <View style={styles.View_1_17}>
          <View style={styles.View_1_18}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e253e672-76ef-445f-91f4-b99545cd1fa1"
              }}
              style={styles.ImageBackground_1_19}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bcc8f8f-af73-4f7f-8ee3-6f91708f5de1"
              }}
              style={styles.ImageBackground_1_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/511f31f6-a72b-49c8-ba74-03667ec85973"
              }}
              style={styles.ImageBackground_1_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cebe5fc-804a-42bd-b370-22467a7d4970"
              }}
              style={styles.ImageBackground_1_24}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07f1610a-aa0a-478e-9f13-be46a39bf224"
            }}
            style={styles.ImageBackground_1_25}
          />
          <View style={styles.View_1_26}>
            <View style={styles.View_1_27}>
              <Text style={styles.Text_1_27}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_53}>
        <View style={styles.View_1_51} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b42cb35-cb9c-48d6-a00f-edeb0ac88f71"
          }}
          style={styles.ImageBackground_1_52}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53b15225-4da5-41bf-bac9-db6563dc1ce4"
        }}
        style={styles.ImageBackground_1_10728}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27c740de-5417-4538-8677-98b3606f6608"
        }}
        style={styles.ImageBackground_1_10770}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b9ce18d-6019-4327-b0f1-a7204d53d9d8"
        }}
        style={styles.ImageBackground_1_10782}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9d3b044-ce41-4581-8213-75ae8247bde0"
        }}
        style={styles.ImageBackground_1_10788}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeb139fc-5e41-4858-819b-a2c29cbc76fb"
        }}
        style={styles.ImageBackground_1_10734}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bad99d87-0b5b-468f-a798-5047bc3decb2"
        }}
        style={styles.ImageBackground_1_10764}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f48a0559-7db5-42c3-9404-345650575a03"
        }}
        style={styles.ImageBackground_1_10776}
      />
      <View style={styles.View_1_10953}>
        <View style={styles.View_1_10954}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46fa6f97-a29c-4463-ba22-3ed754d9a460"
            }}
            style={styles.ImageBackground_1_10955}
          />
        </View>
        <View style={styles.View_1_10961}>
          <View style={styles.View_1_10962}>
            <Text style={styles.Text_1_10962}>Park</Text>
          </View>
          <View style={styles.View_1_10963}>
            <Text style={styles.Text_1_10963}>Pet</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_1_15: {
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
  ImageBackground_1_16: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_17: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_18: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_1_19: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_22: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_23: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_24: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_25: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_1_26: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_27: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_53: {
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
  View_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  ImageBackground_1_10728: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_1_10770: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_1_10782: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_1_10788: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  ImageBackground_1_10734: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_1_10764: {
    width: wp("15%"),
    height: hp("9%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_1_10776: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_1_10953: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("48%")
  },
  View_1_10954: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_10955: {
    width: wp("20%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_10961: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_1_10962: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_10962: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_10963: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_10963: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.6,
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
