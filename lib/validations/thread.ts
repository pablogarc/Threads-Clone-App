import { z } from "zod";

export const ThreadValidationSchema = z.object({
    thread: z.string().min(3, { message: "Minimum 3 characters" }),
    accountId: z.string(),
})

export const CommentValidationSchema = z.object({
    thread: z.string().min(3, { message: "Minimum 3 characters" }),
})