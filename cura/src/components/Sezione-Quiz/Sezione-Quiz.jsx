import CategorieQuiz from "./Quiz-Categorie";
import SpiegazioneQuiz from "./Quiz-Spiegazione";

export default function SezioneQuiz () {
    return(
        <div className="grid grid-cols-3">
            <div>
                <SpiegazioneQuiz/>
            </div>
            <CategorieQuiz />
        </div>
    )
}