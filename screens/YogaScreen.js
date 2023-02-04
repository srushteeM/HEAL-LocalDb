import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
  Platform,
} from "react-native";
import { styles } from "../screens/css/commonContentBox";

class YogaScreen extends Component {
  openYogaWebsite = () => {
    Linking.openURL("https://www.nytimes.com/guides/well/beginner-yoga");
  };
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
      <View style={{backgroundColor:'#fff', height: '100vh'}}>
        <View style={styles.logosBox}>
          <Image style={styles.imgTop}
            source={"https://cdn-icons-png.flaticon.com/512/2043/2043869.png"}
          />
        <Text style={styles.text}>YOGA</Text>  
        </View>
        <Text style={styles.contentBox}>
        A set of specific exercises, called poses, combined with specific breathing techniques and meditation principles are the building blocks of a yoga class. If a pose causes pain or proves too difficult, there are variations and modifications that can be made to help students. Props like blocks, blankets and straps — even chairs — can be used to help you get the most benefit from the poses. Yoga is not one-size-fits-all: The best yoga workout for you will depend on your individual needs and goals.
        </Text>
        <TouchableHighlight onPress={() => this.openYogaWebsite()}>
          <Text style={styles.knowMoreBtn}>Know more...</Text>
        </TouchableHighlight>
        
        <Text style={styles.shortText}>
        A yoga teacher is a fitness and wellness professional who leads group classes in yoga. They teach students how to perform the various stretching poses, practice meditation and promote mindfulness in addition to overall wellbeing. These professionals are also often referred to as “yoga instructors” and “yogis.”
        </Text>
        <TouchableHighlight onPress={() => this.openDialScreen()}>
          <Text style={styles.contactBtn}>Contact Yoga Instructor</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default YogaScreen;
