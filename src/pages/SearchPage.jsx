import { useEffect, useState } from "react";
import SearchPageStyles from "../assets/styles/SearchPageStyles";

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
  const [categories, setCategories] = useState(searchCategories)

  const categoriesArray = categories.map((categoriesItem) => {
    const {category} = categoriesItem
    return category
  })

  // Adding 'active' class to the category-menu button clicked
  useEffect(() => {
    const categoriesBtn = document.querySelectorAll('.category-menu button')

    for (let i = 0; i < categoriesBtn.length; i++) {
      categoriesBtn[i].addEventListener('click', () => {
        for (let j = 0; j < categoriesBtn.length; j++) {
          categoriesBtn[j].classList.remove('active')
          categoriesBtn[i].classList.add('active')
        }
      })
    }
  }, [])

  return (
		<SearchPageStyles>
			<h1>SEARCH FOR YOUR FAVOURITE MOVIES AND TV SERIES</h1>

			<div className='category-menu'>
				{categoriesArray.map((category, id) => (
					<button key={id} className={id === 0 ? 'active' : null}>
						{category}
					</button>
				))}
			</div>

			
		</SearchPageStyles>
	);
}

export default SearchPage