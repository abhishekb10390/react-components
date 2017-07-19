// TODO

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  
  this.state = {
      done: false
    };
  }

  toggleHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>{this.props.item}</li>
      );
  }
}


var GroceryList = (props) => ( 
  <div>
  <h2>List</h2>
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
  </div>
  )



ReactDOM.render(<GroceryList items= {['Easak', 'rules', 'the', 'world']} />, document.getElementById('app'));
