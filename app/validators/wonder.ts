import vine from '@vinejs/vine'

export const createWonderValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(150),
    province: vine.string().trim(),
    description: vine.string().trim().minLength(3).maxLength(300),
  })
)

export const updateWonderValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(150),
    province: vine.string().trim(),
    description: vine.string().trim().minLength(3).maxLength(300),
  })
)
