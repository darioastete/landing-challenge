const data = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    alt: "Contect image 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    alt: "COntect image 2",
  }
]

export async function GET() {
  return new Response(JSON.stringify(data));
}
