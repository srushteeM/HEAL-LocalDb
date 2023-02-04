import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Platform,
  Linking,
} from "react-native";

export default class CompanionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:18005990019";
    } else {
      number = "tel:18005990019";
    }
    Linking.openURL(number);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image
            source={require("../assets/logo-heal.png")}
            style={styles.imgLogo}
          />
        </View>
        <View  style={styles.contentBox}>
          <Text style={styles.content}>
            When you are feeling alone and need someone to talk to, please don't
            hesitate to reach out and talk to us. We are here for you and want
            to be a companion. We want you to know that whatever you are going
            through we are with you and nothing you say will make us judge you.
            We are here to listen and provide support as much as we can. We
            understand that it is not easy to open up and talk about what you
            are going through.We will be here to provide comfort and support.
          </Text>
        </View>
        <TouchableHighlight onPress={() => this.openDialScreen()} style={styles.phoneBox}>
          <Image 
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3059/3059590.png",
            }}
            style={styles.phoneIcon}
          />
        </TouchableHighlight>
      </View>
    );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor:'#fff'
  },
  imgLogo: {
    height: "50px",
    width: "170px",
    left: "50%",
    top: "10%",
    zIndex: "9",
    transform: "translate(-50%, -15px)",
  },

  logoBox:{
    height:"100px",
    width: '100%',
    justifyContent: 'space-evenly',
    display: 'flex',
    marginTop: '10%',
    marginBottom: '-5%',
  },

  contentBox:{
    marginTop: '4%',
  },

  content:{
    fontSize:'100%',
    lineHeight:'25px',
    marginLeft: '5%',
    marginRight:'5%',
    textAlign: 'center'
  },

  phoneIcon:{
    height:80,
    width:80,
    position:'absolute',
    left:'50%',
    transform:'translate(-50%, 50%)'
  },


});
