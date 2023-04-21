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
      <View style={styles.View_1_15381}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cd49027-eb25-4bf2-8d4b-c6125f982c2e"
          }}
          style={styles.ImageBackground_1_15382}
        />
        <View style={styles.View_1_15383}>
          <View style={styles.View_1_15384}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c42afa03-5636-411a-b175-8930e82a912d"
              }}
              style={styles.ImageBackground_1_15385}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b7ed094-47db-4574-a5f6-6f76dfb7a0ce"
              }}
              style={styles.ImageBackground_1_15388}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55c39153-4427-44de-ba3b-0bc37aad5ed5"
              }}
              style={styles.ImageBackground_1_15389}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13e92ed5-b685-4907-aeef-88076663e384"
              }}
              style={styles.ImageBackground_1_15390}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d018cd03-0d43-4d23-ab22-6bb3eb54a242"
            }}
            style={styles.ImageBackground_1_15391}
          />
          <View style={styles.View_1_15392}>
            <View style={styles.View_1_15393}>
              <Text style={styles.Text_1_15393}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_15394}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1cf9996-db09-4574-a497-878aa25fa477"
          }}
          style={styles.ImageBackground_1_15395}
        />
      </View>
      <View style={styles.View_1_15401}>
        <View style={styles.View_I1_15401_3125_33470}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec7be649-0a3f-4ea7-ae3b-d98a6936290e"
            }}
            style={styles.ImageBackground_I1_15401_3104_35842}
          />
        </View>
      </View>
      <View style={styles.View_1_15402}>
        <View style={styles.View_I1_15402_3125_33507}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42b9426c-5476-442b-8d8c-0e7903131528"
            }}
            style={styles.ImageBackground_I1_15402_3104_36366}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec827a56-f604-402d-81b7-4525db366c0a"
        }}
        style={styles.ImageBackground_1_15403}
      />
      <View style={styles.View_1_15493}>
        <View style={styles.View_I1_15493_1_14593}>
          <View style={styles.View_I1_15493_1_14591} />
          <View style={styles.View_I1_15493_1_14581}>
            <View style={styles.View_I1_15493_1_14582} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9618f43-d8cc-443b-b5dc-4577b6c9a764"
              }}
              style={styles.ImageBackground_I1_15493_1_14583}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13ff2733-1639-457e-88e8-c25cc11bc207"
          }}
          style={styles.ImageBackground_I1_15493_1_14584}
        />
        <View style={styles.View_I1_15493_1_14585}>
          <View style={styles.View_I1_15493_1_14585_1_596}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd507d18-08b2-4943-b694-7486adab2061"
              }}
              style={styles.ImageBackground_I1_15493_1_14585_1_597}
            />
          </View>
        </View>
        <View style={styles.View_I1_15493_1_14447}>
          <View style={styles.View_I1_15493_1_14447_1_51} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0808abf-0db0-4738-adc2-81e306f93a60"
            }}
            style={styles.ImageBackground_I1_15493_1_14447_1_52}
          />
        </View>
        <View style={styles.View_I1_15493_1_14666}>
          <View style={styles.View_I1_15493_1_15345} />
          <View style={styles.View_I1_15493_1_14572}>
            <Text style={styles.Text_I1_15493_1_14572}>Home</Text>
          </View>
        </View>
        <View style={styles.View_I1_15493_1_14665}>
          <View style={styles.View_I1_15493_1_15346}>
            <View style={styles.View_I1_15493_1_15346_1_14564}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/151ad831-22f7-4732-bf9d-5bd23eba6921"
                }}
                style={styles.ImageBackground_I1_15493_1_15346_1_14565}
              />
            </View>
          </View>
          <View style={styles.View_I1_15493_1_14594}>
            <Text style={styles.Text_I1_15493_1_14594}>Adopt</Text>
          </View>
        </View>
        <View style={styles.View_I1_15493_1_14664}>
          <View style={styles.View_I1_15493_1_14595}>
            <Text style={styles.Text_I1_15493_1_14595}>Market</Text>
          </View>
        </View>
        <View style={styles.View_I1_15493_1_14663}>
          <View style={styles.View_I1_15493_1_15348}>
            <View style={styles.View_I1_15493_1_15348_1_14558}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/886e9d2c-0693-4544-ad41-09dd8bf53492"
                }}
                style={styles.ImageBackground_I1_15493_1_15348_1_14559}
              />
            </View>
          </View>
          <View style={styles.View_I1_15493_1_14596}>
            <Text style={styles.Text_I1_15493_1_14596}>Messages</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_467}>
        <View style={styles.View_5_468}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5547d0b3-393f-4c20-a499-3ada48a503fc"
            }}
            style={styles.ImageBackground_5_469}
          />
        </View>
      </View>
      <View style={styles.View_1_15701}>
        <Text style={styles.Text_1_15701}>Market Place</Text>
      </View>
      <View style={styles.View_1_15702} />
      <View style={styles.View_1_15703}>
        <Text style={styles.Text_1_15703}>Search</Text>
      </View>
      <View style={styles.View_1_15715}>
        <View style={styles.View_1_15704} />
        <View style={styles.View_1_15705}>
          <View style={styles.View_1_15706}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a095fe8-a2d2-4494-a34c-213b6dfa9337"
              }}
              style={styles.ImageBackground_1_15707}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_413}>
        <View style={styles.View_5_371} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/915050ed-3015-4a03-bd8d-30e41fc1536c"
          }}
          style={styles.ImageBackground_5_372}
        />
        <View style={styles.View_5_373}>
          <Text style={styles.Text_5_373}>Hip + Joint for Dogs</Text>
        </View>
        <View style={styles.View_5_374}>
          <Text style={styles.Text_5_374}>Allergy Duo for Dogs</Text>
        </View>
        <View style={styles.View_5_375}>
          <Text style={styles.Text_5_375}>$50</Text>
        </View>
        <View style={styles.View_5_376}>
          <Text style={styles.Text_5_376}>$57.95</Text>
        </View>
        <View style={styles.View_5_377}>
          <Text style={styles.Text_5_377}>$63.90</Text>
        </View>
        <View style={styles.View_5_378}>
          <View style={styles.View_5_379}>
            <Text style={styles.Text_5_379}>5.0</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8033c899-af48-417d-b6ed-5d1229435729"
            }}
            style={styles.ImageBackground_5_380}
          />
        </View>
        <View style={styles.View_5_382}>
          <View style={styles.View_5_383}>
            <Text style={styles.Text_5_383}>5.0</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/397a5d6c-4de7-4df0-a8b0-121837cb16e4"
            }}
            style={styles.ImageBackground_5_384}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66c846fa-56b4-4d3f-b744-e95ef1698ebb"
          }}
          style={styles.ImageBackground_5_386}
        />
        <View style={styles.View_5_393}>
          <View style={styles.View_5_388}>
            <View style={styles.View_5_389}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a629a21-d985-4ad8-a78c-bff1afc37090"
                }}
                style={styles.ImageBackground_5_390}
              />
            </View>
          </View>
          <View style={styles.View_5_399}>
            <View style={styles.View_5_387} />
            <View style={styles.View_5_394}>
              <View style={styles.View_5_395}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0eae3ed-8ab5-4779-9463-0058cc1108c7"
                  }}
                  style={styles.ImageBackground_5_396}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_400}>
          <View style={styles.View_5_401}>
            <View style={styles.View_I5_401_5_389}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec2f0b2a-afd2-4624-b17b-b4a5ac6f6570"
                }}
                style={styles.ImageBackground_I5_401_5_390}
              />
            </View>
          </View>
          <View style={styles.View_5_402}>
            <View style={styles.View_5_403} />
            <View style={styles.View_5_404}>
              <View style={styles.View_I5_404_5_395}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f747ff3-db2d-4084-9c32-df7ff12eb72c"
                  }}
                  style={styles.ImageBackground_I5_404_5_396}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_423}>
        <View style={styles.View_5_424} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dac361e-962f-4a31-a062-3ce9abf4d03e"
          }}
          style={styles.ImageBackground_5_425}
        />
        <View style={styles.View_5_426}>
          <Text style={styles.Text_5_426}>LickiMat Slomo</Text>
        </View>
        <View style={styles.View_5_427}>
          <Text style={styles.Text_5_427}>Ball Suction Tug Toy</Text>
        </View>
        <View style={styles.View_5_428}>
          <Text style={styles.Text_5_428}>$18</Text>
        </View>
        <View style={styles.View_5_429}>
          <Text style={styles.Text_5_429}>$57.95</Text>
        </View>
        <View style={styles.View_5_431}>
          <View style={styles.View_5_432}>
            <Text style={styles.Text_5_432}>5.0</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bea2271-4672-453e-bfd3-ef53ec2ebd85"
            }}
            style={styles.ImageBackground_5_433}
          />
        </View>
        <View style={styles.View_5_435}>
          <View style={styles.View_5_436}>
            <Text style={styles.Text_5_436}>5.0</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83c92c13-b82c-4f7c-aad3-5771ddf1bd95"
            }}
            style={styles.ImageBackground_5_437}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fca9d75c-5037-41b5-8c2d-ad1c5f129082"
          }}
          style={styles.ImageBackground_5_439}
        />
        <View style={styles.View_5_440}>
          <View style={styles.View_5_441}>
            <View style={styles.View_I5_441_5_389}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2576c4ec-10bb-41f5-8944-abd5265a7b23"
                }}
                style={styles.ImageBackground_I5_441_5_390}
              />
            </View>
          </View>
          <View style={styles.View_5_442}>
            <View style={styles.View_5_443} />
            <View style={styles.View_5_444}>
              <View style={styles.View_I5_444_5_395}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3010b42-82fa-4b5e-904d-520457181bd6"
                  }}
                  style={styles.ImageBackground_I5_444_5_396}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_445}>
          <View style={styles.View_5_446}>
            <View style={styles.View_I5_446_5_389}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11f6676d-062c-4976-b484-231551ae1cb0"
                }}
                style={styles.ImageBackground_I5_446_5_390}
              />
            </View>
          </View>
          <View style={styles.View_5_447}>
            <View style={styles.View_5_448} />
            <View style={styles.View_5_449}>
              <View style={styles.View_I5_449_5_395}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/add0a00f-58e2-4125-90f4-b46d6dec7d2f"
                  }}
                  style={styles.ImageBackground_I5_449_5_396}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_474}>
        <View style={styles.View_5_475}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dafd786-57f8-4b81-a556-1b0d66d875ad"
            }}
            style={styles.ImageBackground_5_476}
          />
        </View>
      </View>
      <View style={styles.View_5_761}>
        <View style={styles.View_5_754}>
          <View style={styles.View_5_755}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9a17401-9cc9-4c9a-8252-d9924e9dd5f1"
              }}
              style={styles.ImageBackground_5_756}
            />
          </View>
        </View>
        <View style={styles.View_5_760}>
          <Text style={styles.Text_5_760}>Location</Text>
        </View>
      </View>
      <View style={styles.View_5_762}>
        <Text style={styles.Text_5_762}>43 Products Founds</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_1_15381: {
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
  ImageBackground_1_15382: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15383: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_15384: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_1_15385: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_15388: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_15389: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_15390: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_15391: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_1_15392: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15393: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_15393: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15394: {
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
  ImageBackground_1_15395: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15401: {
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
  View_I1_15401_3125_33470: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15401_3104_35842: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15402: {
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
  View_I1_15402_3125_33507: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15402_3104_36366: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_15403: {
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
  View_1_15493: {
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
  View_I1_15493_1_14593: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_15493_1_14591: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_I1_15493_1_14581: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_15493_1_14582: {
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
  ImageBackground_I1_15493_1_14583: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("-5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I1_15493_1_14584: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%")
  },
  View_I1_15493_1_14585: {
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
  View_I1_15493_1_14585_1_596: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15493_1_14585_1_597: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_15493_1_14447: {
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
  View_I1_15493_1_14447_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15493_1_14447_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  View_I1_15493_1_14666: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%")
  },
  View_I1_15493_1_15345: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_15493_1_14572: {
    width: wp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_15493_1_14572: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_15493_1_14665: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%")
  },
  View_I1_15493_1_15346: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_15493_1_15346_1_14564: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15493_1_15346_1_14565: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_15493_1_14594: {
    width: wp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_15493_1_14594: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_15493_1_14664: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("10%")
  },
  View_I1_15493_1_14595: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_15493_1_14595: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1_15493_1_14663: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("7%")
  },
  View_I1_15493_1_15348: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_15493_1_15348_1_14558: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15493_1_15348_1_14559: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I1_15493_1_14596: {
    width: wp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1_15493_1_14596: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_467: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("117%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_468: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_469: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15701: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_1_15701: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15702: {
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
  View_1_15703: {
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
  Text_1_15703: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15715: {
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
  View_1_15704: {
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
  View_1_15705: {
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
  View_1_15706: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_15707: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_413: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%")
  },
  View_5_371: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_5_372: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_373: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_5_373: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_374: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_5_374: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_375: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_5_375: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_376: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_5_376: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_377: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_5_377: {
    color: "rgba(144, 142, 143, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_378: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_379: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_379: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_380: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_5_382: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_383: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_383: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_384: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_5_386: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_393: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_5_388: {
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
  View_5_389: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_390: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_399: {
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
  View_5_387: {
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
  View_5_394: {
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
  View_5_395: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_396: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_400: {
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
  View_5_401: {
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
  View_I5_401_5_389: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_401_5_390: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_402: {
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
  View_5_403: {
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
  View_5_404: {
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
  View_I5_404_5_395: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_404_5_396: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_423: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("66%")
  },
  View_5_424: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_5_425: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_426: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_5_426: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_427: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_5_427: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_428: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_5_428: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_429: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_5_429: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_431: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_432: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_432: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_433: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_5_435: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_436: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_436: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_437: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_5_439: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_5_440: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%")
  },
  View_5_441: {
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
  View_I5_441_5_389: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_441_5_390: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_442: {
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
  View_5_443: {
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
  View_5_444: {
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
  View_I5_444_5_395: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_444_5_396: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_445: {
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
  View_5_446: {
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
  View_I5_446_5_389: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_446_5_390: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_447: {
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
  View_5_448: {
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
  View_5_449: {
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
  View_I5_449_5_395: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_449_5_396: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_474: {
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
  View_5_475: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_476: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_761: {
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
  View_5_754: {
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
  View_5_755: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_756: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_760: {
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
  Text_5_760: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_762: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_5_762: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
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
