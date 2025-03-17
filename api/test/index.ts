import { useQuery } from "@tanstack/react-query"
import { createClient } from "@/utils/supabase/client"

export const GetTestSeries = (exam: string) => {
    const supabase = createClient()

    return useQuery({
        queryKey: ["testseries"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("test_series")
                .select("*")
                .eq("exam", exam)

            if (error) {
                throw new Error(error.message)
            }

            return data
        }
    })
}

export const GetTestPapers = (seriesId?: string) => {
    const supabase = createClient()

    return useQuery({
        queryKey: ["testpapers"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("test")
                .select('*')
                .eq("testseries_id", seriesId)

            if (error) {
                throw new Error(error.message)
            }

            return data
        }
    })
}

export const GetQuestionPaper = (testId?: string) => {
    const supabase = createClient()

    return useQuery({
        queryKey: ["testpaper", testId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("test_questions")
                .select(`
                    *,
                    test_question_options (
                        *
                    )
                `)
                .eq("test_id", testId)
                .order("index", { ascending: true })

            if (error) {
                throw new Error(error.message)
            }

            return data
        }
    })
}