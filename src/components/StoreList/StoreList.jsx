import "./storeList.scss";

const StoreList = ({ data, onOpenClick }) => {
  return (
    <div>
      <h2>Store List</h2>
      <ul>
        {data.map((store) => (
          <li key={store.id} onClick={() => onOpenClick(store)}>
            {store.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;
