import vine from '@vinejs/vine'

export const createCommentValidator = vine.compile(
  vine.object({
    message: vine.string().trim().minLength(3).maxLength(200),
    userid: vine.string().trim().fixedLength(20),
    wonderid: vine.string().trim().fixedLength(18),
  })
)

export const updateCommentValidator = vine.compile(
  vine.object({
    message: vine.string().trim().minLength(3).maxLength(200),
  })
)
