export default function HeaderLink({ Icon, text, avatar, feed }) {
  return (
    <div className={`flex flex-col cursor-pointer justify-center items-center
${feed ? 'text-black/60 hover:text-black space-y-1 lg:-mb-1.5' 
: 'text-gray-500 hover:text-gray-700'}
`}>
      {avatar ? <Icon className="!h-7 !w-7 lg:!mb-7" /> : <Icon />}
      <h4 className="text-sm">{text}</h4>
    </div>
  )
}
