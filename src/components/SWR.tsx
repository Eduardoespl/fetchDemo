import useSWR from 'swr';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetcher = (url: string): Promise<Photo[]> => fetch(url, { mode: "cors" }).then((response) => response.json());

function SWRComponent() {
  const { data, error } = useSWR<Photo[]>("https://jsonplaceholder.typicode.com/photos", fetcher);

  if (error) return <div>Error al cargar la imagen</div>;
  if (!data) return <div>Cargando...</div>;

  const imageURL = data[0].url;

  return (
    <>
      <h1>Una imagen</h1>
      <img src={imageURL} alt={"Texto de relleno"} />
    </>
  );
}

export default SWRComponent;
