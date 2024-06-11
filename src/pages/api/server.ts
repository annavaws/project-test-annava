// import express, { Request, Response } from "express";
// import next from "next";
// import axios from "axios";

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const API_URL = "https://suitmedia-backend.suitdev.com/api";

// app.prepare().then(() => {
//   const server = express();

//   server.get("/api/ideas", async (req: Request, res: Response) => {
//     try {
//       const response = await axios.get(`${API_URL}/ideas`, {
//         params: {
//           "page[number]": req.query["page[number]"],
//           "page[size]": req.query["page[size]"],
//           append: req.query.append,
//           sort: req.query.sort,
//         },
//       });
//       res.json(response.data);
//     } catch (error: any) {
//       res.status(error.response.status).json({ error: error.message });
//     }
//   });

//   server.get("*", (req: Request, res: Response) => {
//     return handle(req, res);
//   });

//   server.listen(3000, (err?: Error) => {
//     if (err) throw err;
//     console.log("> Ready on http://localhost:3000");
//   });
// });
