"use client"
import React, { useState } from 'react';
import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface CloudinaryResultInfo {
    public_id: string
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState("");
    return (
        <div>
            <h1>Upload Page</h1>
            {publicId && <CldImage src={publicId} width="200" height="200" alt="test" />}
            <CldUploadWidget
                //https://next.cloudinary.dev/docs/upload_widget

                uploadPreset='ml_default'//https://console.cloudinary.com/settings/c-08f8a36470937bbbfff425c72db4fc/upload_presets/7d1b4ef8706fc062b1dc5412af506d4d/edit

                options={{
                    maxFiles: 5,//https://demo.cloudinary.com/uw/#/
                }}

                onUpload={(result, widget) => {
                    // console.log(result,widget);
                    if (result.event !== "success") { return }
                    const info = result.info as CloudinaryResultInfo;//type assertion
                    setPublicId(info.public_id);
                    // https://console.cloudinary.com/pm/c-08f8a36470937bbbfff425c72db4fc/media-explorer
                }}>
                {({ open }) => {
                    return (
                        <button
                            onClick={() => open()}
                            className='btn btn-primary'
                        >Upload</button>
                    )
                }}
            </CldUploadWidget >
        </div>
    )
}

export default UploadPage