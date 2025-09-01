"use client"
import ResumePDF from '@/components/ResumePDF'
import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'

const Resume = () => {
    return (
        <div className='w-full h-screen mt-[100px]'>
            Hello World
            <PDFViewer width="100%" height="100%">
                <ResumePDF />
            </PDFViewer>
        </div>
    )
}

export default Resume
