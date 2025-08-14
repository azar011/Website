import React from 'react';

const WpIcon = () => {
<<<<<<< HEAD
  const whatsappNumber = "919698833469";
  const message = "Hello, I want to join your Course";
=======
  const whatsappNumber = "919876543210";
  const message = "Hello!";
>>>>>>> 2586674753df5b63896b8835767aa732f2c62cb4

  const openWhatsapp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      onClick={openWhatsapp}
      className="fixed bottom-8 right-8 bg-[#25D366] rounded-full p-2 cursor-pointer z-50 shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="lg:w-13 lg:h-13 md:w-13 md:h-13 w-9 h-9"
      />
    </div>
  );
};

export default WpIcon;
