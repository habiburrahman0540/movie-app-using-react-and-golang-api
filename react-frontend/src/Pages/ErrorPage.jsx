import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import {useRouteError} from "react-router-dom"
const ErrorPage = () => {
    const error = useRouteError();
  return (
    <Container>
        <Row>
            <Col md={{span:6,offset:3}}>
                <h1 className='mt-3'>Opps!</h1>
                <p>Sorry, an unexpected error has occoured.</p>
                <p>
                    <em>{error.statusText || error.message}</em></p>
            </Col>
        </Row>
      
    </Container>
  )
}

export default ErrorPage
