import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  FlatList,
} from "react-native";

import db from "../config";
import firebase from "firebase";
class StoriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  fetchPosts = async () => {
    // db.collection("stories")
    //   .get()
    //   .then((snapshot) => {
    //     snapshot.forEach((doc) => {
    //       var data = doc.data();
    //       console.log(data);
    //       this.setState({
    //         // email: data.email,
    //         username: data.username,
    //         profileImage: doc.data().profileImage,
    //         postImage: data.postImage,
    //         postMessage: data.postMessage,
    //         //  aboutMe: data.aboutMe,
    //         //  phone: data.phone,
    //         docId: doc.id,
    //       });
    //     });
    //   });
  };
  componentDidMount() {
    //  this.fetchPosts();
  }
  renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image src={{ uri: item.profileImage }} />
      <Text style={styles.title}>{item.username}</Text>
      <Image src={{ uri: item.postImage }} style={styles.cardImage} />
      <Text style={styles.description}>{item.postMessage}</Text>
    </View>
  );
  render() {
    if (this.state.data != null) {
      return (
        <View>
          <TouchableHighlight

            onPress={() => this.props.navigation.navigate("Create Post")}
          >
            <Text style={styles.createPostBtn}>Create Post...</Text>
          </TouchableHighlight>
          <View style={styles.container}>
            <FlatList
              style={styles.list}
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => {
                return <View style={styles.separator} />;
              }}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "#EEEEEE",
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },

  /******** card components **************/

  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: "#888",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: "row",
  },

  /******** social bar ******************/

  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  createPostBtn: {
    backgroundColor: "#8530d1",
    color: "#fff",
    textAlign: "center",
    lineHeight: "px",
    margin: "12px",
    borderTopLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px",
    padding: "5px",
  },
});
export default StoriesScreen;
