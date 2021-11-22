import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const Assignment = ({ Assign }) => {

    return (
        <div>
            <Card style={{ width: '40vw' }}>
                {
                    // <Card.Img variant="top" src="holder.js/100px180" />
                    console.log(Assign)
                }
                <Card.Body>
                    <Card.Title>{Assign.Name}</Card.Title>
                    <Card.Text>
                        {Assign.description}
                    </Card.Text>
                    <Button variant="primary"> {Assign.link} </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

Assignment.defaultProps = {
    Assign: {
        Name: ""
    }
}

export default Assignment
