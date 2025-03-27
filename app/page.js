"use client"
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import toast, { Toaster } from 'react-hot-toast';

const DocumentUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [documentUrl, setDocumentUrl] = useState(null);
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const { NutrientViewer } = window;

    const loadViewer = async () => {
      if (container && NutrientViewer && documentUrl) {
        try {
          if (viewerRef.current) {
            await NutrientViewer.unload(container);
            viewerRef.current = null;
          }

          viewerRef.current = await NutrientViewer.load({
            container,
            document: documentUrl,
          });
          toast.success("pdf has been rendered!")
        } catch (error) {
          console.error('Failed to load document:', error);
        }
      }
    };

    loadViewer();

    return () => {
      if (viewerRef.current) {
        NutrientViewer?.unload(container);
        viewerRef.current = null;
      }
    };
  }, [documentUrl]);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);

            const fileUrl = URL.createObjectURL(file);
            setDocumentUrl(fileUrl);
            toast.success("pdf has been uploaded!")
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    } catch (error) {
      console.error('Upload failed:', error);
      setIsUploading(false);
      toast.error("upload failed, try again!")
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  });

  return (
    <div className="bg-stone-50 min-h-screen pt-28 pb-10 px-5">
      <Toaster position="top-center" />
      <h1 className="text-center font-bold text-3xl md:text-5xl">{documentUrl ? "Modify uploaded PDF" : "Upload a document"}</h1>
      {documentUrl ? (<p className="text-center mx-auto text-sm py-5">You can <span classNamae="text-amber-500">annotate, sign on, highlight</span> and extract the pdf file</p>)
        : (
          <p className="text-center mx-auto text-sm py-5 px-5">PDF files only, docs, txt, png, jpg or any other formats are <span className="text-red-500">not allowed</span> </p>
        )}

      {!documentUrl ? (
        <div
          {...getRootProps()}
          className={`border-2 md:w-1/2  mx-auto bg-slate-200 border-dashed rounded-lg p-8 text-center ${isDragActive ? 'border-blue-500 shadow-md shadow-slate-500 bg-gray-200' : 'border-gray-300'
            }`}
        >
          <input {...getInputProps()} />
          {isUploading ? (
            <div>
              <p>Uploading... {uploadProgress}%</p>
              <progress value={uploadProgress} max="100" className="w-full" />
            </div>
          ) : (
            <div className='flex items-center flex-col mx-auto gap-4'>
              <Image src={"/upload.webp"} alt="upload icon" width={200} height={200} />
              <p className="mb-2">
                {isDragActive
                  ? 'Drop the PDF here'
                  : 'Drag & drop a PDF here, or click to select'}
              </p>
              <button
                type="button"
                className="px-6 py-2.5 bg-ambe r-600 bg-gradient-to-bl from-amber-400 to-orange-500 hover:shadow-md hover:shadow-slate-400 border border-white  text-white rounded-xl hover:bg-amber-700"
              >
                Select PDF
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center md:mb-4">
          <button
            onClick={() => setDocumentUrl(null)}
            className="px-6 py-2.5 bg-ambe r-600 bg-gradient-to-bl from-amber-400 to-orange-500 hover:shadow-md hover:shadow-slate-400 border border-white  text-white rounded-xl hover:bg-amber-700 mb-4"
          >
            Upload another pdf
          </button>
        </div>
      )}

      <div
        ref={containerRef}
        className="!md:w-[80%] !w-[90%]"
        style={{
          height: "80vh",
          margin: "0 auto",
          display: documentUrl ? "block" : "none",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden"
        }}
      />
    </div>
  );
};

export default DocumentUpload;