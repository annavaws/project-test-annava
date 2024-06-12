// import axios from "axios";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     console.log("emang iya masuk sini?");
//     const response = await axios.get(
//       "https://suitmedia-backend.suitdev.com/api/ideas",
//       {
//         params: {
//           "page[number]": req.query.pageNumber || 1,
//           "page[size]": req.query.pageSize || 10,
//           append: ["small_image", "medium_image"],
//           sort: req.query.sort || "-published_at",
//         },
//       }
//     );
//     res.status(response.status).json(response.data);
//   } catch (error: any) {
//     res.status(error.response.status || 500).json({ error: error.message });
//   }
// }
