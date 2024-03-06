import { useRive } from '@rive-app/react-canvas';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { rive: lightRive, RiveComponent: LightRiveComponent } = useRive({
    src: '/animations/kf_logo.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  const { rive: darkRive, RiveComponent: DarkRiveComponent } = useRive({
    src: '/animations/kf_logo_white.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  function onMouseEnter(type: string) {
    if (type == 'light') {
      lightRive?.reset();
      lightRive?.play();
    }

    if (type == 'dark') {
      darkRive?.reset();
      darkRive?.play();
    }
  }

  useEffect(() => {
    if (resolvedTheme == 'light') {
      lightRive?.reset();
      lightRive?.play();
    }

    if (resolvedTheme == 'dark') {
      darkRive?.reset();
      darkRive?.play();
    }
  }, [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        className="w-[54px] h-[54px] absolute left-0"
        style={{
          visibility: resolvedTheme == 'light' ? 'visible' : 'hidden',
        }}
      >
        <LightRiveComponent onMouseEnter={() => onMouseEnter('light')} />
      </div>
      <div
        className="w-[54px] h-[54px] absolute left-0"
        style={{
          visibility: resolvedTheme == 'dark' ? 'visible' : 'hidden',
        }}
      >
        <DarkRiveComponent onMouseEnter={() => onMouseEnter('dark')} />
      </div>
    </>
  );
};

export default Logo;
