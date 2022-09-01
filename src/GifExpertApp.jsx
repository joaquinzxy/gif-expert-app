import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    const handleReset = () => {
        setCategories([]);
    }

    // const deleteCategory = (category)=>{
    //     console.log(category);
    // }

    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))
            }

            {
                categories.length >= 1 ? (
                    <div className="reset-container">
                        <button onClick={handleReset}> RESET </button>
                    </div>
                ) : null
            }
            
        </>

    )
}

//  const apiKey = 'qLeMTkqH7vXWzNT6GnhPDvZ3hW8WSu';
