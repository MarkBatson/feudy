import setupDiagram from "../assets/setupDiagram.png";

export default function SetupRules() {
  return (
    <div className="bg-cream text-black text-left rounded-2xl p-3 m-5">
      <h1 className="pb-3 text-xl text-center">Setup</h1>
      <p className="pb-3 font-normal">
        Pick one player to be the Game Host. They should be ready to bring their
        best host energy! Divide the rest of the players into 2 or 3 teams
        depending on the player count. Each team will need one player to keep track
        of their score by clicking new team.
      </p>
      <img src={setupDiagram} className="pb-5"/>
      <p className="pb-3 text-orange">
        The Game Host will annouce the rest of the rules for the game!
      </p>
    </div>
  )
}