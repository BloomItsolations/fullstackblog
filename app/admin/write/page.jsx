"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import styles from "../../styles/write.module.css";

// Dynamically import ReactQuill to prevent server-side rendering issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      // You can perform any browser-specific initialization here
    }
  }, []);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/images/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image
                  src="/images/gallerylogo.png"
                  alt=""
                  width={16}
                  height={16}
                />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/images/external.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        {/* Render ReactQuill only in the browser environment */}
        {typeof window !== "undefined" && (
          <ReactQuill
            className={styles.textArea}
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
            modules={modules}
          />
        )}
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
