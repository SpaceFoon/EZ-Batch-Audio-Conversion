import { Alert } from '@mantine/core';

const DuplicateWarning = () => {
    return (
        <Alert color="yellow" title="Warning">
            One or more output files already exist!
            Press the &quot;Duplicate&quot; button to choose how to handle them.
        </Alert>
    );
};

export default DuplicateWarning;
