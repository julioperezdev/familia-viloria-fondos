import type { NextApiRequest, NextApiResponse } from 'next'
import {getSpanishData, getEnglishData} from "../../../utils/database"



type Data = {
  name: string
}



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'tasks' })
}