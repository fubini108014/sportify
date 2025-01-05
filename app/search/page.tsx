import { Suspense } from "react";
import { SearchList } from "./components/SearchList";

export default function SearchPage() {
  return (
    <Suspense>
      <SearchList />
    </Suspense>
  );
}
