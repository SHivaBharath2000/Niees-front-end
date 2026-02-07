import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill's default theme

const WYSIWYGEditor = () => {
  const [value, setValue] = useState("");

  // Toolbar configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-2">Quill WYSIWYG Editor</h2>

      {/* Quill Editor */}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        className="min-h-[200px] rounded-md"
      />

      {/* Preview */}
      <div className="mt-4 p-3 border rounded-md bg-gray-50">
        <h3 className="font-medium mb-2">Preview (HTML):</h3>
        <div className="text-sm text-gray-700 break-words">{value}</div>
      </div>
    </div>
  );
};

export default WYSIWYGEditor;
