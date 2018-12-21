import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import mainStyles from './mainStyles';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container className={mainStyles()}> 
                    <Row>
                        <Col>
                            <div className='myText'>
                                Main Page
                        </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }

}

export default Main;