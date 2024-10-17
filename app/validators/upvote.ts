import vine from '@vinejs/vine'

export const createUpvoteValidator = vine.compile(
  vine.object({
    value: vine.boolean(),
    userid: vine.string().trim().fixedLength(20),
    wonderid: vine.string().trim().fixedLength(18),
  })
)

export const updateUpvoteValidator = vine.compile(
  vine.object({
    value: vine.boolean(),
  })
)
