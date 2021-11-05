import { Container, Text, Image } from "./style";
import { useContext } from "react";
import { PostContext } from "../../Context/Post.provider";

const PageContent = () => {
  const { items } = useContext(PostContext)

  return (
    <>
      <Container>
        {items.map((item) => (
          <div className="itemContainer" key={item.id}>
            <Text>
              <h4 className="intro"> {item.intro} </h4>
              <h1 className="title"> {item.title}</h1>
              <p className="desc">{item.desc}</p>
              <span className="more">{item.more}</span>
            </Text>
            <Image src={item.img} />
          </div>
        ))}
      </Container>
    </>
  );
};

export default PageContent;
