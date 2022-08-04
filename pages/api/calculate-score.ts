// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { RequestData, ResponseData } from "../../types";
import { calculateScore } from "../../lib/bowling";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    error?: string,
    data?: ResponseData,
  }>
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ 'error': 'invalid method'});
  }
  const data: RequestData = JSON.parse(req.body);
  const response = calculateScore(data);
  res.status(200).json({ data: response })
}
