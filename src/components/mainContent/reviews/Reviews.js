import React from "react";
import { Avatar, Divider, List, Rate } from "antd/lib/index";
import styled from "styled-components";
import { reviewData } from "../../../assets/data/mockData";

const ListItem = List.Item;

const BoxReview = styled.div`
  display: flex;
  justify-content: center;
  width: 95vw;
  margin: 20px;
`;
const StyledAvatar = styled(Avatar)`
  height: 34px !important;

  & img {
    object-fit: cover;
  }
`;

function Reviews() {
  return (
    <div>
      <Divider>Отзывы</Divider>
      <BoxReview>
        <List
          itemLayout="vertical"
          dataSource={reviewData}
          renderItem={item => (
            <ListItem>
              <List.Item.Meta
                avatar={<StyledAvatar src={item.avatar} />}
                title={<span>{item.name}</span>}
                description={item.content}
              >
                <Rate disabled defaultValue={item.rate} />
              </List.Item.Meta>
            </ListItem>
          )}
        />
      </BoxReview>
    </div>
  );
}

export default Reviews;
