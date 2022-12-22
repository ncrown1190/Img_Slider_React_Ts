import ImageSlider from "./ImageSlider";

export default function Main() {
  //   const slides = [
  //     {
  //       url: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //       title: "beach",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  //       title: "boat",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  //       title: "forest",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  //       title: "city",
  //     },
  //     {
  //       url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  //       title: "italy",
  //     },
  //   ];

  const slides = [
    { url: "./images/image-1.jpg", title: "beach" },
    { url: "./images/image-2.jpg", title: "boat" },
    { url: "./images/image-3.jpg", title: "forest" },
    { url: "./images/image-4.jpg", title: "city" },
    { url: "./images/image-5.jpg", title: "italy" },
  ];
  // const slides = [
  //   { url: "http://localhost:3000/image-1.jpg", title: "beach" },
  //   { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  //   { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  //   { url: "http://localhost:3000/image-4.jpg", title: "city" },
  //   { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  // ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Image Slider Using React TypeScript
      </h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
