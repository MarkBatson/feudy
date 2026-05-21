type Props = {
  onClick: () => void
  children: React.ReactNode
}

export default function Button({onClick, children}:Props) {

  return (
    <button onClick={onClick} className="bg-orange text-cream rounded-lg leading-none p-3">
      {children}
    </button>
  )
}