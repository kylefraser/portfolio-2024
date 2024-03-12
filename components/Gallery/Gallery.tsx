import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../Modal';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState<any>(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [location, setLocation] = useState('');

  function handleClick(image: string, location: string) {
    setSelectedImage(image);
    setLocation(location);
    setModalOpen(true);
  }
  return (
    <div className="grid grid-cols-3 md:grid-cols-5	gap-2 md:gap-4 mb-5">
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('1', 'Bright Angel Trail, AZ')}
        src="/images/photos/1.webp"
        alt="1"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('2', 'Fraser, CO')}
        src="/images/photos/2.webp"
        alt="2"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('3', 'Cape Porpoise, ME')}
        src="/images/photos/3.webp"
        alt="3"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('4', 'Knoxville, TN')}
        src="/images/photos/4.webp"
        alt="4"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('5', 'New Orleans, LA')}
        src="/images/photos/5.webp"
        alt="5"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('6', 'Fall Creek Falls, TN')}
        src="/images/photos/6.webp"
        alt="6"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('7', 'Grand Canyon, AZ')}
        src="/images/photos/7.webp"
        alt="7"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('8', 'Route 15, MT')}
        src="/images/photos/8.webp"
        alt="8"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('9', 'Nashville, TN')}
        src="/images/photos/9.webp"
        alt="9"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('10', 'Moab, UT')}
        src="/images/photos/10.webp"
        alt="10"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('11', 'Hillman, MT')}
        src="/images/photos/11.webp"
        alt="11"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('12', 'Silver Plume, CO')}
        src="/images/photos/12.webp"
        alt="12"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('13', 'Gettysburg, PA')}
        src="/images/photos/13.webp"
        alt="13"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('14', 'Giddings, TX')}
        src="/images/photos/14.webp"
        alt="14"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('15', 'Chainsaw Trail, CO')}
        src="/images/photos/15.webp"
        alt="15"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('16', 'Flaming Gorge Dam, UT')}
        src="/images/photos/16.webp"
        alt="16"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('17', 'Bozeman, MT')}
        src="/images/photos/17.webp"
        alt="17"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('18', 'Route 189, WY')}
        src="/images/photos/18.webp"
        alt="18"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('19', 'Gallatin Gateway, MT')}
        src="/images/photos/19.webp"
        alt="19"
        width="250"
        height="250"
      />
      <Image
        className="cursor-pointer bg-white"
        onClick={() => handleClick('20', 'Bluff Creek Ranch, TX')}
        src="/images/photos/20.webp"
        alt="20"
        width="250"
        height="250"
      />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="border-[10px] md:border-[20px] border-white bg-white">
          <Image
            priority
            src={`/images/photos/${selectedImage}.webp`}
            alt={selectedImage}
            width="1000"
            height="1000"
            style={{ objectFit: 'contain' }}
          />
          <p className="text-black mt-4">{location}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
