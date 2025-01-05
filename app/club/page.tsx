import List from "@mui/material/List";
import ClubItem from "./components/ClubItem";
const dataSource = [
  { id: 1, name: "Club 1", area: "桃園", category: "排球" },
  { id: 2, name: "Club 2", area: "台北", category: "籃球" },
  { id: 3, name: "Club 3", area: "新竹", category: "足球" },
];
export default function ClubPage() {
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {dataSource.map((club) => (
          <ClubItem
            id={club.id}
            key={club.id}
            name={club.name}
            area={club.area}
            category={club.category}
          />
        ))}
      </List>
    </div>
  );
}
