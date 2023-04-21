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
      <View style={styles.View_14_1471}>
        <View style={styles.View_14_1472}>
          <View style={styles.View_14_1473} />
          <View style={styles.View_14_1474}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c6429e9-bddb-49bf-b621-b22868aeb98a"
              }}
              style={styles.ImageBackground_14_1475}
            />
          </View>
        </View>
        <View style={styles.View_14_1478} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/139bab74-2d0a-4523-bcc0-3d71085871b8"
          }}
          style={styles.ImageBackground_14_1479}
        />
      </View>
      <View style={styles.View_14_1480} />
      <View style={styles.View_14_1425} />
      <View style={styles.View_14_1436} />
      <View style={styles.View_14_1430} />
      <View style={styles.View_14_1455} />
      <View style={styles.View_14_1437} />
      <View style={styles.View_14_1442} />
      <View style={styles.View_14_1459} />
      <View style={styles.View_14_1277}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfd24217-b626-45ce-ac64-f175ec0290bd"
          }}
          style={styles.ImageBackground_14_1278}
        />
        <View style={styles.View_14_1279}>
          <View style={styles.View_14_1280}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cf549ce-ec38-4d3f-abb0-4de848ecfdf2"
              }}
              style={styles.ImageBackground_14_1281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83cbfd71-0601-4e1f-a32f-d2ba65168646"
              }}
              style={styles.ImageBackground_14_1284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f572b7a-50e6-49b5-921a-77277bb5d3a3"
              }}
              style={styles.ImageBackground_14_1285}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4e65261-5b70-4f83-a83d-db8d0ddccc2b"
              }}
              style={styles.ImageBackground_14_1286}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b4bb379-6ee9-4a29-a696-2e8116e1eb5e"
            }}
            style={styles.ImageBackground_14_1287}
          />
          <View style={styles.View_14_1288}>
            <View style={styles.View_14_1289}>
              <Text style={styles.Text_14_1289}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_14_1290}>
        <View style={styles.View_I14_1290_1_14189}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98639c9d-3139-4350-a8d2-1a6a4a1c29ff"
            }}
            style={styles.ImageBackground_I14_1290_1_14190}
          />
        </View>
      </View>
      <View style={styles.View_14_1409}>
        <Text style={styles.Text_14_1409}>Edit Profile</Text>
      </View>
      <View style={styles.View_14_1458}>
        <Text style={styles.Text_14_1458}>Update Profile</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8622c51-28b3-4063-b4ae-581e34f53e85"
        }}
        style={styles.ImageBackground_14_1410}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f8f0376-cdf0-4d76-b54e-22ee84fdbcbe"
        }}
        style={styles.ImageBackground_14_1414}
      />
      <View style={styles.View_14_1415}>
        <View style={styles.View_14_1416}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e74ed71-097a-4bbb-9616-2eff32e075d4"
            }}
            style={styles.ImageBackground_14_1417}
          />
        </View>
      </View>
      <View style={styles.View_14_1424}>
        <Text style={styles.Text_14_1424}>Username</Text>
      </View>
      <View style={styles.View_14_1432}>
        <Text style={styles.Text_14_1432}>Email</Text>
      </View>
      <View style={styles.View_14_1428}>
        <Text style={styles.Text_14_1428}>Full Name</Text>
      </View>
      <View style={styles.View_14_1456}>
        <Text style={styles.Text_14_1456}>Bio</Text>
      </View>
      <View style={styles.View_14_1433}>
        <Text style={styles.Text_14_1433}>City</Text>
      </View>
      <View style={styles.View_14_1440}>
        <Text style={styles.Text_14_1440}>Country</Text>
      </View>
      <View style={styles.View_14_1426}>
        <Text style={styles.Text_14_1426}>andrew12</Text>
      </View>
      <View style={styles.View_14_1434}>
        <Text style={styles.Text_14_1434}>andrew@gmail.com</Text>
      </View>
      <View style={styles.View_14_1429}>
        <Text style={styles.Text_14_1429}>Andrew John</Text>
      </View>
      <View style={styles.View_14_1435}>
        <Text style={styles.Text_14_1435}>New South Wales</Text>
      </View>
      <View style={styles.View_14_1441}>
        <Text style={styles.Text_14_1441}>New South Wales</Text>
      </View>
      <View style={styles.View_14_1465}>
        <Text style={styles.Text_14_1465}>Change Password</Text>
      </View>
      <View style={styles.View_14_1445}>
        <View style={styles.View_14_1446}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/330dfc94-b6a1-44b3-8225-25b7862bd1b8"
            }}
            style={styles.ImageBackground_14_1447}
          />
        </View>
      </View>
      <View style={styles.View_14_1450}>
        <View style={styles.View_I14_1450_14_1446}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc829683-12d7-47e5-bd22-b0924c1a850b"
            }}
            style={styles.ImageBackground_I14_1450_14_1447}
          />
        </View>
      </View>
      <View style={styles.View_14_1457}>
        <Text style={styles.Text_14_1457}>
          I am Giles Posture. I an relocating and don&#39;t have enough space to
          tewp Cateeno with me. Your life will be joyful once you take Cateeno
          into it.
        </Text>
      </View>
      <View style={styles.View_14_1460}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a07abba-90af-49e1-a784-2aaf17fb0dbe"
          }}
          style={styles.ImageBackground_14_1461}
        />
      </View>
      <View style={styles.View_14_1466}>
        <View style={styles.View_14_1467}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f972b142-422c-477b-bdb9-d3ef5004d09b"
            }}
            style={styles.ImageBackground_14_1468}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_14_1471: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1472: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1473: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_14_1474: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_1475: {
    width: wp("118%"),
    minWidth: wp("118%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1478: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_14_1479: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1480: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1
  },
  View_14_1425: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("33%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_14_1436: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("72%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_14_1430: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("43%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_14_1455: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("52%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_14_1437: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("81%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_14_1442: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("91%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_14_1459: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("100%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_14_1277: {
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
  ImageBackground_14_1278: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1279: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_14_1280: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_14_1281: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_14_1284: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_14_1285: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_14_1286: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_14_1287: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_14_1288: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1289: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1289: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1290: {
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
  View_I14_1290_1_14189: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I14_1290_1_14190: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1409: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_14_1409: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1458: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_14_1458: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_1410: {
    width: wp("23%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("16%")
  },
  ImageBackground_14_1414: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("25%")
  },
  View_14_1415: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_1416: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_1417: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1424: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_14_1424: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1432: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_14_1432: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1428: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_14_1428: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1456: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_14_1456: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1433: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_14_1433: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1440: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_14_1440: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1426: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_14_1426: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1434: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_14_1434: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1429: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_14_1429: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1435: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_14_1435: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1441: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_14_1441: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1465: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("103%"),
    justifyContent: "flex-start"
  },
  Text_14_1465: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1445: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_1446: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_1447: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1450: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I14_1450_14_1446: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I14_1450_14_1447: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1457: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_14_1457: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05739999949932099,
    textTransform: "none"
  },
  View_14_1460: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_14_1461: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1466: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("103%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_1467: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_1468: {
    width: wp("6%"),
    height: hp("3%"),
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
