import { API_URL } from "./config";
async function getPages() {
  const res = await fetch(`${API_URL}/pagesdinamics`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}
interface Page {
  title: string;
  content: string;
}
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Gudyz.esssss</h1>
    </main>
  );
}
