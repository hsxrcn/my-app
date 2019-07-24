import React, { PureComponent } from 'react'
import { Button,Row,Col,Card } from 'antd';
import { Color } from '../../utils/theme'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}
class Index extends PureComponent {
  render() {
    return (

       /* 布局的栅格*/
        <Row gutter={24}>
          <Col lg={18} md={24}>
            <Card
              bordered={false}
              bodyStyle={{
              padding: '24px 36px 24px 0',
            }}>
            </Card>
          </Col>
          <Col lg={6} md={24}>
            <Row gutter={24}>
              <Col lg={24} md={12}>
                <Card
                  bordered={false}

                  bodyStyle={{
                    padding: 0,
                    height: 204,
                    background: Color.blue,
                  }}
                >
                </Card>
              </Col>
              <Col lg={24} md={12}>
                <Card
                  bordered={false}
                  bodyStyle={{
                    padding: 0,
                    height: 204,
                  background: Color.peach,
                }}>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={12} md={24}>
            <Card
              bordered={false} {...bodyStyle}
            ></Card>
          </Col>
          <Col lg={12} md={24}>
              <Card
                bordered={false} {...bodyStyle}
              ></Card>
            </Col>
          <Col lg={24} md={24}>
            <Card
              bordered={false} {...bodyStyle}
            ></Card>
          </Col>
          <Col lg={8} md={24}>
            <Card
              bordered={false} {...bodyStyle}
            ></Card>
          </Col>
          <Col lg={8} md={24}>
            <Card
              bordered={false} {...bodyStyle}
            ></Card>
          </Col>
          <Col lg={8} md={24}>
            <Card
              bordered={false} {...bodyStyle}
            ></Card>
          </Col>
        </Row>
    )
  }
}
export default Index
