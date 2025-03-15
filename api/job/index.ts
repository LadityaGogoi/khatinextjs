import { createClient } from "@/utils/supabase/client"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const GetJobs = (filters: string[] = []) => {
    const supabase = createClient()
    return useInfiniteQuery({
        queryKey: ["jobs"],
        queryFn: async ({ pageParam = 0 }) => {
            const { data, error } = await supabase
                .from("jobs")
                .select(`
                    id,
                    title,
                    organization,
                    image,
                    expected_salary,
                    total_posts,
                    tags,
                    created_at,
                    location
                `)
                .contains("tags", filters)
                .order("created_at", { ascending: false })
                .range(pageParam * 10, (pageParam + 1) * 10 - 1);  // Fetch 10 jobs per page

            if (error) {
                throw new Error(error.message);
            }

            return {
                jobs: data.map(job => ({
                    ...job,
                    is_bookmarked: false
                })),
                nextPage: data.length === 10 ? pageParam + 1 : null
            };
        },
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 0
    });
}

export const GetJob = (jobId?: string) => {
    const supabase = createClient()
    return useQuery({
        queryKey: ["job", jobId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("jobs")
                .select("*")
                .eq('id', jobId)
                .single()

            if (error) {
                throw new Error(error.message)
            }

            return data
        }
    })
}