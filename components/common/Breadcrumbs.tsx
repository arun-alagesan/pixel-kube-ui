import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from "next/link";


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({currentPage}: any) {
  return (
    <div role="presentation" className='py-2' onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{fontSize : "12px", color : "#009AEE"}}>
        <Link color="blue" href="/">
          Home
        </Link>
        <Typography sx={{fontSize : "12px", color: "gray"}}>{currentPage}</Typography>
      </Breadcrumbs>
    </div>
  );
}