import styled from "styled-components";
import { Tag } from "../types/types";

export const createMarkup = (html: string) => {
  return { __html: html };
};

export const createContainers = (tagsArray: Tag[], style: any) => {
  const array: { name: string; container: any }[] = [];
  tagsArray.forEach((element) => {
    let container = styled.div`
      ${style}
    `;
    const name = `Container_${element}`;
    switch (element) {
      case "a":
        container = styled.a`
          ${style}
        `;
        break;
      case "p":
        container = styled.p`
          ${style}
        `;
        break;
      case "span":
        container = styled.span`
          ${style}
        `;
        break;
      case "label":
        container = styled.label`
          ${style}
        `;
        break;
      case "h1":
        container = styled.h1`
          ${style}
        `;
        break;
      case "h2":
        container = styled.h2`
          ${style}
        `;
        break;
      case "h3":
        container = styled.h3`
          ${style}
        `;
        break;
      case "h4":
        container = styled.h4`
          ${style}
        `;
        break;
      case "h5":
        container = styled.h5`
          ${style}
        `;
        break;
      case "strong":
        container = styled.strong`
          ${style}
        `;
        break;
      case "q":
        container = styled.q`
          ${style}
        `;
        break;
      case "li":
        container = styled.li`
          ${style}
        `;
        break;
      case "div":
        container = styled.div`
          ${style}
        `;
        break;
      case "ul":
        container = styled.ul`
          ${style}
        `;
        break;
      case "section":
        container = styled.section`
          ${style}
        `;
        break;
      case "article":
        container = styled.article`
          ${style}
        `;
        break;
    }
    array.push({ name, container });
  });
  return array;
};

export const generateWrapper = (
  containers: { name: string; container: any }[],
  tag: Tag
) => {
  const index = containers.findIndex((el) => el.name === `Container_${tag}`);
  const ContainerWrapper =
    index === -1 ? containers[2].container : containers[index].container;
  return ContainerWrapper;
};
