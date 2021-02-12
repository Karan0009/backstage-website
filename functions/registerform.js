const { GoogleSpreadsheet } = require("google-spreadsheet")
const joi = require("joi")

const schema = joi.object({
  name: joi.string().min(3).max(100).required(),
  instagram: joi.string().alphanum().max(200).required(),
  tiktok: joi.string().alphanum().max(200).required(),
  otherSocial: joi.string().max(200).empty(""),
  country: joi.string().max(200).required(),
  feedback: joi.string().min(3).max(1000).required(),
  phone: joi.number().required(),
  email: joi.string().email().max(200).required(),
})

exports.handler = async function (event, context) {
  try {
    const body = JSON.parse(event.body)
    const value = schema.validate({ ...body })
    if (value.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "some error occured",
          success: false,
          error: value.error.details,
        }),
      }
    } else {
      const doc = new GoogleSpreadsheet(process.env.spreadsheetId)
      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(
          /\\n/g,
          "\n"
        ),
      })
      await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]
      const newRow = await sheet.addRow({
        name: body.name,
        email: body.email,
        feedback: body.feedback,
        instagram: body.instagram,
        tiktok: body.tiktok,
        otherSocial: body.otherSocial,
        phone: body.phone,
        country: body.country,
      })
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "data stored", success: true }),
      }
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "some error occured",
        success: false,
        err: error.message,
      }),
    }
  }
}
