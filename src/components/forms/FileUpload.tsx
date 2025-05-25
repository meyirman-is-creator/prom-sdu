'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File } from 'lucide-react'
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
    maxSize = 10 * 1024 * 1024, // 10MB
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
                'border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors',
                isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25',
                className
            )}
        >
            <input {...getInputProps()} />{acceptedFiles.length > 0 ? (
                <div className="flex items-center justify-center space-x-2">
                    <File className="h-8 w-8 text-primary" />
                    <div className="text-left">
                        <p className="font-medium">{acceptedFiles[0].name}</p>
                        <p className="text-sm text-muted-foreground">
                            {(acceptedFiles[0].size / 1024 / 1024).toFixed(2)} MB
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                        {isDragActive
                            ? 'Отпустите файл здесь'
                            : 'Перетащите файл сюда или нажмите для выбора'}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Только PDF файлы до {maxSize / 1024 / 1024} MB
                    </p>
                </div>
            )}
        </div>
    )
}
