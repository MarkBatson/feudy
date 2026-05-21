
export default function Loading() {

  return (
    <div className="m-5 p-5 bg-cream text-black rounded-2xl  flex flex-col justify-center items-center">    
      <p className="text-xl pb-5">Loading</p>
      <div className="w-12 h-12 border-4 border-orange border-t-transparent rounded-full animate-spin" />
    </div>
  )
}