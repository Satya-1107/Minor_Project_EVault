import React, { useState } from 'react';
import { create as IPFSHTTPClient } from 'ipfs-http-client';
import { toast } from 'react-toastify';

const GetDocument = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const projectId = '2XgNHU33uAxdOhferooyTepaXRH';
  const projectSecret = 'ba7268664a5581ef122ed1894f5752c5';
  const auth = 'Basic ' + Buffer.from(projectId + ":" + projectSecret).toString('base64');
  const client = IPFSHTTPClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth,
    }
  });

  const handleFileChange = async (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
    event.target.value = null; // Clear the file input to allow selecting the same file again
  };

  const handleDeselectFile = (file) => {
    const updatedFiles = selectedFiles.filter((selectedFile) => selectedFile !== file);
    setSelectedFiles(updatedFiles);
  };

  const handleUploadToIPFS = async () => {
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const added = await client.add(file);
        // Store the IPFS URL of the uploaded file or take any further action.
        console.log('Uploaded File:', added.path);
      }

      // You can add code here to handle the IPFS URLs, e.g., store them in state or display them to the user.

      window.alert('Files uploaded to IPFS successfully');
    } catch (error) {
      toast.error('Error uploading files to IPFS');
    }
  };

  return (
    <div className='a1'>
      <div className='main-containerr'>
        <h3>Upload Document</h3>
        <input
          type="file"
          onChange={handleFileChange}
          multiple // Allow multiple file selection
        />

        {selectedFiles.length > 0 && (
          <div>
            <h3>Selected Files:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  {file.name}
                  <button onClick={() => handleDeselectFile(file)}>Deselect</button>
                </li>
              ))}
            </ul>
            <button onClick={handleUploadToIPFS}>Upload Files to IPFS</button>
            <h1>Your documents are safe with us. Just sit back and relax!! 😊</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetDocument;
