import Image from "next/image";
import styles from "@/styles/ResultSummary.module.sass";

export const ResultSummary = ({data}) => {

    return (<div className={styles.summary}>
        <header>
            <h1>Your Result</h1>
            <h2><span>76</span> of 100</h2>

            <h3>Great</h3>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </header>
  
        <main>
            <h1>Summary</h1>

            {data.map(({category, score, icon}, i) => {
                return <div className={styles.category} key={i}>
                    <div className={styles.image_wrapper}>
                        <Image src={icon} alt={category} fill />
                    </div>
                    
                    <h2>{category}</h2>

                    <h2>{score} / 100</h2>
                </div>
            })}

            {/* Reaction
            80 / 100

            Memory
            92 / 100

            Verbal
            61 / 100

            Visual
            72 / 100 */}

            <input type="button" value="Continue" />
        </main>
    </div>);
}; 

export default ResultSummary;