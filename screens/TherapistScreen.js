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

class TherapistScreen extends Component {
  openTherapistWebsite = () => {
    Linking.openURL("https://www.helpguide.org/articles/mental-health/finding-a-therapist-who-can-help-you-heal.htm#:~:text=Therapy%20can%20be%20an%20effective,that's%20weighing%20on%20your%20mind.");
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
            source={"https://cdn-icons-png.flaticon.com/512/1971/1971504.png"}
          />
          <Text style={styles.text}>THERAPIST</Text>  
        </View>
        <Text style={styles.contentBox}>
        Therapy can be an effective treatment for a host of mental and emotional problems. Simply talking about your thoughts and feelings with a supportive person can often make you feel better. It can be very healing, in and of itself, to voice your worries or talk about something that's weighing on your mind.
        </Text>
        <TouchableHighlight onPress={() => this.openTherapistWebsite()}>
          <Text style={styles.knowMoreBtn}>Know more...</Text>  
        </TouchableHighlight>
        
        <Text style={styles.shortText}> 
        Therapists guide you to see how your feelings, thoughts, choices, and actions affect each other. Learn things. Therapists teach lessons about emotions, thoughts, coping skills, facing fears, and more. Parents and caregivers may learn ways to help you too.
        </Text>
        <TouchableHighlight onPress={() => this.openDialScreen()}>
          <Text style={styles.contactBtn}>Contact Therapist</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default TherapistScreen;
