import GameComponent from "./GameComponent";

export default class Test extends GameComponent {
  constructor(props) {
    super(props);
    this.children = this.props.childs;
  }
}
