import { NextApiHandler } from "next";
import axios from "axios";

const handler: NextApiHandler = async (req, res) => {
  try {
    const response = await axios.get("https://graph.instagram.com/refresh_access_token", {
      params: {
        grant_type: "ig_refresh_token",
        access_token: process.env.INSTAGRAM_KEY,
      },
    });
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
