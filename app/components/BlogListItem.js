import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { memo } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const BlogListItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("blogDetail", { item })}
      activeOpacity={0.7}
      style={styles.wrapper}
    >
      <View style={styles.blogListItemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content} numberOfLines={2}>
            {item.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(BlogListItem);

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: hp(1),
    marginHorizontal: wp(2.5),
    overflow: "hidden",
    backgroundColor: "#fff",
    borderRadius: 6,
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  imageContainer: { backgroundColor: "#ccc" },
  image: {
    width: "100%",
    height: hp(10),
  },
  contentContainer: {
    marginHorizontal: wp(2),
    marginVertical: hp(0.8),
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginVertical: hp(0.5),
    fontSize: hp(1.7),
  },
  content: {
    fontSize: hp(1.6),
  },
});
