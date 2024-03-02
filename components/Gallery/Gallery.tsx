import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../Modal';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState<any>(false);
  const [selectedImage, setSelectedImage] = useState('');

  function handleClick(image: string) {
    setSelectedImage(image);
    setModalOpen(true);
  }
  return (
    <div className="grid grid-cols-3 md:grid-cols-4	gap-2 md:gap-4">
      <Image
        onClick={() => handleClick('1')}
        src="/images/photos/1.webp"
        alt="1"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('2')}
        src="/images/photos/2.webp"
        alt="2"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('3')}
        src="/images/photos/3.webp"
        alt="3"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('4')}
        src="/images/photos/4.webp"
        alt="4"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('5')}
        src="/images/photos/5.webp"
        alt="5"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('6')}
        src="/images/photos/6.webp"
        alt="6"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('7')}
        src="/images/photos/7.webp"
        alt="7"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('8')}
        src="/images/photos/8.webp"
        alt="8"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('9')}
        src="/images/photos/9.webp"
        alt="9"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('10')}
        src="/images/photos/10.webp"
        alt="10"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('11')}
        src="/images/photos/11.webp"
        alt="11"
        width="1000"
        height="1000"
      />
      <Image
        onClick={() => handleClick('12')}
        src="/images/photos/12.webp"
        alt="12"
        width="1000"
        height="1000"
      />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Image
          src={`/images/photos/${selectedImage}.webp`}
          alt={selectedImage}
          width="1000"
          height="1000"
          className="border-[10px] md:border-[20px] border-white"
          style={{ objectFit: 'contain' }}
        />
      </Modal>
    </div>
  );
};

export default Gallery;
