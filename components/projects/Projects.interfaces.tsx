export interface Address {
	street: string;
	suburb: string;
	city: string;
	state: string;
	post_code: string;
}

export interface IProjectFinancial {
	purchase: number;
	valued?: number;
	weekly_rent?: number;
	sold?: number;
	holding: number;
	development_costs?: number;
	estimated_sale_price?: number;
	gross_realization?: number;
	growth: number;
	percent_appreciated: number;
}

export interface IProjectData {
	id: number;
	name: string;
	ptype: string; // DEVELOPMENT | OWNER_OCCUPIER | VALUE_ADDITION | SIMPLE_INVESTMENT     (FIX_AND_FLIP/FIXER_UPPER)
	address: Address;
	images?: string[];
	purchase_date: string | number | Date;
	sold_date?: string | number | Date;
	valued_date?: string | number | Date;
	tenure_months?: number;
	financials: IProjectFinancial;
	features: string[];
	success: string[];
	public: boolean;
	in_progress: boolean;
}

export type ProjectProps = {
	project: IProjectData;
};
