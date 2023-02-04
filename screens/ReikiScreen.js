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

class ReikiScreen extends Component {
  openReikiWebsite = () => {
    Linking.openURL("https://www.reiki.org/faqs/what-reiki");
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
      <View style={{backgroundColor:'#fff', height:'100vh'}}>
        <View style={styles.logosBox}>
          <Image style={styles.imgTop}
            source={"https://cdn-icons-png.flaticon.com/512/8086/8086219.png"}
          />
        <Text style={styles.text}>REIKI</Text>  
        </View>
        <Text style={styles.contentBox}>
          Reiki is a Japanese technique for stress reduction and relaxation that
          also promotes healing. The word Reiki is made of two Japanese words -
          Rei which means "God's Wisdom or the Higher Power" and Ki which is
          "life force energy". So Reiki is actually "spiritually guided life
          force energy." A treatment feels like a wonderful glowing radiance
          that flows through and around you. Reiki treats the whole person
          including body, emotions, mind and spirit creating many beneficial
          effects that include relaxation and feelings of peace, security and
          wellbeing. Many have reported miraculous results. Reiki is a simple,
          natural and safe method of spiritual healing and self-improvement that
          everyone can use. It has been effective in helping virtually every
          known illness and malady and always creates a beneficial effect. It
          also works in conjunction with all other medical or therapeutic
          techniques to relieve side effects and promote recovery.
        </Text>
        <TouchableHighlight onPress={() => this.openReikiWebsite()}>
          <Text style={styles.knowMoreBtn}>Know more...</Text>
        </TouchableHighlight>
        <Text style={styles.shortText}>
          A reiki master is someone who has been attuned to the highest level of
          reiki. The attunement process opens up your body so that you're able
          to transmit healing energy, and lasts for your entire life.
        </Text>
        <TouchableHighlight onPress={() => this.openDialScreen()}>
          <Text style={styles.contactBtn}>Contact Reiki Master</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ReikiScreen;
