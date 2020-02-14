import React from "react";
import propTypes from "prop-types"
import { connect } from "react-redux";
import { createPost } from "../actions/PostActions";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange= this.onChange.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }


    render() {
        console.log(this.props)
        
        return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label>
                <br />
                <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
                />
            </div>
            <br />
            <div>
                <label>Body: </label>
                <br />
                <textarea
                name="body"
                onChange={this.onChange}
                value={this.state.body}
                />
            </div>
            <br />
            <button type="submit">Submit</button>
            </form>
      </div>
        )
    }
}

Form.propTypes = {
    createPost: propTypes.func.isRequired
  };
  

export default connect(null, {createPost})(Form);