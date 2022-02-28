import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { getAuth, signOut } from "firebase/auth";
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
    const auth = getAuth();
    const history = useHistory()
    const [error, setError] = useState("")

    const logout = async () => {
        await signOut(auth);
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Current User Email:</strong> {auth.currentUser.email}
                    <Link to="/UpdateAdminUsers" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                    <Link to="/Signup" className="btn btn-primary w-100 mt-3">
                        Add New Admin User
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={logout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}
