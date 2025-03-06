import { useLocalStorageState } from "../../../hooks/use-local-storage-state";
import { Table } from "../../../components/table/table";

export const Movies = () => {
  const [moviesState] = useLocalStorageState([], "movies");

  const handleRowClick = (row) => {
    console.log("Movie clicked:", row);
  };

  return (
    <div className="container mt-4">
      <h1> Movies</h1>
     <Table data={moviesState || []} onRowClick={handleRowClick} />
    </div>
  );
};
