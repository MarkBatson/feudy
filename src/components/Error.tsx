export default function Error({error}:{error: string}) {

  return (
    <div className="m-5 p-5 bg-cream text-black rounded-2xl  flex flex-col justify-center items-center">    
      <p className="text-xl pb-5">Error</p>
      <p>{error}</p>
    </div>
  )
}