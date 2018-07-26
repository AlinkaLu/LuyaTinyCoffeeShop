import React from "react";

const Menu = props => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
};

export const MenuList = props => {
  return <div> {props.menus.map(menu => <Menu {...menu} />)}</div>;
};

export class Button extends React.Component {
  handleClick = () => {};
  render() {
    return <button onClick={this.handleClick}>Thank You!</button>;
  }
}
