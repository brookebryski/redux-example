import React, {Component} from 'react'

class PostForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(data => console.log(data))
  }

  handleChange(e){
    this.setState({ 
      [e.target.name]: e.target.value 
    })
    console.log(this.state)
  }

  render (){
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title:</label><br/>
            <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
          </div>
          <div className="form-group">
            <label>Body:</label><br/>
            <input onChange={this.handleChange} type="text" name="body" value={this.state.body}/>
          </div>   
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>                 
        </form>
      </div>
    )
  }
}

export default PostForm