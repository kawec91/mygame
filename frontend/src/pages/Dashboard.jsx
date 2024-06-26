import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(()=>{
    if(!user) {
      navigate('/login')
    }
  },[user, navigate]);

  return (
    <>
        <div className="p-4 w-full">Dashboard</div>
    </>
  )
}

export default Dashboard