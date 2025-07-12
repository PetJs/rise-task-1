
interface IconProps{
    icon: React.ReactNode
}
const Icon: React.FC<IconProps> = ({icon}) => {
    return (
        <div className='bg-gray-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black cursor-pointer'>
            {icon}
        </div>
    )
}

export default Icon;