import axios from "axios";
import React, { useEffect } from "react";
import CardNews from "../components/card";
import NavBar from "../components/navbar";

export const getServerSideProps = async () => {
  const response = await axios.get(`https://inshorts.deta.dev/news?category`);
  const newsAPI = response.data.data;
  return {
    props: {
      newsAPI: newsAPI,
    },
  };
};

const Index = ({ newsAPI }) => {
  console.log("date time: ", newsAPI);
  return (
    <div>
      <NavBar />
      <CardNews newsAPI={newsAPI} />
    </div>
  );
};

export default Index;
