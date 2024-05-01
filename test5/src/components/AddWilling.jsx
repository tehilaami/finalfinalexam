import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { storageService } from '../services/storageService';

const AddWilling = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleAddWilling = () => {
        if (!title.trim() || !location.trim() || !description.trim()) {
            alert('אנא מלא את כל השדות.');
            return;
        }
        const englishLetters = /[A-Za-z\s]*/
        if (!englishLetters.test(location) || !englishLetters.test(1 - 9)) {
            alert('שם העיר חייב לכלול רק אותיות באנגלית.');
            return;
        }
        storageService.createUser({ title, location, description });
        navigate('/');
    }
    return (
        <>
            <div className='addVolunteering'>
                <h2>הוספת התנדבות חדשה</h2>
                <label>כותרת להתנדבות:</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={20}
                    required
                />
                <label>מיקום התנדבות :</label>
                <input
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    pattern='[A-Za-z\s]*'
                    required
                />
                <label>תיאור התנדבות :</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={200}
                    required
                />
                <button onClick={handleAddWilling}>יצירת התנדבות חדשה</button>
            </div>
        </>
    )
}

export default AddWilling