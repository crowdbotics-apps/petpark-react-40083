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
      <View style={styles.View_5_1248}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ae9f610-4eae-4765-904f-92a22ff5d3e5"
          }}
          style={styles.ImageBackground_5_1249}
        />
        <View style={styles.View_5_1250}>
          <View style={styles.View_5_1251}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8f3a4c3-c25b-44b3-a852-571a6d8d4b27"
              }}
              style={styles.ImageBackground_5_1252}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49378e80-6b4c-43c3-82e5-238499d2c484"
              }}
              style={styles.ImageBackground_5_1255}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35432c31-8fa2-4bd5-9130-1d0ca2ee842d"
              }}
              style={styles.ImageBackground_5_1256}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61a1109b-7bef-4686-98e3-f0863f1ef380"
              }}
              style={styles.ImageBackground_5_1257}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d39ec9bd-1f95-46c3-b6af-e71e7d25d157"
            }}
            style={styles.ImageBackground_5_1258}
          />
          <View style={styles.View_5_1259}>
            <View style={styles.View_5_1260}>
              <Text style={styles.Text_5_1260}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_1261}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b467dd7-bd44-4665-88fa-7edbda6822f0"
          }}
          style={styles.ImageBackground_5_1262}
        />
      </View>
      <View style={styles.View_5_1268}>
        <View style={styles.View_I5_1268_3125_33470}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/128980df-2984-442e-90f0-3475c2e2704a"
            }}
            style={styles.ImageBackground_I5_1268_3104_35842}
          />
        </View>
      </View>
      <View style={styles.View_5_1269}>
        <View style={styles.View_I5_1269_1_15684}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7e6f44a-3fbb-4df9-96f3-2f6b153e4b23"
            }}
            style={styles.ImageBackground_I5_1269_1_15685}
          />
        </View>
      </View>
      <View style={styles.View_5_1270}>
        <View style={styles.View_I5_1270_3125_33507}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e41619c1-4c6f-4fd3-9926-7dde1cd0eaa7"
            }}
            style={styles.ImageBackground_I5_1270_3104_36366}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beca3327-ed95-4a7e-91b0-9ab7d75ddca9"
        }}
        style={styles.ImageBackground_5_1271}
      />
      <View style={styles.View_5_1362}>
        <Text style={styles.Text_5_1362}>Home</Text>
      </View>
      <View style={styles.View_5_1895}>
        <View style={styles.View_5_1272}>
          <View style={styles.View_5_1273}>
            <View style={styles.View_5_1274} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4c55c0f-d382-4cdf-9f86-e4362f874d65"
              }}
              style={styles.ImageBackground_5_1275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ae8373e-331b-469e-8385-c86afe544d0a"
              }}
              style={styles.ImageBackground_5_1276}
            />
            <View style={styles.View_5_1277}>
              <Text style={styles.Text_5_1277}>Ahmed</Text>
            </View>
            <View style={styles.View_5_1278}>
              <Text style={styles.Text_5_1278}>is at New South Wales</Text>
            </View>
            <View style={styles.View_5_1279}>
              <View style={styles.View_I5_1279_1_14655}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd701f14-461b-426e-9cb2-3c6223f267fd"
                  }}
                  style={styles.ImageBackground_I5_1279_1_14656}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/888ddb3f-2661-4bc2-8db5-16e82082c246"
              }}
              style={styles.ImageBackground_5_1280}
            />
            <View style={styles.View_5_1281}>
              <View style={styles.View_5_1282}>
                <View style={styles.View_I5_1282_1_14675}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80310f7d-f165-44bf-9f71-ba4a695d3249"
                    }}
                    style={styles.ImageBackground_I5_1282_1_14676}
                  />
                </View>
              </View>
              <View style={styles.View_5_1283}>
                <Text style={styles.Text_5_1283}>1.1k</Text>
              </View>
            </View>
            <View style={styles.View_5_1284}>
              <View style={styles.View_5_1285}>
                <Text style={styles.Text_5_1285}>50</Text>
              </View>
              <View style={styles.View_5_1286}>
                <View style={styles.View_I5_1286_1_14681}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93f34920-0b4f-45de-be2e-22fed02d331a"
                    }}
                    style={styles.ImageBackground_I5_1286_1_14682}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_5_1287}>
              <View style={styles.View_I5_1287_1_14693}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f77ae6c-4159-4525-9375-7130ff13659a"
                  }}
                  style={styles.ImageBackground_I5_1287_1_14694}
                />
              </View>
            </View>
            <View style={styles.View_5_1288}>
              <Text style={styles.Text_5_1288}>
                Lorem ipsum dolor sit amet consectetur. Varius convallis pretium
                felis elementum 😊{" "}
              </Text>
            </View>
            <View style={styles.View_5_1289}>
              <Text style={styles.Text_5_1289}>2 days ago</Text>
            </View>
            <View style={styles.View_5_1290}>
              <View style={styles.View_I5_1290_1_14669}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0aea7e38-46d3-45b6-9d2f-571e93f8be22"
                  }}
                  style={styles.ImageBackground_I5_1290_1_14670}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_5_1291}>
            <View style={styles.View_5_1292}>
              <View style={styles.View_5_1293} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f5bb787-fbda-4465-a772-af282d78d7c4"
                }}
                style={styles.ImageBackground_5_1294}
              />
              <View style={styles.View_5_1295}>
                <Text style={styles.Text_5_1295}>Ayesha</Text>
              </View>
              <View style={styles.View_5_1296}>
                <View style={styles.View_I5_1296_1_14655}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d082a16f-ff4e-41eb-8580-7a608a11fbd6"
                    }}
                    style={styles.ImageBackground_I5_1296_1_14656}
                  />
                </View>
              </View>
              <View style={styles.View_5_1297}>
                <View style={styles.View_5_1298}>
                  <View style={styles.View_5_1299}>
                    <View style={styles.View_I5_1299_1_14675}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf63b9cd-d6e8-4ad1-bc71-b94ac9a06872"
                        }}
                        style={styles.ImageBackground_I5_1299_1_14676}
                      />
                    </View>
                  </View>
                  <View style={styles.View_5_1300}>
                    <Text style={styles.Text_5_1300}>1.1k</Text>
                  </View>
                </View>
                <View style={styles.View_5_1301}>
                  <View style={styles.View_5_1302}>
                    <Text style={styles.Text_5_1302}>50</Text>
                  </View>
                  <View style={styles.View_5_1303}>
                    <View style={styles.View_I5_1303_1_14681}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/809728f1-bad8-48ec-a5be-8af231d44cb7"
                        }}
                        style={styles.ImageBackground_I5_1303_1_14682}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_5_1304}>
                  <View style={styles.View_I5_1304_1_14693}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52eee879-afdd-44bf-9a4d-822b37dd57d9"
                      }}
                      style={styles.ImageBackground_I5_1304_1_14694}
                    />
                  </View>
                </View>
                <View style={styles.View_5_1305}>
                  <View style={styles.View_I5_1305_1_14669}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92531049-497f-4277-9114-676f634f4588"
                      }}
                      style={styles.ImageBackground_I5_1305_1_14670}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_5_1306}>
                <Text style={styles.Text_5_1306}>
                  Checkin at Marlow Lagoon Pet Park
                </Text>
              </View>
              <View style={styles.View_5_1307}>
                <Text style={styles.Text_5_1307}>2 days ago</Text>
              </View>
              <View style={styles.View_5_1308} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbf01ecd-f640-4d63-90d2-5c9e013a0a1e"
                }}
                style={styles.ImageBackground_5_1309}
              />
              <View style={styles.View_5_1312}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ba0da41-d935-46af-b13d-465326928104"
                  }}
                  style={styles.ImageBackground_5_1313}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e0bff48-c550-49dc-bb5e-66e0319189d1"
                  }}
                  style={styles.ImageBackground_5_1314}
                />
                <View style={styles.View_5_1315}>
                  <View style={styles.View_I5_1315_1_14986}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/088becda-ba8a-4d14-8a04-cbfbd7709c84"
                      }}
                      style={styles.ImageBackground_I5_1315_1_14987}
                    />
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/730071db-4fe9-4816-a041-88a6fe9a4ec3"
                }}
                style={styles.ImageBackground_5_1316}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5fcbdc9-3be2-43ea-9eed-6d16f03dc71f"
                }}
                style={styles.ImageBackground_5_1317}
              />
              <View style={styles.View_5_1318} />
              <View style={styles.View_5_1319}>
                <View style={styles.View_I5_1319_1_15012}>
                  <View style={styles.View_I5_1319_1_15013}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30d3e060-d5cf-4d08-9349-0326f6d585c8"
                      }}
                      style={styles.ImageBackground_I5_1319_1_15014}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/556cc21b-1196-4557-82d5-fca23a8c032a"
                      }}
                      style={styles.ImageBackground_I5_1319_1_15016}
                    />
                    <View
                      source={{ uri: "null" }}
                      style={styles.View_I5_1319_1_15017}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_5_1320}>
                <Text style={styles.Text_5_1320}>
                  Mums Mutt &amp; Moggie Minding, 36 Elrundie Ave, Marlow Lagoon
                  NT 0830, Australia
                </Text>
              </View>
              <View style={styles.View_5_1321}>
                <View style={styles.View_I5_1321_1_15019}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/234c96ac-48de-4409-9467-deb7b7832482"
                    }}
                    style={styles.ImageBackground_I5_1321_1_15020}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_1322}>
            <View style={styles.View_5_1323} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b01a62fb-dea9-4e0f-b3ad-794f620de42a"
              }}
              style={styles.ImageBackground_5_1324}
            />
            <View style={styles.View_5_1325}>
              <Text style={styles.Text_5_1325}>Ahmed</Text>
            </View>
            <View style={styles.View_5_1326}>
              <View style={styles.View_I5_1326_1_14655}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/261f3952-8447-4846-b694-eb38a17af3b5"
                  }}
                  style={styles.ImageBackground_I5_1326_1_14656}
                />
              </View>
            </View>
            <View style={styles.View_5_1327}>
              <View style={styles.View_5_1328}>
                <View style={styles.View_I5_1328_1_14675}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b462a664-fd4e-4de5-a127-b543b12977ac"
                    }}
                    style={styles.ImageBackground_I5_1328_1_14676}
                  />
                </View>
              </View>
              <View style={styles.View_5_1329}>
                <Text style={styles.Text_5_1329}>1.1k</Text>
              </View>
            </View>
            <View style={styles.View_5_1330}>
              <View style={styles.View_5_1331}>
                <Text style={styles.Text_5_1331}>50</Text>
              </View>
              <View style={styles.View_5_1332}>
                <View style={styles.View_I5_1332_1_14681}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b4be687-422e-4055-828e-bdd4b9afe989"
                    }}
                    style={styles.ImageBackground_I5_1332_1_14682}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_5_1333}>
              <View style={styles.View_I5_1333_1_14693}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b681f86e-d017-4248-8b56-391d6625e619"
                  }}
                  style={styles.ImageBackground_I5_1333_1_14694}
                />
              </View>
            </View>
            <View style={styles.View_5_1334}>
              <Text style={styles.Text_5_1334}>
                Lorem ipsum dolor sit amet consectetur. Varius convallis pretium
                felis elementum 😊{" "}
              </Text>
            </View>
            <View style={styles.View_5_1335}>
              <View style={styles.View_I5_1335_1_14669}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a75aa91-e077-491b-a10d-b729539189ac"
                  }}
                  style={styles.ImageBackground_I5_1335_1_14670}
                />
              </View>
            </View>
            <View style={styles.View_5_1336} />
            <View style={styles.View_5_1337}>
              <Text style={styles.Text_5_1337}>is at New South Wales</Text>
            </View>
            <View style={styles.View_5_1338}>
              <Text style={styles.Text_5_1338}>is at New South Wales</Text>
            </View>
            <View style={styles.View_5_1339}>
              <View style={styles.View_I5_1339_1_14669}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12967730-99be-4b46-b8e6-d2788089c387"
                  }}
                  style={styles.ImageBackground_I5_1339_1_14670}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46ebc19a-f435-44ad-8db0-f76a60646bde"
              }}
              style={styles.ImageBackground_5_1340}
            />
            <View style={styles.View_5_1341}>
              <Text style={styles.Text_5_1341}>Julia</Text>
            </View>
            <View style={styles.View_5_1342}>
              <Text style={styles.Text_5_1342}>2 days ago</Text>
            </View>
            <View style={styles.View_5_1343}>
              <Text style={styles.Text_5_1343}>2 days ago</Text>
            </View>
            <View style={styles.View_5_1344}>
              <View style={styles.View_I5_1344_1_14655}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0669fd7e-4333-4ce5-900a-6aadd11d2b0e"
                  }}
                  style={styles.ImageBackground_I5_1344_1_14656}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/864ffe65-61ab-483c-9f17-e2c1cfdc51fb"
              }}
              style={styles.ImageBackground_5_1345}
            />
            <View style={styles.View_5_1346}>
              <View style={styles.View_5_1347}>
                <View style={styles.View_I5_1347_1_14675}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1943d207-0a0e-48fa-a771-b11fb34114a2"
                    }}
                    style={styles.ImageBackground_I5_1347_1_14676}
                  />
                </View>
              </View>
              <View style={styles.View_5_1348}>
                <Text style={styles.Text_5_1348}>1.1k</Text>
              </View>
            </View>
            <View style={styles.View_5_1349}>
              <View style={styles.View_5_1350}>
                <Text style={styles.Text_5_1350}>50</Text>
              </View>
              <View style={styles.View_5_1351}>
                <View style={styles.View_I5_1351_1_14681}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a04c0037-937e-475d-8ff3-6a23fd2d49f1"
                    }}
                    style={styles.ImageBackground_I5_1351_1_14682}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_5_1352}>
              <View style={styles.View_I5_1352_1_14693}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c9435c4-2358-41cc-a646-c2b7a1352e3a"
                  }}
                  style={styles.ImageBackground_I5_1352_1_14694}
                />
              </View>
            </View>
            <View style={styles.View_5_1353}>
              <Text style={styles.Text_5_1353}>
                Lorem ipsum dolor sit amet consectetur. Varius convallis pretium
                felis elementum 😊{" "}
              </Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ab98c12-9ef6-49a9-a89e-b68cc4b049b5"
              }}
              style={styles.ImageBackground_5_1354}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb448482-d02a-4f29-8348-a97df12d5709"
              }}
              style={styles.ImageBackground_5_1357}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/557664c7-06ed-4ab8-b8b1-41cdb99e758d"
              }}
              style={styles.ImageBackground_5_1358}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c5dee80-e102-4f28-8c7a-d0cc87cfc75b"
              }}
              style={styles.ImageBackground_5_1359}
            />
            <View style={styles.View_5_1360}>
              <Text style={styles.Text_5_1360}>2+</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1361}>
          <View style={styles.View_I5_1361_1_14593}>
            <View style={styles.View_I5_1361_1_14591} />
            <View style={styles.View_I5_1361_1_14581}>
              <View style={styles.View_I5_1361_1_14582} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53dd0150-2cd7-4c9b-b6a9-5584cc1fb08d"
                }}
                style={styles.ImageBackground_I5_1361_1_14583}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62676b34-4802-43e1-ba0f-046ca159a357"
            }}
            style={styles.ImageBackground_I5_1361_1_14584}
          />
          <View style={styles.View_I5_1361_1_14585}>
            <View style={styles.View_I5_1361_1_14585_1_596}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79766d83-94ac-4747-923a-f67c3b0e7ca3"
                }}
                style={styles.ImageBackground_I5_1361_1_14585_1_597}
              />
            </View>
          </View>
          <View style={styles.View_I5_1361_1_14447}>
            <View style={styles.View_I5_1361_1_14447_1_51} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cc4251c-7986-4549-8e13-f494963a48b9"
              }}
              style={styles.ImageBackground_I5_1361_1_14447_1_52}
            />
          </View>
          <View style={styles.View_I5_1361_1_14666}>
            <View style={styles.View_I5_1361_1_15345}>
              <View style={styles.View_I5_1361_1_15345_1_14544}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e19a30df-902b-453a-b792-605fa9abc19a"
                  }}
                  style={styles.ImageBackground_I5_1361_1_15345_1_14545}
                />
              </View>
            </View>
            <View style={styles.View_I5_1361_1_14572}>
              <Text style={styles.Text_I5_1361_1_14572}>Home</Text>
            </View>
          </View>
          <View style={styles.View_I5_1361_1_14665}>
            <View style={styles.View_I5_1361_1_15346}>
              <View style={styles.View_I5_1361_1_15346_1_14564}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8e126e7-46fa-4814-b6a8-4b371097cd2c"
                  }}
                  style={styles.ImageBackground_I5_1361_1_15346_1_14565}
                />
              </View>
            </View>
            <View style={styles.View_I5_1361_1_14594}>
              <Text style={styles.Text_I5_1361_1_14594}>Adopt</Text>
            </View>
          </View>
          <View style={styles.View_I5_1361_1_14664}>
            <View style={styles.View_I5_1361_1_15347}>
              <View style={styles.View_I5_1361_1_15347_1_14549}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f90cfb5-23e8-4a0e-b39b-0089b01562f0"
                  }}
                  style={styles.ImageBackground_I5_1361_1_15347_1_14550}
                />
              </View>
            </View>
            <View style={styles.View_I5_1361_1_14595}>
              <Text style={styles.Text_I5_1361_1_14595}>Market</Text>
            </View>
          </View>
          <View style={styles.View_I5_1361_1_14663}>
            <View style={styles.View_I5_1361_1_15348}>
              <View style={styles.View_I5_1361_1_15348_1_14558}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c541100a-3868-4b7a-90b1-6404d50a82b0"
                  }}
                  style={styles.ImageBackground_I5_1361_1_15348_1_14559}
                />
              </View>
            </View>
            <View style={styles.View_I5_1361_1_14596}>
              <Text style={styles.Text_I5_1361_1_14596}>Messages</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1559} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8bded15-e6cf-4a86-afef-7a10bd808849"
        }}
        style={styles.ImageBackground_5_1888}
      />
      <View style={styles.View_5_1889}>
        <View style={styles.View_I5_1889_1_596}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/665b3a6a-b3ec-43a9-9c9c-9bd3147dba21"
            }}
            style={styles.ImageBackground_I5_1889_1_597}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8028772-5ebf-4699-b274-9c8bd8a87ed8"
        }}
        style={styles.ImageBackground_5_1896}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86e8eab8-c37c-4843-b071-c864e61090f5"
        }}
        style={styles.ImageBackground_5_1897}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84f106eb-e83f-4133-8d3c-d016e491b90b"
        }}
        style={styles.ImageBackground_5_1898}
      />
      <View style={styles.View_5_1899}>
        <View style={styles.View_5_1900}>
          <View style={styles.View_5_1901}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fe9b5ab-54b8-4100-82f2-dd3f1211bf14"
              }}
              style={styles.ImageBackground_5_1902}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59db7184-36eb-4d97-b614-f53466786aba"
              }}
              style={styles.ImageBackground_5_1903}
            />
            <View source={{ uri: "null" }} style={styles.View_5_1906} />
          </View>
        </View>
      </View>
      <View style={styles.View_5_1907}>
        <View style={styles.View_5_1908}>
          <View style={styles.View_5_1909}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5554e795-6e77-4896-b5c0-c8b78528feb3"
              }}
              style={styles.ImageBackground_5_1910}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbec88cd-8057-4d9e-9a7d-48ed48c69149"
              }}
              style={styles.ImageBackground_5_1911}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eea2eb82-cf17-4bfd-b03c-1f60063a42c6"
              }}
              style={styles.ImageBackground_5_1912}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ac46312-9c44-4aba-8095-4aaaa372fbd3"
              }}
              style={styles.ImageBackground_5_1913}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5a253bd-20f1-4074-aeb6-c6773e6c7517"
              }}
              style={styles.ImageBackground_5_1914}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75292c12-5773-463d-8fd7-7a087f8169f6"
              }}
              style={styles.ImageBackground_5_1915}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3add3df5-6727-4f30-9289-174b96a24531"
              }}
              style={styles.ImageBackground_5_1916}
            />
            <View source={{ uri: "null" }} style={styles.View_5_1919} />
          </View>
        </View>
      </View>
      <View style={styles.View_5_1920}>
        <View style={styles.View_5_1921}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e4c457f-afc0-40bb-b119-24cbba4ba523"
            }}
            style={styles.ImageBackground_5_1922}
          />
        </View>
      </View>
      <View style={styles.View_5_1929}>
        <Text style={styles.Text_5_1929}>Add Post</Text>
      </View>
      <View style={styles.View_5_1930}>
        <Text style={styles.Text_5_1930}>Add Product to Market</Text>
      </View>
      <View style={styles.View_5_1931}>
        <Text style={styles.Text_5_1931}>Add Pet</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_5_1248: {
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
  ImageBackground_5_1249: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1250: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_5_1251: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_5_1252: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_1255: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1256: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_5_1257: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_1258: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_5_1259: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1260: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1260: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1261: {
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
  ImageBackground_5_1262: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1268: {
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
  View_I5_1268_3125_33470: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1268_3104_35842: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1269: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1269_1_15684: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1269_1_15685: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1270: {
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
  View_I5_1270_3125_33507: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1270_3104_36366: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1271: {
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
  View_5_1362: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_5_1362: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1895: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("129%"),
    minHeight: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2%")
  },
  View_5_1272: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1273: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1274: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1
  },
  ImageBackground_5_1275: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_5_1276: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_5_1277: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_5_1277: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1278: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_5_1278: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1279: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1279_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1279_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1280: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_5_1281: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("48%")
  },
  View_5_1282: {
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
  View_I5_1282_1_14675: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1282_1_14676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1283: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1283: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1284: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("48%")
  },
  View_5_1285: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1285: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1286: {
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
  View_I5_1286_1_14681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1286_1_14682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1287: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1287_1_14693: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1287_1_14694: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1288: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_5_1288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1289: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_5_1289: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1290: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1290_1_14669: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1290_1_14670: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1291: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%")
  },
  View_5_1292: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1293: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1
  },
  ImageBackground_5_1294: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_5_1295: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_5_1295: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1296: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1296_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1296_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1297: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("41%")
  },
  View_5_1298: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1299: {
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
  View_I5_1299_1_14675: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1299_1_14676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1300: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1300: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1301: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_5_1302: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1302: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1303: {
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
  View_I5_1303_1_14681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1303_1_14682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1304: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1304_1_14693: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1304_1_14694: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1305: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1305_1_14669: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1305_1_14670: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1306: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_5_1306: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1307: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_5_1307: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1308: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 123, 172, 1)"
  },
  ImageBackground_5_1309: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%")
  },
  View_5_1312: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("17%")
  },
  ImageBackground_5_1313: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_1314: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1315: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1315_1_14986: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1315_1_14987: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1316: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("21%")
  },
  ImageBackground_5_1317: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("23%")
  },
  View_5_1318: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_5_1319: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1319_1_15012: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1319_1_15013: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I5_1319_1_15014: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I5_1319_1_15016: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I5_1319_1_15017: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1320: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_5_1320: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1321: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1321_1_15019: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1321_1_15020: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1322: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%")
  },
  View_5_1323: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1
  },
  ImageBackground_5_1324: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("56%")
  },
  View_5_1325: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_5_1325: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1326: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1326_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1326_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1327: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("102%")
  },
  View_5_1328: {
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
  View_I5_1328_1_14675: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1328_1_14676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1329: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1329: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1330: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("102%")
  },
  View_5_1331: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1331: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1332: {
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
  View_I5_1332_1_14681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1332_1_14682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1333: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1333_1_14693: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1333_1_14694: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1334: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("95%"),
    justifyContent: "flex-start"
  },
  Text_5_1334: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1335: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1335_1_14669: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1335_1_14670: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1336: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 1
  },
  View_5_1337: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_5_1337: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1338: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_5_1338: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1339: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1339_1_14669: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1339_1_14670: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1340: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_5_1341: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_5_1341: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1342: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_5_1342: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1343: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_5_1343: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1344: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1344_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1344_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1345: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_5_1346: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("48%")
  },
  View_5_1347: {
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
  View_I5_1347_1_14675: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1347_1_14676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1348: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1348: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1349: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("48%")
  },
  View_5_1350: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1350: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1351: {
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
  View_I5_1351_1_14681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1351_1_14682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1352: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1352_1_14693: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1352_1_14694: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1353: {
    width: wp("86%"),
    minWidth: wp("86%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_5_1353: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_1354: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("20%")
  },
  ImageBackground_5_1357: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("62%"),
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 15
  },
  ImageBackground_5_1358: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("62%"),
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_5_1359: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("79%")
  },
  View_5_1360: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("84%"),
    justifyContent: "center"
  },
  Text_5_1360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1361: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1361_1_14593: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1361_1_14591: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_I5_1361_1_14581: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_1361_1_14582: {
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
  ImageBackground_I5_1361_1_14583: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("-5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_I5_1361_1_14584: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%")
  },
  View_I5_1361_1_14585: {
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
  View_I5_1361_1_14585_1_596: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1361_1_14585_1_597: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_1361_1_14447: {
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
  View_I5_1361_1_14447_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1361_1_14447_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  View_I5_1361_1_14666: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%")
  },
  View_I5_1361_1_15345: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1361_1_15345_1_14544: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1361_1_15345_1_14545: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_1361_1_14572: {
    width: wp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_1361_1_14572: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1361_1_14665: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%")
  },
  View_I5_1361_1_15346: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1361_1_15346_1_14564: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1361_1_15346_1_14565: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_1361_1_14594: {
    width: wp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_1361_1_14594: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1361_1_14664: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("7%")
  },
  View_I5_1361_1_15347: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1361_1_15347_1_14549: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1361_1_15347_1_14550: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_1361_1_14595: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_1361_1_14595: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1361_1_14663: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("7%")
  },
  View_I5_1361_1_15348: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1361_1_15348_1_14558: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1361_1_15348_1_14559: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I5_1361_1_14596: {
    width: wp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_1361_1_14596: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1559: {
    width: wp("102%"),
    height: hp("129%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(33, 29, 31, 1)"
  },
  ImageBackground_5_1888: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_5_1889: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1889_1_596: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1889_1_597: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1896: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("102%")
  },
  ImageBackground_5_1897: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("92%")
  },
  ImageBackground_5_1898: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("82%")
  },
  View_5_1899: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1900: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1901: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1902: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1903: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_5_1906: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1907: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("94%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1908: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1909: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1910: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_1911: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_5_1912: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_5_1913: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_5_1914: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_5_1915: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_1916: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_5_1919: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1920: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1921: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_1922: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1929: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_5_1929: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1930: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_5_1930: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1931: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("104%"),
    justifyContent: "flex-start"
  },
  Text_5_1931: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
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
