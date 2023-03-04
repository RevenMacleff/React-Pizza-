import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={468}
    viewBox="0 0 280 468"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="138" r="138" />
    <rect x="2" y="288" rx="10" ry="10" width="280" height="32" />
    <rect x="5" y="328" rx="0" ry="0" width="271" height="64" />
    <rect x="7" y="404" rx="0" ry="0" width="105" height="34" />
    <rect x="123" y="403" rx="20" ry="20" width="152" height="58" />
    <rect x="231" y="426" rx="0" ry="0" width="2" height="8" />
  </ContentLoader>
);

export default Skeleton;
