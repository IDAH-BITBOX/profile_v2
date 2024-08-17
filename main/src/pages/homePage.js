import { Link } from "react-router-dom";
import { Component } from "../components/scrollTriggeredAnimation"
import styled from "styled-components";

export const HomePage =()=> {
  const food = [
    ["안녕하세요!", 190, 20],
    ["휴튼의 엔지니어", 110, 20],
    ["임세진 입니다.", 60, 20],
    [<a href={"https://heuton.kr/about"}><Button>휴튼?</Button></a>, 250, 20],
  ];
  return food.map(([sector, hueA, hueB]) => (
    <Component sector={sector} hueA={hueA} hueB={hueB} key={sector} />
  ));
}


const Button = styled.button`
  background-color: "#ed766b";
	width: 500px;
	height: 350px;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
	font-family: var(--font-head);
	font-weight: 500;
	font-size: 60px;
	color: black;
	cursor: pointer;
	transition: 0.2s;
	&:hover{
		box-shadow: 500px 0 0 0 #ed766b inset, 
							 -500px 0 0 0 #ed766b inset;
	}
`;