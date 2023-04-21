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
      <View style={styles.View_5_2606}>
        <View style={styles.View_5_2607}>
          <View style={styles.View_5_2608} />
          <View style={styles.View_5_2609}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b0e60c3-da8f-4473-89d2-720578eae4db"
              }}
              style={styles.ImageBackground_5_2610}
            />
          </View>
        </View>
        <View style={styles.View_5_2613} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22b19e62-6f9d-4c77-a6c1-5d1b30e0bb68"
          }}
          style={styles.ImageBackground_5_2614}
        />
      </View>
      <View style={styles.View_5_2546}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33d774b4-5744-4701-9633-abe8bdc65c70"
          }}
          style={styles.ImageBackground_5_2547}
        />
        <View style={styles.View_5_2548}>
          <View style={styles.View_5_2549}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/339a9760-6253-4321-9343-4459bf6e6075"
              }}
              style={styles.ImageBackground_5_2550}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5775b05-ad32-4ae9-940a-ba6dccaacb35"
              }}
              style={styles.ImageBackground_5_2553}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28ec78b8-00e6-4e65-948e-51bb3779c82c"
              }}
              style={styles.ImageBackground_5_2554}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56a9e00a-b437-4774-8284-1a8bee3ad86f"
              }}
              style={styles.ImageBackground_5_2555}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7f257c2-d7a0-4776-8f6c-a701c16cb0ce"
            }}
            style={styles.ImageBackground_5_2556}
          />
          <View style={styles.View_5_2557}>
            <View style={styles.View_5_2558}>
              <Text style={styles.Text_5_2558}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_2559}>
        <View style={styles.View_I5_2559_1_14189}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08f0208d-7283-4815-b442-865785ae4dab"
            }}
            style={styles.ImageBackground_I5_2559_1_14190}
          />
        </View>
      </View>
      <View style={styles.View_5_2584}>
        <View style={styles.View_I5_2584_1_14655}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eec5b553-7099-448b-ba0d-46df6491d513"
            }}
            style={styles.ImageBackground_I5_2584_1_14656}
          />
        </View>
      </View>
      <View style={styles.View_5_2598}>
        <View style={styles.View_5_2599}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c4eb46c-ed1f-4710-bce4-ed9669ad3bbf"
            }}
            style={styles.ImageBackground_5_2600}
          />
        </View>
      </View>
      <View style={styles.View_5_2616} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f14c893-4682-4cd9-bd78-b2290e6638b0"
        }}
        style={styles.ImageBackground_5_2625}
      />
      <View style={styles.View_5_2629}>
        <Text style={styles.Text_5_2629}>@andrew12</Text>
      </View>
      <View style={styles.View_5_2630}>
        <View style={styles.View_5_2631} />
        <View style={styles.View_5_2632}>
          <Text style={styles.Text_5_2632}>About</Text>
        </View>
      </View>
      <View style={styles.View_5_2633}>
        <Text style={styles.Text_5_2633}>
          I am Giles Posture. I an relocating and don&#39;t have enough space to
          tewp Cateeno with me. Your life will be joyful once you take Cateeno
          into it.
        </Text>
      </View>
      <View style={styles.View_14_795}>
        <Text style={styles.Text_14_795}>22 Following</Text>
      </View>
      <View style={styles.View_14_796}>
        <Text style={styles.Text_14_796}>12 Followers</Text>
      </View>
      <View style={styles.View_14_797} />
      <View style={styles.View_14_798} />
      <View style={styles.View_14_799}>
        <Text style={styles.Text_14_799}>Follow</Text>
      </View>
      <View style={styles.View_14_800}>
        <Text style={styles.Text_14_800}>Message</Text>
      </View>
      <View style={styles.View_14_801}>
        <View style={styles.View_14_802}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c69617b0-1647-4c30-966c-ba7e4e8e3571"
            }}
            style={styles.ImageBackground_14_803}
          />
        </View>
      </View>
      <View style={styles.View_5_2271}>
        <Text style={styles.Text_5_2271}>Pets</Text>
      </View>
      <View style={styles.View_5_2272}>
        <Text style={styles.Text_5_2272}>Images</Text>
      </View>
      <View style={styles.View_5_2273}>
        <Text style={styles.Text_5_2273}>Videos</Text>
      </View>
      <View style={styles.View_14_809}>
        <Text style={styles.Text_14_809}>Check-in</Text>
      </View>
      <View style={styles.View_14_810}>
        <Text style={styles.Text_14_810}>Lisitng</Text>
      </View>
      <View style={styles.View_5_2275} />
      <View style={styles.View_14_1209}>
        <View style={styles.View_14_1104} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3670488-f79b-4a05-8e18-8f2a9ec29eb2"
          }}
          style={styles.ImageBackground_14_1105}
        />
        <View style={styles.View_14_1106}>
          <Text style={styles.Text_14_1106}>Kato</Text>
        </View>
        <View style={styles.View_14_1107}>
          <View style={styles.View_14_1108}>
            <View style={styles.View_14_1109}>
              <Text style={styles.Text_14_1109}>20 kg</Text>
            </View>
          </View>
          <View style={styles.View_14_1110}>
            <View style={styles.View_14_1111}>
              <View style={styles.View_14_1112}>
                <Text style={styles.Text_14_1112}>2 years</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_14_1130}>
          <Text style={styles.Text_14_1130}>01.Feb.2022</Text>
        </View>
        <View style={styles.View_14_1185}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4421b7ac-b8d5-4b66-a694-d2ec015329c0"
            }}
            style={styles.ImageBackground_14_1186}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/969d3cdf-2705-4ab4-8d94-c3951ba847fa"
            }}
            style={styles.ImageBackground_14_1187}
          />
        </View>
      </View>
      <View style={styles.View_14_1228}>
        <View style={styles.View_14_1229} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96ba4431-78b2-49cc-bdf0-16f6ba6bde80"
          }}
          style={styles.ImageBackground_14_1230}
        />
        <View style={styles.View_14_1231}>
          <Text style={styles.Text_14_1231}>Kato</Text>
        </View>
        <View style={styles.View_14_1232}>
          <View style={styles.View_14_1233}>
            <View style={styles.View_14_1234}>
              <Text style={styles.Text_14_1234}>20 kg</Text>
            </View>
          </View>
          <View style={styles.View_14_1235}>
            <View style={styles.View_14_1236}>
              <View style={styles.View_14_1237}>
                <Text style={styles.Text_14_1237}>2 years</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_14_1238}>
          <Text style={styles.Text_14_1238}>01.Feb.2022</Text>
        </View>
        <View style={styles.View_14_1239}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a47cc01b-3ac4-40a1-a7ae-062b6af29135"
            }}
            style={styles.ImageBackground_14_1240}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/937020a8-e967-4f53-89a2-48ba205219ce"
            }}
            style={styles.ImageBackground_14_1241}
          />
        </View>
      </View>
      <View style={styles.View_14_1210}>
        <View style={styles.View_14_1211} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fdaf798-f125-407c-bc28-dba7c1dded46"
          }}
          style={styles.ImageBackground_14_1212}
        />
        <View style={styles.View_14_1213}>
          <Text style={styles.Text_14_1213}>Kato</Text>
        </View>
        <View style={styles.View_14_1214}>
          <View style={styles.View_14_1215}>
            <View style={styles.View_14_1216}>
              <Text style={styles.Text_14_1216}>20 kg</Text>
            </View>
          </View>
          <View style={styles.View_14_1217}>
            <View style={styles.View_14_1218}>
              <View style={styles.View_14_1219}>
                <Text style={styles.Text_14_1219}>2 years</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_14_1220}>
          <Text style={styles.Text_14_1220}>01.Feb.2022</Text>
        </View>
        <View style={styles.View_14_1221}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e965687c-331c-4143-914d-dcf16eee932e"
            }}
            style={styles.ImageBackground_14_1222}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b23f8836-09f9-4def-8449-893db515e677"
            }}
            style={styles.ImageBackground_14_1223}
          />
        </View>
      </View>
      <View style={styles.View_14_1246}>
        <View style={styles.View_14_1247} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3003401-8310-46ed-b522-40f548f90e61"
          }}
          style={styles.ImageBackground_14_1248}
        />
        <View style={styles.View_14_1249}>
          <Text style={styles.Text_14_1249}>Kato</Text>
        </View>
        <View style={styles.View_14_1250}>
          <View style={styles.View_14_1251}>
            <View style={styles.View_14_1252}>
              <Text style={styles.Text_14_1252}>20 kg</Text>
            </View>
          </View>
          <View style={styles.View_14_1253}>
            <View style={styles.View_14_1254}>
              <View style={styles.View_14_1255}>
                <Text style={styles.Text_14_1255}>2 years</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_14_1256}>
          <Text style={styles.Text_14_1256}>01.Feb.2022</Text>
        </View>
        <View style={styles.View_14_1257}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/154380d8-e2cc-4557-8646-3163d1cd9551"
            }}
            style={styles.ImageBackground_14_1258}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15061d1a-2d43-4912-a91c-a5a264f94f5b"
            }}
            style={styles.ImageBackground_14_1259}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_5_2606: {
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
  View_5_2607: {
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
  View_5_2608: {
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
  View_5_2609: {
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
  ImageBackground_5_2610: {
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
  View_5_2613: {
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
  ImageBackground_5_2614: {
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
  View_5_2546: {
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
  ImageBackground_5_2547: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2548: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_5_2549: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_5_2550: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_2553: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_2554: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_2555: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_2556: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_5_2557: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2558: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_2558: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_2559: {
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
  View_I5_2559_1_14189: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_2559_1_14190: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2584: {
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
  View_I5_2584_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_2584_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2598: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_2599: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_2600: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2616: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_5_2625: {
    width: wp("23%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("14%")
  },
  View_5_2629: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_5_2629: {
    color: "rgba(255, 123, 172, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_5_2630: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("36%")
  },
  View_5_2631: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_5_2632: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_5_2632: {
    color: "rgba(27, 27, 27, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_5_2633: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_5_2633: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04509999960660935,
    textTransform: "none"
  },
  View_14_795: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_14_795: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_796: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_14_796: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_797: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("52%")
  },
  View_14_798: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("52%"),
    backgroundColor: "rgba(33, 29, 31, 1)"
  },
  View_14_799: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_14_799: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05739999949932099,
    textTransform: "none"
  },
  View_14_800: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_14_800: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.05739999949932099,
    textTransform: "none"
  },
  View_14_801: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_14_802: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_803: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_2271: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_5_2271: {
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06559999942779542,
    textTransform: "none"
  },
  View_5_2272: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_5_2272: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06559999942779542,
    textTransform: "none"
  },
  View_5_2273: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_5_2273: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06559999942779542,
    textTransform: "none"
  },
  View_14_809: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_14_809: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06559999942779542,
    textTransform: "none"
  },
  View_14_810: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_14_810: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.06559999942779542,
    textTransform: "none"
  },
  View_5_2275: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("65%")
  },
  View_14_1209: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("68%")
  },
  View_14_1104: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_14_1105: {
    width: wp("41%"),
    height: hp("20%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    resizeMode: "cover"
  },
  View_14_1106: {
    width: wp("11%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_14_1106: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1107: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("26%")
  },
  View_14_1108: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.5199999809265137)"
  },
  View_14_1109: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1109: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_1110: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1111: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.5199999809265137)"
  },
  View_14_1112: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1112: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_1130: {
    width: wp("17%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_14_1130: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1185: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("22%")
  },
  ImageBackground_14_1186: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_1187: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1228: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("103%")
  },
  View_14_1229: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_14_1230: {
    width: wp("41%"),
    height: hp("20%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    resizeMode: "cover"
  },
  View_14_1231: {
    width: wp("11%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_14_1231: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1232: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("26%")
  },
  View_14_1233: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.5199999809265137)"
  },
  View_14_1234: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1234: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_1235: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1236: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.5199999809265137)"
  },
  View_14_1237: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1237: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_1238: {
    width: wp("17%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_14_1238: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1239: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("22%")
  },
  ImageBackground_14_1240: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_1241: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1210: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("68%")
  },
  View_14_1211: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_14_1212: {
    width: wp("41%"),
    height: hp("20%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    resizeMode: "cover"
  },
  View_14_1213: {
    width: wp("11%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_14_1213: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1214: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("26%")
  },
  View_14_1215: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.5199999809265137)"
  },
  View_14_1216: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1216: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_1217: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1218: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.5199999809265137)"
  },
  View_14_1219: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1219: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_1220: {
    width: wp("17%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_14_1220: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1221: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("22%")
  },
  ImageBackground_14_1222: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_1223: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_14_1246: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("103%")
  },
  View_14_1247: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_14_1248: {
    width: wp("41%"),
    height: hp("20%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    resizeMode: "cover"
  },
  View_14_1249: {
    width: wp("11%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_14_1249: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1250: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("26%")
  },
  View_14_1251: {
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.5199999809265137)"
  },
  View_14_1252: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1252: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_1253: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_1254: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.5199999809265137)"
  },
  View_14_1255: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1255: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04919999957084656,
    textTransform: "none"
  },
  View_14_1256: {
    width: wp("17%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_14_1256: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1257: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("22%")
  },
  ImageBackground_14_1258: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_14_1259: {
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
