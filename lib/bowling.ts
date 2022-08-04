import { RequestData, ResponseData, BowlingRound } from "../types";

export const calculateScore = (input: RequestData): ResponseData => {
  const rounds: BowlingRound[] = [];
  return { rounds, totalScore: 0 };
};
