import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import Underline from "@editorjs/underline";

import "../styles/editor.css";

const Editor = ({ data, onChange, editorBlock }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorBlock,
        data: data,
        placeholder: "✏️ Probably gonna overshare. Do it anyway...",
        tools: {
          header: Header,
          list: List,
          quote: Quote,
          underline: Underline,
          codetool: CodeTool
        },
        async onChange(api) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [editorBlock]);

  return <div id={editorBlock} />;
};

export default memo(Editor);
