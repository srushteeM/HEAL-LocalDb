import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from "react-native";
import { v4 as uuid } from "uuid";
import firebase from "firebase";
import db from "../config";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: firebase.auth().currentUser.email,
      username: "",
      profileImage: "#",
      postMessage: "",
      postImage: "",
      img_id: "",
    };
  }
  fetchUserData = async () => {
    var email = firebase.auth().currentUser.email;

    return db
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          console.log(doc.data().profileImage);
          this.setState({
            email: data.email,
            username: data.username,
            profileImage: data.profileImage,
            docId: doc.id,
          });
        });
      });
  };

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      const img_id = uuid();
      this.setState({ img_id: img_id });
      this.uploadImage(uri, img_id);
    }
  };
  uploadImage = async (uri, img_id) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_stories/" + img_id);

    return ref.put(blob).then((response) => {
      this.fetchImage(img_id);
    });
  };
  fetchImage = async (img_id) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("user_stories/" + this.state.img_id);

    // Get the download URL
    await storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ postImage: url });
        console.log(this.state.postImage);
      })
      .catch((error) => {
        this.setState({ postImage: "#" });
      });
  };

  createPost = () => {
    const unique_id = uuid();
    db.collection("stories").add({
      unique_id: unique_id,
      username: this.state.username,
      profileImage: this.state.profileImage,
      postMessage: this.state.postMessage,
      img_id: this.state.img_id,
      postImage: this.state.postImage,
    });
    this.setState({
      postMessage: "",
      postImage: "",
      img_id: "",
    });
  };

  async componentDidMount() {
    await this.fetchUserData();
    //this.fetchImage();
  }
  render() {
    return (
      <View>
        {/* Profile picture */}
        <Image style={styles.avatar} src={{ uri: this.state.profileImage }} />
        {/* Username */}
        <Text style={styles.userNameTxt}>{this.state.username}</Text>
        {/* Input box for post message */}
        <TextInput
          style={styles.textBox}
          placeholder="What's on your mind?"
          multiline={true}
          value={this.state.postMessage}
          onChangeText={(text) => this.setState({ postMessage: text })}
        />
        <Image src={{ uri: this.state.postImage }} />
        {/* Button to upload Image */}
        <TouchableHighlight onPress={() => this.selectPicture()}>
          <Text style={styles.uploadBtn}>Upload Image</Text>
        </TouchableHighlight>
        {/* Button to create post */}
        <TouchableHighlight onPress={() => this.createPost()}>
          <Text style={styles.uploadBtn}>Post</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CreatePost;
/*
format of data to be saved in database.
{
    id:""
    username:"",
    profileImage:"",
    postImage:"",
    postText:""
}

*/

const styles = StyleSheet.create({
  uploadBtn: {
    backgroundColor: "#8530d1",
    color: "#fff",
    textAlign: "center",
    lineHeight: "20px",
    marginTop: "5px",
    marginLeft: "10px",
    marginRight: "10px",
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
    padding: "5px",
  },

  textBox: {
    marginTop: "2%",
    border: "1px solid grey",
    backgroundColor: "white",
    height: "150px",
    border: "1px solid grey",
    margin: "12px",
    padding: "10px",
  },

  userNameTxt: {
    textAlign: "left",
    marginTop: "15px",
    marginLeft: "15px",
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "1.5rem",
  },

  iconUpload: {
    height: "15px",
    width: "15px",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "lavender",
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: "20%",
    left: "10%",
  },
});
