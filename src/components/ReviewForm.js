import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export function ReviewForm( props ) {
  if( props.user ) {
    return(
      <Form>
        <h4>Add a review for this movie</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Review Title</Form.Label>
          <Form.Control type="text" placeholder="This movie is amazing" name="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review Body</Form.Label>
          <Form.Control as="textarea" rows={3} name="body" placeholder="I love this movie"  />
        </Form.Group>
        <Button type="submit" variant="primary">Add Review</Button>
      </Form>
    )
  }
  else {
    return null
  }
}