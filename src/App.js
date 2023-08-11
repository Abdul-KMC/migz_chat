import {Box, Typography, TextField, Button} from "@mui/material";
import Login from "./login";
import Contacts from "./Contacts";
import Chat from "./Chat";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <Box display="flex" flexDirection="row" height="100vh">
        <Box width="30%" sx={{
          background:"light-green"
        }}> 
          <Contacts/>
        </Box>
        <Box width="70%" sx={{
          background:"light-yellow"
        }}> 
          <Chat/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
