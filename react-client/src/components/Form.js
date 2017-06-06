import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/Form.css'

const Form = ({ label }) => (
      <form>
        <div>
          <label>分类</label>
          <input  />
        </div>
        <div>
          <label>标题</label>
          <input  />
        </div>
        <div>
          <label>内容</label>
          <textarea rows='20' key='1'  />
        </div>
        <div className="actions">
          <button type='submit' key='2'>{label}</button>
          <Link className="link" to='/'>取消</Link>
        </div>
      </form>
    )

export default Form
