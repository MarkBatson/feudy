import { useEffect, useState } from "react";
import { useQuestion } from "../hooks/useQuestion";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import home from '../assets/F.svg';
import GameplayRules from "../components/GameplayRules";
import Prompt from "../components/Prompt";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Button from "../components/Button";


export default function HostPage() {
  const [showRules, setShowRules] = useState(true);
  const navigate = useNavigate();
  const { question, loading, error, fetchNext } = useQuestion();

  useEffect(() => {
    fetchNext()
  }, [fetchNext])

  return (
    <div>
      <img onClick={() => navigate('/')} src={home} className=" absolute top-3 left-3 w-10"/>
      <div className="flex m-5 justify-center">
        <img src={logo} className="w-50"/>
      </div>
      {showRules && <GameplayRules closeRules={() => setShowRules(false)}/>}
      {loading && <Loading /> }
      {error && <Error error={error} />}
      {(question && !loading) && <Prompt question={question} />}
      <div className="flex justify-between mr-5 ml-5">
        <Button onClick={() => setShowRules(true)}>Rules</Button>
        <Button onClick={fetchNext}>Next Question</Button>
      </div>
      
    </div>
  )
}