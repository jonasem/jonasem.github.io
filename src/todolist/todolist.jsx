let Transition = React.addons.CSSTransitionGroup;
export class TodoListItems extends React.Component {
  item(text, index) { return (
    <div key={index} className="mdl-grid list-item mdl-color--white">
      <div className="mdl-cell mdl-cell--12-col">{text}</div>
    </div>
    )
  }

  render() {
    let items = this.props.items.map(this.item);
    
    return (
      
        <Transition transitionName="itemslist">
          {items}
        </Transition>
    );
  }
}

export class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = { items: ['Item #1'], text: '' };
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.text) return;
    let nextItems = this.state.items.concat([this.state.text]);
    this.setState({items: nextItems, text: ''});
  }

  render() {
    return (
      <div className="container">
        <h3 className="mdl-color--white">TODO</h3>
        <TodoListItems items={this.state.items} />
        <form onSubmit={this.handleSubmit.bind(this)} className="mdl-grid">
          <div className="mdl-textfield mdl-js-textfield mdl-cell--12-col">
            <input onChange={this.onChange.bind(this)} 
                   value={this.state.text} 
                   className="mdl-textfield__input" id="sample1" />
            <label className="mdl-textfield__label" for="sample1">Text...</label>
          </div>
        </form>
      </div>
    );
  }
}


