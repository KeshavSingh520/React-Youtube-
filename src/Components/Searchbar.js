import React from "react";

class Searchbar extends React.Component {
  state = { text: "" };

  onFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.text)
    this.props.onFormSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui form container">
        <div className="field">
          <form onSubmit={this.onFormSubmit}>
              <label>Video Search:</label>
            <input type="text" value={this.state.text} onChange={event=>this.setState({text:event.target.value})}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;
