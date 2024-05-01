import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storageService } from '../services/storageService';

const AllWillingPage = () => {
    const [allWillings, setAllWillings] = useState([]);
    const [selectCity, setSelectCity] = useState([])
    const [newWilling, setNewWilling] = useState([])
    const [selectedWillingIndex, setSelectedWillingIndex] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedWillings = storageService.getWillings()
        setAllWillings(storedWillings);
        const handleSelectCity = storageService.getCity()
        setSelectCity(handleSelectCity)
    }, []);

    const handleToggleDescription = (index) => {
        if (selectedWillingIndex === index) {
            setSelectedWillingIndex(null);
        } else {
            setSelectedWillingIndex(index);
        }
    };

    const handleDeleteSelectedWilling = () => {
        if (selectedWillingIndex !== null) {
            const updatedWillings = [...allWillings];
            updatedWillings.splice(selectedWillingIndex, 1);
            setAllWillings(updatedWillings);
            storageService.saveWilling(updatedWillings);
            setSelectedWillingIndex(null);
            navigate('/');
        }
    };
    // for (let i = 0; i < allWillings.length - 1; i++) {
    //     if (allWillings.location[i] === selectCity) {
    //         setNewWilling(allWillings)
    //     } else {
    //         setNewWilling(allWillings)
    //     }
    // }



    return (
        <div>
            <h2>רשימת התנדבויות</h2>
            {allWillings.map((willing, index) => (
                <div key={index}>
                    <h3 onClick={() => handleToggleDescription(index)}
                        style={{ cursor: 'pointer', backgroundColor: selectedWillingIndex === index ? '#b7ebc7' : 'inherit' }}>
                        {willing.title}
                    </h3>
                    {selectedWillingIndex === index && <p>{willing.description}</p>}
                </div>
            ))}

            {selectedWillingIndex !== null && <button onClick={handleDeleteSelectedWilling}>אישור כל התנדבות שנבחרה</button>}
        </div>
    );
};

export default AllWillingPage;
