import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
//import { Images } from "../Images";

export default class LetsHealScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "REIKI",
          image: "https://cdn-icons-png.flaticon.com/512/3696/3696322.png",
          screen:"Reiki"
        },
        {
          id: 2,
          title: "YOGA",
          image: "https://cdn-icons-png.flaticon.com/512/2043/2043787.png",
          screen:"Yoga"
        },
        {
          id: 3,
          title: "MEDITATION",
          image: "https://cdn-icons-png.flaticon.com/512/384/384156.png",
          screen:"Meditation"
        },
        {
          id: 4,
          title: "THERAPIST",
          image: "https://cdn-icons-png.flaticon.com/512/1971/1971437.png",
          screen:"Therapist"
        },
      ],
    };
  }

  navigate(item) {
    this.props.navigation.navigate(item.screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image
            source={require("../assets/logo-heal.png")}
            style={styles.imgLogo}
          />
        </View>

        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.navigate(item);
                }}
              >
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardHeader}>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <Image
          source={require("../assets/buttom-shape-hills.svg")}
          style={styles.bottomImg}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: "#fff",
  },

  logoBox: {
    height: "100px",
    width: "100%",
    justifyContent: "space-evenly",
    display: "flex",
    marginTop: "15%",
  },

  listContainer: {
    margin: 12,
  },

  /******** card **************/

  card: {
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 1,
    marginVertical: 1,
    backgroundColor: "white",
    flexBasis: "50%",
    marginHorizontal: 1,
  },

  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },

  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },

  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    // color:"#696969"
  },

  imgLogo: {
    height: "55px",
    width: "175px",
    left: "50%",
    top: "10%",
    zIndex: "9",
    transform: "translate(-50%, -15px)",
  },

  bottomImg: {
    position: "absolute",
    width: "100%",
    height: "200px",
    bottom: 0,
    zIndex: 999,
  },
});
