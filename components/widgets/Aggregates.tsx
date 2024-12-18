import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { IProjectData } from '../projects/Projects.interfaces';
import { calculateAggregates } from '../projects/Projects.service';

export type AggregatesProps = {
	projects: IProjectData[];
};

export default function Aggregates({ projects }:AggregatesProps) {
	const [loading, setLoading] = useState(true);

	const [purchase, setPurchase] = useState({});
	const [holding, setHolding] = useState({});
	const [appreciation, setAppreciation] = useState({});

	useEffect(() => {
		const { _purchase, _holding, _appreciation } = calculateAggregates(projects);
		setPurchase(_purchase);
		setHolding(_holding);
		setAppreciation(_appreciation);

		setLoading(false);
	}, []);

	return (
		<>
		</>
	)
}
