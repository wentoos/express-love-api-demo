import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import '../css/Form.css'

class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const category = this.category.value;
    const title = this.title.value;
    const content = this.content.value;
    this.props.publishPost({category, title, content});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>分类</label>
          <input  ref={(input) => this.category = input }/>
        </div>
        <div>
          <label>标题</label>
          <input  ref={(input) => this.title = input }/>
        </div>
        <div>
          <label>内容</label>
          <textarea ref={(input) => this.content = input } rows='20'  />
        </div>
        <div className="actions">
          <button type='submit' key='2'>{this.props.label}</button>
          <Link className="link" to='/'>取消</Link>
        </div>
      </form>
    )
  }
}

export default Form
