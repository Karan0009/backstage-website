exports.handler = async function (event, context) {
  try {
    const { GoogleSpreadsheet } = require("google-spreadsheet")
    const doc = new GoogleSpreadsheet(process.env.spreadsheetId)
    await doc.useServiceAccountAuth({
      client_email: process.env.client_email,
      private_key: process.env.private_key,
    })
    const info = await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    const newRow = await sheet.addRow({
      name: "karan",
      email: "karan@gmail.com",
      feedback: "this is new",
    })
    console.log(process.env.testvar)
  } catch (error) {
    console.log(error)
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "some error occured",
        err: error.message,
      }),
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ message: process.env.testvar }),
  }
}
