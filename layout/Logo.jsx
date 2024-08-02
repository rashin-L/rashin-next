"use client";

import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';

function Logo() {
    const theme = useTheme();

    return (
            <Link href='/' style={{ textDecoration: 'none' }}>
                {theme.palette.mode === 'dark' ?
                    <Fade top>
                        <img width={270} height={20}
                            className="w-[24rem] h-[7rem] md:w-[18rem] sm:h-auto"
                            src='../../images/logo_dark.png' />
                    </Fade>
                    :
                    <Fade top>
                        <img width={270} height={20}
                            className="w-[27rem] h-[9rem] sm:w-[18rem] sm:h-auto"
                            src='../../images/logo.png' />
                    </Fade>
                }



            </Link>

    );
}

export default React.memo(Logo);