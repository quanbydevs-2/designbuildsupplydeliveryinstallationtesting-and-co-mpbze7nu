import { z } from "zod"

export const farmerSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  barangay: z.string(),
  farmArea: z.number(),
  contactNumber: z.string().optional(),
  registrationDate: z.date(),
  farmType: z.string(),
  isActive: z.boolean().default(false),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Farmer = z.infer<typeof farmerSchema>