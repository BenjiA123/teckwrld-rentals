// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const Flutterwave = require("flutterwave-node-v3");

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,

  res: NextApiResponse<any>
) {
  const flw: any = new Flutterwave(
    "process.env.FLW_PUBLIC_KEY",
    "process.env.FLW_SECRET_KEY"
  );

  // Add your payload details
  const details = {};
  res.status(200).json({ name: "This is the Flutter wave payment route" });
}
