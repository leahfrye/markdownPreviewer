var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

class MarkdownPreviewer extends React.Component {

  componentDidMount() {
    this.resetValue();
  }

  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
  }

  resetValue() {
    let initialValue = "## This is a Heading 1\n#### This is a Heading 2\n\n****\n+ Bulletpoint\n+ Bulletpoint\n* End Bulletpoint\n\n----\n|With Code| Without Code|\n--------------|-------------|\n|`*italics*`| *italics*|\n|`***bold***`| **bold**|\n|`~~line-through~~`| ~~line-through~~|\n____\n\n```\nfunction hello_world() {\nalert('Hello word!!')\n}\n```\n>This is a block quote";
    this.setState({value: initialValue})
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    let newValue = marked(this.state.value);
    return (
      <div className="wrapper">
        <div className="row" style={{textAlign: "center"}}>
          <h2>Markdown Previewer</h2>
        </div>
        <div className="row">

          <div className="col-md-6 left">
            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
            <br />
            <input className="btn btn-default center-block" type="submit" value="Reset" onClick={(e) => this.resetValue()}></input>
          </div>

          <div className="col-md-6 right">
            <div dangerouslySetInnerHTML={{__html: newValue}} />
          </div>

        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MarkdownPreviewer />,
  document.getElementById('example')
);
