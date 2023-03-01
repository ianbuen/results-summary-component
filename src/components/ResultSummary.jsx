import Image from "next/image";
import styles from "@/styles/ResultSummary.module.sass";
import { prominent } from "color.js";
import { useEffect, useState } from "react";

export const ResultSummary = (props) => {

    const [data, setData] = useState(props.data);

    // temp alias for console log
    const x = (y) => {
        console.log(y);
    } 

    // dynamically get the colors of the icons, adding a property to
    // the json without changing the original file
    useEffect(() => {
        data.forEach((item) => {
            prominent(item.icon, {format:'hex'}).then(colors => {
                item.color = colors[1];
                setData([...data]);
            });
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (<div className={styles.summary}>
        <header>
            <h1>Your Result</h1>
            <h2><span>76</span> of 100</h2>

            <h3>Great</h3>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </header>
  
        <main>
            <h1>Summary</h1>

            {data.map(({category, score, icon, color}, i) => {

                return <div style={{ color: color, background: color + "10" }} className={styles.category} key={i}>
                    <div className={styles.image_wrapper}>
                        <Image src={icon} alt={category} fill />
                    </div>
                    
                    <h2>{category}</h2>

                    <h2 className={styles.score}><span>{score}</span> / 100</h2>
                </div>
            })} 

            <input type="button" value="Continue" />
        </main>
    </div>);
}; 

export default ResultSummary;