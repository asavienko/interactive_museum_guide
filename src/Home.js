import React from "react"
import {Divider} from 'antd';
import {Row, Col} from 'antd';
import styled from "styled-components";

const WrapBoxAbout = styled.div`
padding: 10px;
`;
const BoxDescription = styled(Col)`

    font-size: 20px;
    color: #000;
`;

const BoxDescriptionTwo = styled(Col)`

`;
const BoxBold = styled.div`

`;

class Home extends React.Component {

    render() {
        return <WrapBoxAbout>
            <Divider>Гид по музею</Divider>
            <Row type="flex" justify="start">
                <BoxDescription span={12} order={1}>
                    Подключите, автоматизируйте и контролируйте свой досуг таким образом - как желаете сами.
                    Составьте порядок действий. Получайте сведения об экспонате через наш сервер, сохраняйте понравившиеся экспонаты с пометкой "избранные".
                </BoxDescription>
                <BoxDescriptionTwo span={12} order={2}>
                    Процесс духовного и культурного развития для каждого из нас очень важный! Так как технологии не стоят на месте -  мы стремимся сделать вашу жизнь комфортней, доступней и интересней.

                     Тяга к прекрасному есть в каждом , но бывает так , что не хватает время, информации, знаний о местоположении и графике работы замечательных выставок. Изучение произведений искусства, памятников времени в рамках современной среды  стал определяющей чертой программы.
                     в конечном итоге превратит вас самих в художников своего времени , в художника нового типа, способного внести свой вклад в коллективное «общее произведение искусства».
                </BoxDescriptionTwo>
            </Row>
            <div>

            </div>
        </WrapBoxAbout>

    }
}

export default Home