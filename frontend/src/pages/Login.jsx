import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from "../components/Spinner/Spinner";
import StandardButton from "../components/StandardButton/StandardButton";
import StandardInputField from "../components/StandardInputField/StandardInputField";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email,password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(()=>{
        if(isError){
            toast.error(message);
        }

        if(isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch]);


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email, password,
        }

        dispatch(login(userData));
    }

    if(isLoading) {
        return <Spinner />
    }

  return (
    <>
        <div className="flex flex-col w-full gap-4 p-4">
            <section className="flex flex-col">
                <h1 className="flex items-center justify-center gap-2">
                    <FaSignInAlt /> Login
                </h1>
                <p className="flex items-center justify-center">Login and enjoy our game.</p>
            </section>

            <section className="form flex items-center justify-center">
                <form onSubmit={onSubmit} className="flex flex-col justify-center items-center w-64 gap-2">        
                    <StandardInputField type={'email'} id={'email'} name={'email'} value={email} placeholder={"Enter your email"} onChange={onChange} />
                    <StandardInputField type={'password'} id={'password'} name={'password'} value={password} placeholder={"Enter your password"} onChange={onChange} />
                    <StandardButton type={'submit'} text={'Submit'} next={onSubmit} />
                </form>
            </section>
        </div>
    </>
  )
}

export default Login