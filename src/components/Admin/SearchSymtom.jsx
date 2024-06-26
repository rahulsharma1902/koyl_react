import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const SearchSymptom = () => {
    const { user } = useContext(AuthContext);
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const newTag = inputValue.trim().replace(/,$/, '');
            if (newTag && !tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setInputValue('');
        }
    };

    const handleRemoveTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        console.log('Submitted tags:', tags);
        // Add your form submission logic here
    };

    return (
        <div className='search_wrap'>
            <h2>Search Symptoms and Diseases</h2>
            <input 
                type="text" 
                placeholder="Search..." 
                className="search-input" 
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <p>Press enter or add a comma between each symptom or disease</p>
            {(inputValue || tags.length > 0) && (
                <div className='search_result_dropdown'>
                    <div className="tags-container">
                        {tags.map((tag, index) => (
                            <div className="tag" key={index}>
                                {tag}
                                <button className="remove-tag" onClick={() => handleRemoveTag(index)}>x</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleSubmit} className="cta cta_sky">Submit Symptoms</button>
                </div>
            )}
        </div>
    );
};

export default SearchSymptom;
