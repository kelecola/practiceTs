import React, { Component } from 'react'
import PostItem from './PostItem'

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          { id: '1', title: '111', author: '222', vote: '1', date: '1111' },
          { id: '2', title: '111', author: '222', vote: '1', date: '1111' },
          { id: '3', title: '111', author: '222', vote: '1', date: '1111' },
        ]
      })
    })
  }

  handleVote(id) {
    const posts = this.state.posts.map((item) => {
      console.log(item);
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item
      return newItem
    })
    this.setState({
      posts
    })
  }

  render() {
    return (
      <div>
        帖子列表:
        <ul>
          {this.state.posts.map(item => 
            <PostItem
              key={item.id}
              post = {item}
              onVote = {this.handleVote}
            ></PostItem>
          )}
        </ul>
      </div>
    )
  }
}

export default PostList