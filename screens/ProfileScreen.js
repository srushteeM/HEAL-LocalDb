import React, { Component } from "react";
import { styles } from "./css/profileScreen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import firebase from "firebase";
//import db from "../config";
import db from '../database/userProfile'
export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "#",
      username: "",
      aboutMe: "",
      phone: " ",
      email: "",
      logout: "",
    };
  }
  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.username);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = async (imageName) => {
    
    var storageRef =  firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    // Get the download URL
    await storageRef
      .getDownloadURL()
      .then((url) => {
       
        this.setState({ profileImage: url });
      })
      .catch((error) => {
        this.setState({ profileImage: "#" });
      });
  };

  // Function to fetch user information from database
  fetchUserData = () => {
    var email = firebase.auth().currentUser.email;
  return  db.collection("users")
      .where("email", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            email: data.email,
            username: data.username,
            profileImage: doc.data().profileImage,
            aboutMe: data.aboutMe,
            phone: data.phone,
            docId: doc.id,
          });
        });
      });
  };

  fetchDataFromLocalDb=async()=>{
    var data=db[0]
    this.setState({
       email: data.email,
            username: data.username,
            profileImage: data.profileImage,
            aboutMe: data.aboutMe,
            phone: data.phone,
    })
  }
 async componentDidMount() {
  //use try catch block
  //  await this.fetchUserData();

  //   this.fetchImage(this.state.username);
  this.fetchDataFromLocalDb()
  }

  // Function to change user information in database
  updateUserData = () => {
    db.collection("users").doc(this.state.docId).update({
      profileImage: this.state.profileImage,
      aboutMe: this.state.aboutMe,
      phone: this.state.phone,
    });

    alert("Profile Updated Successfully");
  };

  render() {
    return (
      <View View style={styles.container}>
        <View style={styles.header}>
          {/* Profile picture */}
          <View style={styles.userBox}>
            <Image
              style={styles.avatar}
              source={{ uri: this.state.profileImage }}
            />

            <TouchableHighlight onPress={() => this.selectPicture()}>
              <Image
                style={styles.editProfile}
                source={require("../assets/pencil.svg")}
              />
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.body}>
          {/* Name */}
          <View style={styles.userNameBox}>
            <View>
              <Image
                style={styles.iconUser}
                source={require("../assets/user-icon.svg")}
              />
            </View>
            <View>
              <Text style={styles.info}>Name: {this.state.username}</Text>
            </View>
          </View>

          {/* About */}
          <View style={styles.aboutBox}>
            <View>
              <Image
                style={styles.iconAbout}
                source={require("../assets/chat.svg")}
              />
            </View>
            <View>
              <Text style={styles.info}>About Me:</Text>
              <TextInput
                multiline={true}
                editable={this.state.aboutMeEditable}
                onChangeText={(text) => {
                  this.setState({
                    aboutMe: text,
                  });
                }}
                value={this.state.aboutMe}
              />
            </View>
            <TouchableHighlight
              style={styles.aboutIconBox}
              onPress={() => this.setState({ aboutMeEditable: true })}
            >
              <Image
                style={styles.aboutEditIcon}
                source={require("../assets/pencil.svg")}
              />
            </TouchableHighlight>
          </View>

          {/* Phone number */}
          <View style={styles.PhoneBox}>
            <View>
              <Image
                style={styles.iconPhone}
                source={require("../assets/phone.svg")}
              />
            </View>
            <View>
              <Text style={styles.info}>Phone:</Text>
              <TextInput
                maxLength={10}
                editable={this.state.phoneEditable}
                keyboardType={"numeric"}
                onChangeText={(text) => {
                  this.setState({
                    phone: text,
                  });
                }}
                value={this.state.phone}
              />
            </View>
            <TouchableHighlight
              style={styles.iconPhoneBox}
              onPress={() => this.setState({ phoneEditable: true })}
            >
              <Image
                style={styles.iconPhoneEdit}
                source={require("../assets/pencil.svg")}
              />
            </TouchableHighlight>
          </View>

          {/* Email Address */}
          <View style={styles.emailBox}>
            <View>
              <Image
                style={styles.iconEmail}
                source={require("../assets/mail.svg")}
              />
            </View>
            <View>
              <Text style={styles.info}>Email:{this.state.email}</Text>
              <TouchableHighlight
                // style={styles.button}
                onPress={() => {
                  this.setState({
                    aboutMeEditable: false,
                    phoneEditable: false,
                  });
                  this.updateUserData();
                }}
              >
                <Text style={styles.saveBtn}>Save</Text>
              </TouchableHighlight>
            </View>
          </View>

          {/* Logout Button */}
          <View style={styles.LogoutBox}>
            <View>
              <Image
                style={styles.iconLogout}
                source={require("../assets/logout.png")}
              />
            </View>
            <TouchableHighlight 
                // style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate("Login");
                  firebase.auth().signOut();
                }}
              >
                <Text style={styles.logoutTxt}>Logout</Text>
              </TouchableHighlight>
          </View>

          <View>
            <Image
              style={styles.bottomWave}
              source={require("../assets/wave.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}
