import ImageSlider from "./ImageSlider";

export default function Main() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      title: "beach",
    },
    {
      url: "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "boat",
    },
    {
      url: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "forest",
    },
    {
      url: "https://images.unsplash.com/photo-1564501911891-74a27d949ee1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "city",
    },
    {
      url: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "italy",
    },
  ];

  // const slides = [
  //   { url: "http://localhost:3000/image-1.jpg", title: "beach" },
  //   { url: "http://localhost:3000/image-2.jpg", title: "boat" },
  //   { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  //   { url: "http://localhost:3000/image-4.jpg", title: "city" },
  //   { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  // ];

  const containerStyles = {
    width: "600px",
    height: "350px",
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
