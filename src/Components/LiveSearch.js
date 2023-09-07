import React, {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/system";

function LiveSearch() {
    const [jsonResults, setJsonResults]= useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos").then((response) => response.json()).then((json) => setJsonResults(json.data))
    }, [])
    console.log(jsonResults);
    return <Stack sx={{width: 300}}>
        <Autocomplete 
        id="search_demo"
        getOptionLabel={(jsonResults) => `${jsonResults.first_name} ${jsonResults.last_name}`}
        options={jsonResults}
        sx={{width: 300}}
        isOptionEqualToValue={(option, value) => 
            option.first_name === value.first_name
        }
        noOptionsText={"No Available Name"}
        renderOption={(props, jsonResults) => (
            <Box component="li" {...props} key={jsonResults.id}>
                {jsonResults.first_name} {jsonResults.last_name}
            </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Search from given API"/>}
        />
    </Stack>;
  }
export default LiveSearch;