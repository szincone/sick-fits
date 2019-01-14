import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

// mutations and queries
const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItems extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: 0,
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    console.log("Value", val);
    this.setState({ [name]: val });
  };
  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log("THIS.STATE", this.state);
        }}
      >
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor="description">
            Description
            <textarea
              type="number"
              id="description"
              name="description"
              placeholder="Enter A Description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItems;
export { CREATE_ITEM_MUTATION };
