import style from './Botao.module.scss'

interface IBotao {
    type?: "button" | "submit" | "reset" | undefined
}


export default function Botao (props: React.PropsWithChildren<IBotao>): React.JSX.Element{
    const {type = "button"} = props
    return (
        <>
            <button type={type} className={style.botao}>{props.children}</button>
        </>
    )
}