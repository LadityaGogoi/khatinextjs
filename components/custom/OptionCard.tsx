interface OptionCardProps {
    option?: string | null;
    image?: string | null;
    option_type: boolean;
    id: number
    isCorrect: boolean;
    isSelected: boolean;
    showCorrect: boolean;
    onSelect: (id: number) => void;
}

const OptionCard: React.FC<OptionCardProps> = ({
    option,
    image,
    option_type,
    id,
    isCorrect,
    isSelected,
    showCorrect,
    onSelect
}) => {
    return (
        <div
            className={`relative flex flex-row justify-start items-center gap-1.5 border ${isSelected ? 'border-primary' : ''} rounded-md p-1.5`}
            onClick={() => onSelect(id)}
        >
            {isCorrect && showCorrect && (
                <div className="absolute top-0 right-0 bg-primary rounded-bl-full px-1.5">
                    <span className="font-medium text-xs text-background">Correct Answer</span>
                </div>
            )}
            {!isCorrect && showCorrect && isSelected && (
                <div className="absolute top-0 right-0 bg-destructive rounded-bl-full px-1.5">
                    <span className="font-medium text-xs text-background">Wrong Answer</span>
                </div>
            )}
            <div className="p-0.5 border rounded-md w-7 h-7 text-center font-medium text-muted-foreground">{id}</div>
            {
                option && (
                    <div className={`text-base ${option_type ? 'assamese-text' : 'manjari-text'} text-muted-foreground`}>{option}</div>
                )
            }
            {
                image && (
                    <div className="flex justify-start items-center">
                        <img alt="newsimage" src={image} className="rounded-md" />
                    </div>
                )
            }
        </div>
    )
}

export default OptionCard