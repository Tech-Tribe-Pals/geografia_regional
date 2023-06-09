import styled from "styled-components";
import esLocale from "date-fns/locale/es";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const CardStyle = styled.article`
  text-align: center;
  border-radius: 10px;
  position: relative;
  width: 90%;
  height: 50vh;
  margin-top: 1.5rem;
  color:white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  p {
    z-index: 1;
  }

  .info-card {
    width: 100%;
    display: flex;
    flex-direction: row;
    z-index:1;
    justify-content: space-between;
    align-items: center;

    a {
      margin-right: 2rem;
      :hover {
        filter: invert(35%) sepia(10%) saturate(1126%) hue-rotate(60deg) brightness(95%) contrast(87%);
        transform:scale(1.2);
        transition: all .2s ease-in-out;
      }
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  .img-card {
    filter: brightness(50%);
    border-radius: 10px;
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0; 
    z-index: 0;
  }
  @media (width < 990px) {
    margin-right: 0;
    height: 250px;
  }
`;

const Aside = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 1px solid #34422f;
  border-right: 4px solid #34422f;
  border-bottom: 4px solid #34422f;
  border-left: 1px solid #34422f;
  border-radius: 10px;
  margin: 10px;
  width: 90%;
  height: 150px;
  position: relative;
  :hover h3 {
    height: 100%;
  }
  h3 {
    padding:3px;
    transition: ease-in-out .2s;
    background-color: rgb(40, 41, 40,.8);
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -20px;
    border-radius: 0 0 7px 7px;
    font-size:.9rem;
    text-align: start;
    filter:blur(200%);
  }
`;

export const Card = ({ post }) => {
  const formattedDate = format(
    new Date(post.createdAt),
    "dd 'de' MMMM 'de' yyyy",
    {
      locale: esLocale,
    }
  );

  return (
    <CardStyle>
      <p>{formattedDate}</p>
      <img className="img-card" src={post.thumbnail} />
      <div className="info-card">
        <h3>{post.title}</h3>
        <Link to={`/blog/${post._id}`}>
          <img src="/Iconos/Arrow.svg" width={40} alt="" />
        </Link>
      </div>
    </CardStyle>
  );
};

export const CardView = ({ post }) => {
  return (
    <Aside to={`/blog/${post._id}`} style={{backgroundImage: `url(${post.thumbnail})`}}>
      <h3>{post.title}</h3>
    </Aside>
  );
};
