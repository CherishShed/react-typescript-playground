type listProps<T> = {
  list: T[];
  onclick: (value: T) => void;
};
export const List = <T extends string | number>({
  list,
  onclick,
}: listProps<T>) => {
  return (
    <div>
      {list.map((listItem: T, index) => (
        <div key={index} onClick={() => onclick(listItem)}>
          {listItem}
        </div>
      ))}
    </div>
  );
};
