import React from "react";

export default class HUD extends React.Component {
  constructor(props) {
    super();

    this.menuItems = this.props.menuItems;

    this.menuItems.push();
  }

  render = () =>
    this.menuItems.map((menuItem, idx) => ({
      ...Button(null)(menuItem),
      key: idx
    }));
}
const Button = props => menuItem => (
  <button onClick={menuItem.callback}>{menuItem.text}</button>
);
