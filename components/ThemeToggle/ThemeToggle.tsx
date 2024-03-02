'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme == 'dark' ? (
        <Image
          src="/images/sun.svg"
          width="24"
          height="24"
          alt="Light"
          onClick={() => setTheme('light')}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/images/moon.svg"
          width="24"
          height="24"
          alt="Dark"
          onClick={() => setTheme('dark')}
          className="cursor-pointer"
        />
      )}
    </>
  );
};

export default ThemeToggle;
