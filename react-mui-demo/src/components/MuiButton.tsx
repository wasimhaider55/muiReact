import {
    Stack,
    Button,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton
} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">Underline</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">primary</Button>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="info">info</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="success">success</Button>
                <Button variant="contained" color="error">Error</Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant="contained" size="small">small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">large</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<SendIcon />}>send</Button>
                <Button variant="contained" endIcon={<SendIcon />}>send</Button>
                <IconButton aria-label="send" color="success" size="medium">
                    <SendIcon />
                </IconButton>
            </Stack>

            <Stack direction="row">
                <ButtonGroup
                    variant="contained"
                    size="medium"
                    color="secondary"
                    orientation="vertical"
                    aria-label="alignment button group"
                >
                    <Button onClick={() => alert("left clicked")}>left</Button>
                    <Button onClick={() => alert("Center clicked")}>center</Button>
                    <Button onClick={() => alert("Left clicked")}>right</Button>
                </ButtonGroup>
            </Stack>


            <Stack direction="row">
                <ToggleButtonGroup aria-label="text formatting" orientation="vertical">
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="itlac" aria-label="itlac">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Stack>
    )
}

export default MuiButton