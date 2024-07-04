import { twMerge } from "tailwind-merge";

type CardProps = {
    text: string
    isAnswer?: boolean,
    className?: any
}

const Card = ({ text, isAnswer, className}: CardProps) => {
    return (
        <div className={twMerge(
            "w-[247px] h-[342px] bg-stone-800 text-neutral-200 aspect-none shadow-md p-6 rounded-2xl", className
        )}>
            <span className="font-semibold text-lg">{text}</span>
        </div>
    );
}

export default Card