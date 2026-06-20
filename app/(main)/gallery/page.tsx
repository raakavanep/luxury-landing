import { supabase } from '@/lib/supabase'

export default async function GalleryPage() {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .order('created_at', { ascending: false })

  console.log(error)

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-[#d4af37] text-5xl text-center mb-12">
          GALLERY
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {data?.map((item) => (
            <div key={item.id}>
              {item.media_type === 'image' ? (
                <img
                  src={item.media_url}
                  alt={item.title}
                  className="w-full rounded-lg"
                />
              ) : (
                
                <video
                  controls
                  className="w-full rounded-lg"
                >
                  <source src={item.media_url} />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}