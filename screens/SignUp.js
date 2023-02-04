import React, { Component } from "react";
import {
  TouchableHighlight,
  Image,
  Alert,
  View,
  TextInput,
  Text,
} from "react-native";
import { styles } from "./css/signup";
import AppLogo from "../components/AppLogo";
import firebase from "firebase";
import db from "../config";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      phone: null,
    };
  }
  userSignUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        db.collection("users").add({
          username: this.state.username,
          phone: this.state.phone,
          email: this.state.email,
          aboutMe: "",
        });
        this.props.navigation.navigate("Home");
        return alert("User Added Successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View>
        <View style={styles.parentBox}>
          {/* Logo of the app */}
          <AppLogo />

          {/* Image on the signup page */}
          <View style={styles.childBox}>
            <Image
              source={require("../assets/circle-top.png")}
              style={styles.imgCircle}
            />
            <Image
              source={require("../assets/logo-heal.png")}
              style={styles.imgLogo}
            />
            <Image
              source={require("../assets/signup-img.svg")}
              style={styles.imgYoga}
            />
            <Image
              source={require("../assets/right-shape.png")}
              style={styles.imgShape}
            />
            <View>
              <Image
                source={require("../assets/user.png")}
                style={styles.imgIcon}
              />
              <TextInput
                placeholder="Username"
                style={styles.inputField}
                underlineColorAndroid="transparent"
                onChangeText={(name) => this.setState({ username: name })}
              />
            </View>

            <View>
              <Image
                source={require("../assets/icon-mail.png")}
                style={styles.imgIcon}
              />
              <TextInput
                placeholder="Email Address"
                style={styles.inputField}
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={(email) => this.setState({ email: email })}
              />
            </View>

            <View>
              <Image
                source={require("../assets/call.png")}
                style={styles.imgIcon}
              />
              <TextInput
                placeholder="Phone number"
                style={styles.inputField}
                keyboardType="number"
                underlineColorAndroid="transparent"
                onChangeText={(phone) => this.setState({ phone: phone })}
              />
            </View>

            <View>
              <Image
                source={require("../assets/icon-lock.png")}
                style={styles.imgIcon}
              />
              <TextInput
                placeholder="Password"
                style={styles.inputField}
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
              />
            </View>

            <TouchableHighlight
              style={styles.btnSignUp}
              onPress={() => {
                this.userSignUp(
                  this.state.email,
                  this.state.password,
                  this.state.confirmPassword
                );
              }}
            >
              <Text style={styles.btnSignUpText}>SignUp</Text>
            </TouchableHighlight>

            <Text style={styles.btnSignInText}>
              Already have an account ?
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Text style={styles.signInLink}>Sign In</Text>
              </TouchableHighlight>
            </Text>

            <Image
              source={require("../assets/wave.png")}
              style={styles.bottomImg}
            />
          </View>
        </View>
      </View>
    );
  }
}
