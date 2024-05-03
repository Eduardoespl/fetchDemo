import { useState, useEffect } from 'react';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function UseFetchComponent() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" });
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const data: Photo[] = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar las fotos");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!photos || photos.length === 0) return <div>No se encontraron fotos</div>;

  const imageURL = photos[0].url;

  return (
    <>
      <h1>Una imagen</h1>
      <img src={imageURL} alt={"Texto de relleno"} />
    </>
  );
}

export default UseFetchComponent;
