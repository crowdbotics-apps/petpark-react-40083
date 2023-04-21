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
      <View style={styles.View_1_10797}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f36d7d9a-426b-4766-9df6-d89a8b2144ae"
          }}
          style={styles.ImageBackground_1_10798}
        />
        <View style={styles.View_1_10799}>
          <View style={styles.View_1_10800}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13ade708-caf3-4e0d-baf2-c72eacd76cbd"
              }}
              style={styles.ImageBackground_1_10801}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/972b141e-bc6d-4c6a-9814-b28af7065d20"
              }}
              style={styles.ImageBackground_1_10804}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aeeb27c0-e285-4fa8-9e6a-a94411b2a42e"
              }}
              style={styles.ImageBackground_1_10805}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bc86179-32d8-4818-86c5-e747b18feea7"
              }}
              style={styles.ImageBackground_1_10806}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b4435e9-a63f-4fdb-a6bf-12f50fb2175a"
            }}
            style={styles.ImageBackground_1_10807}
          />
          <View style={styles.View_1_10808}>
            <View style={styles.View_1_10809}>
              <Text style={styles.Text_1_10809}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_10821}>
        <View style={styles.View_I1_10821_1_51} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d031247d-aec0-4260-bb49-f904e405957f"
          }}
          style={styles.ImageBackground_I1_10821_1_52}
        />
      </View>
      <View style={styles.View_1_14153}>
        <View style={styles.View_1_10973}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/548679a3-24f7-4f65-ab62-a318c63dcc82"
            }}
            style={styles.ImageBackground_1_10974}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91f32288-2922-4f0c-bfa2-db889be256a8"
            }}
            style={styles.ImageBackground_1_10976}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a37bd7c2-40dc-40e1-a20e-3ac27916692c"
            }}
            style={styles.ImageBackground_1_10978}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c9dfeda-59ca-40d1-85f8-6a1c3fe5ae47"
            }}
            style={styles.ImageBackground_1_10980}
          />
        </View>
        <View style={styles.View_1_10982}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/439b5387-7763-46a0-9f26-cd9ee9cc08e3"
            }}
            style={styles.ImageBackground_1_10983}
          />
          <View style={styles.View_1_10984}>
            <View style={styles.View_1_10985}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/105f70b8-be06-4d74-a5cb-4f180e0c6b1b"
                }}
                style={styles.ImageBackground_1_10986}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ca59b21-da38-4252-855b-03d7d286a94e"
                }}
                style={styles.ImageBackground_1_10988}
              />
              <View style={styles.View_1_10990}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd7b0e99-a677-4b4c-b0e6-b72a8a265b6b"
                  }}
                  style={styles.ImageBackground_1_10991}
                />
                <View style={styles.View_1_10993}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8623471d-6b7e-48c0-ac09-ebe50a07483d"
                    }}
                    style={styles.ImageBackground_1_10994}
                  />
                </View>
                <View style={styles.View_1_10996}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/990bb9b3-ba94-4cc6-8907-ddce131b5265"
                    }}
                    style={styles.ImageBackground_1_10997}
                  />
                </View>
                <View style={styles.View_1_10999}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1cd40e1-ca67-49cd-92de-23670a457512"
                    }}
                    style={styles.ImageBackground_1_11000}
                  />
                </View>
                <View style={styles.View_1_11002}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38773edd-d742-4eea-84d1-ffb67ac8557e"
                    }}
                    style={styles.ImageBackground_1_11003}
                  />
                </View>
                <View style={styles.View_1_11005}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/992f1f0c-2133-4cd9-9cfe-fed6939dfe29"
                    }}
                    style={styles.ImageBackground_1_11006}
                  />
                </View>
                <View style={styles.View_1_11008}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7c8284b-fbf3-456e-bb4c-77ca31d5d5b5"
                    }}
                    style={styles.ImageBackground_1_11009}
                  />
                </View>
                <View style={styles.View_1_11011}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1179d10e-c6e6-4eda-b2f4-40d2c44cbfed"
                    }}
                    style={styles.ImageBackground_1_11012}
                  />
                </View>
                <View style={styles.View_1_11014}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1920e7d8-a06f-461f-ba16-26a1bbe1ae31"
                    }}
                    style={styles.ImageBackground_1_11015}
                  />
                </View>
              </View>
              <View style={styles.View_1_11017}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b566eab0-25f6-4f49-a039-8c0d881c08a2"
                  }}
                  style={styles.ImageBackground_1_11018}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3bbb3f0-a1e8-463c-b6c2-1bbbf4280a18"
                  }}
                  style={styles.ImageBackground_1_11020}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d00bc5c9-2e27-46be-9918-acd36d6a403d"
                  }}
                  style={styles.ImageBackground_1_11022}
                />
              </View>
            </View>
            <View style={styles.View_1_11024}>
              <View style={styles.View_1_11025}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cc5b261-9daa-4333-b1ef-2b9c4f338c24"
                  }}
                  style={styles.ImageBackground_1_11026}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8117acc5-b623-42bd-b30f-b4fc374fe45c"
                  }}
                  style={styles.ImageBackground_1_11028}
                />
              </View>
              <View style={styles.View_1_11030}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96a73ead-160b-4fb7-8a4b-0479d70650bd"
                  }}
                  style={styles.ImageBackground_1_11031}
                />
                <View style={styles.View_1_11033}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86753b0e-35e7-4a9d-a13e-3084f27c49da"
                    }}
                    style={styles.ImageBackground_1_11034}
                  />
                  <View style={styles.View_1_11036}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/061549b2-39d1-45cd-a4af-4ca4f149325c"
                      }}
                      style={styles.ImageBackground_1_11037}
                    />
                    <View style={styles.View_1_11039}>
                      <View style={styles.View_1_11040}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/025e67af-3108-4817-9bfd-716ada3fd642"
                          }}
                          style={styles.ImageBackground_1_11041}
                        />
                      </View>
                      <View style={styles.View_1_11043}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e357c02-ceb0-4a3c-bb02-0f6ab6e5178e"
                          }}
                          style={styles.ImageBackground_1_11044}
                        />
                      </View>
                      <View style={styles.View_1_11046}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7efbbd6-a1da-4a51-a272-5d1af904e3e5"
                          }}
                          style={styles.ImageBackground_1_11047}
                        />
                      </View>
                      <View style={styles.View_1_11049}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8492736-d88e-45d9-9fdd-b8a3d19c0155"
                          }}
                          style={styles.ImageBackground_1_11050}
                        />
                      </View>
                      <View style={styles.View_1_11052}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/662756b6-119f-48ae-ab77-5fa0ca796002"
                          }}
                          style={styles.ImageBackground_1_11053}
                        />
                      </View>
                      <View style={styles.View_1_11055}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32bc201a-b329-4019-ba4a-69a43a7be98f"
                          }}
                          style={styles.ImageBackground_1_11056}
                        />
                      </View>
                      <View style={styles.View_1_11058}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38c32c4b-469d-416b-ab6e-c5a8dfc42483"
                          }}
                          style={styles.ImageBackground_1_11059}
                        />
                      </View>
                      <View style={styles.View_1_11061}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1963c006-553c-4b80-940d-7335925e271c"
                          }}
                          style={styles.ImageBackground_1_11062}
                        />
                      </View>
                      <View style={styles.View_1_11064}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70e3a36b-41e7-44c1-868a-b5fc71a80387"
                          }}
                          style={styles.ImageBackground_1_11065}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_11067}>
                  <View style={styles.View_1_11068}>
                    <View style={styles.View_1_11069}>
                      <View style={styles.View_1_11070}>
                        <View style={styles.View_1_11071}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0972a203-c7dd-41f5-941c-6a80597453cb"
                            }}
                            style={styles.ImageBackground_1_11072}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec466c1e-79d0-4a82-ba4d-2c16629bf6b1"
                            }}
                            style={styles.ImageBackground_1_11074}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_1_11076}>
                      <View style={styles.View_1_11077}>
                        <View style={styles.View_1_11078}>
                          <View style={styles.View_1_11079}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c6db3f0-351d-4f04-8387-abb7a6ccc5a5"
                              }}
                              style={styles.ImageBackground_1_11080}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_1_11082}>
                      <View style={styles.View_1_11083}>
                        <View style={styles.View_1_11084}>
                          <View style={styles.View_1_11085}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/463e998d-a3a4-4f80-93f5-543847267e90"
                              }}
                              style={styles.ImageBackground_1_11086}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1d9e926-b341-4cb6-a574-3c81ba1896a8"
                    }}
                    style={styles.ImageBackground_1_11088}
                  />
                </View>
                <View style={styles.View_1_11090}>
                  <View style={styles.View_1_11091}>
                    <View style={styles.View_1_11092}>
                      <View style={styles.View_1_11093}>
                        <View style={styles.View_1_11094}>
                          <View style={styles.View_1_11095}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c390c439-c233-41b5-8025-e5a39f566720"
                              }}
                              style={styles.ImageBackground_1_11096}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_1_11098}>
                      <View style={styles.View_1_11099}>
                        <View style={styles.View_1_11100}>
                          <View style={styles.View_1_11101}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2908432-9045-4207-bd0a-074e946964eb"
                              }}
                              style={styles.ImageBackground_1_11102}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_1_11104}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58107c3b-b3d4-4465-9933-d092f8246bee"
                      }}
                      style={styles.ImageBackground_1_11105}
                    />
                  </View>
                  <View style={styles.View_1_11107}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/851e3940-30d9-43ee-ab9d-5072431fb444"
                      }}
                      style={styles.ImageBackground_1_11108}
                    />
                  </View>
                  <View style={styles.View_1_11110}>
                    <View style={styles.View_1_11111}>
                      <View style={styles.View_1_11112}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd1a39f2-c679-4dfe-a563-9623f256be3f"
                          }}
                          style={styles.ImageBackground_1_11113}
                        />
                      </View>
                    </View>
                    <View style={styles.View_1_11115}>
                      <View style={styles.View_1_11116}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/327547d6-87df-4e75-8303-71c5764b3ace"
                          }}
                          style={styles.ImageBackground_1_11117}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_1_11119}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71c20539-e11b-4b04-a2a6-2eaf1c206fa1"
                      }}
                      style={styles.ImageBackground_1_11120}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e9fc68e-8027-4444-a19a-44b85f7d9042"
                      }}
                      style={styles.ImageBackground_1_11122}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54c0cbd2-2648-4b3e-b0ff-dd1dfe645940"
                      }}
                      style={styles.ImageBackground_1_11124}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1_11126}>
              <View style={styles.View_1_11127}>
                <View style={styles.View_1_11128}>
                  <View style={styles.View_1_11129}>
                    <View style={styles.View_1_11130}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c57811c4-bed8-4f04-92f2-91ef8f5b4ecb"
                        }}
                        style={styles.ImageBackground_1_11131}
                      />
                    </View>
                  </View>
                  <View style={styles.View_1_11133}>
                    <View style={styles.View_1_11134}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7b098ff-5f01-41e3-aa83-89f5946cd0d8"
                        }}
                        style={styles.ImageBackground_1_11135}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_11137}>
                  <View style={styles.View_1_11138}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76bb77f0-e731-4262-b248-f9ee66fcf1d1"
                      }}
                      style={styles.ImageBackground_1_11139}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_11141}>
                <View style={styles.View_1_11142}>
                  <View style={styles.View_1_11143}>
                    <View style={styles.View_1_11144}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b1e0e64-804c-431b-bd85-6824c8a12a9c"
                        }}
                        style={styles.ImageBackground_1_11145}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_11147}>
                  <View style={styles.View_1_11148}>
                    <View style={styles.View_1_11149}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1517a9d7-98f6-497f-9560-d546cea6920c"
                        }}
                        style={styles.ImageBackground_1_11150}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_11152}>
                  <View style={styles.View_1_11153}>
                    <View style={styles.View_1_11154}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/764ac3ac-7c23-4a9b-8c04-42ce5601001b"
                        }}
                        style={styles.ImageBackground_1_11155}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_11157}>
                  <View style={styles.View_1_11158}>
                    <View style={styles.View_1_11159}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7852f889-c9ad-4062-a02f-f2bcd2a812d3"
                        }}
                        style={styles.ImageBackground_1_11160}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_11162}>
                  <View style={styles.View_1_11163}>
                    <View style={styles.View_1_11164}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/265c1e19-cbba-4b79-a9fd-504d8ddc5a2e"
                        }}
                        style={styles.ImageBackground_1_11165}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1_11167}>
              <View style={styles.View_1_11168}>
                <View style={styles.View_1_11169}>
                  <View style={styles.View_1_11170}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b46659d-9a51-4224-9547-04df7a53b04e"
                      }}
                      style={styles.ImageBackground_1_11171}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11173}>
                  <View style={styles.View_1_11174}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/747a0a56-1052-43a0-9b5b-66da2c1b448c"
                      }}
                      style={styles.ImageBackground_1_11175}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11177}>
                  <View style={styles.View_1_11178}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccd94a28-b6e2-441c-bffd-4c27a5c7b0d2"
                      }}
                      style={styles.ImageBackground_1_11179}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11181}>
                  <View style={styles.View_1_11182}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bdcd3d7-5877-4b0c-ad40-2b90d359056e"
                      }}
                      style={styles.ImageBackground_1_11183}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_11185}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/598985cf-77c0-4a30-82ee-669b4a18cb22"
                  }}
                  style={styles.ImageBackground_1_11186}
                />
              </View>
              <View style={styles.View_1_11188}>
                <View style={styles.View_1_11189}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9461d852-cc19-4dd4-85f7-be4a3bf81b1e"
                    }}
                    style={styles.ImageBackground_1_11190}
                  />
                </View>
              </View>
              <View style={styles.View_1_11192}>
                <View style={styles.View_1_11193}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0d74d44-b8c9-443a-b607-471a25b85038"
                    }}
                    style={styles.ImageBackground_1_11194}
                  />
                </View>
              </View>
              <View style={styles.View_1_11196}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/552af525-e685-44cd-bcc0-941f16b20b8e"
                  }}
                  style={styles.ImageBackground_1_11197}
                />
              </View>
              <View style={styles.View_1_11199}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5737310-a233-4d56-9e74-1fc3c2b9f76c"
                  }}
                  style={styles.ImageBackground_1_11200}
                />
              </View>
            </View>
            <View style={styles.View_1_11202}>
              <View style={styles.View_1_11203}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4960681d-7694-48b1-8ab3-cb498b08df71"
                  }}
                  style={styles.ImageBackground_1_11204}
                />
                <View style={styles.View_1_11206}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d40836f-7c47-46fd-94e2-5f8f967cc72c"
                    }}
                    style={styles.ImageBackground_1_11207}
                  />
                </View>
              </View>
              <View style={styles.View_1_11209}>
                <View style={styles.View_1_11210}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0915da5a-58c0-4007-91b1-9245c69c55f2"
                    }}
                    style={styles.ImageBackground_1_11211}
                  />
                </View>
                <View style={styles.View_1_11213}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e0e209f-2134-4f79-b688-eafb442a47fa"
                    }}
                    style={styles.ImageBackground_1_11214}
                  />
                </View>
                <View style={styles.View_1_11216}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36a4469a-85f0-4e2c-a9b1-21802bbfbf8e"
                    }}
                    style={styles.ImageBackground_1_11217}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d34dbe0-5616-4639-8da7-585023d14340"
                }}
                style={styles.ImageBackground_1_11219}
              />
              <View style={styles.View_1_11221}>
                <View style={styles.View_1_11222}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbcc4f93-cd8f-4f66-870b-0ba000e28a69"
                    }}
                    style={styles.ImageBackground_1_11223}
                  />
                  <View style={styles.View_1_11225}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6fff4be-f053-440a-87f0-6468fa260c33"
                      }}
                      style={styles.ImageBackground_1_11226}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11228}>
                  <View style={styles.View_1_11229}>
                    <View style={styles.View_1_11230}>
                      <View style={styles.View_1_11231}>
                        <View style={styles.View_1_11232}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3418731-79c0-4b37-9426-1eb0d0d0f322"
                            }}
                            style={styles.ImageBackground_1_11233}
                          />
                        </View>
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/adc0941c-dd1f-46d5-b9c7-e1f4d954a913"
                      }}
                      style={styles.ImageBackground_1_11235}
                    />
                    <View style={styles.View_1_11237}>
                      <View style={styles.View_1_11238}>
                        <View style={styles.View_1_11239}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b791225b-5c15-4c83-bd7b-48420b2e4850"
                            }}
                            style={styles.ImageBackground_1_11240}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9658bd5-078b-45c6-88c2-69b4c9ccfea5"
                    }}
                    style={styles.ImageBackground_1_11242}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_1_11244}>
              <View style={styles.View_1_11245}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffaa30d8-2227-4fec-8cac-d7eea2098ce9"
                  }}
                  style={styles.ImageBackground_1_11246}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/effba823-997d-4804-96c7-bf2e1c722ae3"
                }}
                style={styles.ImageBackground_1_11248}
              />
              <View style={styles.View_1_11250}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8d1ffcc-952b-4fb2-8d83-de67c0ee4d2b"
                  }}
                  style={styles.ImageBackground_1_11251}
                />
              </View>
              <View style={styles.View_1_11253}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36ca0f11-4687-4bd5-a379-8026a73b81c5"
                  }}
                  style={styles.ImageBackground_1_11254}
                />
              </View>
              <View style={styles.View_1_11256}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57b582d8-3426-403d-9181-938ec4dacce8"
                  }}
                  style={styles.ImageBackground_1_11257}
                />
              </View>
              <View style={styles.View_1_11259}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a1404a1-6b01-4cf2-82bd-1212765afb3f"
                  }}
                  style={styles.ImageBackground_1_11260}
                />
              </View>
              <View style={styles.View_1_11262}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8301e76b-112d-4886-84a4-5b4ead771850"
                  }}
                  style={styles.ImageBackground_1_11263}
                />
              </View>
              <View style={styles.View_1_11265}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47654993-1b69-4355-ade7-5f4c3d3c9be5"
                  }}
                  style={styles.ImageBackground_1_11266}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_11268}>
          <View style={styles.View_1_11269}>
            <View style={styles.View_1_11270}>
              <View style={styles.View_1_11271}>
                <View style={styles.View_1_11272}>
                  <View style={styles.View_1_11273}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b43ba9b-2dc8-4225-ba78-fb8387a4c502"
                      }}
                      style={styles.ImageBackground_1_11274}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1_11276}>
              <View style={styles.View_1_11277}>
                <View style={styles.View_1_11278}>
                  <View style={styles.View_1_11279}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f907d41-fffe-4efe-a53c-3da55a2f5052"
                      }}
                      style={styles.ImageBackground_1_11280}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1_11282}>
              <View style={styles.View_1_11283}>
                <View style={styles.View_1_11284}>
                  <View style={styles.View_1_11285}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd3bcbc0-7b7b-44b9-acc6-122ca41ba8eb"
                      }}
                      style={styles.ImageBackground_1_11286}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1_11288}>
              <View style={styles.View_1_11289}>
                <View style={styles.View_1_11290}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9134744e-18c3-4d28-abc2-d84975a21d67"
                    }}
                    style={styles.ImageBackground_1_11291}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_11293}>
            <View style={styles.View_1_11294}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65162c57-7c8d-4293-8b56-9f8036aba35a"
                }}
                style={styles.ImageBackground_1_11295}
              />
              <View style={styles.View_1_11297}>
                <View style={styles.View_1_11298}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89d8a278-f21e-485a-95c5-0067a9e2196d"
                    }}
                    style={styles.ImageBackground_1_11299}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbc19361-2a3b-48e8-9fe0-eb31a262fcc7"
                    }}
                    style={styles.ImageBackground_1_11301}
                  />
                  <View style={styles.View_1_11303}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13ddb958-d779-42bd-a9c1-9e2c25855dbf"
                      }}
                      style={styles.ImageBackground_1_11304}
                    />
                    <View style={styles.View_1_11306}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4325bfa-23d8-4d5c-b64e-781f80a91b06"
                        }}
                        style={styles.ImageBackground_1_11307}
                      />
                    </View>
                    <View style={styles.View_1_11309}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55b349ad-ba55-43db-8b6e-f214f91c9f61"
                        }}
                        style={styles.ImageBackground_1_11310}
                      />
                    </View>
                    <View style={styles.View_1_11312}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4360af30-b277-49ef-bfa0-5c3a084dd903"
                        }}
                        style={styles.ImageBackground_1_11313}
                      />
                    </View>
                    <View style={styles.View_1_11315}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be05159d-0c94-4472-8827-cb8a48442934"
                        }}
                        style={styles.ImageBackground_1_11316}
                      />
                    </View>
                    <View style={styles.View_1_11318}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e2fa613-64b9-43f0-86c7-3aead0c5465c"
                        }}
                        style={styles.ImageBackground_1_11319}
                      />
                    </View>
                    <View style={styles.View_1_11321}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87f9e577-7cb6-4a31-872d-2a737bde7ec4"
                        }}
                        style={styles.ImageBackground_1_11322}
                      />
                    </View>
                    <View style={styles.View_1_11324}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89f9e0cd-c53a-4426-90f4-c2675022f519"
                        }}
                        style={styles.ImageBackground_1_11325}
                      />
                    </View>
                    <View style={styles.View_1_11327}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9054e1f6-c68c-4eb4-befe-f9c2156e7d0c"
                        }}
                        style={styles.ImageBackground_1_11328}
                      />
                    </View>
                  </View>
                  <View style={styles.View_1_11330}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87399f70-9625-4797-b29a-3a1219f4769d"
                      }}
                      style={styles.ImageBackground_1_11331}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91d880d2-a077-4b84-a7bf-bf58f5547c11"
                      }}
                      style={styles.ImageBackground_1_11333}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4abdc7b-31cc-4fd9-9c58-b06fda331fef"
                      }}
                      style={styles.ImageBackground_1_11335}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11337}>
                  <View style={styles.View_1_11338}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edb062e4-1053-4084-843a-26d6337ad837"
                      }}
                      style={styles.ImageBackground_1_11339}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31cbbe37-26b7-4e7d-99f8-34f1162ccf0f"
                      }}
                      style={styles.ImageBackground_1_11341}
                    />
                  </View>
                  <View style={styles.View_1_11343}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a93127e-ae4c-4f9f-9f65-a678918e4f1f"
                      }}
                      style={styles.ImageBackground_1_11344}
                    />
                    <View style={styles.View_1_11346}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31ac7bc1-7763-4942-a7ae-f47f260cda58"
                        }}
                        style={styles.ImageBackground_1_11347}
                      />
                      <View style={styles.View_1_11349}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9df4186a-711d-4522-9ef4-004e0651e0d0"
                          }}
                          style={styles.ImageBackground_1_11350}
                        />
                        <View style={styles.View_1_11352}>
                          <View style={styles.View_1_11353}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/812c4b2b-ad5a-4bd1-ab2f-c39b5d8c26c0"
                              }}
                              style={styles.ImageBackground_1_11354}
                            />
                          </View>
                          <View style={styles.View_1_11356}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5945fb27-659b-48ad-8155-dad01c0063ef"
                              }}
                              style={styles.ImageBackground_1_11357}
                            />
                          </View>
                          <View style={styles.View_1_11359}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c57a831-0355-4447-84b4-13fbd64635b9"
                              }}
                              style={styles.ImageBackground_1_11360}
                            />
                          </View>
                          <View style={styles.View_1_11362}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6c919c9-85de-4bf3-8f82-4deef11c0f47"
                              }}
                              style={styles.ImageBackground_1_11363}
                            />
                          </View>
                          <View style={styles.View_1_11365}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c8f8a95-5425-4fa0-a92f-0ab51da29266"
                              }}
                              style={styles.ImageBackground_1_11366}
                            />
                          </View>
                          <View style={styles.View_1_11368}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d4888e3-fdf9-4acd-8b77-f0318d31399f"
                              }}
                              style={styles.ImageBackground_1_11369}
                            />
                          </View>
                          <View style={styles.View_1_11371}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bee313f-879e-4d42-8368-cf7d57685d8b"
                              }}
                              style={styles.ImageBackground_1_11372}
                            />
                          </View>
                          <View style={styles.View_1_11374}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4bff999-593b-40e9-8146-31d234eb8a9c"
                              }}
                              style={styles.ImageBackground_1_11375}
                            />
                          </View>
                          <View style={styles.View_1_11377}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d9cc4f5-9ab7-4b40-8085-ab3224f4f8c2"
                              }}
                              style={styles.ImageBackground_1_11378}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_1_11380}>
                      <View style={styles.View_1_11381}>
                        <View style={styles.View_1_11382}>
                          <View style={styles.View_1_11383}>
                            <View style={styles.View_1_11384}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df3d1741-f2f2-4340-bc06-7227b106ec6a"
                                }}
                                style={styles.ImageBackground_1_11385}
                              />
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70dc845c-6880-4356-84c4-07e1c8b842c5"
                                }}
                                style={styles.ImageBackground_1_11387}
                              />
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_1_11389}>
                          <View style={styles.View_1_11390}>
                            <View style={styles.View_1_11391}>
                              <View style={styles.View_1_11392}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c515799c-71bb-498d-a597-d0b7bda8f3f5"
                                  }}
                                  style={styles.ImageBackground_1_11393}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_1_11395}>
                          <View style={styles.View_1_11396}>
                            <View style={styles.View_1_11397}>
                              <View style={styles.View_1_11398}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/697c4bec-933b-423b-a0af-18d0dbd443b7"
                                  }}
                                  style={styles.ImageBackground_1_11399}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29043640-9c51-448f-a476-1a9314cb123c"
                        }}
                        style={styles.ImageBackground_1_11401}
                      />
                    </View>
                    <View style={styles.View_1_11403}>
                      <View style={styles.View_1_11404}>
                        <View style={styles.View_1_11405}>
                          <View style={styles.View_1_11406}>
                            <View style={styles.View_1_11407}>
                              <View style={styles.View_1_11408}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3149e467-8a6f-43c6-ab26-d74cd0c68150"
                                  }}
                                  style={styles.ImageBackground_1_11409}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_1_11411}>
                          <View style={styles.View_1_11412}>
                            <View style={styles.View_1_11413}>
                              <View style={styles.View_1_11414}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3496534-1e56-4e58-9116-a161456aed46"
                                  }}
                                  style={styles.ImageBackground_1_11415}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_1_11417}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4832097-a3b6-4ef0-9cf7-748c9b215a6d"
                          }}
                          style={styles.ImageBackground_1_11418}
                        />
                      </View>
                      <View style={styles.View_1_11420}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99a4d15c-ce57-4293-96b2-fadbd60d421f"
                          }}
                          style={styles.ImageBackground_1_11421}
                        />
                      </View>
                      <View style={styles.View_1_11423}>
                        <View style={styles.View_1_11424}>
                          <View style={styles.View_1_11425}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4978b0bc-3622-4d92-b64c-f3f06912b376"
                              }}
                              style={styles.ImageBackground_1_11426}
                            />
                          </View>
                        </View>
                        <View style={styles.View_1_11428}>
                          <View style={styles.View_1_11429}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b360eacd-6bea-4f77-b9a6-b687be8abca6"
                              }}
                              style={styles.ImageBackground_1_11430}
                            />
                          </View>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c33fc2bb-e9fb-4c6d-a403-ae359aee2943"
                        }}
                        style={styles.ImageBackground_1_11432}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4cb47bb-510d-4e6a-8a6c-0c93e5d6b0e0"
                        }}
                        style={styles.ImageBackground_1_11434}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_1_11436}>
                  <View style={styles.View_1_11437}>
                    <View style={styles.View_1_11438}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dea5bfb8-41a7-4949-ae6b-a17f83b3870d"
                        }}
                        style={styles.ImageBackground_1_11439}
                      />
                    </View>
                    <View style={styles.View_1_11441}>
                      <View style={styles.View_1_11442}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d8bd044-a127-45b7-9d67-da4680113a45"
                          }}
                          style={styles.ImageBackground_1_11443}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_1_11445}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85568f45-4f0b-439c-8bc9-f211761b502e"
                      }}
                      style={styles.ImageBackground_1_11446}
                    />
                  </View>
                  <View style={styles.View_1_11448}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3795a763-b2f2-490b-a63a-228723eb65ef"
                      }}
                      style={styles.ImageBackground_1_11449}
                    />
                  </View>
                  <View style={styles.View_1_11451}>
                    <View style={styles.View_1_11452}>
                      <View style={styles.View_1_11453}>
                        <View style={styles.View_1_11454}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e16a084d-06cb-4acd-87c5-b4bb925f2881"
                            }}
                            style={styles.ImageBackground_1_11455}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_1_11457}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9256d175-86ab-4d33-abcd-0926b22de72e"
                      }}
                      style={styles.ImageBackground_1_11458}
                    />
                  </View>
                  <View style={styles.View_1_11460}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9405950b-c666-4ae9-a7fe-aa99feafd696"
                      }}
                      style={styles.ImageBackground_1_11461}
                    />
                  </View>
                  <View style={styles.View_1_11463}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/146b266e-01f1-4dca-b000-c3b6672c687e"
                      }}
                      style={styles.ImageBackground_1_11464}
                    />
                  </View>
                  <View style={styles.View_1_11466}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/305f1859-e41f-4bb1-87b4-306cf87a8e11"
                      }}
                      style={styles.ImageBackground_1_11467}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11469}>
                  <View style={styles.View_1_11470}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cef6c68-c9ca-4b35-93eb-ec21d0aa889c"
                      }}
                      style={styles.ImageBackground_1_11471}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e008585-a9ee-445a-82b0-42a28f81ca7e"
                    }}
                    style={styles.ImageBackground_1_11473}
                  />
                  <View style={styles.View_1_11475}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3055b0cf-292f-4670-9fd5-d36f1d2be7cc"
                      }}
                      style={styles.ImageBackground_1_11476}
                    />
                  </View>
                  <View style={styles.View_1_11478}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/321a2d37-ace3-48da-9526-a8b93a783e8a"
                      }}
                      style={styles.ImageBackground_1_11479}
                    />
                  </View>
                  <View style={styles.View_1_11481}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3ce8ce6-cd59-4e57-b3ce-367b43155ecc"
                      }}
                      style={styles.ImageBackground_1_11482}
                    />
                  </View>
                  <View style={styles.View_1_11484}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8241c834-a0b4-4c2f-8322-856350c539a7"
                      }}
                      style={styles.ImageBackground_1_11485}
                    />
                  </View>
                  <View style={styles.View_1_11487}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad20519d-6ea0-4fa3-952e-06ee391d3911"
                      }}
                      style={styles.ImageBackground_1_11488}
                    />
                  </View>
                  <View style={styles.View_1_11490}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f25d75b4-81a2-4bd0-b2ca-c25cb7490144"
                      }}
                      style={styles.ImageBackground_1_11491}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11493}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dba2bf0e-8b13-490a-80b7-e37288698e07"
                    }}
                    style={styles.ImageBackground_1_11494}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41773080-ae51-47c0-86c8-216e57e70eee"
                    }}
                    style={styles.ImageBackground_1_11496}
                  />
                  <View style={styles.View_1_11498}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61ff1ba7-982d-41cb-b27c-651fe481a2e5"
                      }}
                      style={styles.ImageBackground_1_11499}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11501}>
                  <View style={styles.View_1_11502}>
                    <View style={styles.View_1_11503}>
                      <View style={styles.View_1_11504}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a73e767-79ca-4258-834c-96a6facc0ef6"
                          }}
                          style={styles.ImageBackground_1_11505}
                        />
                      </View>
                    </View>
                    <View style={styles.View_1_11507}>
                      <View style={styles.View_1_11508}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46135b28-4af5-481d-8228-7bed0ad9108b"
                          }}
                          style={styles.ImageBackground_1_11509}
                        />
                      </View>
                    </View>
                    <View style={styles.View_1_11511}>
                      <View style={styles.View_1_11512}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43e96171-b58c-420d-9317-40bee2e4a081"
                          }}
                          style={styles.ImageBackground_1_11513}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_1_11515}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28560c57-4a08-4ff8-a4a5-0f29bbbfc085"
                      }}
                      style={styles.ImageBackground_1_11516}
                    />
                  </View>
                  <View style={styles.View_1_11518}>
                    <View style={styles.View_1_11519}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72bdbe6e-9ddb-47f3-95e8-7836974a97ec"
                        }}
                        style={styles.ImageBackground_1_11520}
                      />
                    </View>
                  </View>
                  <View style={styles.View_1_11522}>
                    <View style={styles.View_1_11523}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccac7df4-53eb-4780-b026-2ff9e4a79154"
                        }}
                        style={styles.ImageBackground_1_11524}
                      />
                    </View>
                  </View>
                  <View style={styles.View_1_11526}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12384c57-5473-4e8d-b2a8-5b0dd6c95fc0"
                      }}
                      style={styles.ImageBackground_1_11527}
                    />
                  </View>
                </View>
                <View style={styles.View_1_11529}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76c7b845-990d-4f24-a4e9-392e68fbae15"
                    }}
                    style={styles.ImageBackground_1_11530}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_11532}>
          <View style={styles.View_1_11533}>
            <View style={styles.View_1_11534}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8607f660-9610-40bf-ab93-33a98d6785a6"
                }}
                style={styles.ImageBackground_1_11535}
              />
            </View>
          </View>
          <View style={styles.View_1_11537}>
            <View style={styles.View_1_11538}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e8b282b-36cd-49be-8db5-f7387cf1053b"
                }}
                style={styles.ImageBackground_1_11539}
              />
            </View>
          </View>
          <View style={styles.View_1_11541}>
            <View style={styles.View_1_11542}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb76e0a2-bdb6-4e15-9ad6-32f1c7ebec7f"
                }}
                style={styles.ImageBackground_1_11543}
              />
            </View>
          </View>
          <View style={styles.View_1_11545}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1421c49-09c6-4579-8f66-0490486d0daa"
              }}
              style={styles.ImageBackground_1_11546}
            />
          </View>
          <View style={styles.View_1_11548}>
            <View style={styles.View_1_11549}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a1ba955-a0d6-4c15-843a-066b3662e32b"
                }}
                style={styles.ImageBackground_1_11550}
              />
              <View style={styles.View_1_11552}>
                <View style={styles.View_1_11553}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/501333d7-abd3-4880-8f93-b65a9a55f27f"
                    }}
                    style={styles.ImageBackground_1_11554}
                  />
                  <View style={styles.View_1_11556}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/008cdba1-c98d-45fd-a79d-0ad6639c2aff"
                      }}
                      style={styles.ImageBackground_1_11557}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c01d526b-9143-4b28-8bee-f2497216df9b"
                  }}
                  style={styles.ImageBackground_1_11559}
                />
                <View style={styles.View_1_11561}>
                  <View style={styles.View_1_11562}>
                    <View style={styles.View_1_11563}>
                      <View style={styles.View_1_11564}>
                        <View style={styles.View_1_11565}>
                          <View style={styles.View_1_11566}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8614151-7778-48c1-a491-af726e695289"
                              }}
                              style={styles.ImageBackground_1_11567}
                            />
                          </View>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d4bfda8-6752-4e50-a43f-ba809cba5755"
                        }}
                        style={styles.ImageBackground_1_11569}
                      />
                      <View style={styles.View_1_11571}>
                        <View style={styles.View_1_11572}>
                          <View style={styles.View_1_11573}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/919cceca-967f-4883-a433-68623d29e979"
                              }}
                              style={styles.ImageBackground_1_11574}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/158fe28e-1302-4351-90e0-32829629c7eb"
                      }}
                      style={styles.ImageBackground_1_11576}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_12861}>
        <View style={styles.View_1_12862} />
        <View style={styles.View_1_12863}>
          <Text style={styles.Text_1_12863}>Create Account</Text>
        </View>
      </View>
      <View style={styles.View_1_12875}>
        <View style={styles.View_1_12876} />
        <View style={styles.View_1_12877}>
          <Text style={styles.Text_1_12877}>Login</Text>
        </View>
      </View>
      <View style={styles.View_1_14154}>
        <Text style={styles.Text_1_14154}>
          Welcome to PetPark social network, where people and pets connect
        </Text>
      </View>
      <View style={styles.View_1_14162} />
      <View style={styles.View_1_14163}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e44948d7-e19b-43b2-9455-d1cdc2ee4ab6"
          }}
          style={styles.ImageBackground_1_14164}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127%") },
  View_1_10797: {
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
  ImageBackground_1_10798: {
    width: wp("100%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_10799: {
    width: wp("78%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_10800: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_1_10801: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_10804: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_10805: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_1_10806: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_10807: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_1_10808: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_10809: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_10809: {
    color: "rgba(33, 29, 31, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_10821: {
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
  View_I1_10821_1_51: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I1_10821_1_52: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("4%")
  },
  View_1_14153: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%")
  },
  View_1_10973: {
    width: wp("85%"),
    height: hp("50%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_10974: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_1_10976: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_1_10978: {
    width: wp("28%"),
    height: hp("4%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_1_10980: {
    width: wp("23%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_10982: {
    width: wp("61%"),
    height: hp("36%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_10983: {
    width: wp("61%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_10984: {
    width: wp("56%"),
    height: hp("30%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_10985: {
    width: wp("41%"),
    height: hp("21%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_10986: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_1_10988: {
    width: wp("41%"),
    height: hp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_10990: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_10991: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_10993: {
    width: wp("27%"),
    height: hp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_10994: {
    width: wp("27%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_10996: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_10997: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_10999: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_11000: {
    width: wp("17%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11002: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_1_11003: {
    width: wp("14%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11005: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_11006: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11008: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11009: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11011: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_11012: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11014: {
    width: wp("20%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_11015: {
    width: wp("20%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11017: {
    width: wp("12%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_1_11018: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11020: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11022: {
    width: wp("7%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_11024: {
    width: wp("17%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_1_11025: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11026: {
    width: wp("7%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11028: {
    width: wp("8%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11030: {
    width: wp("17%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11031: {
    width: wp("13%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11033: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11034: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11036: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11037: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11039: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11040: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11041: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11043: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11044: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11046: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11047: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11049: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11050: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11052: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_11053: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11055: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_11056: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11058: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_11059: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11061: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_1_11062: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11064: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_1_11065: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11067: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_1_11068: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11069: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11070: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11071: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11072: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11074: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11076: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11077: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11078: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11079: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11080: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11082: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11083: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11084: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11085: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11086: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11088: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11090: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11091: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_11092: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11093: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11094: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11095: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11096: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11098: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_1_11099: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11100: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11101: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11102: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11104: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11105: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11107: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11108: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11110: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11111: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11112: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11113: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11115: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_1_11116: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11117: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11119: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11120: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11122: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11124: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11126: {
    width: wp("14%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_11127: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11128: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11129: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11130: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11131: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11133: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1_11134: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11135: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11137: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_1_11138: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11139: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11141: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_1_11142: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11143: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11144: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11145: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11147: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11148: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11149: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11150: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11152: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_11153: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11154: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11155: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11157: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_11158: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11159: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11160: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11162: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11163: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11164: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11165: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11167: {
    width: wp("13%"),
    height: hp("18%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11168: {
    width: wp("13%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11169: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11170: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11171: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11173: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_11174: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11175: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11177: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11178: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11179: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11181: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_11182: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11183: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11185: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_11186: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11188: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_11189: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11190: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11192: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_11193: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11194: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11196: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_11197: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11199: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_11200: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11202: {
    width: wp("43%"),
    height: hp("25%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_1_11203: {
    width: wp("27%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_11204: {
    width: wp("27%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11206: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_11207: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11209: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11210: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11211: {
    width: wp("34%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11213: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11214: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11216: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11217: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11219: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_1_11221: {
    width: wp("16%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_1_11222: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11223: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11225: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11226: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11228: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11229: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_11230: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11231: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11232: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11233: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11235: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_11237: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_11238: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11239: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11240: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11242: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11244: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_1_11245: {
    width: wp("7%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11246: {
    width: wp("7%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11248: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11250: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_11251: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11253: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_11254: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11256: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_11257: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11259: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11260: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11262: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_11263: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11265: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_11266: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11268: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_1_11269: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11270: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11271: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11272: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11273: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11274: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11276: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11277: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11278: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11279: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11280: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11282: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11283: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11284: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11285: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11286: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11288: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11289: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11290: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11291: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11293: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11294: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11295: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11297: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11298: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11299: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_11301: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11303: {
    width: wp("16%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11304: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_1_11306: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11307: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11309: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11310: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11312: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11313: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11315: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11316: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11318: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_11319: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11321: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_1_11322: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11324: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_11325: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11327: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11328: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11330: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_11331: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11333: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11335: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11337: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_11338: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11339: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11341: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11343: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11344: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11346: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11347: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11349: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11350: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11352: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11353: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11354: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11356: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_11357: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11359: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11360: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11362: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11363: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11365: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11366: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11368: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11369: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11371: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11372: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11374: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11375: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11377: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11378: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11380: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11381: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11382: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11383: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11384: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11385: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11387: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11389: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11390: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11391: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11392: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11393: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11395: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11396: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11397: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11398: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11399: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11401: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11403: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11404: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11405: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11406: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11407: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11408: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11409: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11411: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11412: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11413: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11414: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11415: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11417: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11418: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11420: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11421: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11423: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11424: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11425: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11426: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11428: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11429: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11430: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11432: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11434: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11436: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11437: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11438: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11439: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11441: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11442: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11443: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11445: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11446: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11448: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_11449: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11451: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_11452: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11453: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11454: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11455: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11457: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_11458: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11460: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_11461: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11463: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_1_11464: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11466: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_11467: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11469: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11470: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11471: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11473: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11475: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11476: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11478: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11479: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11481: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11482: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11484: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11485: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11487: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11488: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11490: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_11491: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11493: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_11494: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11496: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11498: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11499: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11501: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_11502: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11503: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11504: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11505: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11507: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11508: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11509: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11511: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_11512: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11513: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11515: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11516: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11518: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11519: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11520: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11522: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11523: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11524: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11526: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11527: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11529: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11530: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11532: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_11533: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11534: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11535: {
    width: wp("17%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11537: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11538: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11539: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11541: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11542: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11543: {
    width: wp("17%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11545: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_11546: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11548: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_11549: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11550: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11552: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11553: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11554: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11556: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_11557: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11559: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_11561: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11562: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11563: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_11564: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11565: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11566: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11567: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11569: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_1_11571: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_11572: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_11573: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11574: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_11576: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_12861: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("101%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_12862: {
    flexGrow: 1,
    width: wp("82%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_12863: {
    flexGrow: 1,
    width: wp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_12863: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_12875: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("112%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_12876: {
    width: wp("82%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_12877: {
    width: wp("52%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "flex-start"
  },
  Text_1_12877: {
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14154: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_1_14154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_14162: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("12%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_14163: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_14164: {
    width: wp("10%"),
    height: hp("7%"),
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
