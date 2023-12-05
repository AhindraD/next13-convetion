"use client"
import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const UploadPage = () => {
    return (
        <div>
            <CldUploadWidget uploadPreset='ml_default'>
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