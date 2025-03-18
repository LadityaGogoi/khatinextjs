'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptionCard from "./OptionCard";

interface QuestionCardProps {
    question: {
        id: string;
        index: number;
        question_heading: string;
        options: {
            index: number;
            text: string;
            isCorrect: boolean
        }[];
        tags: string[];
        is_attempted: boolean;
        is_bookmarked: boolean;
    };
    total: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, total }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null)
    const [showCorrect, setShowCorrect] = useState<boolean>(false)

    const handleOptionSelect = (optionId: number) => {
        if (!showCorrect) setSelectedOption(optionId)
    }

    const checkAnswer = () => {
        setShowCorrect(true)
    }

    return (
        <Card className="p-0">
            <CardContent className="p-3 space-y-2">
                <div className="flex flex-row justify-between items-center">
                    <div className="text-sm text-muted-foreground">{question.index}/{total}</div>
                    <div className="flex flex-row flex-wrap">
                        {
                            question.tags.map((tag: string, index: number) => (
                                <div
                                    className="text-xs text-primary"
                                    key={index}
                                >#{tag}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="text-base font-medium assamese-text text-muted-foreground">
                    {question.question_heading}
                </div>
                <div className="flex flex-col gap-1.5">
                    {
                        question.options.map((option: any, index: number) => (
                            <OptionCard
                                key={index}
                                id={option.index}
                                option={option.text}
                                isCorrect={option.isCorrect}
                                isSelected={selectedOption === option.index}
                                showCorrect={showCorrect}
                                onSelect={handleOptionSelect}
                            />
                        ))
                    }
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <Bookmark className="stroke-muted-foreground" />
                    </div>
                    <Button size={'sm'} className="font-medium text-white" disabled={showCorrect} onClick={checkAnswer}>Check Answer</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default QuestionCard