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
      <View style={styles.View_5_484}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20721717-cf86-4258-bc7b-d536f15ad788"
          }}
          style={styles.ImageBackground_5_485}
        />
        <View style={styles.View_5_486}>
          <View style={styles.View_5_487}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fef103f8-1255-4a6b-8506-16d01a4cfbe6"
              }}
              style={styles.ImageBackground_5_488}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5089fc50-a8e0-4ba4-bddf-8561af5d2bed"
              }}
              style={styles.ImageBackground_5_491}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f303c3ed-1598-48b6-adbb-29381669f02a"
              }}
              style={styles.ImageBackground_5_492}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d16181b2-e6e8-4a3d-9862-f8cc817c9585"
              }}
              style={styles.ImageBackground_5_493}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb01ee41-2d43-42ec-930d-733d99acc1b7"
            }}
            style={styles.ImageBackground_5_494}
          />
          <View style={styles.View_5_495}>
            <View style={styles.View_5_496}>
              <Text style={styles.Text_5_496}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_497}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f12527e-8501-438c-a275-59c9652ce463"
          }}
          style={styles.ImageBackground_5_498}
        />
      </View>
      <View style={styles.View_5_504}>
        <View style={styles.View_I5_504_3125_33470}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d58c1e77-aa9e-4b92-9ab3-e84c2848f9d4"
            }}
            style={styles.ImageBackground_I5_504_3104_35842}
          />
        </View>
      </View>
      <View style={styles.View_5_505}>
        <View style={styles.View_I5_505_3125_33507}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd481a57-bff4-429b-9dca-c17effc90688"
            }}
            style={styles.ImageBackground_I5_505_3104_36366}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ddaa794-f88e-491a-afd8-6df3ee900872"
        }}
        style={styles.ImageBackground_5_506}
      />
      <View style={styles.View_5_509}>
        <Text style={styles.Text_5_509}>Adopt</Text>
      </View>
      <View style={styles.View_5_510} />
      <View style={styles.View_5_511}>
        <Text style={styles.Text_5_511}>Search</Text>
      </View>
      <View style={styles.View_5_512}>
        <View style={styles.View_5_513} />
        <View style={styles.View_5_514}>
          <View style={styles.View_I5_514_1_15706}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d207b27-a47a-4edb-a318-0dd6607d39b7"
              }}
              style={styles.ImageBackground_I5_514_1_15707}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_685}>
        <View style={styles.View_I5_685_1_14593}>
          <View style={styles.View_I5_685_1_14591} />
          <View style={styles.View_I5_685_1_14581}>
            <View style={styles.View_I5_685_1_14582} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28dcd3dc-6411-4757-944f-6c587786ff4c"
              }}
              style={styles.ImageBackground_I5_685_1_14583}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe746eb2-b0ca-43bb-a3c3-191ce0bbc105"
          }}
          style={styles.ImageBackground_I5_685_1_14584}
        />
        <View style={styles.View_I5_685_1_14585}>
          <View style={styles.View_I5_685_1_14585_1_596}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8d22c8f-358b-42cb-b78a-5d9fd319f303"
              }}
              style={styles.ImageBackground_I5_685_1_14585_1_597}
            />
          </View>
        </View>
        <View style={styles.View_I5_685_1_14447}>
          <View style={styles.View_I5_685_1_14447_1_51} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82ac3385-7485-498d-a802-5c25a74fbe24"
            }}
            style={styles.ImageBackground_I5_685_1_14447_1_52}
          />
        </View>
        <View style={styles.View_I5_685_1_14666}>
          <View style={styles.View_I5_685_1_14572}>
            <Text style={styles.Text_I5_685_1_14572}>Home</Text>
          </View>
        </View>
        <View style={styles.View_I5_685_1_14665}>
          <View style={styles.View_I5_685_1_15346} />
          <View style={styles.View_I5_685_1_14594}>
            <Text style={styles.Text_I5_685_1_14594}>Adopt</Text>
          </View>
        </View>
        <View style={styles.View_I5_685_1_14664}>
          <View style={styles.View_I5_685_1_15347}>
            <View style={styles.View_I5_685_1_15347_1_14549}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97300fce-e933-4d1c-8f4e-f4f539337cfa"
                }}
                style={styles.ImageBackground_I5_685_1_15347_1_14550}
              />
            </View>
          </View>
          <View style={styles.View_I5_685_1_14595}>
            <Text style={styles.Text_I5_685_1_14595}>Market</Text>
          </View>
        </View>
        <View style={styles.View_I5_685_1_14663}>
          <View style={styles.View_I5_685_1_15348}>
            <View style={styles.View_I5_685_1_15348_1_14558}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bc73c42-54dd-4b58-afab-c3fbe633cc58"
                }}
                style={styles.ImageBackground_I5_685_1_15348_1_14559}
              />
            </View>
          </View>
          <View style={styles.View_I5_685_1_14596}>
            <Text style={styles.Text_I5_685_1_14596}>Messages</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_738}>
        <View style={styles.View_I5_738_5_475}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f75db5ed-5ce0-40fb-91fd-899c46628b9f"
            }}
            style={styles.ImageBackground_I5_738_5_476}
          />
        </View>
      </View>
      <View style={styles.View_5_753}>
        <View style={styles.View_5_744}>
          <View style={styles.View_5_745}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fe185c1-d4bd-4ee1-832a-ad8d6047ef8e"
              }}
              style={styles.ImageBackground_5_746}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_764}>
        <View style={styles.View_5_765}>
          <View style={styles.View_I5_765_5_755}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4560240-df97-48d1-aee8-8c57640e29a0"
              }}
              style={styles.ImageBackground_I5_765_5_756}
            />
          </View>
        </View>
        <View style={styles.View_5_766}>
          <Text style={styles.Text_5_766}>Location</Text>
        </View>
      </View>
      <View style={styles.View_5_767}>
        <Text style={styles.Text_5_767}>43 Results Found</Text>
      </View>
      <View style={styles.View_5_822}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e66696a-8edb-4c03-b5f9-a58e9d11d522"
          }}
          style={styles.ImageBackground_5_763}
        />
        <View style={styles.View_5_773}>
          <Text style={styles.Text_5_773}>Cateeno</Text>
        </View>
        <View style={styles.View_5_774}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d2b5cd-2216-4615-8935-f42de1de8258"
            }}
            style={styles.ImageBackground_5_775}
          />
          <View style={styles.View_5_776}>
            <View source={{ uri: "null" }} style={styles.View_5_777} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/625336b8-09b7-4a4b-823e-01c629c3e8a5"
              }}
              style={styles.ImageBackground_5_778}
            />
          </View>
        </View>
        <View style={styles.View_5_785}>
          <View style={styles.View_5_786}>
            <View style={styles.View_I5_786_5_755}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51ea3446-4646-42c5-a505-0f5ff1e49f38"
                }}
                style={styles.ImageBackground_I5_786_5_756}
              />
            </View>
          </View>
          <View style={styles.View_5_787}>
            <Text style={styles.Text_5_787}>Marlow Lagoon, Australia</Text>
          </View>
          <View style={styles.View_5_821}>
            <Text style={styles.Text_5_821}>2 das ago</Text>
          </View>
        </View>
        <View style={styles.View_5_793}>
          <View style={styles.View_5_794}>
            <View style={styles.View_I5_794_5_389}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc129dfa-f9b0-4b32-9c29-8bc75a703485"
                }}
                style={styles.ImageBackground_I5_794_5_390}
              />
            </View>
          </View>
          <View style={styles.View_5_795}>
            <View style={styles.View_5_796} />
            <View style={styles.View_5_797}>
              <View style={styles.View_I5_797_5_395}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dee1553a-6ba6-4b14-81ee-49c0d0cd4769"
                  }}
                  style={styles.ImageBackground_I5_797_5_396}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_820}>
          <Text style={styles.Text_5_820}>Adopt Cateeno</Text>
        </View>
        <View style={styles.View_5_860}>
          <Text style={styles.Text_5_860}>Free</Text>
        </View>
      </View>
      <View style={styles.View_5_905}>
        <View style={styles.View_5_898}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b7de28a-23a9-4712-83e8-ddd4b72586f9"
            }}
            style={styles.ImageBackground_5_899}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbcff40b-30aa-40fb-868d-c96b55852f9c"
            }}
            style={styles.ImageBackground_5_900}
          />
        </View>
        <View style={styles.View_5_861}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8ed7d23-e503-4a3b-9d84-59e303fe3dd2"
            }}
            style={styles.ImageBackground_5_862}
          />
          <View style={styles.View_5_874}>
            <View style={styles.View_5_875}>
              <View style={styles.View_I5_875_5_755}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/078dcdae-0720-4f02-80a9-c6cb578cd9eb"
                  }}
                  style={styles.ImageBackground_I5_875_5_756}
                />
              </View>
            </View>
            <View style={styles.View_5_876}>
              <Text style={styles.Text_5_876}>Marlow Lagoon, Australia</Text>
            </View>
            <View style={styles.View_5_877}>
              <Text style={styles.Text_5_877}>2 das ago</Text>
            </View>
          </View>
          <View style={styles.View_5_878}>
            <View style={styles.View_5_879}>
              <View style={styles.View_I5_879_5_389}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ce8ac49-147d-43c8-aad5-3258c2e7dce4"
                  }}
                  style={styles.ImageBackground_I5_879_5_390}
                />
              </View>
            </View>
            <View style={styles.View_5_880}>
              <View style={styles.View_5_881} />
              <View style={styles.View_5_882}>
                <View style={styles.View_I5_882_5_395}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc40b564-cd8e-4110-bad2-53a666661822"
                    }}
                    style={styles.ImageBackground_I5_882_5_396}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_883}>
            <Text style={styles.Text_5_883}>Help</Text>
          </View>
          <View style={styles.View_5_884}>
            <Text style={styles.Text_5_884}>Free</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_863}>
        <Text style={styles.Text_5_863}>Looking For Dog to adopt</Text>
      </View>
      <View style={styles.View_5_1119}>
        <View style={styles.View_5_1120}>
          <View style={styles.View_5_1121}>
            <Text style={styles.Text_5_1121}>5 kg</Text>
          </View>
        </View>
        <View style={styles.View_5_1122}>
          <View style={styles.View_5_1123}>
            <View style={styles.View_5_1124}>
              <Text style={styles.Text_5_1124}>2 years</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_1125}>
        <View style={styles.View_5_1126}>
          <View style={styles.View_5_1127}>
            <Text style={styles.Text_5_1127}>5 kg</Text>
          </View>
        </View>
        <View style={styles.View_5_1128}>
          <View style={styles.View_5_1129}>
            <View style={styles.View_5_1130}>
              <Text style={styles.Text_5_1130}>2 years</Text>
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
  View_5_484: {
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
  ImageBackground_5_485: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_486: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_5_487: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_5_488: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_491: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_492: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_493: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_494: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_5_495: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_496: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_496: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_497: {
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
  ImageBackground_5_498: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_504: {
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
  View_I5_504_3125_33470: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_504_3104_35842: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_505: {
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
  View_I5_505_3125_33507: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_505_3104_36366: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_506: {
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
  View_5_509: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_5_509: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_510: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("12%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_5_511: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_5_511: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_512: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("13%")
  },
  View_5_513: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_514: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_514_1_15706: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_514_1_15707: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_685: {
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
  View_I5_685_1_14593: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_685_1_14591: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_I5_685_1_14581: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_685_1_14582: {
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
  ImageBackground_I5_685_1_14583: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("-5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I5_685_1_14584: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%")
  },
  View_I5_685_1_14585: {
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
  View_I5_685_1_14585_1_596: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_685_1_14585_1_597: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_685_1_14447: {
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
  View_I5_685_1_14447_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_685_1_14447_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  View_I5_685_1_14666: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%")
  },
  View_I5_685_1_14572: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_685_1_14572: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_685_1_14665: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%")
  },
  View_I5_685_1_15346: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_685_1_14594: {
    width: wp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_685_1_14594: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_685_1_14664: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("7%")
  },
  View_I5_685_1_15347: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_685_1_15347_1_14549: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_685_1_15347_1_14550: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_685_1_14595: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_685_1_14595: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_685_1_14663: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("7%")
  },
  View_I5_685_1_15348: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_685_1_15348_1_14558: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_685_1_15348_1_14559: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_685_1_14596: {
    width: wp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_685_1_14596: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_738: {
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
  View_I5_738_5_475: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_738_5_476: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_753: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("117%")
  },
  View_5_744: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_745: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_746: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_764: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("20%")
  },
  View_5_765: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_765_5_755: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_765_5_756: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_766: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_766: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_767: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_5_767: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_822: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%")
  },
  ImageBackground_5_763: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_773: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_5_773: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_774: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("32%")
  },
  ImageBackground_5_775: {
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
  View_5_776: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_777: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_778: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_5_785: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  View_5_786: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_786_5_755: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_786_5_756: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_787: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_5_787: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_821: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_821: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_793: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  View_5_794: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_794_5_389: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_794_5_390: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_795: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_796: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 29, 31, 1)"
  },
  View_5_797: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_797_5_395: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_797_5_396: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_820: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_5_820: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_860: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_5_860: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_905: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("69%")
  },
  View_5_898: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("32%")
  },
  ImageBackground_5_899: {
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
  ImageBackground_5_900: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_861: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_862: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_874: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%")
  },
  View_5_875: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_875_5_755: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_875_5_756: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_876: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_5_876: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_877: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_877: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_878: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  View_5_879: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_879_5_389: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_879_5_390: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_880: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_881: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(33, 29, 31, 1)"
  },
  View_5_882: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_882_5_395: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_882_5_396: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_883: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_5_883: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_884: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_5_884: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_863: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_5_863: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1119: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("60%")
  },
  View_5_1120: {
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.4000000059604645)"
  },
  View_5_1121: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1121: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_5_1122: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1123: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.4000000059604645)"
  },
  View_5_1124: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1124: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_5_1125: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("105%")
  },
  View_5_1126: {
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.4000000059604645)"
  },
  View_5_1127: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1127: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
    textTransform: "none"
  },
  View_5_1128: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1129: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 0.4000000059604645)"
  },
  View_5_1130: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1130: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.04099999964237214,
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
