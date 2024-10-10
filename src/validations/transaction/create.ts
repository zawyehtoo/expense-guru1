import { z } from 'zod'

export const createValidation = z.object({
    categoryId: z.string({ message: "Category must not be empty." }),
    amount: z.string({ message: "Amount must not be empty." })
        .refine((val) => /^[1-9][0-9,]*$/.test(val.replace(/,/g, "")), {
            message: "Amount must not start with 0 and must be a valid number.",
        })
        .refine(
            (val) => Number(val.replace(/,/g, "")) >= 1,
            "Amount must be at leat 1."
        ),
    note: z.string().min(5, { message: "Note must be at least 5 characters long" })
        .max(200, { message: "Note can't exceed 200 characters" })
        .optional().or(z.literal(""))
}).required();

export type TransactionType = z.infer<typeof createValidation>;