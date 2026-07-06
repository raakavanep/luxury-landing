import { supabase } from '@/lib/supabase'

export default async function GalleryPage() {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .order('created_at', { ascending: false })

if (error) {
  return <div>Error loading gallery</div>
}

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-[#d4af37] text-5xl text-center mb-12">
          GALLERY
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {data?.map((item) => (
            <div
  key={item.id}
  className="group overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[#111]"
>
  <div className="relative aspect-[4/5] overflow-hidden">

    {item.media_type === "image" ? (
      <img
        src={item.media_url}
        alt={item.title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />
    ) : (
      <video
        controls
        className="w-full h-full object-cover"
      >
        <source src={item.media_url} />
      </video>
    )}

  </div>

  <div className="p-4">
    <h3 className="text-[#d4af37] text-lg font-semibold">
      {item.title}
    </h3>

    {item.description && (
      <p className="text-gray-400 text-sm mt-2">
        {item.description}
      </p>
    )}
  </div>
</div>
          ))}
        </div>
      </div>
    </div>
  )
}