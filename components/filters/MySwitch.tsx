import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function MySwitch({props}: any) {
	const [checked, setChecked] = React.useState(props.initialValue);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
		props.handleChange(event);
	};

	return (
		<div className='ml-5'>
			<FormControl component="fieldset" variant="standard">
				<FormControlLabel
					control={
						<Switch
							checked={checked}
							onChange={handleChange}
							inputProps={{ 'aria-label': 'controlled' }}
						/>
					}
					label={props.title}
				/>
			</FormControl>
		</div>
	);
}
