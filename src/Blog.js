import React, { useState } from 'react';
import "./Blog.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Blog({ id, title, img, description, author, date }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };

    return (
        <div className="product">
            <Card style={{ margin: '16px' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={img}
                />
                <CardContent>
                    <Typography style={{ fontWeight: '600', fontSize: 'large' }}>
                        {title}
                    </Typography>
                    <Typography style={{ color: 'gray' }}>
                        {description}
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
                </CardActions>
            </Card>
        </div>
    );
}
