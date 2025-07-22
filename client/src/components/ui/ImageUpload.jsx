import { useState, useRef, useEffect } from "react"

export function ImageUpload({ value, onChange, error, disabled = false }) {
  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [imageError, setImageError] = useState(false)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (value && value.trim()) {
      setPreview(value)
      setImageError(false)
    } else {
      setPreview(null)
      setImageError(false)
    }
  }, [value])

  

  const handleFileSelect = async (file) => {
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file")
      return
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB")
      return
    }

    setIsUploading(true)
    setImageError(false)

    try {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target.result
        setPreview(imageUrl)
        onChange(imageUrl)
        setIsUploading(false)
      }
      reader.onerror = (e) => {
        console.error("FileReader error:", e)
        alert("Error reading file. Please try again.")
        setIsUploading(false)
        setImageError(true)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error("Error uploading file:", error)
      alert("Error uploading file. Please try again.")
      setIsUploading(false)
      setImageError(true)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click()
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const removeImage = () => {
    setPreview(null)
    setImageError(false)
    onChange("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleImageLoad = () => {
    setImageError(false)
  }

  const handleImageError = (e) => {
    console.error("Image failed to load")
    setImageError(true)
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-700">Profile Image</label>

      {/* Horizontal Layout: Upload Area + Preview */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Upload Area */}
        <div className="flex-1">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleClick}
            className={`relative border-2 border-dashed rounded-2xl p-6 transition-all duration-300 cursor-pointer min-h-[200px] flex items-center justify-center ${
              isDragging
                ? "border-emerald-400 bg-emerald-50 scale-105"
                : "border-gray-300 hover:border-emerald-400 hover:bg-emerald-50"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${error ? "border-red-400 bg-red-50" : ""}`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={disabled}
            />

            <div className="text-center space-y-4">
              {isUploading ? (
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-gray-600">Uploading image...</p>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">
                      Drop your image here, or{" "}
                      <span className="text-emerald-600 hover:text-emerald-700 font-semibold">browse</span>
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Image Preview - Right Side */}
        {preview && (
          <div className="flex-shrink-0 w-full lg:w-64">
            <div className="space-y-3">
              <div className="relative group">
                <div className="relative w-full aspect-square max-w-[200px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  {imageError ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <div className="text-center space-y-2">
                        <svg
                          className="w-12 h-12 text-gray-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                          />
                        </svg>
                        <p className="text-xs text-gray-500">Failed to load image</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={preview}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                  )}

                  {/* Remove Button Overlay */}
                  <div className="absolute inset-0 hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeImage()
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transform hover:scale-110 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
    </div>
  )
}
