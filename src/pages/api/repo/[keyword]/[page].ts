//  External Dependencies
import { NextApiRequest, NextApiResponse } from "next";

//  Internal Dependencies
import { getRepodata } from "@helpers/getRepodata";

const ERROR_CODE = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  REQUEST_ERROR: 400,
  SERVER_ERROR: 500,
};

const ERROR_MESSAGE = {
  NOT_FOUND: "API Endpoint not found.",
  SERVER_ERROR: "Server Error.",
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { keyword, page } = req.query;

  try {
    switch (req.method) {
      case "GET":
        const data = await getRepodata(
          keyword as string,
          Number(page as string)
        );
        return res.status(200).json(data);
      default:
        return res.status(ERROR_CODE.NOT_FOUND).send(ERROR_MESSAGE.NOT_FOUND);
    }
  } catch (error) {
    return res.status(ERROR_CODE.SERVER_ERROR).send(ERROR_MESSAGE.SERVER_ERROR);
  }
};
