// import React from "react";
// import Image from "next/image";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// export default function Banner() {
//   const backgroundImageUrl = "/header.png";

//   return (
//     <>
//       <section style={{ height: "100vh" }}>
//         <Parallax pages={2}>
//           <ParallaxLayer offset={0} speed={0.5}>
//             <div
//               className="absolute inset-0 bg-cover bg-center h-[70vh]"
//               style={{ backgroundImage: `url(${backgroundImageUrl})` }}
//             ></div>
//           </ParallaxLayer>

//           <ParallaxLayer
//             offset={0.3}
//             speed={0.3}
//             className="flex flex-col items-center"
//           >
//             <div className="absolute flex flex-col text-white items-center justify-center">
//               <div className="text-5xl">Ideas</div>
//               <div className="text-lg">Where all our great things begin</div>
//             </div>
//           </ParallaxLayer>
//           <ParallaxLayer offset={0.5} speed={0.5} className="">
//             <Image
//               src="/polygon.png"
//               width={1500}
//               height={1000}
//               alt="polygon"
//               className="relative"
//             />
//           </ParallaxLayer>
//           <ParallaxLayer offset={0.9} speed={1}>
//             <div></div>
//           </ParallaxLayer>
//         </Parallax>
//       </section>
//     </>
//   );
// }
