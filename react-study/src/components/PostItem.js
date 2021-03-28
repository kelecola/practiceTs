import React from 'react';
import { Button } from 'antd';
import '../App.css';

function PostItem(props) {
  const handleClick = () => {
    props.onVote(props.post.id)
  }
  const { post } = props;
  return (
    <li>
      <div>{post.title}</div>
      <div>{post.author}</div>
      <div>{post.date}</div>
      <div>
        <Button onClick={handleClick}>
          点赞👍
          <span>{post.vote}</span>
        </Button>
      </div>
    </li>
  )
}

// class Postitem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       vote: 0,
//     }
//   }
//   handleClick() {
//     // 不要直接修改this.state.vote的值？
//     this.setState({
//       vote: this.state.vote + 1
//     })
//   }
//   render() {
//     const { title, author, date } = this.props;
//     return (
//       <li>
//         <div>{title}</div>
//         <div>创建人: <span>{author}</span></div>
//         <div>创建时间: <span>{date}</span> </div>
//         <Button type="primary" onClick={() => this.handleClick()}>
//           点赞👍&nbsp;&nbsp;
//           <span>{this.state.vote}</span>
//         </Button>
//       </li>
//     )
//   }
// }

export default PostItem