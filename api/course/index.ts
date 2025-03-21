import { createClient } from "@/utils/supabase/client"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const GetCourse = (course: string) => {
    const supabase = createClient()

    return useQuery({
        queryKey: ["course", course],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("exams")
                .select(`
                    id,
                    name,
                    image,
                    organization,
                    description,
                    thumbnail,
                    video,
                    total_subjects,
                    subjects (
                        id,
                        name,
                        total_lessons,
                        total_questions,
                        isPremium
                    ),
                    exam_notice_board (
                        heading,
                        description,
                        notice_url
                    )
                `)
                .eq("name", course)
                .single()

            if (error) {
                throw new Error(error.message)
            }

            return data
        }
    })
}

export const GetLessonBySubject = (subjectId?: string, userId?: string) => {
    const supabase = createClient()

    return useQuery({
        queryKey: ["lessons", userId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("lessons")
                .select(`
                    id,
                    name,
                    time,
                    subtopics,
                    image,
                    total_questions,
                    user_progress (
                        id
                    )
                `)
                .eq("subject_id", subjectId)
                .eq("user_progress.user_id", userId)

            if (error) throw new Error(error.message)

            // return data

            return data.map(lesson => ({
                id: lesson.id,
                name: lesson.name,
                image: lesson.image,
                timeRequired: lesson.time,
                totalSubtopics: lesson.subtopics.length || 0,
                progress: lesson.user_progress.length > 0 ? (lesson.user_progress.length * 100) / (lesson.total_questions || 1)
                    : 0
            }))
        }
    })
}

export const GetLessonDetails = (lessonId?: string) => {
    const supabase = createClient()

    return useQuery({
        queryKey: ["lesson", lessonId],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("lessons")
                .select("*")
                .eq("id", lessonId)
                .single()

            if (error) throw new Error(error.message)

            return data
        }
    })
}

export const GetLessonQuestionsByType = (lessonId?: string, userId?: string, type = "All", filters: string[] = []) => {
    const supabase = createClient()

    return useInfiniteQuery({
        queryKey: [type === "Saved" ? "bookmark_questions" : "questions", userId],
        queryFn: async ({ pageParam = 0 }) => {
            if (type === "Saved") {
                const { data, error } = await supabase
                    .from("bookmark_questions")
                    .select(`
                        questions (
                            id,
                            question_heading,
                            question_heading_type,
                            image,
                            index,
                            tags,
                            options (
                                id,
                                index,
                                text,
                                text_type,
                                isCorrect
                            ),
                            bookmark_questions ( id ),
                            user_progress ( id )
                        )    
                    `)
                    .eq("user_id", userId)
                    .eq("questions.lesson_id", lessonId)
                    .eq("questions.bookmark_questions.user_id", userId)
                    .eq("questions.user_progress.user_id", userId)
                    .contains("tags", filters)
                    .order("created_at", { ascending: false })
                    .range(pageParam * 10, (pageParam + 1) * 10 - 1);

                if (error) {
                    throw new Error(error.message);
                }

                return {
                    questions: data.map(({ questions }: any) => ({
                        id: questions.id,
                        question_heading: questions.question_heading,
                        question_heading_type: questions.question_heading_type,
                        image: questions.image,
                        index: questions.index,
                        tags: questions.tags,
                        options: questions.options,
                        is_bookmarked: questions.bookmark_questions.length > 0,
                        is_attempted: questions.user_progress.length > 0
                    })),
                    nextPage: data.length === 10 ? pageParam + 1 : null,
                };
            } else {
                const { data, error } = await supabase
                    .from("questions")
                    .select(`
                        id,
                        question_heading,
                        question_heading_type,
                        image,
                        index,
                        tags,
                        options (
                            id,
                            index,
                            text,
                            text_type,
                            isCorrect
                        ),
                        bookmark_questions ( id ),
                        user_progress ( id )
                    `)
                    .eq("lesson_id", lessonId)
                    .eq("bookmark_questions.user_id", userId)
                    .eq("user_progress.user_id", userId)
                    .contains("tags", filters)
                    .order("index", { ascending: false })
                    .range(pageParam * 10, (pageParam + 1) * 10 - 1);

                if (error) {
                    throw new Error(error.message);
                }

                return {
                    questions: data.map(question => ({
                        id: question.id,
                        question_heading: question.question_heading,
                        question_heading_type: question.question_heading_type,
                        image: question.image,
                        index: question.index,
                        tags: question.tags,
                        options: question.options,
                        is_bookmarked: question.bookmark_questions.length > 0,
                        is_attempted: question.user_progress.length > 0
                    })),
                    nextPage: data.length === 10 ? pageParam + 1 : null,
                };
            }
        },
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 0,
    });
};