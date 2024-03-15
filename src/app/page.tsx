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
  const pages: Page[] = await getPages();
  console.log(pages);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {pages.map((page) => (
        <h1 key={page.title}> pages </h1>
      ))}
    </main>
  );
}
