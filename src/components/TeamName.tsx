import { useState } from "react";

export default function TeamName() {
  const [teamName, setTeamName] = useState('TEAM 1');
  const [editing, setEditing] = useState(true);

  return (
    <div className=" text-orange text-5xl mt-3">
      {editing ? (
        <input
          autoFocus
          value={teamName}
          onChange={e => setTeamName(e.target.value.toUpperCase())}
          onBlur={() => setEditing(false)}
          onKeyDown={e => e.key === 'Enter' && setEditing(false)}
        />
      ) : (
        <h1 onClick={() => setEditing(true)} className="pt-30">{teamName}</h1>
      )}
    </div>
  )
}