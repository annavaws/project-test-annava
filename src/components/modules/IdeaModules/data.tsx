import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    console.log("here");
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/ideas", {
          params: {
            "page[number]": 1,
            "page[size]": 10,
            append: ["small_image", "medium_image"],
            sort: "-published_at",
          },
        });
        setIdeas(response.data.data);
        console.log("API Response:", response.data.data);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div>Hello, why this page so weird</div>
    </div>
  );
};

export default IndexPage;
