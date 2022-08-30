import styles from "./Button.module.css"

function Button ()
{
    return (
        <div className={styles.background}>
            <h1> TODO LIST</h1>
            <br/>
            <button className={styles.button}> ADD A LIST</button>
        </div>
    )
} 

export {Button};