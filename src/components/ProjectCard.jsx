import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        alt="placeholder"
        sx={{ height: 150 }}
        image={"https://via.placeholder.com/245x150.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Project Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Full Blog Post</Button>
        <Button size="small">Github</Button>
        <Button size="small">Live Demo</Button>
      </CardActions>
    </Card>
  );
}