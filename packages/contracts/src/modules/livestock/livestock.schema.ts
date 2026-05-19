import { z } from "zod"

export const livestockSchema = z.object({
  id: z.number(),
  animalType: z.string(),
  breed: z.string().optional(),
  farmerId: z.number(),
  quantity: z.number(),
  acquisitionDate: z.date(),
  purpose: z.string(),
  healthStatus: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Livestock = z.infer<typeof livestockSchema>