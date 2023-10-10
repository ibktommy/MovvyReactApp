import { useEffect, useState } from 'react';
import PageFrameStyles from '../assets/styles/PageFrameStyles';
import PageList from './cards/PageList';

const PageFrame = ({ title }) => {
	const pageMenuList = [
		`trending ${title}`,
		`popular ${title}`,
		`latest ${title}`,
	];

	const [pageMenu, setPageMenuList] = useState(`trending ${title}`);

	// Function called when the page-menu buttons are clicked
	function menuBtnHandler(menuName) {
		setPageMenuList(menuName);
	}

	// Adding 'active' class to the page-menu button clicked
	useEffect(() => {
		const pageBtn = document.querySelectorAll('.page-menu button');

		for (let i = 0; i < pageBtn.length; i++) {
			pageBtn[i].addEventListener('click', () => {
				for (let j = 0; j < pageBtn.length; j++) {
					pageBtn[j].classList.remove('active');
					pageBtn[i].classList.add('active');
				}
			});
		}
	}, []);

	return (
		<PageFrameStyles>
			<div className='page-menu'>
				{pageMenuList.map((menuItem, id) => (
					<button
						key={id}
						onClick={() => menuBtnHandler(menuItem)}
						className={id === 0 ? 'active' : null}
					>
						{menuItem}
					</button>
				))}
			</div>

      <PageList pageMenu={pageMenu}/>
		</PageFrameStyles>
	);
};

export default PageFrame;
