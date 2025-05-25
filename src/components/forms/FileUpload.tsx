'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileUploadProps {
    onFileSelect: (file: File) => void
    acceptedTypes?: string
    maxSize?: number
    className?: string
}

export default function FileUpload({
    onFileSelect,
    acceptedTypes = '.pdf',
    maxSize = 10 * 1024 * 1024,
    className,
}: FileUploadProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0])
        }
    }, [onFileSelect])

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
        },
        maxSize,
        multiple: false,
    })

    return (
        <div
            {...getRootProps()}
            className={cn(
                'file-upload',
                isDragActive && 'active',
                acceptedFiles.length > 0 && 'border-primary',
                className
            )}
        >
            <input {...getInputProps()} />
            {acceptedFiles.length > 0 ? (
                <div className="text-center">
                    <CheckCircle className="w-12 h-12 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-lg mb-1">{acceptedFiles[0].name}</p>
                    <p className="text-sm text-secondary">
                        {(acceptedFiles[0].size / 1024 / 1024).toFixed(2)} MB
                    </p>
                </div>
            ) : (
                <div className="text-center">
                    <Upload className="w-12 h-12 mx-auto mb-3 text-secondary animate-bounce" />
                    <p className="font-medium mb-1">
                        {isDragActive
                            ? 'Отпустите файл здесь'
                            : 'Перетащите файл сюда'}
                    </p>
                    <p className="text-sm text-secondary mb-3">
                        или нажмите для выбора
                    </p>
                    <p className="text-xs text-secondary">
                        PDF до {maxSize / 1024 / 1024} MB
                    </p>
                </div>
            )}
        </div>
    )
}