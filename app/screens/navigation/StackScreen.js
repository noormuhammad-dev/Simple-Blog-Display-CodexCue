import AllBlogs from "../blog/AllBlogs";
import BlogDetail from "../blog/BlogDetail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{animation:"slide_from_right"}}>
      <Stack.Screen
        options={{ title: "All Blogs" }}
        name="allBlogs"
        component={AllBlogs}
      />
      <Stack.Screen name="blogDetail" component={BlogDetail} options={{ title: "Blog Detail" }} />
    </Stack.Navigator>
  );
};

export default StackScreen;
