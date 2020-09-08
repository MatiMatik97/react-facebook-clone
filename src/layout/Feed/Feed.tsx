import React from "react";
import "./Feed.scss";
import Story from "../../components/Story/Story";
import MessageSender from "../../components/MessageSender/MessageSender";
import Posts from "../../components/Posts/Posts";

const Feed: React.FC = () => {
  return (
    <div className="feed">
      <div className="feed__storyReel">
        <Story
          image="https://vignette.wikia.nocookie.net/ava-max/images/2/24/AvaMaxWembley.jpg/revision/latest/top-crop/width/360/height/450?cb=20200308032348"
          profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo7J4dKc4RFnUK81y3iixr4Esd8IJ72mc4qg&usqp=CAU"
          title="Ava Max"
        />
        <Story
          image="https://i.insider.com/5e14563c855cc23d4d6f14f3?width=1136&format=jpeg"
          profileSrc="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
          title="Cristiano Ronaldo"
        />
        <Story
          image="https://static.stereogum.com/uploads/2019/08/Drake-1565095830-640x509.jpg"
          profileSrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drake-attends-the-top-boy-uk-premiere-at-hackney-news-photo-1586363414.jpg?crop=1.00xw:0.708xh;0,0.0457xh&resize=480:*"
          title="Drake"
        />
        <Story
          image="https://fwcdn.pl/nph/1985708/2016/6342_1.7.jpg"
          profileSrc="https://static.hollywoodreporter.com/sites/default/files/2020/06/dwayne_johnson_-_the_rock_-_dwayne_the_rock_johnson_-_getty_-_h_2020_-928x523.jpg"
          title="Dwayne Johnson"
        />
        <Story
          image="https://pyxis.nymag.com/v1/imgs/8be/54f/8b6d431d1e0bc14022d87f0123a05e0d76-04-eminem-2.rsquare.w1200.jpg"
          profileSrc="https://www.somagnews.com/wp-content/uploads/2020/01/a7-12-e1579117751843.jpg"
          title="Eminem"
        />
      </div>

      <MessageSender />

      <Posts />
    </div>
  );
};

export default Feed;
