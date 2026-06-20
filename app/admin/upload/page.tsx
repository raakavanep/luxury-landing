'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminUploadPage() {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    try {
      if (!title) {
        alert('Please enter image title')
        return
      }

      if (!file) {
        alert('Please select an image')
        return
      }

      setLoading(true)

      const fileName = `${Date.now()}-${file.name}`

      // Upload image to storage
     const isVideo = file.type.startsWith('video/')
const bucketName = isVideo ? 'gallery-videos' : 'gallery-images'

console.log('File Type:', file.type)
console.log('Bucket:', bucketName)

const { data: uploadData, error: uploadError } = await supabase.storage
  .from(bucketName)
  .upload(fileName, file)

console.log('Upload Data:', uploadData)
console.log('Upload Error:', uploadError)

if (uploadError) {
  alert(uploadError.message)
  return
}

      // Get public URL
     const {
  data: { publicUrl },
} = supabase.storage
  .from(bucketName)
  .getPublicUrl(fileName)
      
      // Save image details to gallery table
const { data: insertedData, error: dbError } = await supabase
  .from('gallery')
  .insert([
    {
      title: title,
      description: '',
      media_url: publicUrl,
      media_type: isVideo ? 'video' : 'image',
    },
  ])
  .select()

console.log('Inserted Data:', insertedData)
console.log('DB Error:', dbError)

      if (dbError) {
        alert(dbError.message)
        setLoading(false)
        return
      }

     alert(
  `${isVideo ? 'Video' : 'Image'} Uploaded Successfully!`
)

      setTitle('')
      setFile(null)
      setLoading(false)
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-lg border border-[#d4af37]/30 p-8">
        <h1 className="text-4xl text-[#d4af37] text-center mb-8">
          Gallery Upload
        </h1>

        <input
          type="text"
          placeholder="Image Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-5 bg-black border border-[#d4af37]/30 text-white outline-none"
        />

        <input
  id="file-upload"
  type="file"
  accept="image/*,video/*"
  hidden
  onChange={(e) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }}
/>

<label
  htmlFor="file-upload"
  className="block w-full p-3 mb-4 bg-[#d4af37] text-black text-center font-semibold cursor-pointer"
>
  Select Image / Video
</label>
<p className="text-white mb-4">
  {file ? file.name : 'No image selected'}
</p>
        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-[#d4af37] text-black p-3 font-semibold hover:opacity-90 transition"
        >
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </div>
  )
}