import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ImageCard({ title, description, image }) {
    return (
        // Integration with MUI makes shit code, unusable stylesheets and possible tech debts.
        // But to use "elegant" masonry layout, we have to use this.
        <div style={{ marginBottom: "10px" }}>
            <Card sx={{
                border: "1px solid transparent", borderRadius: "5px", transition: "all 0.2s ease",
                ":hover": { border: "2px solid transparent", borderColor: "#269ffe" },
            }}>
                <CardMedia>
                    <img src={image} alt={title} style={{width: "100%"}}/>
                </CardMedia>
                <CardContent>
                    <h2>{title}</h2>
                    {(description && <p>{description}</p>)}
                </CardContent>
            </Card>
        </div>
    );
}

ImageCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default ImageCard;
