import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const auth = getAuth();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault()


    const promises = []
    setLoading(true)
    setError("")

    if (auth.currentUser.email != emailRef.current.value) {
      updateEmail(auth.currentUser, emailRef.current.value).then(() => {
        console.log("Email Updated");
        // ...
      }).catch((error) => {
        console.log("Email Not Updated");
        // ...
      });
    }

    if(passwordRef.current.value){
      updatePassword(auth.currentUser, passwordRef.current.value).then(() => {
        console.log("Password Updated");
      }).catch((error) => {
        console.log("Password Not Updated");
      });
    }


    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={auth.currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/admin">Cancel</Link>
      </div>
    </>
  )
}
