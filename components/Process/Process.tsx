import AnimateHeight from 'react-animate-height';

const Process = ({ children, height, offset, show, ...props }: any) => {
  return (
    <AnimateHeight
      offset={offset}
      height={height}
      duration={250}
      className={`md:w-[100vw] w-[110vw] relative overflow-hidden`}
      {...props}
    >
      <div
        className={`flex flex-col w-[calc(100vw-52px-1.25rem)] md:w-full max-w-6xl relative py-10`}
        style={{ left: offset + 52 + 'px' }}
      >
        {children}
      </div>
    </AnimateHeight>
  );
};

export default Process;
