export type BowlingRound = { sum: number, first: number, second?: number }
export type RequestData = { throws: number[] }
export type ResponseData = { rounds: BowlingRound[], totalScore: number }
