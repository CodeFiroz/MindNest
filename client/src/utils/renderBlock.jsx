import React from "react";
import Heading from "../components/Ui/Heading";
import List from "../components/Ui/List";
import Quote from "../components/Ui/Quote";

const renderBlock = (block, index) => {
  const { type, data } = block;

  const components = {
    paragraph: <p key={index}>{data.text}</p>,
    header: <Heading key={index} text={data.text} level={data.level} />,
    list: <List key={index} style={data.style} items={data.items} />,
    quote: <Quote key={index} text={data.text} caption={data.caption} />,
  };

  return components[type] || null;
};

const RenderEditorContent = ({ blocks }) => {
  return <>{blocks.map((block, i) => renderBlock(block, i))}</>;
};

export default RenderEditorContent;
