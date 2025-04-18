import Typography from '@mui/material/Typography';

function Heading(props) {
    return (
        <>
            <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                {props.title}
            </Typography>
        </>
    );
}

export default Heading