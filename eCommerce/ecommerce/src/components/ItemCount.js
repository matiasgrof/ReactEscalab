
import React, { useState } from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { width } from '@mui/system';

const ItemCounter = (props) => {

    const [itemCount,setItemCount] = useState(0);
    const [stock,setStock]  = useState(5);

    const sum = () => {
        return (
            setItemCount(itemCount+1)
        );
    }
    const rest = () => {
        return (
            setItemCount(itemCount-1)
        );
    }

    const card = (
        <>
            <div style={{ borderColor:'blue',border:2,}}>
            <CardContent sx={{backgroundColor:'#B2BEB5'}}>
                <div>
                    <Typography sx={{ fontSize: 16, textAlign:'left'}} color="text.secondary" gutterBottom>
                        Camisa Arrow
                    </Typography>
                </div>  
                <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between', borderColor:'blue',border:2 }}>
                    <div style={{ }} onClick={rest}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <div style={{ borderColor:'blue',borderWidth:2,}}>
                        {itemCount}
                    </div> 
                    <div style={{}} onClick={sum}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </CardContent>
            <CardActions sx={{justifyContent:'center'}}>
                <Button size="small" sx={{flex:1, borderColor:'blue',border:1}}>Agregar al carrito</Button>
            </CardActions>
            </div>
        </>
    );
    return(
        <div style={{}}>
            <Box sx={{  maxWidth: 140,margin:10 ,  }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
};
export default ItemCounter;

