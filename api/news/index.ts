import { createClient } from "@/utils/supabase/client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const GetAllNews = (filter: string[] = []) => {
    const supabase = createClient()
    return useInfiniteQuery({
        queryKey: ["news"],
        queryFn: async ({ pageParam = 0 }) => {
            const { data, error } = await supabase
                .from("news")
                .select(`
                    id,
                    creator_name,
                    creator_image,
                    heading,
                    tag,
                    time,
                    image,
                    created_at
                `)
                .contains("tags", filter)
                .order("created_at", { ascending: false })
                .range(pageParam * 10, (pageParam + 1) * 10 - 1);

            if (error) {
                throw new Error(error.message);
            }

            return {
                news: data.map(item => ({
                    ...item,
                    is_bookmarked: false
                })),
                nextPage: data.length === 10 ? pageParam + 1 : null
            }
        },
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 0
    })
}

export const GetNews = (newsId?: string) => {
    const supabase = createClient()

    return useQuery({
        queryKey: ["news", newsId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("news")
                .select("*")
                .eq('id', newsId)
                .single()

            if (error) {
                throw new Error(error.message)
            }

            return data
        }
    })
}