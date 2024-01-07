// NextButton.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import createConversionList from '../../Backend/createConversionList';
import Loading from '../Loading';
//import DuplicateDialog from './DuplicateDialog';

const NextButton = ({ settings, deduped }) => {
  const navigate = useNavigate();
   const [conversionList, setConversionList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [dialogResponse, setDialogResponse] = useState(null);

   const handleClick = async () => {
    setLoading(true);

  //   const handleDuplicate = async (file) => {
  //     setDialogOpen(true);
  //     await new Promise((resolve) => setDialogResponse(resolve));
  //     return dialogResponse;
  //   };
    setConversionList (await createConversionList(settings, deduped))
  setLoading(true);
  const newConversionList = await createConversionList(settings, deduped);
  console.log('newConversionList:', newConversionList); // Add this line
  setConversionList(newConversionList);
  navigate("/Output", { state: { conversionList: newConversionList } });
  setLoading(false);
}
  //   if (list.includes("copy")) {
  //     setDialogOpen(true);
  //   } else {
  //     setLoading(false);
  //     navigate("/Output", { state: { settings, deduped, conversionList: list } });
  //   }
  // };

    // const handleDialogClose = (response) => {
    //   setDialogOpen(false);
    //   setDialogResponse(response);
    //   setLoading(false);
    // };

  return (
    <>
      <button onClick={handleClick} disabled={loading}>
        {loading ? <Loading /> : 'Next'}
      </button>
      {/* {dialogOpen && <DuplicateDialog onClose={handleDialogClose} />} */}
    </>
  );
  }

NextButton.propTypes = {
    settings: PropTypes.object.isRequired,
    deduped: PropTypes.array.isRequired,
};
   
export default NextButton;
