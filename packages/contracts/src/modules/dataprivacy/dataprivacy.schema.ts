import { z } from "zod"

export const dataprivacySchema = z.object({
  id: z.number(),
  requestType: z.string(),
  dataSubject: z.string(),
  requestDetails: z.string(),
  consentStatus: z.string(),
  filedDate: z.date(),
  resolvedDate: z.date().optional(),
  status: z.string(),
  breachSeverity: z.string().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type DataPrivacy = z.infer<typeof dataprivacySchema>