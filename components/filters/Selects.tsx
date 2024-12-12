import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { entry } from '../../pages/performance';
import Box from '@mui/material/Box';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};

export function MultiSelect({props}: any) {
	console.log('props: ', props);

	const [val, setVal] = React.useState<string[]>(props.preset);
	const handleChange = (event: SelectChangeEvent<typeof val>) => {
		const {
			target: { value },
		} = event;

		setVal(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id="demo-multiple-checkbox-label">{props.title}</InputLabel>
				<Select
					labelId="demo-multiple-checkbox-label"
					id="demo-multiple-checkbox"
					multiple
					value={val}
					onChange={handleChange}
					input={<OutlinedInput label="Tag" />}
					renderValue={(selected) => selected.join(', ')}
					MenuProps={MenuProps}
				>
					{props.entries?.map((option: entry) => (
						<MenuItem key={option.value} value={option.value}>
							<Checkbox checked={val?.includes(option.value)} />
							<ListItemText primary={option.value} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}


export function BasicSelect({props}: any) {
	const [val, setVal] = React.useState(props.preset);

	const handleChange = (event: SelectChangeEvent) => {
		setVal(event.target.value as string);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={val}
					autoWidth
					label="{title}"
					onChange={handleChange}
				>
					{props.entries?.map((option: entry) => (
						<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
