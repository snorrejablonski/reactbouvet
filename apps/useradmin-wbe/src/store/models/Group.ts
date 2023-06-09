import { z } from "zod"

export const zGroup = z.object({
	id: z.string().min(8),
	name: z.string().min(2),
	role: z.enum(["guest", "user", "userAdmin", "groupAdmin"]),

	description: z.string().optional()
})
export type Group = z.infer<typeof zGroup>
