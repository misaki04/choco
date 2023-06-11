import Header from "@/app/components/Header";
import React from "react";

const page = (props) => {
  console.log("propsで運ばれたものだよ", props);
  return (
    <div>
      <Header title={"aaa"} />
      <p>bbbb</p>
      <p>aaa</p>
    </div>
  );
};

export default page;
