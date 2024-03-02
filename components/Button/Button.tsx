const Button = ({ children, ...props }: any) => {
  return (
    <button
      {...props}
      className="bg-[#e6f0e2] text-[#596248] cursor-pointer font-[13px] font-bold radius-[2px] py-[4px] px-[16px] hover:bg-[#a6cf70] hover:text-white font-ptserif text-sm rounded"
    >
      {children}
    </button>
  );
};

export default Button;
