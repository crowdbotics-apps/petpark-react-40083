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
      <View style={styles.View_1_14434}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d03c6d8-2504-4367-8ab2-31486540943e"
          }}
          style={styles.ImageBackground_1_14435}
        />
        <View style={styles.View_1_14436}>
          <View style={styles.View_1_14437}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e4d4111-13ee-46a1-831b-572812568436"
              }}
              style={styles.ImageBackground_1_14438}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7afe7efb-26f6-47bf-a5d4-9692addd8ad4"
              }}
              style={styles.ImageBackground_1_14441}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69a62bf1-89a5-42b5-a9b4-ab0fc98bcb5c"
              }}
              style={styles.ImageBackground_1_14442}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c659baf2-6bf4-4ab3-94e0-caff2f69bf70"
              }}
              style={styles.ImageBackground_1_14443}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b34693e1-b6ac-402c-99b4-20713c28df24"
            }}
            style={styles.ImageBackground_1_14444}
          />
          <View style={styles.View_1_14445}>
            <View style={styles.View_1_14446}>
              <Text style={styles.Text_1_14446}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_14602}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/601d90ec-bc0a-4b1d-bb51-983e6526ca79"
          }}
          style={styles.ImageBackground_1_14603}
        />
      </View>
      <View style={styles.View_1_14630}>
        <View style={styles.View_I1_14630_3125_33470}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a28e1612-c9f9-474d-b9f1-6b10e3f2fc90"
            }}
            style={styles.ImageBackground_I1_14630_3104_35842}
          />
        </View>
      </View>
      <View style={styles.View_1_15683}>
        <View style={styles.View_1_15684}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac1e01e6-d150-49e5-be53-8338d96e8f01"
            }}
            style={styles.ImageBackground_1_15685}
          />
        </View>
      </View>
      <View style={styles.View_1_14631}>
        <View style={styles.View_I1_14631_3125_33507}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2349b4f6-c287-4f38-8d87-d83e12757df6"
            }}
            style={styles.ImageBackground_I1_14631_3104_36366}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f67f3709-bed0-4ef0-93ca-5e1577aa8c39"
        }}
        style={styles.ImageBackground_1_14643}
      />
      <View style={styles.View_1_15343}>
        <View style={styles.View_1_15028}>
          <View style={styles.View_1_14661} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9116e7bf-070a-44aa-b962-8c6f7df1fc32"
            }}
            style={styles.ImageBackground_1_14689}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb2cae56-a5c2-4802-af24-588258e2fee2"
            }}
            style={styles.ImageBackground_1_14997}
          />
          <View style={styles.View_1_14690}>
            <Text style={styles.Text_1_14690}>Ahmed</Text>
          </View>
          <View style={styles.View_1_14691}>
            <Text style={styles.Text_1_14691}>is at New South Wales</Text>
          </View>
          <View style={styles.View_1_14654}>
            <View style={styles.View_1_14655}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/940e3d28-63a8-49bc-9cf5-57bb010ba93b"
                }}
                style={styles.ImageBackground_1_14656}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df36afc4-0775-4282-aa1a-07c009f8263b"
            }}
            style={styles.ImageBackground_1_14667}
          />
          <View style={styles.View_1_14700}>
            <View style={styles.View_1_14674}>
              <View style={styles.View_1_14675}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/321c221c-493b-4d31-8b6d-6de6a4aed821"
                  }}
                  style={styles.ImageBackground_1_14676}
                />
              </View>
            </View>
            <View style={styles.View_1_14679}>
              <Text style={styles.Text_1_14679}>1.1k</Text>
            </View>
          </View>
          <View style={styles.View_1_14701}>
            <View style={styles.View_1_14688}>
              <Text style={styles.Text_1_14688}>50</Text>
            </View>
            <View style={styles.View_1_14680}>
              <View style={styles.View_1_14681}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca286b11-be6b-401e-b74c-c05fa77b3174"
                  }}
                  style={styles.ImageBackground_1_14682}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1_14692}>
            <View style={styles.View_1_14693}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bc2b1b9-5938-4bc0-8d36-4dfbfc4c0606"
                }}
                style={styles.ImageBackground_1_14694}
              />
            </View>
          </View>
          <View style={styles.View_1_14699}>
            <Text style={styles.Text_1_14699}>
              Lorem ipsum dolor sit amet consectetur. Varius convallis pretium
              felis elementum 😊{" "}
            </Text>
          </View>
          <View style={styles.View_1_14703}>
            <Text style={styles.Text_1_14703}>2 days ago</Text>
          </View>
          <View style={styles.View_1_14808}>
            <View style={styles.View_I1_14808_1_14669}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad242aa9-549c-4e1f-b15d-d775c4ce9033"
                }}
                style={styles.ImageBackground_I1_14808_1_14670}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_15031}>
          <View style={styles.View_1_15032}>
            <View style={styles.View_1_15033} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0850b42-de23-40c4-845e-a62fed02e115"
              }}
              style={styles.ImageBackground_1_15034}
            />
            <View style={styles.View_1_15035}>
              <Text style={styles.Text_1_15035}>Ayesha</Text>
            </View>
            <View style={styles.View_1_15036}>
              <View style={styles.View_I1_15036_1_14655}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5f3c0dc-afa7-4e4f-a135-238d092a6444"
                  }}
                  style={styles.ImageBackground_I1_15036_1_14656}
                />
              </View>
            </View>
            <View style={styles.View_1_15037}>
              <View style={styles.View_1_15038}>
                <View style={styles.View_1_15039}>
                  <View style={styles.View_I1_15039_1_14675}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad104f10-2a51-4589-af29-830f5ad375b0"
                      }}
                      style={styles.ImageBackground_I1_15039_1_14676}
                    />
                  </View>
                </View>
                <View style={styles.View_1_15040}>
                  <Text style={styles.Text_1_15040}>1.1k</Text>
                </View>
              </View>
              <View style={styles.View_1_15041}>
                <View style={styles.View_1_15042}>
                  <Text style={styles.Text_1_15042}>50</Text>
                </View>
                <View style={styles.View_1_15043}>
                  <View style={styles.View_I1_15043_1_14681}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3985c2e9-3cf9-48b1-9d55-79bd660314b3"
                      }}
                      style={styles.ImageBackground_I1_15043_1_14682}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_15044}>
                <View style={styles.View_I1_15044_1_14693}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5458cfd-ed27-4ab5-bc22-7a1f9a197b3a"
                    }}
                    style={styles.ImageBackground_I1_15044_1_14694}
                  />
                </View>
              </View>
              <View style={styles.View_1_15045}>
                <View style={styles.View_I1_15045_1_14669}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/321ab6cb-a3d6-4e88-ac1c-716e75459367"
                    }}
                    style={styles.ImageBackground_I1_15045_1_14670}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_1_15046}>
              <Text style={styles.Text_1_15046}>
                start walking at Marlow Lagoon Pet Park
              </Text>
            </View>
            <View style={styles.View_1_15047}>
              <Text style={styles.Text_1_15047}>2 days ago</Text>
            </View>
            <View style={styles.View_1_15048} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5be166e1-2094-4ae8-b0c7-1c1ea75dd2b9"
              }}
              style={styles.ImageBackground_1_15049}
            />
            <View style={styles.View_1_15052}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85d0088c-984d-478f-ad8b-46d2b8760566"
                }}
                style={styles.ImageBackground_1_15053}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cc615ee-0b9e-4502-87b9-28ef23a08469"
                }}
                style={styles.ImageBackground_1_15376}
              />
              <View style={styles.View_1_15054}>
                <View style={styles.View_I1_15054_1_14986}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed21549d-7183-4a6e-bb31-6283856ae0a6"
                    }}
                    style={styles.ImageBackground_I1_15054_1_14987}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0c95f3e-ae44-4db4-b874-10912b3b062e"
              }}
              style={styles.ImageBackground_1_15055}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86d4d2e1-b491-47b3-b0d9-fda157c9560d"
              }}
              style={styles.ImageBackground_1_15056}
            />
            <View style={styles.View_1_15057} />
            <View style={styles.View_1_15058}>
              <View style={styles.View_I1_15058_1_15012}>
                <View style={styles.View_I1_15058_1_15013}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a1c3a0a-fc6a-4d86-aa7d-5fd5c5592934"
                    }}
                    style={styles.ImageBackground_I1_15058_1_15014}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed24a234-0303-4873-8f88-638000009f42"
                    }}
                    style={styles.ImageBackground_I1_15058_1_15016}
                  />
                  <View
                    source={{ uri: "null" }}
                    style={styles.View_I1_15058_1_15017}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_1_15059}>
              <Text style={styles.Text_1_15059}>Total Distance Covered</Text>
            </View>
            <View style={styles.View_14_1481}>
              <Text style={styles.Text_14_1481}>3.0km</Text>
            </View>
            <View style={styles.View_1_15060}>
              <View style={styles.View_I1_15060_1_15019}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6651c73-d436-40fa-bb20-120c60641d32"
                  }}
                  style={styles.ImageBackground_I1_15060_1_15020}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_15252}>
          <View style={styles.View_1_15253} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cead62a4-1070-490c-80f8-64d435d374a3"
            }}
            style={styles.ImageBackground_1_15254}
          />
          <View style={styles.View_1_15255}>
            <Text style={styles.Text_1_15255}>Ahmed</Text>
          </View>
          <View style={styles.View_1_15256}>
            <View style={styles.View_I1_15256_1_14655}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce95d4f6-1a28-4680-8e34-dc0ca9565f35"
                }}
                style={styles.ImageBackground_I1_15256_1_14656}
              />
            </View>
          </View>
          <View style={styles.View_1_15257}>
            <View style={styles.View_1_15258}>
              <View style={styles.View_I1_15258_1_14675}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58fa5cf5-bd9b-4bfa-9006-1ee77c769cb7"
                  }}
                  style={styles.ImageBackground_I1_15258_1_14676}
                />
              </View>
            </View>
            <View style={styles.View_1_15259}>
              <Text style={styles.Text_1_15259}>1.1k</Text>
            </View>
          </View>
          <View style={styles.View_1_15260}>
            <View style={styles.View_1_15261}>
              <Text style={styles.Text_1_15261}>50</Text>
            </View>
            <View style={styles.View_1_15262}>
              <View style={styles.View_I1_15262_1_14681}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a81b1e8-fc6a-445b-98e2-3dfbef7579e7"
                  }}
                  style={styles.ImageBackground_I1_15262_1_14682}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1_15263}>
            <View style={styles.View_I1_15263_1_14693}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7ff4d44-7d9d-4f80-aea1-1a56231d47c9"
                }}
                style={styles.ImageBackground_I1_15263_1_14694}
              />
            </View>
          </View>
          <View style={styles.View_1_15264}>
            <Text style={styles.Text_1_15264}>
              Lorem ipsum dolor sit amet consectetur. Varius convallis pretium
              felis elementum 😊{" "}
            </Text>
          </View>
          <View style={styles.View_1_15265}>
            <View style={styles.View_I1_15265_1_14669}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4269f309-93e0-4110-82a0-d4d04caf1b9d"
                }}
                style={styles.ImageBackground_I1_15265_1_14670}
              />
            </View>
          </View>
          <View style={styles.View_1_15266} />
          <View style={styles.View_1_15267}>
            <Text style={styles.Text_1_15267}>is at New South Wales</Text>
          </View>
          <View style={styles.View_1_15268}>
            <Text style={styles.Text_1_15268}>is at New South Wales</Text>
          </View>
          <View style={styles.View_1_15269}>
            <View style={styles.View_I1_15269_1_14669}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72b62672-71f3-4c3d-955d-3c90de42247c"
                }}
                style={styles.ImageBackground_I1_15269_1_14670}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52f76059-9095-4b55-832d-56716b84a3b8"
            }}
            style={styles.ImageBackground_1_15270}
          />
          <View style={styles.View_1_15271}>
            <Text style={styles.Text_1_15271}>Julia</Text>
          </View>
          <View style={styles.View_1_15272}>
            <Text style={styles.Text_1_15272}>2 days ago</Text>
          </View>
          <View style={styles.View_1_15273}>
            <Text style={styles.Text_1_15273}>2 days ago</Text>
          </View>
          <View style={styles.View_1_15274}>
            <View style={styles.View_I1_15274_1_14655}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c67e7513-9c56-445f-a2f1-32e47780c77b"
                }}
                style={styles.ImageBackground_I1_15274_1_14656}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5238fcbf-883e-4aef-bba7-15dbec34b05c"
            }}
            style={styles.ImageBackground_1_15275}
          />
          <View style={styles.View_1_15276}>
            <View style={styles.View_1_15277}>
              <View style={styles.View_I1_15277_1_14675}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cf0cb74-dc58-451e-a844-30f90dfb2aeb"
                  }}
                  style={styles.ImageBackground_I1_15277_1_14676}
                />
              </View>
            </View>
            <View style={styles.View_1_15278}>
              <Text style={styles.Text_1_15278}>1.1k</Text>
            </View>
          </View>
          <View style={styles.View_1_15279}>
            <View style={styles.View_1_15280}>
              <Text style={styles.Text_1_15280}>50</Text>
            </View>
            <View style={styles.View_1_15281}>
              <View style={styles.View_I1_15281_1_14681}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab9ae6a9-c0b2-44d8-9c95-22d8d0838ef7"
                  }}
                  style={styles.ImageBackground_I1_15281_1_14682}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1_15282}>
            <View style={styles.View_I1_15282_1_14693}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83244ad3-ea90-45a7-a46f-3164119e8ec3"
                }}
                style={styles.ImageBackground_I1_15282_1_14694}
              />
            </View>
          </View>
          <View style={styles.View_1_15283}>
            <Text style={styles.Text_1_15283}>
              Lorem ipsum dolor sit amet consectetur. Varius convallis pretium
              felis elementum 😊{" "}
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2afa12fa-efca-45f0-afef-a17131ae298b"
            }}
            style={styles.ImageBackground_1_15284}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1d81002-8a01-4937-9858-e95e8c94ccc1"
            }}
            style={styles.ImageBackground_1_15287}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f93107cf-2db9-4c16-8f56-0faa23c84703"
            }}
            style={styles.ImageBackground_1_15288}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fc42318-54e6-4427-b182-4c6431e7e6c4"
            }}
            style={styles.ImageBackground_1_15289}
          />
          <View style={styles.View_1_15290}>
            <Text style={styles.Text_1_15290}>2+</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_15349}>
        <View style={styles.View_1_14593}>
          <View style={styles.View_1_14591} />
          <View style={styles.View_1_14581}>
            <View style={styles.View_1_14582} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa150806-0cbc-4a43-b3ca-d5967cb6cf21"
              }}
              style={styles.ImageBackground_1_14583}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c32c0278-b225-4dac-9842-d0a5b59d8268"
          }}
          style={styles.ImageBackground_1_14584}
        />
        <View style={styles.View_1_14585}>
          <View style={styles.View_I1_14585_1_596}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8db33c69-0584-40b0-b3ff-0b7a77f0337b"
              }}
              style={styles.ImageBackground_I1_14585_1_597}
            />
          </View>
        </View>
        <View style={styles.View_1_14447}>
          <View style={styles.View_I1_14447_1_51} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04281776-06ba-4dc9-a5b8-de4e1c89d3b8"
            }}
            style={styles.ImageBackground_I1_14447_1_52}
          />
        </View>
        <View style={styles.View_1_14666}>
          <View style={styles.View_1_15345}>
            <View style={styles.View_I1_15345_1_14544}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8177a68-0010-48d2-9fef-93caba30ae49"
                }}
                style={styles.ImageBackground_I1_15345_1_14545}
              />
            </View>
          </View>
          <View style={styles.View_1_14572}>
            <Text style={styles.Text_1_14572}>Home</Text>
          </View>
        </View>
        <View style={styles.View_1_14665}>
          <View style={styles.View_1_15346}>
            <View style={styles.View_I1_15346_1_14564}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4911d89c-d296-41dd-bfc2-968ab848058a"
                }}
                style={styles.ImageBackground_I1_15346_1_14565}
              />
            </View>
          </View>
          <View style={styles.View_1_14594}>
            <Text style={styles.Text_1_14594}>Adopt</Text>
          </View>
        </View>
        <View style={styles.View_1_14664}>
          <View style={styles.View_1_15347}>
            <View style={styles.View_I1_15347_1_14549}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7e7e723-6060-4373-8595-a29d4390e038"
                }}
                style={styles.ImageBackground_I1_15347_1_14550}
              />
            </View>
          </View>
          <View style={styles.View_1_14595}>
            <Text style={styles.Text_1_14595}>Market</Text>
          </View>
        </View>
        <View style={styles.View_1_14663}>
          <View style={styles.View_1_15348}>
            <View style={styles.View_I1_15348_1_14558}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7da3cfe-adff-4e16-8fe4-09fb9463020c"
                }}
                style={styles.ImageBackground_I1_15348_1_14559}
              />
            </View>
          </View>
          <View style={styles.View_1_14596}>
            <Text style={styles.Text_1_14596}>Messages</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_15700}>
        <Text style={styles.Text_1_15700}>Home</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_1_14434: {
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
  ImageBackground_1_14435: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14436: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_14437: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_1_14438: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_14441: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_14442: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_14443: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_14444: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_1_14445: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14446: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14446: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14602: {
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
  ImageBackground_1_14603: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14630: {
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
  View_I1_14630_3125_33470: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14630_3104_35842: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15683: {
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
  View_1_15684: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_15685: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14631: {
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
  View_I1_14631_3125_33507: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14631_3104_36366: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_14643: {
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
  View_1_15343: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_15028: {
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
  View_1_14661: {
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
  ImageBackground_1_14689: {
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
  ImageBackground_1_14997: {
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
  View_1_14690: {
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
  Text_1_14690: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14691: {
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
  Text_1_14691: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14654: {
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
  View_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_14667: {
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
  View_1_14700: {
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
  View_1_14674: {
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
  View_1_14675: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_14676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14679: {
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
  Text_1_14679: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14701: {
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
  View_1_14688: {
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
  Text_1_14688: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14680: {
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
  View_1_14681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_14682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14692: {
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
  View_1_14693: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_14694: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14699: {
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
  Text_1_14699: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14703: {
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
  Text_1_14703: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14808: {
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
  View_I1_14808_1_14669: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14808_1_14670: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15031: {
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
  View_1_15032: {
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
  View_1_15033: {
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
  ImageBackground_1_15034: {
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
  View_1_15035: {
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
  Text_1_15035: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15036: {
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
  View_I1_15036_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15036_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15037: {
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
  View_1_15038: {
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
  View_1_15039: {
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
  View_I1_15039_1_14675: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15039_1_14676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15040: {
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
  Text_1_15040: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15041: {
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
  View_1_15042: {
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
  Text_1_15042: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15043: {
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
  View_I1_15043_1_14681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15043_1_14682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15044: {
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
  View_I1_15044_1_14693: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15044_1_14694: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15045: {
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
  View_I1_15045_1_14669: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15045_1_14670: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15046: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_1_15046: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15047: {
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
  Text_1_15047: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15048: {
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
  ImageBackground_1_15049: {
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
  View_1_15052: {
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
  ImageBackground_1_15053: {
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
  ImageBackground_1_15376: {
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
  View_1_15054: {
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
  View_I1_15054_1_14986: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15054_1_14987: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_15055: {
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
  ImageBackground_1_15056: {
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
  View_1_15057: {
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
  View_1_15058: {
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
  View_I1_15058_1_15012: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1_15058_1_15013: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I1_15058_1_15014: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I1_15058_1_15016: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I1_15058_1_15017: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15059: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_1_15059: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_1481: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_14_1481: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15060: {
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
  View_I1_15060_1_15019: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15060_1_15020: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15252: {
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
  View_1_15253: {
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
  ImageBackground_1_15254: {
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
  View_1_15255: {
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
  Text_1_15255: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15256: {
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
  View_I1_15256_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15256_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15257: {
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
  View_1_15258: {
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
  View_I1_15258_1_14675: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15258_1_14676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15259: {
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
  Text_1_15259: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15260: {
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
  View_1_15261: {
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
  Text_1_15261: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15262: {
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
  View_I1_15262_1_14681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15262_1_14682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15263: {
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
  View_I1_15263_1_14693: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15263_1_14694: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15264: {
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
  Text_1_15264: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15265: {
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
  View_I1_15265_1_14669: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15265_1_14670: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15266: {
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
  View_1_15267: {
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
  Text_1_15267: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15268: {
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
  Text_1_15268: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15269: {
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
  View_I1_15269_1_14669: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15269_1_14670: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_15270: {
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
  View_1_15271: {
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
  Text_1_15271: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15272: {
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
  Text_1_15272: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15273: {
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
  Text_1_15273: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15274: {
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
  View_I1_15274_1_14655: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15274_1_14656: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_15275: {
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
  View_1_15276: {
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
  View_1_15277: {
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
  View_I1_15277_1_14675: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15277_1_14676: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15278: {
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
  Text_1_15278: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15279: {
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
  View_1_15280: {
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
  Text_1_15280: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15281: {
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
  View_I1_15281_1_14681: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15281_1_14682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15282: {
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
  View_I1_15282_1_14693: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15282_1_14694: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15283: {
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
  Text_1_15283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_15284: {
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
  ImageBackground_1_15287: {
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
  ImageBackground_1_15288: {
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
  ImageBackground_1_15289: {
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
  View_1_15290: {
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
  Text_1_15290: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15349: {
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
  View_1_14593: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_14591: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_14581: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14582: {
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
  ImageBackground_1_14583: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("-5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_1_14584: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%")
  },
  View_1_14585: {
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
  View_I1_14585_1_596: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14585_1_597: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14447: {
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
  View_I1_14447_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_14447_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  View_1_14666: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%")
  },
  View_1_15345: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_15345_1_14544: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15345_1_14545: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14572: {
    width: wp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14572: {
    color: "rgba(238, 31, 41, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14665: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%")
  },
  View_1_15346: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_15346_1_14564: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15346_1_14565: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14594: {
    width: wp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14594: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14664: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("7%")
  },
  View_1_15347: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_15347_1_14549: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15347_1_14550: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14595: {
    width: wp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14595: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14663: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("7%")
  },
  View_1_15348: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1_15348_1_14558: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_15348_1_14559: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_14596: {
    width: wp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_14596: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_15700: {
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
  Text_1_15700: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
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
