import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X, ArrowUp, ArrowDown, Trash } from "lucide-react";

const NewMemory = ({ onClose }) => {
  const modalRef = useRef();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const onDrop = useCallback((acceptedFiles) => {
    const fileReaders = acceptedFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({
            id: `${file.name}-${Math.random()}`,
            src: reader.result,
            caption: "",
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(fileReaders).then((newImages) => {
      setImages((prev) => [...prev, ...newImages]);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    onDrop,
  });

  const updateCaption = (index, newCaption) => {
    const updated = [...images];
    updated[index].caption = newCaption;
    setImages(updated);
  };

  const moveImage = (index, direction) => {
    const updated = [...images];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= updated.length) return;
    [updated[index], updated[targetIndex]] = [updated[targetIndex], updated[index]];
    setImages(updated);
  };

  const removeImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white dark:bg-stone-900 rounded-2xl shadow-xl w-[90%] max-w-xl p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <X size={20} />
        </button>

        {/* 📦 Dropzone */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
            isDragActive
              ? "border-indigo-500 bg-indigo-50"
              : "border-zinc-300 dark:border-zinc-600"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-zinc-500 dark:text-zinc-400">
            {isDragActive ? "Drop them here!" : "Drag & drop or click to upload images"}
          </p>
        </div>

        {/* 🖼 Uploaded Images */}
        {images.length > 0 && (
          <div className="mt-6 space-y-4">
            {images.map((img, index) => (
              <div
                key={img.id}
                className="flex items-center gap-3 border rounded-lg p-3 dark:border-zinc-700"
              >
                <img
                  src={img.src}
                  alt="preview"
                  className="w-16 h-16 object-cover rounded"
                />
                <input
                  type="text"
                  value={img.caption}
                  onChange={(e) => updateCaption(index, e.target.value)}
                  placeholder="Add caption"
                  className="flex-1 px-3 py-2 text-sm border rounded-md dark:bg-neutral-800 dark:text-zinc-300 dark:border-zinc-700"
                />
                <div className="flex flex-col gap-2">
                  <button
                    disabled={index === 0}
                    onClick={() => moveImage(index, -1)}
                    className="p-1 text-gray-500 hover:text-indigo-500 disabled:opacity-30"
                  >
                    <ArrowUp size={16} />
                  </button>
                  <button
                    disabled={index === images.length - 1}
                    onClick={() => moveImage(index, 1)}
                    className="p-1 text-gray-500 hover:text-indigo-500 disabled:opacity-30"
                  >
                    <ArrowDown size={16} />
                  </button>
                  <button
                    onClick={() => removeImage(index)}
                    className="p-1 text-red-400 hover:text-red-600"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 💾 Save Button */}
        {images.length > 0 && (
          <div className="flex justify-center mt-6">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
              Save Memory
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewMemory;
