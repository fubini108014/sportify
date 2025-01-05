import {
  TextField,
  Stack,
  Container,
  Typography,
  MenuItem,
  Avatar,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const gender = [
  // { value: "", label: "請選擇性別" },
  { value: "male", label: "男" },
  { value: "female", label: "女" },
  { value: "other", label: "不便透露" },
];
export default function PersonalPage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" sx={{ mb: 1, mt: 1, width: "100%" }}>
        更新個人資料
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          <Typography variant="h6">照片上傳</Typography>
        </Stack>
        <TextField
          id="name"
          label="姓名或暱稱"
          sx={{ m: 1, width: "100%" }}
          // slotProps={{
          //   input: {
          //     startAdornment: (
          //       <InputAdornment position="start">
          //         <AccountCircle />
          //       </InputAdornment>
          //     ),
          //   },
          // }}
        />
        <TextField
          id="gender"
          label="性別"
          select
          sx={{ m: 1, width: "100%" }}
          defaultValue={""}
        >
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="activity-area"
          label="活動地區"
          sx={{ m: 1, width: "100%" }}
        />
        <TextField
          id="self-introduction"
          label="自我介紹"
          sx={{ m: 1, width: "100%" }}
          multiline
          rows={4}
          maxRows={10}
        />
      </Stack>
    </Container>
  );
}
