import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import CategoryItem from "../components/CategoryItem";
import ScienceImage from "../assets/electron.png";
import BusinessImage from "../assets/graphic.png";
import LiteratureImage from "../assets/study.png";
import ProgrammingImage from "../assets/data.png";
import DesignImage from "../assets/idea.png";
import FinanceImage from "../assets/payment.png";

export default class Categories extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "Science", img: ScienceImage },
        { id: 2, name: "Business", img: BusinessImage },
        { id: 3, name: "Literature", img: LiteratureImage },
        { id: 4, name: "Programming", img: ProgrammingImage },
        { id: 5, name: "Design", img: DesignImage },
        { id: 6, name: "Finance", img: FinanceImage }
      ]
    };
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
