import openCollectionDiscoverImg from "../assets/images/open-collection-discover.png";
import rijksExplorerMasterpiecesImg from "../assets/images/rijks-explorer-masterpieces.png";

const featuredProjects = [
  {
    id: "open-collection-ios",
    imgSrc: openCollectionDiscoverImg,
    mediaClassName: "featured-project-media-portrait",
    title: "Open Collection iOS",
    homeSummary: "Cross-museum discovery and personal library",
    description:
      "A calm cross-museum SwiftUI app for discovering, saving, and organizing artworks from the Art Institute of Chicago and the Cleveland Museum of Art.",
    detailLink: "/projects/open-collection-ios",
    tags: ["SwiftUI", "Cross-Museum App", "Personal Library"],
    stack: ["swiftui", "ios", "api", "localData"],
    role: "Concept / Product Direction / UI / SwiftUI Implementation",
    note:
      "The key challenge was making two different museum APIs feel like one coherent discovery and library experience.",
  },
  {
    id: "rijks-explorer-ios",
    imgSrc: rijksExplorerMasterpiecesImg,
    mediaClassName: "featured-project-media-portrait",
    title: "RijksExplorer iOS",
    homeSummary: "Curated stories and live collection exploration",
    description:
      "A focused Rijksmuseum app that separates stable masterpiece stories from live collection exploration.",
    detailLink: "/projects/rijks-explorer-ios",
    tags: ["SwiftUI", "Live Museum Data", "Product Decisions"],
    stack: ["swiftui", "ios", "api", "localData"],
    role: "Concept / Product Direction / UI / SwiftUI Implementation",
    note:
      "The hardest product decision was choosing reliable paths over broad filters when live museum metadata proved uneven.",
  },
];

export default featuredProjects;
