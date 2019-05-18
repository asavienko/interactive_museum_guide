import React from "react"
import {Divider} from 'antd';
import {Row, Col} from 'antd';
import styled from "styled-components";

const WrapBoxAbout = styled.div`
padding: 10px;
`;

class Home extends React.Component {

    render() {
        return <WrapBoxAbout>
            <Divider>Гид по музею</Divider>
            <Row type="flex" justify="start">
                <Col span={12} order={1}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi enim hic in ipsam iure
                    nulla officia porro saepe vero. Accusamus aliquam aliquid aut blanditiis distinctio, expedita fuga
                    harum ipsum, iste laborum molestias nihil perferendis porro praesentium provident quibusdam repellat
                    sed similique sint tempore, unde veritatis vero! Eaque, esse, exercitationem!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque delectus dicta illum
                    laudantium, magnam quod quos ratione reiciendis tempora. Amet cupiditate error iusto minus mollitia
                    officia quis tenetur voluptatem. Blanditiis cupiditate distinctio ducimus eveniet explicabo facere
                    fugit labore minima modi necessitatibus nemo quae quam qui quo tempore, vero voluptas.
                </Col>
                <Col span={12} order={2}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eveniet, explicabo illo nam nisi
                    provident soluta voluptatibus. Adipisci animi beatae delectus dignissimos dolor eum illo itaque
                    iusto minima natus nemo, placeat porro provident quas repudiandae rerum vero. At esse, sit!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur, consectetur deserunt
                    dolor eligendi eos esse facere labore laudantium, libero magnam nulla odit optio pariatur
                    perspiciatis sunt ut. Alias dolorem doloremque eos in quasi, repudiandae sit voluptates. Aliquid
                    cupiditate nesciunt odio provident tempora! Accusamus asperiores dolore enim nisi porro. Laudantium
                    non numquam porro quo repudiandae similique soluta. Aperiam cum fuga labore molestiae mollitia nisi
                    repellendus sunt. Architecto quis ratione voluptas.
                </Col>
            </Row>
            <div>

            </div>
        </WrapBoxAbout>

    }
}

export default Home