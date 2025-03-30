import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"

const Page = () => {
    return (
        <div className="flex flex-col bg-primary/5">
            <div className="flex flex-col gap-5 items-center my-3 md:mt-24">
                <Card className="w-xs">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl text-chart-3 font-extrabold">Premium Plan</CardTitle>
                        <CardDescription className="text-sm font-bold assamese-text">নূন্যতম খৰচেৰে আপোনাৰ প্ৰস্তুতি আৰম্ভ কৰক</CardDescription>
                        <CardTitle className="text-xl">	₹49</CardTitle>
                        <CardContent className="flex flex-col gap-2">
                            <div>
                                <Button className="w-full font-semibold text-muted-foreground mb-3" variant={"outline"} size={"lg"}>Payment Process</Button>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex flex-row justify-start items-center gap-1.5">
                                        <Check className="stroke-green-500 stroke-2 size-7" />
                                        <div className="text-sm text-muted-foreground assamese-text w-full text-start"><span className="english-text">₹49 (provided soon..) </span>এই নম্বৰত পঠিয়াওক।</div>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-1.5">
                                        <Check className="stroke-green-500 stroke-2 size-7" />
                                        <div className="text-sm text-muted-foreground assamese-text w-full text-start">পেমেণ্টৰ স্ক্ৰিনশ্বট লওক।</div>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-1">
                                        <Check className="stroke-green-500 stroke-2 size-7" />
                                        <div className="text-sm text-muted-foreground assamese-text w-full text-start">আপোনাৰ <span className="english-text">name, email, password (provided soon...)</span> এই নম্বৰত পঠিয়াওক ।</div>
                                    </div>
                                    <div className="flex flex-row justify-start items-center gap-1">
                                        <Check className="stroke-green-500 stroke-2 size-7" />
                                        <div className="text-sm text-muted-foreground assamese-text w-full text-start">৬ ঘণ্টাৰ ভিতৰত আপোনাৰ প্ৰিমিয়াম একাউণ্ট সক্রিয় কৰা হ’ব ।</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default Page