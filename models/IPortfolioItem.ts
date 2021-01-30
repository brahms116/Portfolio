export default interface IPortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  technologies: string[];
  languages: string[];
  description: string;
  keywords: string[];
  imgSrc: string;
  color: {
    primary: string;
    background: string;
    text: string;
    textOnPrimary: string;
    button: {
      text: string;
      idle: string;
      hover: string;
      pressed: string;
    };
  };
}
