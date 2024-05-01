import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storageService } from '../services/storageService';


const FindWilling = () => {
    const [volunteerName, setVolunteerName] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const uniqueCities = getUniqueCities(storageService.getWillings());
        setCities(uniqueCities);
    }, []);

    const getUniqueCities = (willings) => {

        const uniqueCitiesSet = new Set(willings.map((willing) => willing.location));
        const uniqueCitiesArray = Array.from(uniqueCitiesSet);
        console.log(uniqueCitiesArray, uniqueCitiesSet)
        return uniqueCitiesArray;
    };

    const handleSearchWilling = (e) => {

        if (!volunteerName.trim()) {
            alert('יש להזין שם מתנדב חוקי.');
            return;
        }
        if (!selectedCity) {
            return
        }
        storageService.saveCity({ selectedCity })

        navigate('/all');
    };
    const handleSelectedCity = (e) => {
        const value = setSelectedCity(e.target.value)
    }

    return (
        <>
            <div className='findVolunteering'>
                <h2>מצא התנדבות</h2>
                <label>שם מתנדב:</label>
                <input
                    type='text'
                    value={volunteerName}
                    onChange={(e) => setVolunteerName(e.target.value)}
                    minLength={3}
                    required
                />
                <label>עיר:</label>
                <select
                    value={selectedCity}
                    onChange={handleSelectedCity}
                >
                    <option value=''>בחר עיר</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                <button onClick={handleSearchWilling}>חפש</button>
            </div>
        </>
    );
};

export default FindWilling;
