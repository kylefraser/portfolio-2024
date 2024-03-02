const Button = ({ children, ...props }: any) => {
  return (
    <button
      {...props}
      className="bg-[#e6f0e2] dark:bg-[#596248] text-[#596248] dark:text-white cursor-pointer font-bold radius-[2px] py-[4px] px-[16px] hover:bg-[#a6cf70] hover:dark:bg-[#39402c] hover:text-white font-ptserif text-sm rounded"
    >
      {children}
    </button>
  );
};

export default Button;
