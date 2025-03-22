'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { useState } from "react"

interface FilterProps {
    placeholder?: string;
    filterOptions: string[];
    onFilterChange: (filters: string[]) => void;
    selectedFilters: string[];
}


const SearchBar: React.FC<FilterProps> = ({
    placeholder = "Search . . .",
    filterOptions,
    onFilterChange,
    selectedFilters
}) => {
    const [localSelectedFilters, setLocalSelectedFilters] = useState<string[]>(selectedFilters);

    const toggleFilter = (filter: string) => {
        setLocalSelectedFilters((prev) =>
            prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
        );
    };

    const applyFilters = () => {
        onFilterChange(localSelectedFilters);
    }

    return (
        <Card className="p-0 rounded-full md:my-0 shadow-none">
            <CardContent className="flex flex-row justify-between items-center p-0.5">
                <Dialog>
                    <DialogTrigger>
                        <div className="rounded-full p-3 bg-primary/10">
                            <SlidersHorizontal
                                className="stroke-muted-foreground" />
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-center font-medium">Filters</DialogTitle>
                            <DialogDescription className="text-center">select your favorite</DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-row flex-wrap gap-1.5">
                            {
                                filterOptions.map((filter, index) => (
                                    <div key={index} onClick={() => toggleFilter(filter)} className={`text-xs font-semibold py-1.5 px-3 border-2 border-primary/50 ${localSelectedFilters.includes(filter) ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'} text-muted-foreground rounded-full`}>{filter}</div>
                                ))
                            }
                        </div>
                        <DialogFooter className="justify-center">
                            <DialogClose asChild>
                                <Button className="font-medium text-white" onClick={applyFilters}>Apply Filters</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    )
}

export default SearchBar