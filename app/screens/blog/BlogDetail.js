import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BlogDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>
          <Text style={styles.description}>Description: </Text>
          {item.content}
        </Text>
      </View>
    </View>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#ccc",
  },
  image: {
    width: "100%",
    height: hp(25),
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginVertical: hp(2),
    fontSize: hp(1.8),
  },
  description: {
    fontWeight: "bold",
  },
  content: {
    fontSize: hp(1.7),
    borderTopWidth: 1,
    borderColor: "#00000078",
    paddingTop: hp(1),
    lineHeight:hp(2.4)
  },
});
