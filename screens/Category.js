import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import axios from "axios";

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
      science: [],
      business: [],
      literature: [],
      programming: [],
      design: [],
      finance: []
    };
  }

  componentDidMount() {
    const science = axios.get("/science");
    const business = axios.get("/business");
    const literature = axios.get("/literature");
    const programming = axios.get("/programming");
    const design = axios.get("/design");
    const finance = axios.get("/finance");

    axios
      .all([science, business, literature, programming, design, finance])
      .then(
        axios.spread((...responses) => {
          this.setState({ science: responses[0].data });
          this.setState({ business: responses[1].data });
          this.setState({ literature: responses[2].data });
          this.setState({ programming: responses[3].data });
          this.setState({ design: responses[4].data });
          this.setState({ finance: responses[5].data });
        })
      )
      .catch(error => console.error(error));
  }

  render() {
    const topic = this.props.navigation.getParam("name").toLowerCase();
    const products = this.state;
    return (
      <FlatList
        data={Array.from(products[`${topic}`])}
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
