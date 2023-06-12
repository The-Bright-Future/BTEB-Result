"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [curriculam, setCurriculam] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleResultUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }
      const formData = new FormData();
      formData.append('pdfFile', selectedFile);

      const response = await axios.post('http://localhost:7070/api/v1/result-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleCurriculamUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }
      const formData = new FormData();
      formData.append('pdfFile', selectedFile);

      const response = await axios.post('http://localhost:7070/api/v1/curriculam-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setResult(response.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <section>
      <div className='resultUpload'>
        <h1 className='uploadTitle'>Upload the <br /> result pdf</h1>
        <input type='file' onChange={handleFileChange} className='border-2 border-gray-300 p-2 rounded-lg w-1/2' />
        {
          !result ? <>
          <button onClick={handleResultUpload} disabled={!selectedFile} className='border p-6 bg-black fileUploadBtn cursor-pointer'>
          Upload
        </button>
          </> : <>
          <div className='result'>
            <h1 className='text-2xl font-bold'>Uploaded</h1>
          </div>
          </>
        }
      </div>

      <div className='resultUpload'>
        <h1 className='uploadTitle'>Upload the curriculam pdf</h1>
        <input type='file' onChange={handleFileChange} className='border-2 border-gray-300 p-2 rounded-lg w-1/2' />
        {
          !result ? <>
          <button onClick={handleCurriculamUpload} disabled={!selectedFile} className='border p-6 bg-black fileUploadBtn cursor-pointer'>
          Upload
        </button>
          </> : <>
          <div className='result'>
            <h1 className='text-2xl font-bold'>Uploaded</h1>
          </div>
          </>
        }
      </div>
    </section>
  );
};

export default Home;