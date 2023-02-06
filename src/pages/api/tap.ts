// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import robot from 'robotjs'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { key, modifier } = req.query as { key: string; modifier: string | string[] }
  if (!key) return res.json({ ok: false, message: 'require key' })
  try {
    if (modifier) robot.keyTap(key, modifier)
    else robot.keyTap(key)
    res.json({ ok: true, key, modifier })
  } catch (error) {
    res.json({ ok: false, message: error.message })
  }
}
