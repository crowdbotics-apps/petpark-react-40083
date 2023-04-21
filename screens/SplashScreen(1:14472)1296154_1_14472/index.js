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
      <View style={styles.View_1_14473}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96be8648-7741-474c-91e3-5ba30a17129d"
          }}
          style={styles.ImageBackground_1_14474}
        />
        <View style={styles.View_1_14475}>
          <View style={styles.View_1_14476}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c352cbeb-5edc-4260-abdd-334d0c640162"
              }}
              style={styles.ImageBackground_1_14477}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f62ba542-632a-4e14-9ef3-3b799b420778"
              }}
              style={styles.ImageBackground_1_14480}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c651ecc-0180-4e76-b84b-6d18b86ca6fd"
              }}
              style={styles.ImageBackground_1_14481}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44ed4fde-346b-4824-822c-6dd18ab1fc05"
              }}
              style={styles.ImageBackground_1_14482}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99ac09b5-52c7-4e1e-9369-bc9a5eee7b72"
            }}
            style={styles.ImageBackground_1_14483}
          />
          <View style={styles.View_1_14484}>
            <View style={styles.View_1_14485}>
              <Text style={styles.Text_1_14485}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_14486}>
        <View style={styles.View_I1_14486_1_51} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08bca19c-f974-47db-9802-8101cbc67509"
          }}
          style={styles.ImageBackground_I1_14486_1_52}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bbb87af-ef90-4024-bd61-5b7e568bed2b"
        }}
        style={styles.ImageBackground_1_14487}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46ccedaa-b3d2-43db-a5d3-a59daebe77f0"
        }}
        style={styles.ImageBackground_1_14493}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51c86e5a-b54b-415d-8dc9-70fcdeaf1d4c"
        }}
        style={styles.ImageBackground_1_14499}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00e7ce42-9feb-4fdf-8572-01a03caf3532"
        }}
        style={styles.ImageBackground_1_14505}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/479112f9-cbc3-440b-86c0-0eda9511532d"
        }}
        style={styles.ImageBackground_1_14511}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae4f51e7-16f7-4874-b82a-68286781d4cc"
        }}
        style={styles.ImageBackground_1_14517}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c163cafb-cb46-4ea0-bbd7-8f3293c16834"
        }}
        style={styles.ImageBackground_1_14523}
      />
      <View style={styles.View_1_14529}>
        <View style={styles.View_1_14530}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dcfcedb-7187-4cc4-9056-01897db51d38"
            }}
            style={styles.ImageBackground_1_14531}
          />
        </View>
        <View style={styles.View_1_14537}>
          <View style={styles.View_1_14538}>
            <Text style={styles.Text_1_14538}>Park</Text>
          </View>
          <View style={styles.View_1_14539}>
            <Text style={styles.Text_1_14539}>Pet</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_1_14473: {
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
  ImageBackground_1_14474: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14475: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_14476: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_1_14477: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_14480: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_14481: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_14482: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_14483: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_1_14484: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14485: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14485: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14486: {
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
  View_I1_14486_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14486_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  ImageBackground_1_14487: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_1_14493: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_1_14499: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_1_14505: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  ImageBackground_1_14511: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  ImageBackground_1_14517: {
    width: wp("15%"),
    height: hp("9%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_1_14523: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_1_14529: {
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
  View_1_14530: {
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
  ImageBackground_1_14531: {
    width: wp("20%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14537: {
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
  View_1_14538: {
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
  Text_1_14538: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.6,
    textTransform: "none"
  },
  View_1_14539: {
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
  Text_1_14539: {
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
