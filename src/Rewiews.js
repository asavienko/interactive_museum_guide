import React from "react"
import {Comment, Icon, Tooltip, Avatar, Divider} from 'antd';
import moment from 'moment';
import styled from "styled-components";

const WrappAllComents = styled.div`
    background: #0000000f;
`;

class Rewiews extends React.Component{
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };
  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };
  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };


  render() {

    const { likes, dislikes, action } = this.state;
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
              type="dislike"
              theme={action === 'disliked' ? 'filled' : 'outlined'}
              onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span>Reply to</span>,
    ];



    return <div>

      <Divider>Отзывы</Divider>
      <WrappAllComents>
      <Comment
          actions={actions}
          author={<a>Мария</a>}
          avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Мария"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully
              and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
      />
      <Comment
          actions={actions}
          author={<a>Павел</a>}
          avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Мария"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design

            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
      />
      <Comment
          actions={actions}
          author={<a>Влад</a>}
          avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Мария"
            />
          }
          content={
            <p>to help people create their product prototypes beautifully
              and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
      />
      </WrappAllComents>
    </div>
  }
}

export default Rewiews