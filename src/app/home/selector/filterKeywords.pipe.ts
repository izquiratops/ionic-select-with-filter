import { Pipe, PipeTransform } from "@angular/core";

@Pipe( { name: 'filterKeywords' })
export class FilterKeywordsPipe implements PipeTransform {
	transform(form, filterValue: string) {
		const lowerCaseFilter = filterValue.toLowerCase();

		return form.filter(entry => {
			const lowerCaseValue = entry.val.toLowerCase();
			return lowerCaseValue.includes(lowerCaseFilter);
		});
	}
}