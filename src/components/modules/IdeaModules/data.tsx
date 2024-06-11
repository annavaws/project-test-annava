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
    <div>
      <h1>Ideas</h1>
    </div>
  );
};

export default IndexPage;
