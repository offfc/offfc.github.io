import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageCard from "../ImageCard/ImageCard";

export default function MemeGallery() {
  return (
    <ImageList variant="masonry" cols={3} gap={10} style={{paddingBottom: "5px"}}>
      {itemData.map((item) => (
        <ImageCard title={item.title} image={item.img} description={item.description}/>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/img/memes/wrong-group-chat.jpg",
    title: "\"发错了\"",
    description: "🙄+😦=?",
  },
  {
    img: "/img/memes/fire-truck.png",
    title: "火个几把",
    description: "🔥🔥🤓🔥🔥",
  },
  {
    img: "/img/memes/oh-my-children.png",
    title: "我草小孩",
  },
  {
    img: "/img/memes/true-BA-player.png",
    title: "true Blue Archive player",
    description: "真正的 BA 玩家！",
  },
  {
    img: "/img/memes/my-angel-juroe.jpg",
    title: "My angel juroe",
    description: "有错字受",
  },
  {
    img: "/img/memes/staff-no-hair.jpg",
    title: "三毛staff记录",
  },
  {
    img: "/img/memes/the-underneath.jpg",
    title: "原图我在下面",
  },
  {
    img: "/img/memes/enchanting-voice.png",
    title: "@Naughty_chas | 冒烟程序组 投稿梗图",
    description: "\"听着像魅魔的声音就是猹\"",
  },
  {
    img: "/img/memes/peppy-one-ptr.png",
    title: "ppy的发量",
  },
];
