import { createZodDto } from "@anatine/zod-nestjs"
import { extendApi } from "@anatine/zod-openapi"
import { z } from "zod"

import { zUser } from "./User"

export const zUserMemberships = z.object({
	user: zUser,
	memberOfIds: z.string().array().describe("Group ids of groups this user is a member of")
})
export type UserMemberships = z.infer<typeof zUserMemberships>

export class UserMembershipDTO extends createZodDto(extendApi(zUserMemberships)) {}
