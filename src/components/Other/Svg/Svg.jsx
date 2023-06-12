import cl from "./src/comp/Svg.module.css"

export default function Svg(props) {
    return (
        <img
            className={cl.svg}
            src={props.src}
            alt={props.alt}
            draggable={!!props.draggable}
        />
    )
}