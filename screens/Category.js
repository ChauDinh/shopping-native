import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name")
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      science: [
        {
          id: 1,
          isbn: "9781107154889"
        },
        {
          id: 2,
          isbn: "1593279566"
        },
        {
          id: 3,
          isbn: "0262220695"
        },
        {
          id: 4,
          isbn: "0262510871"
        }
      ],
      business: [
        { id: 5, isbn: "1944515720" },
        { id: 6, isbn: "1591845572" },
        { id: 7, isbn: "081298160X" }
      ],
      literature: [
        { id: 8, isbn: "9780062301673" },
        { id: 9, isbn: "0393603121" }
      ],
      programming: [
        { id: 10, isbn: "9781118531648" },
        { id: 11, isbn: "1491990082" },
        { id: 12, isbn: "0134801148" },
        { id: 13, isbn: "0134481267" },
        { id: 14, isbn: "1491949309" }
      ],
      design: [{ id: 15, isbn: "9780465050659" }],
      finance: [{ id: 16, isbn: "1260565556" }]
    };
  }
  render() {
    const topic = this.props.navigation.getParam("name").toLowerCase();
    return (
      <FlatList
        data={this.state[`${topic}`]}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <ProductItem key={`${item.id}`} product={item} />
          </View>
        )}
        contentContainerStyle={styles.container}
      ></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8
  }
});
