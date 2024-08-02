"use client";

import Image from 'next/image';
import { useGetInfoQuery, useGetInfoFaQuery } from '../redux/services/main/about';
import { useTheme } from '@mui/material/styles';

const PortfolioImage = () => {
    const theme = useTheme();
    console.log(useGetInfoFaQuery())
    console.log(useGetInfoQuery())
    const { data } = theme.palette.mode === 'dark' ? useGetInfoFaQuery() : theme.palette.mode === 'light' ? useGetInfoQuery() : null;

    return (
        <div className="absolute right-0 top-[-0.25rem]">
            <div className="rounded-[15rem] rounded-tr-lg rounded-bl-[20rem]  overflow-hidden">
                {data && data[0] && (
                    <Image
                        src={data[0].main_img}
                        alt="Portfolio Image"
                        width={500}
                        height={800}
                        className="w-[15rem] h-[15rem] sm:w-[25rem] sm:h-[25rem]"
                        priority
                    />
                )}
            </div>
        </div>
    );
};


export default PortfolioImage;