import { createStackNavigator } from "react-navigation-stack";

import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeList from "../Components/CoffeeList";
import CoffeeCart from "../Components/CoffeeCart";
// import CoffeeCart from "./Components/CoffeeCart";

const StackNav = createStackNavigator(
  {
    HomeScreen: Login,
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    SignupScreen: Signup,
    CartScreen: CoffeeCart
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
