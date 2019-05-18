import React from "react"
import {Comment, Icon, Tooltip, Avatar, Divider, Carousel, Radio} from 'antd';
import moment from 'moment';
import styled from "styled-components";


const WrappAllComents = styled.div`
    background: #edf8f5;
`;

const ComentsStyle = styled(Comment)`
background: #50776c;
`;

const BoxRewive = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;

const BoxRewive = BoxRewiveTwo;
const BoxRewiveTwo = BoxRewive

class Rewiews extends React.Component {
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
        dotPosition: 'top',
    };

    handlePositionChange = ({target: {value: dotPosition}}) => this.setState({dotPosition});

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

        const {dotPosition} = this.state;
        const {likes, dislikes, action} = this.state;
        const actions = [
            <span>
        <Tooltip title="Like">
          <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
          />
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>{likes}</span>
      </span>,
            <span>
        <Tooltip title="Dislike">
          <Icon
              type="dislike"
              theme={action === 'disliked' ? 'filled' : 'outlined'}
              onClick={this.dislike}
          />
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>{dislikes}</span>
      </span>,
            <span>Reply to</span>,
        ];


        return <div>

            <Divider>Отзывы</Divider>


            <Carousel dotPosition={dotPosition} autoplay>

                <WrappAllComents>
                    <BoxRewive>
                        <div>1111111111111</div>
                    </BoxRewive>

                    <BoxRewiveTwo>
                        <div>2222222</div>
                    </BoxRewiveTwo>

                    <div>

                    </div>
                </WrappAllComents>

            </Carousel>


        </div>
    }
}

export default Rewiews