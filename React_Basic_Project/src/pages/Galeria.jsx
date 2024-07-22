import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageModal from '../components/ImageModal';

// Definición del componente Galeria
const Galeria = () => {
  // Estado para almacenar las imágenes obtenidas de la API
  const [imagenes, setImagenes] = useState([]);
  // Estado para almacenar la imagen seleccionada para mostrar en el modal
  const [selectedImage, setSelectedImage] = useState(null);

  // useEffect para realizar la petición a la API de Pexels cuando el componente se monta
  useEffect(() => {
    axios.get('https://api.pexels.com/v1/search', {
      params: { query: 'Science', per_page: 20 },
      headers: {
        Authorization: 'HwUVR4yRy3JdadbQtyfVUig6sXtrBGEnxnPMVO00EwJ2WtFNIfkEEvmW' // Clave de autorización para acceder a la API de Pexels
      }
    }).then(response => {
      // Almacena las fotos obtenidas en el estado de imagenes
      setImagenes(response.data.photos);
    }).catch(error => {
      // Manejo de errores en caso de que la petición falle
      console.error('Error fetching data from Pexels API', error);
    });
  }, []); // Dependencia vacía significa que esto se ejecuta solo una vez cuando el componente se monta

  // Función para manejar el clic en una imagen y establecerla como la imagen seleccionada
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Función para cerrar el modal estableciendo la imagen seleccionada como null
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Función para avanzar a la siguiente imagen en el modal
  const handleNextImage = () => {
    const currentIndex = imagenes.findIndex(img => img.id === selectedImage.id); // Encuentra el índice de la imagen seleccionada actualmente
    const nextIndex = (currentIndex + 1) % imagenes.length; // Calcula el índice de la siguiente imagen
    setSelectedImage(imagenes[nextIndex]); // Establece la siguiente imagen como la imagen seleccionada
  };

  // Función para retroceder a la imagen anterior en el modal
  const handlePreviousImage = () => {
    const currentIndex = imagenes.findIndex(img => img.id === selectedImage.id); // Encuentra el índice de la imagen seleccionada actualmente
    const prevIndex = (currentIndex - 1 + imagenes.length) % imagenes.length; // Calcula el índice de la imagen anterior
    setSelectedImage(imagenes[prevIndex]); // Establece la imagen anterior como la imagen seleccionada
  };

  return (
    <div className="text-white w-screen h-auto gap-2 flex-wrap flex justify-center items-center flex-col mt-8">
      <h1 className="text-4xl font-bold">Galería de Imágenes</h1>
      <div className="w-4/5 min-h-[500px] flex justify-start items-center p-10 bg-orange-100 rounded-lg overflow-hidden flex-wrap gap-2">
        {imagenes.map(imagen => (
          // Renderiza cada imagen obtenida de la API
          <img
            className="h-auto w-auto cursor-pointer"
            key={imagen.id}
            src={imagen.src.small}
            alt={imagen.photographer}
            // Asigna el manejador de clic para seleccionar la imagen
            onClick={() => handleImageClick(imagen)}
          />
        ))}
      </div>
      {/* Renderiza el modal de imagen si hay una imagen seleccionada */}
      <ImageModal
        image={selectedImage}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
      />
    </div>
  );
};

export default Galeria;
