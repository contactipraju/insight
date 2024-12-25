export interface IProjectFinancial {
	purchase_cost: number;
	current_value?: number;
	weekly_rent?: number;
	sold_price?: number;
	holding_costs: number;
	development_costs?: number;
	estimated_sale_price?: number;
	gross_realization?: number;
	appreciation: number;
	percent_appreciated: number;
}

export interface IProjectData {
	id: number;
	name: string;
	ptype: string;
	region: string;
	address?: string;
	images?: string[];
	purchase_date: string | number | Date;
	sold_date?: string | number | Date;
	valued_date?: string | number | Date;
	financials: IProjectFinancial;
	features: string[];
	success: string[];
	show_in_site: boolean;
}
