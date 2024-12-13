import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { IProjectData } from '../projects/Projects.interfaces';

export type AggregatesProps = {
	projects: IProjectData[];
};

export default function Aggregates({ projects }:AggregatesProps) {
	const [loading, setLoading] = useState(true);

	const [purchase, setPurchase] = useState({});
	const [holding, setHolding] = useState({});
	const [appreciation, setAppreciation] = useState({});

	const calculateAggregates = () => {
	}

	useEffect(() => {
		calculateAggregates();
		setLoading(false);
	}, []);

	return (
		<>
		</>
	)
}
