'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import OptionCard from "./OptionCard";

interface QuestionCardProps {
    question: {
        id: string;
        index: number;
        question_heading: string;
        question_heading_type: boolean;
        test_question_options: {
            index: number;
            text: string;
            text_type: boolean;
            isCorrect: boolean
        }[];
        tags: string[];
        is_attempted: boolean;
        is_bookmarked: boolean;
    };
    showCorrect: boolean;
    total: number;
    onOptionSelect: (optionId: number) => void
}

const TestQuestionCard: React.FC<QuestionCardProps> = ({ question, showCorrect, total, onOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null)

    const handleOptionSelect = (optionId: number) => {
        if (!showCorrect) {
            setSelectedOption(prev => (prev === optionId ? null : optionId));
            onOptionSelect(optionId)
        }
    }

    return (
        <Card className="p-0 w-11/12 md:w-md">
            <CardContent className="p-3 space-y-2">
                <div className="flex flex-row justify-between items-center">
                    <div className="text-sm text-muted-foreground">{question.index}/{total}</div>
                    <div className="flex flex-row flex-wrap">
                        {
                            question.tags.map((tag: string, index: number) => (
                                <div
                                    className="text-sm text-primary"
                                    key={index}
                                >#{tag}</div>
                            ))
                        }
                    </div>
                </div>
                <div className={`text-base font-medium ${question.question_heading_type ? 'assamese-text' : ''} text-muted-foreground`}>
                    {question.question_heading}
                </div>
                <div className="flex flex-col gap-1.5">
                    {
                        question.test_question_options.map((option: any, index: number) => (
                            <OptionCard
                                key={index}
                                id={option.index}
                                option={option.text}
                                option_type={option.text_type}
                                isCorrect={option.isCorrect}
                                isSelected={selectedOption === option.index}
                                showCorrect={showCorrect}
                                onSelect={handleOptionSelect}
                            />
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default TestQuestionCard