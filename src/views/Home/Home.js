import { useContext, lazy, Suspense } from "react";
import { useAlphabetConverter } from "../../hooks/useAlphabetConverter";
import { AlphabetContext } from "../../contexts/AlphabetContext";

const AlphabetSelector = lazy(() =>
  import("../../components/AlphabetSelector/AlphabetSelector")
);
const TextInput = lazy(() => import("../../components/TextInput/TextInput"));

const Home = () => {
  const { alphabet } = useContext(AlphabetContext);
  const { convertText } = useAlphabetConverter(alphabet);

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>AlphaToZulu: Phonetic Alphabet Translator</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <AlphabetSelector />
        <TextInput convertText={convertText} />
      </Suspense>
    </div>
  );
};

export default Home;
