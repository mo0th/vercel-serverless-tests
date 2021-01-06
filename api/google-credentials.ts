import { NowApiHandler } from '@vercel/node'

const handler: NowApiHandler = (req, res) => {
  console.log({ env: process.env })
  res.json({})
}

export default handler
