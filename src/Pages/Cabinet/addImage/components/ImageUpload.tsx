import { FormEvent, useEffect, useRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./styles/imageupload.css";

interface IMGProps {
  setCroppedImage: (value: string) => void;
  setOriginalImage: (value: string) => void;
  round?: boolean;
  width?: number;
  aspect: number;
  color?: string;
  sizeLimit?: number;
}

const ImageUpload = (props: IMGProps) => {
  const [fileInput, setFileInput] = useState<any>();
  const [hasInput, setHasInput] = useState(false);
  const [croppedImage, setCroppedImage] = useState<any>();
  const [fileName, setFileName] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState("");

  const dialogRef = useRef<HTMLDialogElement>(null);
  const cropperRef = useRef<any>(null);

  function getBase64(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
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
      setStatusMessage("Файл слишком большой.");
    } else {
      console.log(file);
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
    setStatusMessage("Картинка сохранена успешно");
  };

  const dropHandler = (ev: any) => {
    console.log("File(s) dropped");

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
            setStatusMessage("Файл слишком большой.");
          } else {
            console.log(`… file[${i}].name = ${file.name}`);
            setFileName(file.name);
            getBase64(file);
          }
        } else {
          setStatusMessage("Неправильный тип данных.");
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };

  const dragOverHandler = (ev: any) => {
    console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  };

  useEffect(() => {
    setHasInput(fileInput !== null);
    console.log(fileInput);
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
    console.log(cropper.getCroppedCanvas().toDataURL());
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
    dialogRef.current?.close();
  };

  return (
    <div>
      {croppedImage && (
        <div id="img-display">
          <div
            id="clear-button"
            onClick={() => {
              clearFileInput();
            }}
          >
            𐌢
          </div>
          <img
            id={props.round ? "round" : ""}
            width={props.width || 250 + "px"}
            src={croppedImage}
          />
          <div id="options-row" style={{ width: props.width || 250 + "px" }}>
            <button id="edit-button" onClick={showEditor}>
              Изменить
            </button>
            <button
              id="save-button"
              style={{
                backgroundColor: props.color ? props.color : "dodgerblue",
              }}
              onClick={() => saveImage()}
            >
              Сохранить
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
          Загрузить фото
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
            обрезать
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default ImageUpload;

//<img src={fileInput} />
