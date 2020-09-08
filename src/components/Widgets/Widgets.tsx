import React from "react";
import "./Widgets.scss";

const Widgets: React.FC = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        frameBorder="0"
        scrolling="no"
        allow="encrypted-media"
        title="widget"
        className="widgets__frame"
      ></iframe>
    </div>
  );
};

export default Widgets;
