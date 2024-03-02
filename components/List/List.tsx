const List = ({ children }: any) => {
  return <ul className="list-none pl-[12px] mb-[-1rem]">{children}</ul>;
};

const Item = ({ children }: any) => {
  return (
    <li className="leading-6 mb-8 before:content-['•'] before:text-[#90ce70] before:ml-[-12px] before:mr-[0.5ch] font-ptserif">
      {children}
    </li>
  );
};

const Text = ({ children }: any) => {
  return <p className="text-sm mt-3 pr-8 font-ptserif">{children}</p>;
};

List.Item = Item;
List.Text = Text;

export default List;
