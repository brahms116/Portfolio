export default function PortfolioItem() {
  return (
    <div className="portfolio_item">
      <style jsx>{`
        .portfolio_item {
          display: grid;
          grid-template:
            "markerA titleA" auto
            ". ." ${22 / 16}rem
            ". subtitleA" auto
            ". ." ${56 / 16}rem
            ". technologyA" auto
            ". ." ${52 / 16}rem
            ". languageA" auto
            ". ." ${75 / 16}rem
            "buttonA buttonA" auto/ auto 1fr;
        }
      `}</style>
    </div>
  );
}
