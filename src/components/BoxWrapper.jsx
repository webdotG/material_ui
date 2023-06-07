import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function BoxComponent() {
		return (
				<Box component="div" sx={{
						p: 2,
						width: 900,
						height: 700,
						mt: 100,
						mx: 'auto',
						my: 'auto',
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
				}}>
						<Box
								component="form"
								sx={{
										'& .MuiTextField-root': {m: 1, width: '25ch'},
								}}
								noValidate
								autoComplete="off"
						>
								<TextField id="outlined-basic" label="log in" variant="outlined"/>

						</Box>

				</Box>
		);
}
