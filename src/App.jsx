import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <p>Select an episode</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch Now</button>
      </section>
    );
  }

  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ol className="episodes">
          {episodes.map((selectedEpisode) => (
            <li
              key={selectedEpisode.id}
              onClick={() => setSelectedEpisode(selectedEpisode)}
            >
              {selectedEpisode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
