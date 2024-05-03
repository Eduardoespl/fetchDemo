import { useQuery } from 'react-query';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function ReactQueryComponent() {
  const { data, isLoading, isError } = useQuery<Photo[]>("photos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" });
    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }
    return response.json();
  });

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar las fotos</div>;
  if (!data || data.length === 0) return <div>No se encontraron fotos</div>;

  const imageURL = data[0].url;

  return (
    <>
      <h1>Una imagen</h1>
      <img src={imageURL} alt={"Texto de relleno"} />
    </>
  );
}

export default ReactQueryComponent;
