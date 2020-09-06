import React, { Component } from "react";
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css"

class MultiSe extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      items: [
        { id: 0, label: "Prince" },
        { id: 1, label: "Rico" },
        { id: 2, label: "Pratik" },
        { id: 3, label: "Ashish" }
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
        selectedItems={selectedItems}
        onChange={this.handleChange}
      />
    );
  }
  
}
export default MultiSe;