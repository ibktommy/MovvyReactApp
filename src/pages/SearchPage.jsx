import { useEffect, useState } from 'react';
import SearchPageStyles from '../assets/styles/SearchPageStyles';
import SearchList from '../components/cards/SearchList';
import Button from '../components/Button';

const searchCategories = [
	{
		id: 1,
		category: 'movies',
	},
	{
		id: 2,
		category: 'TV series',
	},
];

const SearchPage = () => {
	const [categories, setCategories] = useState(searchCategories);
	const [category, setCategory] = useState('movies');
	const [searchTerm, setSearchTerm] = useState('');

	const categoriesArray = categories.map((categoriesItem) => {
		const { category } = categoriesItem;
		return category;
	});

	// Adding 'active' class to the category-menu button clicked
	useEffect(() => {
		const categoriesBtn = document.querySelectorAll('.category-menu button');

		for (let i = 0; i < categoriesBtn.length; i++) {
			categoriesBtn[i].addEventListener('click', () => {
				setSearchTerm(''); //Reset the searchTerm when re-rendering the form
				for (let j = 0; j < categoriesBtn.length; j++) {
					categoriesBtn[j].classList.remove('active');
					categoriesBtn[i].classList.add('active');
				}
			});
		}
	}, []);

	// Function called when the category-menu buttons are clicked
	function categoryBtnHandler(categoryName) {
		setCategory(categoryName);
	}

	// Function called when we submit the form
	function SearchFormHandler(e) {
		e.preventDefault();

		let searchInputValue = e.target.elements.search.value;

		if (searchInputValue.trim() === '') {
			alert('You cannot include empty space as text');
			return;
		}

		setSearchTerm(searchInputValue);
		e.target.elements.search.value = '';
	}

	return (
		<SearchPageStyles>
			<h1>SEARCH FOR YOUR FAVOURITE MOVIES AND TV SERIES</h1>

			<div className='category-menu'>
				{categoriesArray.map((category, id) => (
					<button
						key={id}
						className={id === 0 ? 'active' : null}
						onClick={() => categoryBtnHandler(category)}
					>
						{category}
					</button>
				))}
			</div>

			{category === 'movies' ? (
				<form onSubmit={SearchFormHandler}>
					<input
						type='search'
						name='search'
						placeholder='enter a movie title, lets fetch it for you...'
						required
					/>

					<button type='submit'>search movies</button>
				</form>
			) : (
				<form onSubmit={SearchFormHandler}>
					<input
						type='search'
						name='search'
						placeholder='enter a series title, lets fetch it for you...'
						required
					/>

					<button type='submit'>search series</button>
				</form>
			)}

			{searchTerm && <SearchList searchTerm={searchTerm} category={category} />}
		</SearchPageStyles>
	);
};

export default SearchPage;
