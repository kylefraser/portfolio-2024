import { useRef, useEffect, useState } from 'react';

const useAudio = (url: string | undefined) => {
  const [audio] = useState(typeof Audio !== 'undefined' && new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }
  }, []);

  return [playing, toggle] as const;
};

const AudioPlayer = () => {
  const [playing, toggle] = useAudio('/audio/journey.mp3');

  return (
    <>
      {playing ? (
        <svg
          className="cursor-pointer"
          onClick={() => toggle()}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7479 5.00005C21.1652 6.97029 22 9.38768 22 12C22 14.6124 21.1652 17.0298 19.7479 19M15.7453 8.00005C16.5362 9.13388 17 10.5128 17 12C17 13.4873 16.5362 14.8662 15.7453 16M9.63432 5.36573L6.46863 8.53142C6.29568 8.70437 6.2092 8.79085 6.10828 8.85269C6.01881 8.90752 5.92127 8.94792 5.81923 8.97242C5.70414 9.00005 5.58185 9.00005 5.33726 9.00005H3.6C3.03995 9.00005 2.75992 9.00005 2.54601 9.10904C2.35785 9.20492 2.20487 9.3579 2.10899 9.54606C2 9.75997 2 10.04 2 10.6V13.4C2 13.9601 2 14.2401 2.10899 14.454C2.20487 14.6422 2.35785 14.7952 2.54601 14.8911C2.75992 15 3.03995 15 3.6 15H5.33726C5.58185 15 5.70414 15 5.81923 15.0277C5.92127 15.0522 6.01881 15.0926 6.10828 15.1474C6.2092 15.2093 6.29568 15.2957 6.46863 15.4687L9.63431 18.6344C10.0627 19.0627 10.2769 19.2769 10.4608 19.2914C10.6203 19.304 10.7763 19.2394 10.8802 19.1177C11 18.9774 11 18.6745 11 18.0687V5.93142C11 5.3256 11 5.0227 10.8802 4.88243C10.7763 4.76073 10.6203 4.69614 10.4608 4.7087C10.2769 4.72317 10.0627 4.93736 9.63432 5.36573Z"
            className="stroke-[#444444] dark:stroke-white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          className="cursor-pointer"
          onClick={() => toggle()}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 9.00005L16 15M16 9.00005L22 15M9.63432 5.36573L6.46863 8.53142C6.29568 8.70437 6.2092 8.79085 6.10828 8.85269C6.01881 8.90752 5.92127 8.94792 5.81923 8.97242C5.70414 9.00005 5.58185 9.00005 5.33726 9.00005H3.6C3.03995 9.00005 2.75992 9.00005 2.54601 9.10904C2.35785 9.20492 2.20487 9.3579 2.10899 9.54606C2 9.75997 2 10.04 2 10.6V13.4C2 13.9601 2 14.2401 2.10899 14.454C2.20487 14.6422 2.35785 14.7952 2.54601 14.8911C2.75992 15 3.03995 15 3.6 15H5.33726C5.58185 15 5.70414 15 5.81923 15.0277C5.92127 15.0522 6.01881 15.0926 6.10828 15.1474C6.2092 15.2093 6.29568 15.2957 6.46863 15.4687L9.63431 18.6344C10.0627 19.0627 10.2769 19.2769 10.4608 19.2914C10.6203 19.304 10.7763 19.2394 10.8802 19.1177C11 18.9774 11 18.6745 11 18.0687V5.93142C11 5.3256 11 5.0227 10.8802 4.88243C10.7763 4.76073 10.6203 4.69614 10.4608 4.7087C10.2769 4.72317 10.0627 4.93736 9.63432 5.36573Z"
            className="stroke-[#444444] dark:stroke-white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default AudioPlayer;
