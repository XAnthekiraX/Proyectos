import { useEffect } from 'react';

// Definición del componente ImageModal
const ImageModal = ({ image, onClose, onNext, onPrevious }) => {
  // useEffect para manejar el evento de teclado cuando el componente se monta
  useEffect(() => {
    // Función para manejar el evento de presionar teclas
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose(); // Llama a la función onClose si se presiona la tecla Escape
      }
    };

    // Añade el listener de evento para detectar cuando se presiona una tecla
    window.addEventListener('keydown', handleKeyDown);

    // Elimina el listener de evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]); // Dependencia de onClose para volver a ejecutar si esta cambia

  // Si no hay una imagen seleccionada, no renderiza nada (retorna null)
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      {/* Contenedor del modal */}
      <div className="relative bg-white p-4 rounded-lg">
        {/* Botón para cerrar el modal */}
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-black">
          X
        </button>
        {/* Imagen seleccionada */}
        <img src={image.src.large} alt={image.photographer} className="max-w-full max-h-screen" />
        {/* Botones de navegación para anterior y siguiente imagen */}
        <div className="flex justify-between mt-4">
          <button onClick={onPrevious} className="text-black">
            Anterior
          </button>
          <button onClick={onNext} className="text-black">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
