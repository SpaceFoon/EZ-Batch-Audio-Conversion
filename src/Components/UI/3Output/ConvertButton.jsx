// ConvertButton.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import convertAudio from '../../Backend/convert';
import Loading from '../Loading';

// Default values shown  


const ConvertButton = (settings, conversionList) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        const {failedFiles, Finished} = await convertAudio(settings, conversionList);
        setLoading(false);
        navigate("/Finished", { state: { failedFiles, Finished } });
    };

    return (
        <div>
            {loading ? <Loading /> : <button onClick={handleClick}>Convert</button>}
        </div>
    );
};
PropTypes.ConvertButton = {
    settings: PropTypes.object.isRequired,
    conversionList: PropTypes.array.isRequired,
};

export default ConvertButton;
