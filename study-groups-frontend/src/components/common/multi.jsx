import React, { Component } from "react";
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css"

class MultiSe extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [
        { id: 0, label: "Prince-G1" , group: "group 1" },
        { id: 1, label: "Rico-G1" , group: "group 1" },
        { id: 2, label: "Pratik-G1" , group: "group 1"},
        { id: 3, label: "Ashish-G1", group: "group 1" },
        { id: 4, label: "Prince-G2" , group: "group 2" },
        { id: 5, label: "Rico-G2" , group: "group 2" },
        { id: 6, label: "Pratik-G2" , group: "group 2"},
        { id: 7, label: "Ashish-G2", group: "group 2" }
      ],
      selectedItems: []
    };
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
  }
  render() {
    const { items, selectedItems } = this.state;
    return (
      <MultiSelect
      items={items}
      withGrouping
        selectedItems={selectedItems}
        onChange={this.handleChange}
      />
      
      
    );
  }
  
}
export default MultiSe;