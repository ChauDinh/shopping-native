import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import axios from "axios";

import CategoryItem from "../components/CategoryItem";

export default class Categories extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios
      .get("/categories")
      .then(result =>
        this.setState({
          categories: result.data
        })
      )
      .catch(error => console.error(error));
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem
              category={item}
              onPress={() =>
                navigation.navigate("Category", {
                  name: item.name
                })
              }
            />
          )}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={styles.container}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  }
});
