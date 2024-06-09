import { FormEvent, useEffect, useRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./styles/imageupload.css";
import React from "react";

interface IMGProps {
  setCroppedImage: (value: string) => void;
  setOriginalImage: (value: string) => void;
  round?: boolean;
  width?: number;
  aspect: number;
  color?: string;
  sizeLimit?: number;
}

const ImageUpload = (props: IMGProps, { onChange }) =>
  // , iImg, setIImg
  // , croppedImage, setCroppedImage
  {
    const [fileInput, setFileInput] = useState<any>();
    const [hasInput, setHasInput] = useState(false);
    const [croppedImage, setCroppedImage] = useState<any>(
      "/cabinet/first_ava.png"
    );

    const [fileName, setFileName] = useState<string>("");
    const [statusMessage, setStatusMessage] = useState("");

    const dialogRef = useRef<HTMLDialogElement>(null);
    const cropperRef = useRef<any>(null);

    function getBase64(file: any) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        setFileInput(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };

      return reader.result;
    }

    const handleFile = async (e: any) => {
      const file = e.currentTarget.files[0];
      if (props.sizeLimit && file.size > props.sizeLimit) {
        setStatusMessage("The file is too large.");
      } else {
        setFileName(file.name);
        getBase64(file);
      }
    };

    const clearFileInput = () => {
      setHasInput(false);
      setFileInput(null);
      setCroppedImage(null);
      setFileName("");
    };

    const saveImage = () => {
      props.setCroppedImage(croppedImage);
      props.setOriginalImage(fileInput);

      setStatusMessage("The image was saved successfully");
    };

    const dropHandler = (ev: any) => {
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();

      if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        [...ev.dataTransfer.items].forEach((item, i) => {
          if (
            item.kind === "file" &&
            (item.type === "image/png" ||
              item.type === "image/gif" ||
              item.type === "image/jpg" ||
              item.type === "image/jpeg")
          ) {
            const file = item.getAsFile();
            if (props.sizeLimit && file.size > props.sizeLimit) {
              setStatusMessage("The file is too large.");
            } else {
              setFileName(file.name);
              getBase64(file);
            }
          } else {
            setStatusMessage("Invalid data type.");
          }
        });
      } else {
        // Use DataTransfer interface to access the file(s)
        [...ev.dataTransfer.files].forEach((file, i) => {});
      }
    };

    const dragOverHandler = (ev: any) => {
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault();
    };

    useEffect(() => {
      setHasInput(fileInput !== null);
      showEditor();
    }, [fileInput]);

    useEffect(() => {
      setTimeout(() => {
        setStatusMessage("");
      }, 2000);
    }, [statusMessage]);

    const showEditor = () => {
      if (fileInput) dialogRef.current?.showModal();
    };

    const onCrop = () => {
      const cropper = cropperRef.current?.cropper;
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      dialogRef.current?.close();
    };

    // const menu_blok = document.querySelector(".save");
    // menu_blok.classList.add("save_on");
    // menu_open.classList.remove("save_off");

    const handleNameChange = (event) => {
      onChange(event.target.value);
    };
    return (
      <div>
        <div className="save save_off">
          <img className="no_save_img" src="/cabinet/save.svg" alt="" />
          <p className="save_p">Data saved</p>
        </div>
        <div className="no_save save_off">
          <img className="no_save_img" src="/cabinet/noSave.svg" alt="" />
          <p className="no_save_p">Data not saved</p>
        </div>
        {croppedImage && (
          <div id="img-display">
            <div
              id="clear-button"
              onClick={() => {
                clearFileInput();
              }}
            ></div>
            <img
              id={props.round ? "round" : ""}
              width={props.width || 250 + "px"}
              src={croppedImage}
            />
            <input
              className="none"
              type="none"
              value={croppedImage}
              onChange={handleNameChange}
            />
            <div id="options-row" style={{ width: props.width || 250 + "px" }}>
              <button id="edit-button" onClick={showEditor}>
                Change
              </button>
              <button
                id="save-button"
                style={{
                  backgroundColor: props.color ? props.color : "dodgerblue",
                }}
                onClick={() => saveImage()}
              >
                Save
              </button>
            </div>
          </div>
        )}
        <div
          id="drop-zone"
          style={{
            borderColor: props.color ? props.color : "white",
            width: props.width || 150 + "px",
          }}
          onDrop={() => dropHandler(event)}
          onDragOver={() => dragOverHandler(event)}
        >
          <img src="/cabinet/downloud.svg" alt="" />
          <p className="downloud_photo_p" id="drop-label">
            Upload photo
          </p>
          <p>(jpeg, png)</p>
          <input
            id="image-input"
            style={{ width: props.width || 250 + "px" }}
            type="file"
            accept=".png,.jpg,.jpeg,.gif"
            onInput={(e) => {
              handleFile(e);
            }}
            onChange={handleNameChange}
          />
          {fileInput && <p id="file-name">{/* {fileName} */}</p>}
        </div>
        {statusMessage && <p id="status-msg">{statusMessage}</p>}
        <dialog ref={dialogRef} id="editor">
          <div id={props.round ? "round" : "rect"}>
            <Cropper
              src={fileInput}
              style={{ height: 500, width: 500 }}
              initialAspectRatio={props.aspect}
              aspectRatio={props.aspect}
              guides={false}
              ref={cropperRef}
            />
          </div>
          <div id="editor-button-row">
            <button id="crop-button" onClick={onCrop}>
              trim
            </button>
          </div>
        </dialog>
      </div>
    );
  };

export default ImageUpload;