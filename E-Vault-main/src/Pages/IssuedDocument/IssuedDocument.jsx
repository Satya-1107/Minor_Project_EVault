import React, { useState } from 'react';
import { create as IPFSHTTPClient } from 'ipfs-http-client';
import { toast } from 'react-toastify';

const IssueDocument = () => {
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

  const handleIssueDocument = async () => {
    try {
      if (selectedFiles.length === 0) {
        window.alert('Please select files to issue certificates.');
        return;
      }

      // Upload files to IPFS
      const certificateIDs = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const added = await client.add(file);
        certificateIDs.push(added.path);
      }

      // Display a success message with certificate IDs
      const successMessage = `Congrats, your document(s) have been issued. Here are your unique certificate ID(s):\n${certificateIDs.join('\n')}`;
      window.alert(successMessage);
    } catch (error) {
      toast.error('Error issuing certificates or uploading files to IPFS');
    }
  };

  return (
    <div className='a1'>
      <div className='main-containerr'>
        <h3>Issue Document</h3>
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
            <button onClick={handleIssueDocument}>Issue Certificates</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IssueDocument;
