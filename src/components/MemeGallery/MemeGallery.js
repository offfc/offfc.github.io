import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageCard from "../ImageCard/ImageCard";

export default function MemeGallery() {
  return (
    <ImageList variant="masonry" cols={3} gap={10}>
      {itemData.map((item) => (
        <ImageCard title={item.title} image={item.img} description={item.description}/>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/img/memes/1.png",
    title: "true Blue Archive player",
    description: "真正的 BA 玩家！",
  },
  {
    img: "/img/memes/2.jpg",
    title: "My angel juroe",
    description: "有错字受",
  },
  {
    img: "/img/memes/3.jpg",
    title: "三毛staff记录",
  },
  {
    img: "/img/memes/4.jpg",
    title: "原图我在下面",
  },
  {
    img: "/img/memes/5.png",
    title: "@Naughty_chas | 冒烟程序组 投稿梗图",
    description: "\"听着像魅魔的声音就是猹\"",
  },
  {
    img: "/img/memes/6.png",
    title: "ppy的发量",
  },
];
