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
      <View style={styles.View_5_1207} />
      <View style={styles.View_5_910}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/513ce941-afef-4867-ab6d-0ebca6f005da"
          }}
          style={styles.ImageBackground_5_911}
        />
        <View style={styles.View_5_912}>
          <View style={styles.View_5_913}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/676b728f-870b-4064-ae02-d2a465acdbc9"
              }}
              style={styles.ImageBackground_5_914}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f4f2286-5ae2-4225-8eb2-032374fb66bb"
              }}
              style={styles.ImageBackground_5_917}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/282d992b-569d-45e4-bb97-0fb4a039451c"
              }}
              style={styles.ImageBackground_5_918}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a53b7659-b445-4b6b-a8b6-56dd0d600726"
              }}
              style={styles.ImageBackground_5_919}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b6dc1e4-279e-47db-ad29-b2a8038a655c"
            }}
            style={styles.ImageBackground_5_920}
          />
          <View style={styles.View_5_921}>
            <View style={styles.View_5_922}>
              <Text style={styles.Text_5_922}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_923}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a4f9c22-1c9e-44c5-a197-d7b5f1ec45b7"
          }}
          style={styles.ImageBackground_5_924}
        />
      </View>
      <View style={styles.View_5_930}>
        <View style={styles.View_I5_930_3125_33470}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e674e164-d1b3-4bf1-b4ce-a25539b10df1"
            }}
            style={styles.ImageBackground_I5_930_3104_35842}
          />
        </View>
      </View>
      <View style={styles.View_5_931}>
        <View style={styles.View_I5_931_3125_33507}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91bc97bb-32c4-4165-9a62-e540125a2b74"
            }}
            style={styles.ImageBackground_I5_931_3104_36366}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5efb3fc1-29df-4657-83f4-5e1e4b99bd07"
        }}
        style={styles.ImageBackground_5_932}
      />
      <View style={styles.View_5_933}>
        <Text style={styles.Text_5_933}>Messages</Text>
      </View>
      <View style={styles.View_5_939}>
        <View style={styles.View_I5_939_1_14593}>
          <View style={styles.View_I5_939_1_14591} />
          <View style={styles.View_I5_939_1_14581}>
            <View style={styles.View_I5_939_1_14582} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1965cc13-0389-406e-9d73-0c3c5ca67c53"
              }}
              style={styles.ImageBackground_I5_939_1_14583}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b42ab17-0c9a-418e-a1ee-6b8b03ed8e94"
          }}
          style={styles.ImageBackground_I5_939_1_14584}
        />
        <View style={styles.View_I5_939_1_14585}>
          <View style={styles.View_I5_939_1_14585_1_596}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebb73813-9bca-4271-9612-dc1f1bdeec71"
              }}
              style={styles.ImageBackground_I5_939_1_14585_1_597}
            />
          </View>
        </View>
        <View style={styles.View_I5_939_1_14447}>
          <View style={styles.View_I5_939_1_14447_1_51} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7164a550-76eb-4bd1-87df-53d9a4b4c0d2"
            }}
            style={styles.ImageBackground_I5_939_1_14447_1_52}
          />
        </View>
        <View style={styles.View_I5_939_1_14666}>
          <View style={styles.View_I5_939_1_14572}>
            <Text style={styles.Text_I5_939_1_14572}>Home</Text>
          </View>
        </View>
        <View style={styles.View_I5_939_1_14665}>
          <View style={styles.View_I5_939_1_15346} />
          <View style={styles.View_I5_939_1_14594}>
            <Text style={styles.Text_I5_939_1_14594}>Adopt</Text>
          </View>
        </View>
        <View style={styles.View_I5_939_1_14664}>
          <View style={styles.View_I5_939_1_15347}>
            <View style={styles.View_I5_939_1_15347_1_14549}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/796f86de-5a98-44ab-9bf1-fa0c9712744b"
                }}
                style={styles.ImageBackground_I5_939_1_15347_1_14550}
              />
            </View>
          </View>
          <View style={styles.View_I5_939_1_14595}>
            <Text style={styles.Text_I5_939_1_14595}>Market</Text>
          </View>
        </View>
        <View style={styles.View_I5_939_1_14663}>
          <View style={styles.View_I5_939_1_14596}>
            <Text style={styles.Text_I5_939_1_14596}>Messages</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_940}>
        <View style={styles.View_I5_940_5_475}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa030505-9b27-44b6-bb81-4225d97f79b4"
            }}
            style={styles.ImageBackground_I5_940_5_476}
          />
        </View>
      </View>
      <View style={styles.View_5_1105}>
        <View style={styles.View_I5_1105_1_14564}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d9abfd4-f32b-4b38-a9d6-948f5230aa06"
            }}
            style={styles.ImageBackground_I5_1105_1_14565}
          />
        </View>
      </View>
      <View style={styles.View_5_1114}>
        <View style={styles.View_5_1115}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8de616e-a6e4-4035-9120-8e124431a723"
            }}
            style={styles.ImageBackground_5_1116}
          />
        </View>
      </View>
      <View style={styles.View_5_1208}>
        <View style={styles.View_5_1180}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b997353-cc97-4998-bfde-d4c9c33ec087"
            }}
            style={styles.ImageBackground_5_1181}
          />
          <View style={styles.View_5_1182}>
            <View style={styles.View_5_1183}>
              <Text style={styles.Text_5_1183}>Black Marvin</Text>
            </View>
            <View style={styles.View_5_1184}>
              <Text style={styles.Text_5_1184}>😜 😜 😜 😜</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1185}>
          <Text style={styles.Text_5_1185}>01:30</Text>
        </View>
        <View style={styles.View_5_1194}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36b80db0-65a9-4879-80fb-b86c5b0f7fd5"
            }}
            style={styles.ImageBackground_5_1195}
          />
          <View style={styles.View_5_1196}>
            <View style={styles.View_5_1197}>
              <Text style={styles.Text_5_1197}>Cooper Kristin</Text>
            </View>
            <View style={styles.View_5_1198}>
              <Text style={styles.Text_5_1198}>I will adopt your pet.</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1199}>
          <Text style={styles.Text_5_1199}>17:25</Text>
        </View>
        <View style={styles.View_5_1201}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/624e6785-7476-4a72-9417-5463e94fe523"
            }}
            style={styles.ImageBackground_5_1202}
          />
          <View style={styles.View_5_1203}>
            <View style={styles.View_5_1204}>
              <Text style={styles.Text_5_1204}>Nguyen Shane</Text>
            </View>
            <View style={styles.View_5_1205}>
              <Text style={styles.Text_5_1205}>I’m gonna let you know ...</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1206}>
          <Text style={styles.Text_5_1206}>17:28</Text>
        </View>
        <View style={styles.View_5_1187}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa133907-f07a-438b-ac59-100937bc59d7"
            }}
            style={styles.ImageBackground_5_1188}
          />
          <View style={styles.View_5_1189}>
            <View style={styles.View_5_1190}>
              <Text style={styles.Text_5_1190}>Nguyen Shane</Text>
            </View>
            <View style={styles.View_5_1191}>
              <Text style={styles.Text_5_1191}>Thank you 🤗</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1192}>
          <Text style={styles.Text_5_1192}>Yesterday</Text>
        </View>
        <View style={styles.View_5_1153} />
        <View style={styles.View_5_1154}>
          <Text style={styles.Text_5_1154}>2</Text>
        </View>
      </View>
      <View style={styles.View_5_1220}>
        <View style={styles.View_I5_1220_5_1210}>
          <View style={styles.View_I5_1220_5_1210_5_1214}>
            <View style={styles.View_I5_1220_5_1210_5_1214_5_1132}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01dca254-bc8e-41f2-84f3-1d774733fdd2"
                }}
                style={styles.ImageBackground_I5_1220_5_1210_5_1214_5_1133}
              />
              <View style={styles.View_I5_1220_5_1210_5_1214_5_1134}>
                <View style={styles.View_I5_1220_5_1210_5_1214_5_1135}>
                  <Text style={styles.Text_I5_1220_5_1210_5_1214_5_1135}>
                    Henry Arthur
                  </Text>
                </View>
                <View style={styles.View_I5_1220_5_1210_5_1214_5_1136}>
                  <Text style={styles.Text_I5_1220_5_1210_5_1214_5_1136}>
                    A goal without a plan is ...
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I5_1220_5_1210_5_1214_5_1137}>
              <Text style={styles.Text_I5_1220_5_1210_5_1214_5_1137}>
                17:28
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I5_1220_5_1211}>
          <View style={styles.View_I5_1220_5_1212}>
            <Text style={styles.Text_I5_1220_5_1212}>Delete</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_5_1207: {
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
  View_5_910: {
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
  ImageBackground_5_911: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_912: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_5_913: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_5_914: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_917: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_918: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_919: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_920: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_5_921: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_922: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_922: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_923: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_924: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_930: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_930_3125_33470: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_930_3104_35842: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_931: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_931_3125_33507: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_931_3104_36366: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_932: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("8%")
  },
  View_5_933: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_5_933: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_939: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_939_1_14593: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_939_1_14591: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_I5_939_1_14581: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_939_1_14582: {
    width: wp("103%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1
  },
  ImageBackground_I5_939_1_14583: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("-5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I5_939_1_14584: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%")
  },
  View_I5_939_1_14585: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_939_1_14585_1_596: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_939_1_14585_1_597: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_939_1_14447: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_939_1_14447_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_939_1_14447_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  View_I5_939_1_14666: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%")
  },
  View_I5_939_1_14572: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_939_1_14572: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_939_1_14665: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%")
  },
  View_I5_939_1_15346: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_939_1_14594: {
    width: wp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_939_1_14594: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_939_1_14664: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("7%")
  },
  View_I5_939_1_15347: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_939_1_15347_1_14549: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_939_1_15347_1_14550: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_939_1_14595: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_939_1_14595: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_939_1_14663: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("10%")
  },
  View_I5_939_1_14596: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_939_1_14596: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_940: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_940_5_475: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_940_5_476: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1105: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1105_1_14564: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1105_1_14565: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1114: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1115: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_1116: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1208: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%")
  },
  View_5_1180: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_1181: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1182: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1183: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_1183: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1184: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_5_1184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1185: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1185: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1194: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_1195: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1196: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1197: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_1197: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1198: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_5_1198: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1199: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_5_1199: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1201: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_1202: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1203: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1204: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_1204: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1205: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_5_1205: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1206: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_5_1206: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1187: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_1188: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1189: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1190: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_1190: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1191: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_5_1191: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1192: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_5_1192: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1153: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("13%"),
    backgroundColor: "rgba(238, 31, 41, 1)"
  },
  View_5_1154: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_5_1154: {
    color: "rgba(245, 245, 248, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1220: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1220_5_1210: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1220_5_1210_5_1214: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1220_5_1210_5_1214_5_1132: {
    flexGrow: 1,
    width: wp("54%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I5_1220_5_1210_5_1214_5_1133: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1220_5_1210_5_1214_5_1134: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1220_5_1210_5_1214_5_1135: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_1220_5_1210_5_1214_5_1135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1220_5_1210_5_1214_5_1136: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I5_1220_5_1210_5_1214_5_1136: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1220_5_1210_5_1214_5_1137: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_1220_5_1210_5_1214_5_1137: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1220_5_1211: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 31, 41, 1)"
  },
  View_I5_1220_5_1212: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1220_5_1212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
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
