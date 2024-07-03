import { FlatList, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import blogs from "../../data/blogs.json";
import BlogListItem from "../../components/BlogListItem";

const AllBlogs = () => {
  return (
    <FlatList
      data={blogs.blogs}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <BlogListItem item={item} />}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export default AllBlogs;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: hp(2),
  },
});
