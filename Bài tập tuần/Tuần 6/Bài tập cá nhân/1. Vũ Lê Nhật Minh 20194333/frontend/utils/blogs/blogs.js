export async function getBlogMetadata() {
  const res = await fetch(`http://localhost:8000/`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
