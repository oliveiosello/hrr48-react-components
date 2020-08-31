// TODO
// Create a component
// Render it to the page

// Inside app.js, create a GroceryList component that contains 
// an unordered list of 2 grocery items. 
// Render this component to the div tag in index.html with an id of app


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }
  setHover(hovering) {
    this.setState({
      hovered: hovering
    });
  }
  render() {
    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };
    return (
      <li
      style={style}
      onMouseEnter={() => this.setHover(true)}
      onMouseLeave={() => this.setHover(false)}
      >{this.props.item}</li>
    );
  }
};

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
);
  
var App = () => (
  <div>
    <h2>Grocery List</h2>
      <GroceryList groceryItems={['Cucumbers', 'Kale', 'Milk']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));


