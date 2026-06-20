import { supabase } from '@/lib/supabase'

export default async function TestPage() {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')

  return (
    <pre>
      {JSON.stringify({ data, error }, null, 2)}
    </pre>
  )
}