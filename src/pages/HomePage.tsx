import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import Button from "../components/Button";
import SetupRules from "../components/SetupRules";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex m-5 justify-center">
        <img src={logo} className="w-50"/>
      </div>
      <SetupRules />
      <div className="flex justify-around">
        <Button onClick={() => navigate('/host')}>Play as Host</Button>
        <Button onClick={() => navigate('team')}>New Team</Button>
      </div>
    </div>
  )
}