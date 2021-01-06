import { NowApiHandler } from '@vercel/node'

const handler: NowApiHandler = (req, res) => {
  res.json({ env: process.env })
}

export default handler
