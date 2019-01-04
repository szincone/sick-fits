import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

class CreateItems extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: 0,
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <Form>
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
        </fieldset>
      </Form>
    );
  }
}

export default CreateItems;
