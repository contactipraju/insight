
export default function JoinNewsLetter({}: any) {
	return (
		<form action="" className="grid gap-2 items-stretch mt-2 sm:grid-cols-2" id="MailingListForm" x-data="{isSubmitting: false}">
			<div className="items-center">
				<label className="sr-only">Email</label>
				<input className="h-full bg-stone-100 input-field" id="email" name="email" placeholder="Your email" required type="email" />
			</div>

			<button className="font-semibold font-semibold flex items-center focus-visible:ring-2 focus-visible:ring-offset-1 focus:outline-none justify-center no-link shrink-0 text-md bg-tm-red-brand border-2 border-tm-red-brand disabled:bg-tm-red-brand/50 disabled:pointer-events-none focus:rounded-md hover:opacity-90 hover:text-white px-4 py-2 rounded-md text-white" type="submit">
				<span>Join News Letter</span>
			</button>
		</form>
	);
}
