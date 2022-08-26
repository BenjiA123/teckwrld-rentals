// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function login(
  req: NextApiRequest,

  res: NextApiResponse<any>
) {
  // Add your payload details
  const details = {};
  res.status(200).json({ name: "This is a Login Endpoint" });
}
