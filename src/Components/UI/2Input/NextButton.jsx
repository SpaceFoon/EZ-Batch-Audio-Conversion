// NextButton.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import createConversionList from '../../Backend/createConversionList';
import Loading from '../Loading';
const NextButton = ({ settings, deduped }) => {
    const navigate = useNavigate();
    const [conversionList, setConversionList] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log("settings3", settings);
    console.log("deduped3", deduped);

    
         
const handleClick = async () => {
  const fetchList = async () => {
    setLoading(true);
    const list = await createConversionList(settings, deduped);
    setConversionList(list);
    
    navigate("/Output", { state: { settings, deduped, conversionList: list } });
  };


  await fetchList();
}


    return (
         <button onClick={handleClick} disabled={loading}>
      {loading ? <Loading /> : 'Next'}
    </button>
        
    );
};

NextButton.propTypes = {
    settings: PropTypes.object.isRequired,
    deduped: PropTypes.array.isRequired,
};

export default NextButton;
