import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import classes from "./Portfolio.module.css";
// import "./styles.css";
import styled from "styled-components";
import PortfolioCardImg from "../../assets/images/portfolioCard.png";
import PortfolioCardImg2 from "../../assets/images/portfolioCard2.png";
import IsoTopeGrid from "react-isotope";
import { Title } from "../Title";

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const Filter = styled("button")`
  background-color: transparent;
  border: none;
  outline: none;
  position: relative;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  &:not(:first-child):after {
    content: " / ";
    position: absolute;
    top: 0;
    left: 0;
  }

  > input {
    width: 0;
    height: 0;
    position: relative;

    &:checked {
      & + label {
        color: #26c17e;
      }
    }
  }

  > label {
    padding: 5px;
    border-bottom: 2px solid transparent;
    text-transform: capitalize;

    &:hover {
      color: #26c17e;
      cursor: pointer;
    }
  }
`;

const Card = styled("div")``;

const cardsDefault = [
  {
    id: "a",
    img: PortfolioCardImg,
    filter: ["ui"],
    title: "Some text",
    description:
      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    sourceLink: "https://somesite.com/",
    sourceName: "View source",
  },
  {
    id: "b",
    img: PortfolioCardImg2,
    filter: ["code"],
    title: "Some text",
    description:
      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    sourceLink: "https://somesite.com/",
    sourceName: "View source",
  },
  {
    id: "c",
    img: PortfolioCardImg,
    filter: ["ui"],
    title: "Some text",
    description:
      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    sourceLink: "https://somesite.com/",
    sourceName: "View source",
  },
  {
    id: "d",
    img: PortfolioCardImg2,
    filter: ["code"],
    title: "Some text",
    description:
      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    sourceLink: "https://somesite.com/",
    sourceName: "View source",
  },
  {
    id: "e",
    img: PortfolioCardImg,
    filter: ["ui"],
    title: "Some text",
    description:
      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    sourceLink: "https://somesite.com/",
    sourceName: "View source",
  },
  {
    id: "f",
    img: PortfolioCardImg2,
    filter: ["code"],
    title: "Some text",
    description:
      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis ",
    sourceLink: "https://somesite.com/",
    sourceName: "View source",
  },
];

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "ui", isChecked: false },
  { label: "code", isChecked: false },
];

export const Portfolio = forwardRef((props, ref) => {
  const [filters, updateFilters] = useState(filtersDefault);

  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        } else {
          return {
            ...f,
            isChecked: false,
          };
        }
      })
    );
  };

  const portfolioContainer = useRef();
  const [width, setWidth] = useState(0);
  const [collNum, setcolNum] = useState(6);

  useImperativeHandle(ref, () => ({
    scrollTo: () =>
      portfolioContainer.current.scrollIntoView({
        behavior: "smooth",
      }),
  }));

  useEffect(() => {
    function handleWindowResize() {
      setWidth(portfolioContainer?.current.clientWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setWidth(portfolioContainer?.current.clientWidth);
  }, []);

  useEffect(() => {
    if (width < 1620) {
      setcolNum(4);
      updateFilters((state) => state.map((f) => f));
    }
    if (width < 1250) {
      setcolNum(3);
      updateFilters((state) => state.map((f) => f));
    }
    if (width < 970) {
      setcolNum(2);
      updateFilters((state) => state.map((f) => f));
    }
    if (width < 650) {
      setcolNum(1);
      updateFilters((state) => state.map((f) => f));
    }
  }, [width]);

  const setClassPortfolio = () => {
    if (collNum === 4) {
      return classes.portfolio;
    }
    if (collNum === 3) {
      return classes.portfolio;
    }
    if (collNum === 2) {
      return classes.portfolio3col;
    }
    if (collNum === 1) {
      return classes.portfolio6col;
    }
  };
  return (
    <div
      className={setClassPortfolio()}
      ref={portfolioContainer}
      id="portfolio"
    >
      <Title titleName="Portfolio" />
      <div className={classes.filterName}>
        {filters.map((f) => (
          <Filter key={`${f.label}_key`}>
            <input
              id={f.label}
              type="radio"
              name={f.label}
              value={f.label}
              onChange={onFilter}
              checked={f.isChecked}
            />
            <label htmlFor={f.label}> {f.label} </label>
          </Filter>
        ))}
      </div>

      <Container>
        <IsoTopeGrid
          gridLayout={cardsDefault}
          noOfCols={collNum}
          unitWidth={308}
          unitHeight={190}
          filters={filters}
        >
          {cardsDefault.map((card) => (
            <Card key={card.id} className={`{classes.card} ${card.filter[0]}`}>
              <div className={classes.tags}>
                <img
                  className={classes.portfolioImg}
                  src={card.img}
                  alt="img"
                ></img>
                <div className={classes.portfolioInfo}>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                  <a href={card.sourceLink}>{card.sourceName}</a>
                </div>
              </div>
            </Card>
          ))}
        </IsoTopeGrid>
      </Container>
    </div>
  );
});
