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
                        <CardDescription>For Individual who wants to prepare for their exams</CardDescription>
                        <CardTitle className="text-xl">	₹99 only</CardTitle>
                        <CardContent className="flex flex-col gap-2">
                            <Button className="w-full text-foreground font-bold" size={"lg"}>Get Started</Button>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex flex-row justify-start items-center gap-1">
                                    <Check className="stroke-muted-foreground stroke-2" />
                                    <div className="text-xs text-muted-foreground">Unlimited Questions Access</div>
                                </div>
                                <div className="flex flex-row justify-start items-center gap-1">
                                    <Check className="stroke-muted-foreground stroke-2" />
                                    <div className="text-xs text-muted-foreground">Access to latest jobs in the market</div>
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