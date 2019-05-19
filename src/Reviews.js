import React from "react"
import {Divider, Carousel, List, Avatar} from 'antd';
import avatar1 from "./images/avatars/avatar1.jpg"
import avatar2 from "./images/avatars/avatar2.jpg"
import avatar3 from "./images/avatars/avatar3.jpg"

import avatar4 from "./images/avatars/avatar4.jpg"
import avatar5 from "./images/avatars/avatar5.jpg"
import avatar6 from "./images/avatars/avatar6.png"

import styled from "styled-components";


const BoxReview = styled.div`
display: flex !important;
justify-content: center;
width:97% !important;
color: white;
background-color: #d0e9eac2;
margin: 20px;
`;
const StyledCarousel = styled(Carousel)`
    width: 95vw;
    margin: auto
`;
const StyledAvatar = styled(Avatar)`
& img{
height: 34px!important;
object-fit: cover;
}
`;

const reviewData = [
  {
    post: 'Отличное приложение. Помогает выбрать подходящий музей и получить необходимую информацию о нем...',
    avatar: avatar1,
    name: "Александр Малышев",
    rate: 4.5,
  },

  {
    title: '',
    post: 'Выбрал картинную галлерею, которую давно рекомендовали. Посетил её. Понравившиеся экспозиции, добавил в избранные - буду показывать коллегам по работе. Рекомеендую!   ',
    avatar: avatar2,
    name: "Петр Морозов",
    rate: 5.0,
  },

  {
    post: 'Планируем поездку по Италии. Мы уже 8 лет сами строим себе маршрут, планируем и организуем поездки по разным регионам Европы. Нет лишних сборов, планируешь ровно так, как тебе удобно и интересно, всем советую. Да и при этом погружаешься искуство куда сильнее. ' +
      'Приложение в этом оказалось очень полезно - в прошлом году по Германии ездили и после поездки приходилось долго вспоминать наззвание старинного полотна. ',
    title: '',
    avatar: avatar3,
    name: "Максим Мартыненко",
    rate: 5.0,
  },
  {
    post: 'Хорошее приложение, спасибо разработчикам. Удовлетворительно. Приложение стабильно и геолокация работает исправно.',
    title: '',
    avatar: avatar4,
    name: "Дарья Покотило",
    rate: 4.5,
  },

  {
    post: 'Удобное, функциональное приложение. Хорошие экскурсионные маршруты. Большой список файлов изучать не сильно популярные места.',
    title: '',
    avatar: avatar5,
    name: "Максим Велентеенко",
    rate: 5.0,
  },

  {
    post: 'Ура. Наконец то наткнулся на приложение навигации экспонатов в музее. полезное. Работает без лагов. Когда поеду в отпуск, обязательно воспользуюсь. ',
    title: '',
    avatar: avatar6,
    name: "Игорь Петрук",
    rate: 5.0,
  },
];

class Reviews extends React.Component {
  render() {
    return <div>
      <Divider>Отзывы</Divider>
       <StyledCarousel autoplay>
           <BoxReview>
                    <List
                        itemLayout="vertical"
                        dataSource={reviewData}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<StyledAvatar src={item.avatar}/>}
                                    title={<span>{item.name}</span>}
                                    description={item.post}
                                />
                            </List.Item>
                        )}
                    />
                </BoxReview>
      </StyledCarousel>
    </div>
  }
}

export default Reviews