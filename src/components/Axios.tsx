import { useEffect, useState } from 'react';
import axios from 'axios';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function AxiosComponent() {
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Photo[]>("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setPhoto(response.data[0]);
        } else {
          setError("No se encontraron fotos");
        }
      })
      .catch((error) => {
        setError("Error al cargar las fotos");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!photo) return <div>Cargando...</div>;

  return (
    <>
      <h1>Una imagen</h1>
      <img src={photo.url} alt={photo.title} />
    </>
  );
}

export default AxiosComponent;
