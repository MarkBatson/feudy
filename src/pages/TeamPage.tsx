import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamName from "../components/TeamName";
import home from "../assets/F.svg";

export default function TeamPage() {
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const addScore = (points:number) => {
    setScore(prev => prev + points);
  }

  return (
    <div>
      <img onClick={() => navigate('/')} src={home} className=" absolute top-3 left-3 w-10"/>
      <TeamName />
      <div className="bg-cream text-[200px] text-black m-5 mt-2 rounded-2xl flex justify-between items-center pl-5 pr-5 ">
        <div onClick={() => addScore(-10)} className="bg-orange text-cream text-9xl w-25 h-25 flex justify-center items-center rounded-full leading-none pb-5">
          -
        </div>
        <div>{score}</div>
        <div onClick={() => addScore(10)} className="bg-orange text-cream text-9xl w-25 h-25 flex justify-center items-center rounded-full leading-none pb-3">
          +
          </div>
      </div>
    </div>
  )
}