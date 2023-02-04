import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
//import { Stack, TextInput, IconButton } from "@react-native-material/core";
//import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AppLogo from "../components/AppLogo";
import { styles } from "./css/login";
import firebase from "firebase";
import db from "../config";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  userLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  resetPassword = async (email) => {
    if (email === "") {
      alert("Please enter your email Id");
    } else {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          // Password reset email sent!
          // ..
          alert("Password reset email sent!");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ..
        });
     
    }
  };

  render() {
    return (
      <View style={styles.parentBox}>
        {/* Logo of the app */}
        <AppLogo />
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
            source={require("../assets/login-img.svg")}
            style={styles.imgLogin}
          />
          <Image
            source={require("../assets/right-shape.png")}
            style={styles.imgShape}
          />
          {/* Image on the login page */}
          <Text style={styles.welcomeText}>
            Hi! Please login to your account
          </Text>
          {/* <Image source={{ uri: "#" }} /> */}

          {/* Email address input */}
          <View>
            <Image
              source={require("../assets/user.png")}
              style={styles.imgIcon}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={(email) => this.setState({ email: email })}
            />
          </View>

          {/* Password address input */}
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
              onChangeText={(password) => this.setState({ password: password })}
            />
          </View>

          {/* Forgot Password Button */}
          <TouchableHighlight
            onPress={() => this.resetPassword(this.state.email)}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableHighlight>

          {/* Login Button */}
          <TouchableHighlight
            style={styles.btnSignUp}
            onPress={() =>
              this.userLogin(this.state.email, this.state.password)
            }
          >
            <Text style={styles.btnSignUpText}>SIGN IN</Text>
          </TouchableHighlight>

          {/* Signup Button */}

          <Text style={styles.signUpText}>
            Don't have an account?
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableHighlight>
          </Text>

          <Image
            source={require("../assets/wave.png")}
            style={styles.bottomImg}
          />
        </View>
      </View>
    );
  }
}
