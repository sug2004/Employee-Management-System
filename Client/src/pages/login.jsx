import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '' 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/v1/employee/login', values, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.data.message === "success") {
                localStorage.setItem('token', res.data.token);
                if(res.data.result.role==="admin"){
                navigate('/admin'); 
                }
            } else {
                alert("Login unsuccessful. Please check your email and password.");
            }
        })
        .catch(err => {
            console.error('Error response:', err.response);
            alert("An error occurred. Please try again.");
        });
    };

    return (
        <>
            <div className="h-screen w-screen bg-primary flex justify-center items-center">
                <Card className="w-fit h-fit p-10">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <Input
                            label="Email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            required
                            className="w-80"
                            type="email"
                        />
                        <Input
                            label="Password"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            type="password"
                            className="w-80"
                            required
                        />
                        <Button variant="default" size="default" type="submit">Login</Button>
                    </form>
                </Card>
            </div>
        </>
    );
}
