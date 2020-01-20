import React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";

import CategoryItem from "./components/CategoryItem";
import ScienceImage from "./assets/electron.png";
import BusinessImage from "./assets/graphic.png";
import LiteratureImage from "./assets/study.png";
import ProgrammingImage from "./assets/data.png";
import DesignImage from "./assets/idea.png";
import FinanceImage from "./assets/payment.png";

export default class App extends React.Component {
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
    const { categories } = this.state;
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryItem category={item} />}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16
  }
});
