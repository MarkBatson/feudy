import Button from "./Button"

export default function GameplayRules({closeRules}:{closeRules:Function}) {
  return (
    <div className="absolute m-5 top-0 bg-cream text-black text-left rounded-2xl p-3 z-10">
      <h1 className="pb-5 text-xl">Gameplay Rules <br/>(to be anounced by Game Host)</h1>
      <p className="pb-3 font-normal">
        Welcome to Feudy! I'm your host, (insert name), and I've surveyed
        thousands of people on a number of prompts. Each round I'm going to read 
        a prompt and ask each team which answer they think was given the most.
        There are five answers per prompt, worth 50, 40, 30, 20, and 10 points
        from most to least popular. 
      </p>
      <p className="pb-3 font-normal">
        Teams will alternate guesses, with each team getting a maximum of two
        guesses per round. For example, I might ask you to name the best color.
        If team one guesses blue and that's number one, they earn 50 points! If 
        team two guesses red and that's number two they earn 40 points! Each
        team will keep track of their points on their score board which should be
        visible to all teams.
      </p>
      <p className="pb-3 font-normal">
        As your host I get to decide which team goes first. After that, the team
        in last place leads the next round. Whoever has the most points after 5
        rounds wins!
      </p>
      <p className="pb-3 text-orange">
        Does a question seem lame or outdated? Just skip it!
      </p>
      <div className="text-right">
        <Button onClick={() => closeRules()}>Close</Button>
      </div>
    </div>
  )
}