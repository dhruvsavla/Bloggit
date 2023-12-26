import React, { useState } from 'react';
import "./BlogDetailsCard.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FiDownload } from "react-icons/fi";

export default function BlogDetailsCard({ id, title, img, blog, author, date }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
            <div className="details-card">
            <Card >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="400"
                        image={img}
                    />
                <CardContent>
                    <Typography style={{fontWeight: 'bolder', fontSize: 'medium', textAlign:'left', marginBottom: '10px'}}>
                            {author}
                    </Typography>
                    <Typography style={{fontWeight: 'bolder', fontSize: 'medium', textAlign:'left', marginBottom: '10px'}}>
                            {date}
                    </Typography>
                    <Typography style={{fontWeight: 'bolder', fontSize: 'x-large', textAlign:'center', marginBottom: '20px'}}>
                            {title}
                    </Typography>
                    <Typography style={{lineHeight: '2.5'}}>
                        {blog}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <div onClick={handleClick}>
                            {clicked ? (
                                <FaHeart style={{ fontSize: '30px', color: 'red', paddingLeft: '10px', paddingBottom: '5px' }} />
                            ) : (
                                <FaRegHeart style={{ fontSize: '30px', paddingLeft: '10px', paddingBottom: '5px' }} />
                            )}
                        </div>
                        <FaRegComments style={{ fontSize: '30px', paddingLeft: '10px', paddingBottom: '5px' }} />
                        <HiOutlineShare style={{ fontSize: '30px', paddingLeft: '10px', paddingBottom: '5px' }} />
                        <FiDownload style={{ fontSize: '30px', paddingLeft: '10px', paddingBottom: '5px', marginLeft: 'auto'}}/>
                    </CardActions>
                </Card>
            </div>
        
    );
}
