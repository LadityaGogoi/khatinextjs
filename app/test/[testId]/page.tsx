'use client'

import { GetQuestionPaper } from "@/api/test"
import TestQuestionCard from "@/components/custom/TestQuestionCard"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const Page = () => {
    const { testId } = useParams()
    const router = useRouter()
    const id = Array.isArray(testId) ? testId[0] : testId
    const [timeLeft, setTimeLeft] = useState<number>(60 * 60)
    const [showCorrect, setShowCorrect] = useState(false)
    const questionRefs = useRef<(HTMLDivElement | null)[]>([])
    const [open, setOpen] = useState(false)
    const { data, isLoading } = GetQuestionPaper(id)
    const [selectedOptions, setSelectedOptions] = useState<Array<number | null>>([]);
    const [results, setResults] = useState<{
        correct: number;
        incorrect: number;
        unattempted: number;
    } | null>(null)

    const [showResult, setShowResult] = useState<boolean>(false)
    useEffect(() => {
        if (data) {
            setSelectedOptions(Array(data.length).fill(null));
        }
    }, [data]);

    useEffect(() => {
        if (timeLeft <= 0) {
            handleShowResult()
            setShowResult(true)
            return
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft])

    const handleOptionsSelect = (index: number, optionId: number) => {
        setSelectedOptions(prev => {
            const newSelectedOptions = [...prev]
            newSelectedOptions[index] = optionId
            return newSelectedOptions
        })
    }

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60
        return `${hrs > 0 ? hrs + ':' : ''}${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const scrollToQuestion = (index: number): void => {
        if (questionRefs.current[index]) {
            questionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })
            setOpen(false)
        }
    }

    const handleShowResult = () => {
        let correct = 0;
        let incorrect = 0;
        let unattempted = 0;

        data?.forEach((question, index) => {
            const selectedOptionId = selectedOptions[index];

            if (selectedOptionId === null) {
                unattempted++;
            } else {
                const correctOption = question?.test_question_options.find((option: any) => option.isCorrect)
                // console.log(correctOption.index == selectedOptionId)

                if (correctOption.index == selectedOptionId) {
                    correct++
                } else {
                    incorrect++
                }
            }
        });
        setResults({ correct, incorrect, unattempted });
        setShowCorrect(true);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col bg-primary/5 my-3">
                <div className="flex flex-col lg:flex-row mx-auto gap-2 md:mt-24">
                    <div className="text-center text-sm text-muted-foreground">| loading |</div>
                </div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="flex flex-col bg-primary/5 my-3">
                <div className="flex flex-col lg:flex-row mx-auto gap-2 md:mt-24">
                    <div className="text-center text-sm text-muted-foreground">| loading |</div>
                </div>
            </div>
        )
    }

    return (
        <main className="w-full h-full mx-auto bg-background">
            <div className="flex flex-col w-full justify-center items-center">
                <div className="w-full fixed top-0 left-0 border-b z-[10] backdrop-blur-md bg-background/50">
                    <div className="w-11/12 md:w-md flex flex-row justify-between items-center mx-auto py-3">
                        <Button onClick={() => router.back()} className="w-24 text-xs font-semibold transform scale-y-110 text-white" variant={"destructive"} size={"sm"}>Exit Test</Button>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <div className="flex flex-row justify-center items-center">
                                    <div className="text-primary font-medium transform scale-y-110">Menu</div>
                                    <ChevronDown size={24} className="stroke-primary stroke-3" />
                                </div>
                            </DialogTrigger>
                            <DialogContent className="w-11/12 md:w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-center font-semibold transform scale-y-125 text-primary">Question List</DialogTitle>
                                    <DialogDescription className="text-center">select question index</DialogDescription>
                                </DialogHeader>
                                <div className="flex flex-row flex-wrap gap-1.5 mt-4">
                                    {data?.map((_, index) => (
                                        <Button
                                            key={index}
                                            variant={"outline"}
                                            size={"sm"}
                                            onClick={() => scrollToQuestion(index)}
                                        >
                                            {index + 1}
                                        </Button>
                                    ))}
                                </div>
                            </DialogContent>
                        </Dialog>
                        <div className="">
                            <Button variant={"outline"} className="w-24 text-xs font-semibold transform scale-y-110 text-muted-foreground">{formatTime(timeLeft)}</Button>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2 py-24">
                    {
                        data?.map((question, index) => (
                            <div className="w-full flex justify-center items-center" ref={(el) => { questionRefs.current[index] = el }} key={index}>
                                <TestQuestionCard
                                    showCorrect={showCorrect}
                                    key={index}
                                    question={question}
                                    total={data.length}
                                    onOptionSelect={(optionId) => handleOptionsSelect(index, optionId)}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="w-full fixed bottom-0 left-0 border-t z-[10] backdrop-blur-md bg-background/50">
                    <div className="w-full flex justify-center items-center py-3">
                        <Dialog open={showResult} onOpenChange={setShowResult}>
                            <DialogTrigger asChild>
                                <Button className="w-xs font-medium text-white" onClick={handleShowResult}>
                                    Submit Paper
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-11/12 md:w-md">
                                <DialogHeader>
                                    <DialogTitle className="text-center font-semibold transform scale-y-125 text-primary">Test Results</DialogTitle>
                                    <DialogDescription className="text-center">Coming Soon</DialogDescription>
                                </DialogHeader>
                                <div className="flex flex-col gap-4 mt-4">
                                    <div className="text-green-600 text-center">Correct: {results?.correct}</div>
                                    <div className="text-red-600 text-center">Incorrect: {selectedOptions?.length - (results?.unattempted || 0) - (results?.correct || 0)}</div>
                                    <div className="text-gray-600 text-center">Unattempted: {results?.unattempted}</div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Page