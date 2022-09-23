import React from 'react';
import Button from '@mui/material/Button';
import {createTheme} from '@mui/material/styles'
import './home.css'
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';

export default function Home() {
    const theme = createTheme({
        palette:{
            nogi:{
                main:'#812990',
                contrastText:'#FFFFFF'
            },
            sakura:{
                main:'#f19db5',
                contrastText:'#FFFFFF'
            },
            hinata:{
                main:'#7cc7e8',
                contrastText:'#FFFFFF'
            }
        }
    })

    return (
        <div className='home'>
            <h1>坂道ソート</h1>
            <div>
                <ThemeProvider theme={theme}>
                    <Button variant='contained' color='nogi' component={Link} to='/nogi_sort'
                    >乃木坂46</Button>
                    <Button variant='contained' color='sakura' component={Link} to='/sakura_sort'
                    >櫻坂46</Button>
                    <Button variant='contained' color='hinata' component={Link} to='/hinata_sort'
                    >日向坂46</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}