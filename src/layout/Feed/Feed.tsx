import React from "react";
import "./Feed.scss";
import Story from "../../components/Story/Story";

const Feed: React.FC = () => {
  return (
    <div className="feed">
      <div className="feed__storyReel">
        <Story
          image="https://static.stereogum.com/uploads/2019/08/Drake-1565095830-640x509.jpg"
          profileSrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drake-attends-the-top-boy-uk-premiere-at-hackney-news-photo-1586363414.jpg?crop=1.00xw:0.708xh;0,0.0457xh&resize=480:*"
          title="Drake"
        />
        <Story
          image="https://vignette.wikia.nocookie.net/ava-max/images/2/24/AvaMaxWembley.jpg/revision/latest/top-crop/width/360/height/450?cb=20200308032348"
          profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo7J4dKc4RFnUK81y3iixr4Esd8IJ72mc4qg&usqp=CAU"
          title="Ava Max"
        />
        <Story
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg/1200px-Linkin_Park-Rock_im_Park_2014-_by_2eight_3SC0327.jpg"
          profileSrc="https://s.abcnews.com/images/Entertainment/chester-bennington-linkin-park-gty-04-jpo-170720_16x9_992.jpg"
          title="Chester Bennington"
        />
        <Story
          image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/06/12/16/190403-piczo-bastille-shot-07-063.jpg"
          profileSrc="https://i.pinimg.com/originals/b5/fe/be/b5febe0d3a7f9106f3b98222e92dc23c.jpg"
          title="Bastille"
        />
        <Story
          image="https://www.tekstowo.pl/zdjecie_wykonawcy,kase_and_wrethov,a2FzZV9hbmRfd3JldGhvdl8xMV9lMDQ5MWJmMV80Mzg2MTU._1200_900_.jpg"
          profileSrc="https://www.bubblegumdancer.com/images/anderz-wrethov/anderz.jpg"
          title="KASE and WRETHOV"
        />
      </div>
    </div>
  );
};

export default Feed;
