import * as React from 'react';

type IItem = [string, number, number];

class IndexPage extends React.Component {
	render() {
		function fetchItemsToDisplay(
			items: IItem[], sortParameter: number, sortOrder: number, itemPerPage: number, pageNumber: number,
		): string[] {
			console.log(sortParameter, sortOrder, itemPerPage, pageNumber);
			const validItemsPerPage = itemPerPage >= 1 && itemPerPage < 20 ? itemPerPage : 1;
			const validPageNumber = pageNumber >= 0 && pageNumber < 10 ? pageNumber : 0;
			const comparatorAscending = function(a: IItem, b: IItem) {
				if (sortParameter === 0) {
					if (a[sortParameter] < b[sortParameter]) { return -1; }
					if (a[sortParameter] > b[sortParameter]) { return 1; }
				} else {
					if (Number(a[sortParameter]) < Number(b[sortParameter])) { return -1; }
					if ( Number(a[sortParameter]) >  Number(b[sortParameter])) { return 1; }
				}
				return 0;
			};
			const comparatorDescending = function(a: IItem, b: IItem) {
				if (sortParameter === 0) {
					if (a[sortParameter] > b[sortParameter]) { return -1; }
					if (a[sortParameter] < b[sortParameter]) { return 1; }
				} else {
					if (Number(a[sortParameter]) > Number(b[sortParameter])) { return -1; }
					if ( Number(a[sortParameter]) <  Number(b[sortParameter])) { return 1; }
				}
				return 0;
			};
			const sortAscending = sortOrder === 0;
			const sorted = sortAscending ? items.sort(comparatorAscending) : items.sort(comparatorDescending);
			console.log('sorted', sorted);
			const startSlice = validItemsPerPage * validPageNumber === 0 ? 0 : validItemsPerPage * validPageNumber;
			const pagesArray: IItem[] = sorted.slice(startSlice, startSlice + validItemsPerPage);
			console.log('pages',pagesArray);
			const result: string[] = [];
			const hasPages = pagesArray.length > 0;
			if (hasPages) {
				pagesArray.map(function(item) {
					result.push(item[0]);
				});
			}
			return result;
		}

		fetchItemsToDisplay([['p1', 1, 2], ['p2', 2, 1]], 0, 0, 1, 1);
		return (
			<div className={'hwk-grid-container hwk-grid-container--horizontal-spaces-primary'}>
				<div className={'hwk-grid-row'}>
					<div className={'hwk-grid-col hwk-grid-col--12'}>
						<p>
							Each company has it's own navigation item, as mentioned in each email
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default IndexPage;
