'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, Check, ChevronDown, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptionCard from "./OptionCard";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from "next/navigation";

interface QuestionCardProps {
    question: {
        id: string;
        index: number;
        question_paragraph?: string;
        image?: string;
        question_heading: string;
        question_heading_type: boolean;
        test_question_options: {
            index: number;
            text: string;
            image: string;
            text_type: boolean;
            isCorrect: boolean
        }[];
        tags: string[];
        is_attempted: boolean;
        is_bookmarked: boolean;
    };
    total: number;
}

const PracticeQuestionCard: React.FC<QuestionCardProps> = ({ question, total }) => {
    const router = useRouter()
    const [selectedOption, setSelectedOption] = useState<number | null>(null)
    const [showCorrect, setShowCorrect] = useState<boolean>(false)

    const handleOptionSelect = (optionId: number) => {
        if (!showCorrect) {
            setSelectedOption(prev => (prev === optionId ? null : optionId));
        }
    }

    const checkAnswer = () => {
        setShowCorrect(true)
    }

    return (
        <Card className="p-0 w-11/12 md:w-md">
            <CardContent className="p-3 space-y-2">
                <div className="flex flex-row justify-between items-center">
                    <div className="text-sm english-text font-bold transform scale-y-150 text-muted-foreground">{question.index}/{total}</div>
                    <div className="flex flex-row flex-wrap">
                        {
                            question.tags.map((tag: string, index: number) => (
                                <div
                                    className="text-sm english-text text-primary font-bold"
                                    key={index}
                                >#{tag}</div>
                            ))
                        }
                    </div>
                </div>
                {
                    question?.question_paragraph && (
                        <div className={`text-base  ${question.question_heading_type ? 'assamese-text' : 'english-text'} text-muted-foreground`}>
                            {question.question_paragraph}
                        </div>
                    )
                }
                {
                    question?.image && (
                        <div className="flex justify-center items-center">
                            <img alt="newsimage" src={question?.image} className="rounded-md" />
                        </div>
                    )
                }
                <div className={`text-base font-semibold ${question.question_heading_type ? 'assamese-text' : 'english-text'} text-muted-foreground`} dangerouslySetInnerHTML={{ __html: question.question_heading }} />
                <div className="flex flex-col gap-1.5">
                    {
                        question.test_question_options.map((option: any, index: number) => (
                            <OptionCard
                                key={index}
                                id={option.index}
                                option={option.text}
                                image={option.image}
                                option_type={option.text_type}
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
                    <div className="flex flex-row items-center justify-center gap-1.5">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"outline"} size={"sm"} className="text-muted-foreground">
                                    Show Solution
                                    <Lightbulb size={24} className="stroke-primary stroke-3" />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-11/12 md:w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-center font-semibold transform scale-y-125 text-primary">Not a Premium Account</DialogTitle>
                                    <DialogDescription className="text-center assamese-text text-destructive">.</DialogDescription>
                                </DialogHeader>
                                <Button onClick={() => router.push('/plan')} size={"sm"} className="bg-yellow-500 text-white w-11/12 mx-auto">Upgrade Now</Button>
                            </DialogContent>
                        </Dialog>
                        <Button size={"sm"} className="text-white font-medium" disabled={showCorrect} onClick={checkAnswer}>Check Answer
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PracticeQuestionCard